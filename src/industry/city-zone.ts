import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of zone
 * @property {number} value - unique numeric value of zone
 * @property {number} color - hexidecimal number value of zone color
 * @property {number} miniMapColor - number value of zone color on mini-map
 * @property {string[]} includedCityZoneIds - Array of city zone IDs children zones
 */
export interface CityZoneJson {
  id: string;
  label: TranslationJson;
  value: number;
  color: number;
  miniMapColor: number;
  includedCityZoneIds: string[];
}

/**
 * Class representing a city zone
 * @memberof STARPEACE.industry
 *
 * @property {string} id - unique identifier of zone
 * @property {number} value - unique numeric value of zone
 * @property {number} color - number value of zone color
 * @property {number} miniMapColor - number value of zone color on mini-map
 * @property {string[]} includedCityZoneIds - Array of city zone IDs children zones
 */
export class CityZone {
  id: string;
  label: Translation;
  value: number;
  color: number;
  miniMapColor: number;
  includedCityZoneIds: string[];

  constructor (id: string, label: Translation, value: number, color: number, miniMapColor: number, includedCityZoneIds: string[]) {
    this.id = id;
    this.label = label;
    this.value = value;
    this.color = color;
    this.miniMapColor = miniMapColor;
    this.includedCityZoneIds = includedCityZoneIds;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isNumber(this.value) || this.value < 0) return false;
    if (!_.isNumber(this.color) || this.color < 0) return false;
    if (!_.isNumber(this.miniMapColor) || this.miniMapColor < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.CityZoneJson} JSON representation of CityZone
   */
  toJson (): CityZoneJson {
    return {
      id: this.id,
      label: this.label.toJson(),
      value: this.value,
      color: this.color,
      miniMapColor: this.miniMapColor,
      includedCityZoneIds: this.includedCityZoneIds
    };
  }

  /**
  * Parse raw JSON into a CityZone object
  * @params {STARPEACE.industry.CityZoneJson} json - raw JSON object to parse into CityZone
  * @return {STARPEACE.industry.CityZone} CityZone representation of parsed JSON
  */
  static fromJson (json: CityZoneJson): CityZone {
    return new CityZone(json.id, Translation.fromJson(json.label), json.value, json.color, json.miniMapColor, json.includedCityZoneIds ?? []);
  }
}
