import { DateTime } from 'library/dateTime';
import { ErrorTitleType } from 'library/union/errorTitle';
import { HttpStatusCodeType } from 'library/union/httpStatusCode';

type CustomErrorParams = {
  error?: Error;
  name: string;
  statusCode?: HttpStatusCodeType;
  title: ErrorTitleType;
  detail?: string;
  messageToBeDisplayed?: string;
};

export class CustomError extends Error {
  readonly statusCode?: HttpStatusCodeType;

  readonly title: ErrorTitleType;

  readonly detail?: string;

  readonly messageToBeDisplayed?: string;

  readonly constructedAt: DateTime;

  constructor(params: CustomErrorParams) {
    if (params.error != null) {
      super(params.error.message);
      this.stack = params.error.stack;
    } else {
      super();
    }

    this.name = params.name;
    this.statusCode = params.statusCode;
    this.title = params.title;
    this.detail = params.detail;
    this.messageToBeDisplayed = params.messageToBeDisplayed;
    this.constructedAt = new DateTime();
  }

  public getErrorMessage(): string {
    if (this.messageToBeDisplayed != null) {
      return this.messageToBeDisplayed;
    }
    return this.title;
  }
}
