export interface AppConfigPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
