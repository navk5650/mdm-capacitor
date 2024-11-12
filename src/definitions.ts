export interface AppConfigPlugin {
  getValue(options: { key: string }): Promise<{ value: string }>;
}
