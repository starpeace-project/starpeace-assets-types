import _ from 'lodash';

/**
 * Unit of time duration, currently DAY, MONTH, or YEAR
 */
export type TimeUnit = 'DAY' | 'MONTH' | 'YEAR';

/**
 * @property {string} unit - unit of time duration
 * @property {number} value - value length of duration
 */
export interface TimeDurationJson {
  unit: TimeUnit;
  value: number;
}

/**
 * Class representing a time duration
 * @memberof STARPEACE.industry
 *
 * @property {TimeUnit} unit - unit of time duration
 * @property {number} value - value length of duration
 */
export class TimeDuration {
  unit: TimeUnit;
  value: number;

  constructor (unit: TimeUnit, value: number) {
    this.unit = unit;
    this.value = value;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.unit) || !this.unit.length) return false;
    if (!_.isNumber(this.value) || this.value <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {TimeDurationJson} JSON representation of TimeDuration
   */
  toJson (): TimeDurationJson {
    return {
      unit: this.unit,
      value: this.value
    };
  }

  /**
   * Parse raw JSON into a TimeDuration object
   * @params {STARPEACE.industry.TimeDurationJson} json - raw JSON object to parse into TimeDuration
   * @return {STARPEACE.industry.TimeDuration} TimeDuration representation of parsed JSON
   */
  static fromJson (json: TimeDurationJson): TimeDuration {
    return new TimeDuration(json.unit, json.value);
  }
}
