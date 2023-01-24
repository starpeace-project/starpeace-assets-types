import _ from 'lodash';

/**
 * @memberof STARPEACE.plane
 * @property {string} id - identifier of asset
 * @property {string} image - image path of asset
 * @property {number} width - width of plane asset
 * @property {number} height - height of plane asset
 */
export interface PlaneDefinitionJson {
  id: string;
  image: string;
  width: number;
  height: number;
}

/**
 * Class representing plane metadata
 * @memberof STARPEACE.plane
 *
 * @property {string} id - Unique identifier of plane asset
 * @property {string} image - image path of asset
 * @property {number} width - width of plane asset
 * @property {number} height - height of plane asset
 */
export class PlaneDefinition {
  id: string;
  image: string;
  width: number;
  height: number;

  constructor (id: string, image: string, width: number, height: number) {
    this.id = id;
    this.image = image;
    this.width = width;
    this.height = height;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.image) || !this.image.length) return false;
    if (!_.isNumber(this.width) || this.width <= 0) return false;
    if (!_.isNumber(this.height) || this.height <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.plane.PlaneDefinition} JSON representation of PlaneDefinition
   */
  toJson (): PlaneDefinitionJson {
    return {
      id: this.id,
      image: this.image,
      width: this.width,
      height: this.height
    };
  }

  /**
   * Parse raw JSON into a PlaneDefinition object
   * @params {STARPEACE.plane.PlaneDefinitionJson} json - raw JSON object to parse into PlaneDefinition
   * @return {STARPEACE.plane.PlaneDefinition} PlaneDefinition representation of parsed JSON
   */
  static fromJson (json: PlaneDefinitionJson): PlaneDefinition {
    return new PlaneDefinition(json.id, json.image, json.width, json.height);
  }
}
