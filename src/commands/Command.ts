import { LocalOption } from "../options/LocalOption";

export abstract class Command<Result> {
    public constructor(protected options: LocalOption[] = []) { }

    protected abstract name(): string;

    public generate(): string {
        let result = `${this.name()} `;

        if (this.options.length > 0) {
            result += this.options.map(option => option.generate()).join(' ');
        }

        return result.trim();
    }

    public abstract parseResult(statusCode: number, output: string, error: string): Result;
}