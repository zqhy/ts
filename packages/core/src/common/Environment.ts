export class Environment {
  public static readonly isServerSide = typeof window === 'undefined';
}
