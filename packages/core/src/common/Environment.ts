export class Environment {
    public static readonly isServerSide = typeof window === 'undefined';

    public static IsDark(localStorageKey: string | null = "theme"): boolean | undefined {
        if (Environment.isServerSide) {
            return undefined;
        }

        if (localStorageKey) {
            const theme = localStorage.getItem(localStorageKey);
            if (theme) {
                return theme === "dark";
            }
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}
