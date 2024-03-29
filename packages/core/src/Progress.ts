import { Result } from './Result';

export const progressInProgress: string = 'progress-in-progress';
export const progressComplete: string = 'progress-complete';

abstract class IProgress<T> {
  abstract kind: string;

  isInProgress(): this is InProgress<T> {
    return this.kind === progressInProgress;
  }

  isComplete(): this is Complete<T> {
    return this.kind === progressComplete;
  }

  resultOrNull(): T | null {
    return (this.isComplete() ? this.result : null) || null;
  }
}

export function progressContentOrNull<T>(
  progress: Progress<Result<T>>
): T | null {
  const result = progress.resultOrNull();
  return result?.dataOrNull() || null;
}

export class InProgress<T> extends IProgress<T> {
  kind = progressInProgress;

  static create<T>() {
    return new InProgress<T>();
  }
}

export class Complete<T> extends IProgress<T> {
  kind = progressComplete;
  result?: T;

  constructor(result?: T) {
    super();
    this.result = result;
  }

  static create<T>(result?: T) {
    return new Complete<T>(result);
  }
}

export type Progress<T> = InProgress<T> | Complete<T>;
