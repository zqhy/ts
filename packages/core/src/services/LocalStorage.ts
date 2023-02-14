export interface ILocalStorage {
    getItem(key: string): string | null;
    get<T>(key: string, defaultValue?: T | null): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}

class LocalStorage implements ILocalStorage {
    getItem(key: string): string | null {
        return localStorage.getItem(key);
    }

    get<T>(key: string, defaultValue?: T | null): T | null {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data).value : null;
    }
    // https://www.qupaya.com/blog/type-safe-local-storage
    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify({ value }));
    }

    remove(key: string): void {
        return localStorage.removeItem(key);
    }

    clear(): void {
        return localStorage.clear();
    }
}

let storage: ILocalStorage;
export function getLocalStorage(): ILocalStorage {
    if (!storage) {
        storage = new LocalStorage();
    }
    return storage;
}
