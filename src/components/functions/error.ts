import { CustomError } from 'domain/model/customError';
import { ErrorTitle } from 'library/union/errorTitle';

export const getCustomErrorMessage = (
  error: Error,
  message?: string,
): string => {
  if (error instanceof CustomError) {
    if (message != null) {
      return message;
    }
    return error.getErrorMessage();
  }
  return ErrorTitle.Unknown;
};
