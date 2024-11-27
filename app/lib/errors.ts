export class NasaError extends Error {
  constructor(
    public code: string,
    message: string
  ) {
    super(message);
    this.name = 'NasaError';
  }
}

export class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}
