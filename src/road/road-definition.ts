import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';

export interface RoadImageCatalogJson {
  bridge?: Record<string, string> | undefined;
  light?: Record<string, string> | undefined;
  urban?: Record<string, string> | undefined;
  rural?: Record<string, string> | undefined;
  transition?: Record<string, string> | undefined;
  any?: Record<string, string> | undefined;
}

/**
 * @memberof STARPEACE.road
 * @property {string} id - identifier of definition
 * @property {string} type - type of transport (ROAD, RAIL)
 */
export interface RoadDefinitionJson {
  id: string;
  type: string;
  industryCategoryId: string;
  industryTypeId: string;
  cost: number;
  tileWidth: number;
  tileHeight: number;
  laneCount: number;
  name: TranslationJson;
  imageCatalog: RoadImageCatalogJson;
}

export class RoadImageCatalog {
  bridge: Record<string, string>;
  light: Record<string, string>;
  urban: Record<string, string>;
  rural: Record<string, string>;
  transition: Record<string, string>;
  any: Record<string, string>;

  constructor (bridge: Record<string, string>, light: Record<string, string>, urban: Record<string, string>, rural: Record<string, string>, transition: Record<string, string>, any: Record<string, string>) {
    this.bridge = bridge;
    this.light = light;
    this.urban = urban;
    this.rural = rural;
    this.transition = transition;
    this.any = any;
  }

  toJson (): RoadImageCatalogJson {
    const json: RoadImageCatalogJson = {};
    if (Object.keys(this.bridge).length > 0) {
      json.bridge = this.bridge;
    }
    if (Object.keys(this.light).length > 0) {
      json.light = this.light;
    }
    if (Object.keys(this.urban).length > 0) {
      json.urban = this.urban;
    }
    if (Object.keys(this.rural).length > 0) {
      json.rural = this.rural;
    }
    if (Object.keys(this.transition).length > 0) {
      json.transition = this.transition;
    }
    if (Object.keys(this.any).length > 0) {
      json.any = this.any;
    }
    return json;
  }

  static fromJson (json: RoadImageCatalogJson): RoadImageCatalog {
    return new RoadImageCatalog(
      json.bridge ?? {},
      json.light ?? {},
      json.urban ?? {},
      json.rural ?? {},
      json.transition ?? {},
      json.any ?? {}
    );
  }
}

/**
 * Class representing road metadata
 * @memberof STARPEACE.road
 *
 * @property {string} id - Unique identifier of road asset
 * @property {string} type - type of road
 */
export class RoadDefinition {
  id: string;
  type: string;
  industryCategoryId: string;
  industryTypeId: string;
  name: Translation;
  cost: number;
  tileWidth: number;
  tileHeight: number;
  laneCount: number;
  imageCatalog: RoadImageCatalog;

  constructor (id: string, type: string, industryCategoryId: string, industryTypeId: string, name: Translation, cost: number, tileWidth: number, tileHeight: number, laneCount: number, imageCatalog: RoadImageCatalog) {
    this.id = id;
    this.type = type;
    this.industryCategoryId = industryCategoryId;
    this.industryTypeId = industryTypeId;
    this.name = name;
    this.cost = cost;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.laneCount = laneCount;
    this.imageCatalog = imageCatalog;
  }

  /**
  * Determine whether object and game configuration has valid attributes.
  * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.type) || !this.type.length) return false;
    if (!_.isString(this.industryCategoryId) || !this.industryCategoryId.length) return false;
    if (!_.isString(this.industryTypeId) || !this.industryTypeId.length) return false;
    if (!this.name.isValid()) return false;
    if (!_.isNumber(this.cost) || this.cost < 0) return false;
    if (!_.isNumber(this.tileWidth) || this.tileWidth < 1) return false;
    if (!_.isNumber(this.tileHeight) || this.tileHeight < 1) return false;
    if (!_.isNumber(this.laneCount) || this.laneCount < 1) return false;
    return true;
  }

  /**
  * Retrieve JSON representation of object
  * @return {STARPEACE.road.RoadDefinitionJson} JSON representation of RoadDefinition
   */
  toJson (): RoadDefinitionJson {
    return {
      id: this.id,
      type: this.type,
      industryCategoryId: this.industryCategoryId,
      industryTypeId: this.industryTypeId,
      name: this.name.toJson(),
      cost: this.cost,
      tileWidth: this.tileWidth,
      tileHeight: this.tileHeight,
      laneCount: this.laneCount,
      imageCatalog: this.imageCatalog.toJson()
    };
  }

  /**
  * Parse raw JSON into a RoadDefinition object
  * @params {STARPEACE.road.RoadDefinitionJson} json - raw JSON object to parse into RoadDefinition
  * @return {STARPEACE.road.RoadDefinition} RoadDefinition representation of parsed JSON
   */
  static fromJson (json: RoadDefinitionJson): RoadDefinition {
    return new RoadDefinition(
      json.id,
      json.type,
      json.industryCategoryId,
      json.industryTypeId,
      Translation.fromJson(json.name),
      json.cost,
      json.tileWidth,
      json.tileHeight,
      json.laneCount,
      RoadImageCatalog.fromJson(json.imageCatalog)
    );
  }
}
