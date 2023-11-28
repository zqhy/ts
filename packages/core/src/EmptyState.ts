export const emptyStateEmptyLoading: string = 'empty-state-EmptyLoading';
export const emptyStateEmpty: string = 'empty-state-Empty';
export const emptyStateEmptyFailure: string = 'empty-state-empty-failure';
export const emptyStateHasContent: string = 'empty-state-has-content';

abstract class IEmptyState {
  abstract kind: string;
  message?: string | null;

  constructor(message?: string | null) {
    this.message = message;
  }

  isEmptyLoading(): this is EmptyLoading {
    return this.kind === emptyStateEmptyLoading;
  }

  isEmpty(): this is Empty {
    return this.kind === emptyStateEmpty;
  }

  isEmptyFailure(): this is EmptyFailure {
    return this.kind === emptyStateEmptyFailure;
  }

  isHasContent(): this is HasContent {
    return this.kind === emptyStateHasContent;
  }
}

export class EmptyLoading extends IEmptyState {
  kind = emptyStateEmptyLoading;

  static create(message?: string | null) {
    return new EmptyLoading(message);
  }
}

export class Empty extends IEmptyState {
  kind = emptyStateEmpty;

  static create(message?: string | null) {
    return new Empty(message);
  }
}

export class EmptyFailure extends IEmptyState {
  kind = emptyStateEmptyFailure;

  static create(message?: string | null) {
    return new EmptyFailure(message);
  }
}

export class HasContent extends IEmptyState {
  kind = emptyStateHasContent;

  static create(message?: string | null) {
    return new HasContent(message);
  }
}

export type EmptyState = EmptyLoading | Empty | EmptyFailure | HasContent;
