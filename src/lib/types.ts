import type { CreateEmailResponseSuccess } from "resend";

export type SendEmailResult = {
  success: boolean;
  data?: CreateEmailResponseSuccess;
  error?: string;
  details?: any; // selalu ada walaupun null
};
