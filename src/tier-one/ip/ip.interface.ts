/**
 * Response model for the IP API.
 * @see {@link https://ip-api.com/docs/api:json}
 */
export interface IP {
  /**
   * AS number and organization, separated by space (RIR).
   */
  readonly as: string;

  /**
   * City.
   */
  readonly city: string;

  /**
   * Country name.
   */
  readonly country: string;

  /**
   * Two-letter country code.
   */
  readonly countryCode: string;

  /**
   * ISP name.
   */
  readonly isp: string;

  /**
   * Latitude.
   */
  readonly lat: number;

  /**
   * Longitude.
   */
  readonly lon: number;

  /**
   * Organization name.
   */
  readonly org: string;

  /**
   * IP used for the query.
   */
  readonly query: string;

  /**
   * Region/state short code (FIPS or ISO).
   */
  readonly region: string;

  /**
   * 	Region/state.
   */
  readonly regionName: string;

  /**
   * Success or fail.
   */
  readonly status: string;

  /**
   * 	Timezone (tz).
   */
  readonly timezone: string;

  /**
   * Zip code.
   */
  readonly zip: string;
}
