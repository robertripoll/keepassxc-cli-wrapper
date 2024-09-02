import { LocalOption } from "../options/LocalOption";
import { Value } from "../types";
import { Command } from "./Command";

type BaseArguments = Record<string, Value>;

export abstract class CommandWithArguments<Arguments extends BaseArguments, Result> extends Command<Result> {
    public constructor(protected args: Arguments, protected options: LocalOption[] = []) {
        super(options);
    }

    public generate(): string {
        const command = super.generate();
        const argsString = Object.values(this.args).map(String).join(' ');

        return `${command} ${argsString}`.trim();
    }
}