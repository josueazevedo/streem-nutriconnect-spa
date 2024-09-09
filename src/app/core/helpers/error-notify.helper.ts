import { InternalServerError } from '../exceptions/internal-error.exception';

export function errorNotify(callback: Function, error: any) {
  if (error instanceof InternalServerError) {
    return;
  }
  callback(error);
}
