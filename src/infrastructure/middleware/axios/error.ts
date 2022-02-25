import axios, { AxiosError, AxiosResponse } from 'axios';

import { CustomError } from 'domain/model/customError';
import { ErrorTitle, ErrorTitleType } from 'library/union/errorTitle';
import { HttpStatusCodeType } from 'library/union/httpStatusCode';

type IRespErrorData = {
  statusCode: HttpStatusCodeType;
  errorTitle: ErrorTitleType;
  detail: string;
  messagesToBeDisplayed: string | null; // API側の設定としてstring or nullなのでnullを使用する
};

type ApiErrorContentType = {
  statusCode?: HttpStatusCodeType;
  title: ErrorTitleType;
  detail?: string;
  messagesToBeDisplayed?: string;
};

const getApiErrorContent = (
  response: AxiosResponse<IRespErrorData>,
): ApiErrorContentType => {
  if (response.data == null || response.data.errorTitle == null) {
    return {
      title: ErrorTitle.Unknown,
    };
  }
  return {
    statusCode: response.data.statusCode,
    title: response.data.errorTitle,
    detail: response.data.detail,
    messagesToBeDisplayed: response.data.messagesToBeDisplayed ?? undefined,
  };
};

export const createCustomError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    const axiosError = <AxiosError<IRespErrorData>>error;
    if (axiosError.response != null) {
      const { statusCode, title, detail, messagesToBeDisplayed } =
        getApiErrorContent(axiosError.response);
      return new CustomError({
        error,
        name: 'ApiError',
        statusCode,
        title,
        detail,
        messagesToBeDisplayed,
      });
    }
    return new CustomError({
      error,
      name: 'ApiError',
      title: ErrorTitle.NetworkError,
    });
  }
  return new CustomError({
    error,
    name: 'UnexpectedError',
    title: ErrorTitle.UnexpectedError,
  });
};
