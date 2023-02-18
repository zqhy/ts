export interface ILocalLogger {
    debug(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}

class LocalLogger implements ILocalLogger {
    debug(message?: any, ...optionalParams: any[]): void {
        console.debug(message, optionalParams);
    }

    info(message?: any, ...optionalParams: any[]): void {
        console.info(message, optionalParams);
    }

    log(message?: any, ...optionalParams: any[]): void {
        console.log(message, optionalParams);
    }

    warn(message?: any, ...optionalParams: any[]): void {
        console.warn(message, optionalParams);
    }

    error(message?: any, ...optionalParams: any[]): void {
        console.error(message, optionalParams);
    }
}

export const localLogger: ILocalLogger = new LocalLogger();
