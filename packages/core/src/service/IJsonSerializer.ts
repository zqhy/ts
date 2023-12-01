export interface IJsonSerializer {
  deserialize<T>(json: string): T | null;
  serialize<T>(value: T): string;
}
