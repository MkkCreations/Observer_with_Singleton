
export class Logs {
    private static _instances: Map<string, Logs> = new Map<string, Logs>();
    private _operations: string[] = [];

    private constructor() {}

    static getinstance(key: string): Logs {
        if (!Logs._instances.has(key)) Logs._instances.set(key, new Logs)!;
        return Logs._instances.get(key)!;
    }

    logate(operation: string): void {
        this._operations.push(operation);
    }

    showLogs(): void {
        this._operations.forEach((value, key) => {
            console.log(`[ ${key} ]`, value);
        });
    }

    getLogByNum(index: number): void {
        let operation = this._operations[index];
        console.log(`[ ${index} ]`, operation);
    }
}

