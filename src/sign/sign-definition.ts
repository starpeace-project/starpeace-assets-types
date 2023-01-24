import _ from 'lodash';

/**
 * @memberof STARPEACE.sign
 * @property {string} id - identifier of sign
 * @property {string} image - image path of asset
 * @property {number} width - width of sign asset
 * @property {number} height - height of sign asset
 * @property {number} sourceX - x coordinate of origin within asset
 * @property {number} sourceY - y coordinate of origin within asset
 */
export interface SignDefinitionJson {
  readonly id: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
  readonly sourceX: number;
  readonly sourceY: number;
}

/**
 * Class representing building sign definition
 * @memberof STARPEACE.sign
 *
 * @property {string} id - identifier of sign
 * @property {string} image - image path of asset
 * @property {number} width - width of sign asset
 * @property {number} height - height of sign asset
 * @property {number} sourceX - x coordinate of origin within asset
 * @property {number} sourceY - y coordinate of origin within asset
 */
export class SignDefinition {
  id: string;
  image: string;
  width: number;
  height: number;
  sourceX: number;
  sourceY: number;

  constructor (id: string, image: string, width: number, height: number, sourceX: number, sourceY: number) {
    this.id = id;
    this.image = image;
    this.width = width;
    this.height = height;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
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
    if (!_.isNumber(this.sourceX)) return false;
    if (!_.isNumber(this.sourceY)) return false;
    return true;
  }

  /**
  * Retrieve JSON representation of object
  * @return {STARPEACE.sign.SignDefinitionJson} JSON representation of SignDefinition
   */
  toJson (): SignDefinitionJson {
    return {
      id: this.id,
      image: this.image,
      width: this.width,
      height: this.height,
      sourceX: this.sourceX,
      sourceY: this.sourceY
    };
  }

  /**
  * Parse raw JSON into a SignDefinition object
  * @params {STARPEACE.sign.SignDefinitionJson} json - raw JSON object to parse into SignDefinition
  * @return {STARPEACE.sign.SignDefinition} SignDefinition representation of parsed JSON
   */
  static fromJson (json: SignDefinitionJson): SignDefinition {
    return new SignDefinition(json.id, json.image, json.width, json.height, json.sourceX, json.sourceY);
  }
}
