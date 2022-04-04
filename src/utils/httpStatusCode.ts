import { HttpStatusCode } from '@/utils/union/httpStatusCode';

export const isInformationalResponse = (
  code: typeof HttpStatusCode[keyof typeof HttpStatusCode]
): boolean =>
  [
    HttpStatusCode.Continue,
    HttpStatusCode.SwitchingProtocols,
    HttpStatusCode.Processing,
    HttpStatusCode.EarlyHints,
  ].some((v) => v === code);

export const isSuccess = (code: typeof HttpStatusCode[keyof typeof HttpStatusCode]): boolean =>
  [
    HttpStatusCode.OK,
    HttpStatusCode.Created,
    HttpStatusCode.Accepted,
    HttpStatusCode.NonAuthoritativeInformation,
    HttpStatusCode.NoContent,
    HttpStatusCode.ResetContent,
    HttpStatusCode.PartialContent,
    HttpStatusCode.MultiStatus,
    HttpStatusCode.AlreadyReported,
    HttpStatusCode.IMUsed,
  ].some((v) => v === code);

export const isRedirection = (code: typeof HttpStatusCode[keyof typeof HttpStatusCode]): boolean =>
  [
    HttpStatusCode.MultipleChoices,
    HttpStatusCode.MovedPermanently,
    HttpStatusCode.Found,
    HttpStatusCode.SeeOther,
    HttpStatusCode.NotModified,
    HttpStatusCode.UseProxy,
    HttpStatusCode.SwitchProxy,
    HttpStatusCode.TemporaryRedirect,
    HttpStatusCode.PermanentRedirect,
  ].some((v) => v === code);

export const isClientError = (code: typeof HttpStatusCode[keyof typeof HttpStatusCode]): boolean =>
  [
    HttpStatusCode.BadRequest,
    HttpStatusCode.Unauthorized,
    HttpStatusCode.PaymentRequired,
    HttpStatusCode.Forbidden,
    HttpStatusCode.NotFound,
    HttpStatusCode.MethodNotAllowed,
    HttpStatusCode.NotAcceptable,
    HttpStatusCode.ProxyAuthenticationRequired,
    HttpStatusCode.RequestTimeout,
    HttpStatusCode.Conflict,
    HttpStatusCode.Gone,
    HttpStatusCode.LengthRequired,
    HttpStatusCode.PreconditionFailed,
    HttpStatusCode.PayloadTooLarge,
    HttpStatusCode.URITooLong,
    HttpStatusCode.UnsupportedMediaType,
    HttpStatusCode.RangeNotSatisfiable,
    HttpStatusCode.ExpectationFailed,
    HttpStatusCode.ImATeapot,
    HttpStatusCode.MisdirectedRequest,
    HttpStatusCode.UnprocessableEntity,
    HttpStatusCode.Locked,
    HttpStatusCode.FailedDependency,
    HttpStatusCode.UpgradeRequired,
    HttpStatusCode.PreconditionRequired,
    HttpStatusCode.TooManyRequests,
    HttpStatusCode.RequestHeaderFieldsTooLarge,
    HttpStatusCode.UnavailableForLegalReasons,
  ].some((v) => v === code);

export const isServerError = (code: typeof HttpStatusCode[keyof typeof HttpStatusCode]): boolean =>
  [
    HttpStatusCode.InternalServerError,
    HttpStatusCode.NotImplemented,
    HttpStatusCode.BadGateway,
    HttpStatusCode.ServiceUnavailable,
    HttpStatusCode.GatewayTimeout,
    HttpStatusCode.HTTPVersionNotSupported,
    HttpStatusCode.VariantAlsoNegotiates,
    HttpStatusCode.InsufficientStorage,
    HttpStatusCode.LoopDetected,
    HttpStatusCode.NotExtended,
    HttpStatusCode.NetworkAuthenticationRequired,
  ].some((v) => v === code);
