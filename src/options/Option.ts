import { Value } from "../types";

export abstract class Option {
    public constructor(protected value: Value = null) { }

    public abstract name(): string;

    public shortName(): string | null {
        return null;
    }

    public generate(): string {
        let result = this.shortName() ? `-${this.shortName()} ` : `--${this.name()} `;

        if (this.value !== null) {
            result += String(this.value);
        }

        return result.trim();
    }
}