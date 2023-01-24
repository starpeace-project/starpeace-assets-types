import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of resource
 * @property {STARPEACE.language.Translation~JSON} labelPlural - translation object with plural label of resource
 * @property {string} unitId - identifier of resource unit for this resource
 * @property {number} price - base price of this resource in dollars
 */
export interface ResourceTypeJson {
  id: string;
  labelPlural: TranslationJson;
  unitId: string;
  price: number;
}

/**
 * Class representing resource type metadata
 * @memberof STARPEACE.industry
 *
 * @property {string} id - Unique identifier of resource
 * @property {STARPEACE.language.Translation} labelPlural - Translation with plural label of resource
 * @property {string} unitId - Unique identifier of resource unit for this resource
 * @property {number} price - Base price of this resource in dollars
 */
export class ResourceType {
  id: string;
  labelPlural: Translation;
  unitId: string;
  price: number;

  constructor (id: string, labelPlural: Translation, unitId: string, price: number) {
    this.id = id;
    this.labelPlural = labelPlural;
    this.unitId = unitId;
    this.price = price;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!this.labelPlural?.isValid()) return false;
    if (!_.isString(this.unitId) || !this.unitId.length) return false;
    if (!_.isNumber(this.price) || this.price < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.ResourceTypeJson} JSON representation of ResourceType
   */
  toJson (): ResourceTypeJson {
    return {
      id: this.id,
      labelPlural: this.labelPlural.toJson(),
      unitId: this.unitId,
      price: this.price
    };
  }

  /**
   * Parse raw JSON into a ResourceType object
   * @params {STARPEACE.industry.ResourceTypeJson} json - raw JSON object to parse into ResourceType
   * @return {STARPEACE.industry.ResourceType} ResourceType representation of parsed JSON
   */
  static fromJson (json: ResourceTypeJson): ResourceType {
    return new ResourceType(json.id, Translation.fromJson(json.labelPlural), json.unitId, json.price);
  }
}
