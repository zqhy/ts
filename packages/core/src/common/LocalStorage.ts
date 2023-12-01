import { Environment } from './Environment';

export interface LocalStorageGetProps {
  jsonDeserialize?: (json: string) => any;
  reviver?: (this: any, key: string, value: any) => any;
}

export class LocalStorage {
  public static getItem(key: string): string | null {
    return Environment.isServerSide ? null : localStorage.getItem(key);
  }

  public static get<T>(
    key: string,
    defaultValue: T | null = null,
    props?: LocalStorageGetProps
  ): T | null {
    if (Environment.isServerSide) {
      return defaultValue;
    }

    const data = localStorage.getItem(key);
    if (!data) {
      return defaultValue;
    }
    if (props?.jsonDeserialize) {
      return props.jsonDeserialize(data)?.value;
    }
    return JSON.parse(data, props?.reviver).value;
  }
  // https://www.qupaya.com/blog/type-safe-local-storage
  public static set<T>(key: string, value: T): void {
    if (Environment.isServerSide) {
      return;
    }

    localStorage.setItem(key, JSON.stringify({ value }));
  }

  public static remove(key: string): void {
    if (Environment.isServerSide) {
      return;
    }
    return localStorage.removeItem(key);
  }

  public static clear(): void {
    if (Environment.isServerSide) {
      return;
    }
    return localStorage.clear();
  }
}
