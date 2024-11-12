export interface AppConfigPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
