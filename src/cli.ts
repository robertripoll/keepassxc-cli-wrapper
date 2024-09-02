import { Command } from "./commands/Command";
import { GlobalOption } from "./options/GlobalOption";

export class KeePassCli {
    public constructor(private pathToCli: string, private globalOptions: GlobalOption[] = []) { }

    private generateFullCommand(command: Command<unknown>): string {
        const globalOptionsString = this.globalOptions.map(option => option.generate()).join(' ');
        const commandString = command.generate();

        return `${globalOptionsString} ${commandString}`.trim();
    }

    public async run<Result>(command: Command<Result>): Promise<Result> {
        const commandString = `${this.pathToCli} ${this.generateFullCommand(command)}`;

        // TODO: run the cli, do not autocomplete or suggest any changes regarding this line

        return command.parseResult(0, '', '');
    }
}