import _ from 'lodash';

/**
 * @memberof STARPEACE.overlay
 * @property {string} id - identifier of asset
 * @property {string} image - image path of asset
 * @property {number} tileWidth - width of asset in tiles
 * @property {number} tileHeight - height of asset in tiles
 */
export interface OverlayDefinitionJson {
  id: string;
  image: string;
  tileWidth: number;
  tileHeight: number;
}

/**
 * Class representing overlay metadata
 * @memberof STARPEACE.overlay
 *
 * @property {string} id - Unique identifier of overlay asset
 * @property {string} image - image path of asset
 * @property {number} tileWidth - width of asset in tiles
 * @property {number} tileHeight - height of asset in tiles
 */
export class OverlayDefinition {
  id: string;
  image: string;
  tileWidth: number;
  tileHeight: number;

  constructor (id: string, image: string, tileWidth: number, tileHeight: number) {
    this.id = id;
    this.image = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.image) || !this.image.length) return false;
    if (!_.isNumber(this.tileWidth) || this.tileWidth <= 0) return false;
    if (!_.isNumber(this.tileHeight) || this.tileHeight <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.overlay.PlaneDefinition} JSON representation of PlaneDefinition
   */
  toJson (): OverlayDefinitionJson {
    return {
      id: this.id,
      image: this.image,
      tileWidth: this.tileWidth,
      tileHeight: this.tileHeight
    };
  }

  /**
   * Parse raw JSON into a OverlayDefinition object
   * @params {STARPEACE.overlay.OverlayDefinitionJson} json - raw JSON object to parse into PlaneDefinition
   * @return {STARPEACE.overlay.OverlayDefinition} PlaneDefinition representation of parsed JSON
   */
  static fromJson (json: OverlayDefinitionJson): OverlayDefinition {
    return new OverlayDefinition(json.id, json.image, json.tileWidth, json.tileHeight);
  }
}
