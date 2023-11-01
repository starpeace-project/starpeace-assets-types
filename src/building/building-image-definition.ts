import _ from 'lodash';

import { Coordinate, CoordinateJson } from './coordinate.js';
import { CoordinateList } from './coordinate-list.js';
import { ImageEffect, ImageEffectJson } from './image-effect.js';

/**
 * @memberof STARPEACE.building
 * @property {string} id - unique identifier for building image definition
 * @property {string} imagePath - path to image file for building
 * @property {number} tileWidth - width of building in game tiles
 * @property {number} tileHeight - height of building in game tiles
 * @property {STARPEACE.building.CoordinateListJson[]} hitArea - array of coordinate lists representing vertices of each polygon making up building hit area
 * @property {STARPEACE.building.ImageEffectJson[]} effects - array of image effects for building
 * @property {STARPEACE.building.CoordinateJson} signPosition - origin position for sign
 */
export interface BuildingImageDefinitionJson {
  id: string;
  imagePath: string;
  tileWidth: number;
  tileHeight: number;
  hitArea: CoordinateJson[][];
  effects: ImageEffectJson[];
  signPosition: CoordinateJson | null | undefined;
}

/**
 * Class representing image metadata for a building definition
 * @memberof STARPEACE.building
 *
 * @property {string} id - unique identifier for building image definition
 * @property {string} imagePath - path to image file for building
 * @property {number} tileWidth - width of building in game tiles
 * @property {number} tileHeight - height of building in game tiles
 * @property {STARPEACE.building.CoordinateList[]} hitArea - array of coordinate lists representing vertices of each polygon making up building hit area
 * @property {STARPEACE.building.ImageEffect[]} effects - array of image effects for building
 * @property {STARPEACE.building.Coordinate~JSON} signPosition - origin position for sign
 */
export class BuildingImageDefinition {
  id: string;
  imagePath: string;
  tileWidth: number;
  tileHeight: number;
  hitArea: CoordinateList[];
  effects: ImageEffect[];
  signPosition: Coordinate | null;

  constructor (id: string, imagePath: string, tileWidth: number, tileHeight: number, hitArea: CoordinateList[], effects: ImageEffect[], signPosition: Coordinate | null) {
    this.id = id;
    this.imagePath = imagePath;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.hitArea = hitArea;
    this.effects = effects;
    this.signPosition = signPosition;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id?.length) return false;
    if (!_.isString(this.imagePath) || !this.imagePath?.length) return false;
    if (!_.isNumber(this.tileWidth) || this.tileWidth <= 0) return false;
    if (!_.isNumber(this.tileHeight) || this.tileHeight <= 0) return false;
    if (!Array.isArray(this.hitArea) || !this.hitArea?.length || !!this.hitArea.find(a => !a.isValid())) return false;
    if (!Array.isArray(this.effects) || this.effects?.length && !!this.effects.find(e => !e.isValid())) return false;
    if (this.signPosition && !this.signPosition.isValid()) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.BuildingImageDefinitionJson} JSON representation of BuildingImageDefinition
   */
  toJson (): BuildingImageDefinitionJson {
    return {
      id: this.id,
      imagePath: this.imagePath,
      tileWidth: this.tileWidth,
      tileHeight: this.tileHeight,
      hitArea: this.hitArea.map(a => a.toJson()),
      effects: this.effects.map(e => e.toJson()),
      signPosition: this.signPosition?.toJson()
    };
  }

  /**
   * Parse raw JSON into a BuildingImageDefinition object
   * @param {STARPEACE.building.BuildingImageDefinitionJson} json - raw JSON object to parse into BuildingImageDefinition
   * @return {STARPEACE.building.BuildingImageDefinition} BuildingImageDefinition representation of parsed JSON
   */
  static fromJson (json: BuildingImageDefinitionJson): BuildingImageDefinition {
    return new BuildingImageDefinition(
      json.id,
      json.imagePath,
      json.tileWidth,
      json.tileHeight,
      (json.hitArea ?? []).map(CoordinateList.fromJson),
      (json.effects ?? []).map(ImageEffect.fromJson),
      json.signPosition ? Coordinate.fromJson(json.signPosition) : null
    );
  }
}
