export abstract class HttpAdapter {
  constructor() {}

  abstract get<T>(url: string, options: Record<string, unknown>): Promise<T>;
}
