import _ from 'lodash';

/**
 * @typedef {object} STARPEACE.building.simulation.ImageEffectJson
 * @property {string} type - type identifier of effect
 * @property {number} x - horizontal percent offset of effect image relative building image
 * @property {number} y - vertical percent offset of effect image relative building image
 */
export interface ImageEffectJson {
  type: string;
  x: number;
  y: number;
}

/**
* Class representing an image effect applied to a building
* @memberof STARPEACE.building
*
* @property {string} type - type identifier of effect
* @property {number} x - horizontal percent offset of effect image relative building image
* @property {number} y - vertical percent offset of effect image relative building image
 */
export class ImageEffect {
  type: string;
  x: number;
  y: number;

  /**
   * Create a ImageEffect object
   * @param {number} x - coordinate value along x axis
   * @param {number} y - coordinate value along y axis
   */
  constructor (type: string, x: number, y: number) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!this.type?.length) return false;
    if (!_.isNumber(this.x) || this.x < 0 || this.x > 1) return false;
    if (!_.isNumber(this.y) || this.y < 0 || this.y > 1) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.ImageEffectJson} JSON representation of ImageEffect
   */
  toJson (): ImageEffectJson {
    return {
      type: this.type,
      x: this.x,
      y: this.y
    };
  }

  /**
   * Parse raw JSON into a ImageEffect object
   * @param {STARPEACE.building.CoordinateJson} json - raw JSON object to parse into ImageEffect
   * @return {STARPEACE.building.ImageEffect} ImageEffect representation of parsed JSON
   */
  static fromJson (json: ImageEffectJson): ImageEffect {
    return new ImageEffect(json.type, json.x, json.y);
  }
}
