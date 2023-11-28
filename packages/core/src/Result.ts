import { ResultNullError } from './Errors';

export const resultSuccess: string = 'result-success';
export const resultFailure: string = 'result-failure';

abstract class IResult<T = any | undefined> {
  abstract kind: string;
  message?: string | null;

  protected constructor(message?: string | null) {
    this.message = message;
  }

  isSuccess(): this is Success<T> {
    return this.kind === resultSuccess;
  }

  isFailure(): this is Failure<T> {
    return this.kind === resultFailure;
  }

  dataOrNull(): T | null {
    return this.isSuccess() ? this.data : null;
  }
}

export async function resultFrom<T>(
  runner: () => Promise<T>
): Promise<Result<T>> {
  try {
    const data = await runner();
    if (!data) {
      return Failure.create(undefined, new ResultNullError());
    }
    return Success.create(data);
  } catch (e) {
    console.error(e);
    return Failure.create(undefined, e);
  }
}

export class Success<T> extends IResult<T> {
  kind = resultSuccess;

  data: T;

  constructor(data: T, message?: string | null) {
    super(message);
    this.data = data;
  }

  static create<T>(data: T, message?: string) {
    return new Success<T>(data, message);
  }

  static createVoid(message?: string) {
    return new Success(undefined, message);
  }
}

export class Failure<T> extends IResult<T> {
  kind = resultFailure;

  error?: any;

  constructor(message?: string, error?: any) {
    super(message);
    this.error = error;
  }

  static create<T>(message?: string, error?: any) {
    return new Failure<T>(message, error);
  }
}

export type Result<T = any | undefined> = Success<T> | Failure<T>;
