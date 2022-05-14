/**
 * Response model for the Hello, Salut! API
 * @see {@link https://fourtonfish.com/project/hellosalut-api/}
 */
export interface Hello {
  /**
   * Language code.
   */
  readonly code: string;

  /**
   * Greeting in a native language.
   */
  readonly hello: string;
}
