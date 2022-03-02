import { CustomError } from 'domain/model/customError';
import { ErrorTitle, ErrorTitleType } from 'library/union/errorTitle';

export type ComponentError = {
  title: ErrorTitleType;
  message: string;
};

export const getComponentError = (
  error: Error,
  message?: string,
): ComponentError => {
  if (error instanceof CustomError) {
    if (message != null) {
      return {
        title: error.title,
        message,
      };
    }
    return {
      title: error.title,
      message: error.getErrorMessage(),
    };
  }
  return {
    title: ErrorTitle.Unknown,
    message: ErrorTitle.Unknown,
  };
};
