export const ErrorTitle = {
  NetworkError: 'network_error',
  Unknown: 'unknown',
  BadRequest: 'bad_request',
  ActivationRequired: 'activation_required',
  ActivationNotRequired: 'activation_not_required',
  ChangePasswordRequired: 'change_password_required',
  AuthenticationFailed: 'authentication_failed',
  InvalidToken: 'invalid_token',
  UnauthorizedRequest: 'unauthorized_request',
  NotFound: 'not_found',
  EntityAlreadyExists: 'entity_already_exists',
  EmailAlreadyExists: 'email_already_exists',

  EntityNotExists: 'entity_not_exists',
  UnexpectedError: 'unexpected_error',

  InvalidOperationError: 'invalid_operation_error',
} as const;
export type ErrorTitleType = typeof ErrorTitle[keyof typeof ErrorTitle];
