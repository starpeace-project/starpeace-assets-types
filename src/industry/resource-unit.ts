import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - identifier of resource unit
 * @property {STARPEACE.language.TranslationJson} labelPlural - translation object with plural label of unit
 */
export interface ResourceUnitJson {
  id: string;
  labelPlural: TranslationJson;
}

/**
 * Class representing the unit of quantities of a resource
 * @memberof STARPEACE.industry
 *
 * @property {string} id Unique identifier of resource unit
 * @property {STARPEACE.language.Translation} labelPlural Translation with plural label of unit
 */
export class ResourceUnit {
  id: string;
  labelPlural: Translation;

  constructor (id: string, labelPlural: Translation) {
    this.id = id;
    this.labelPlural = labelPlural;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!this.labelPlural.isValid()) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.concrete.ResourceUnitJson} JSON representation of ResourceUnit
   */
  toJson (): ResourceUnitJson {
    return {
      id: this.id,
      labelPlural: this.labelPlural.toJson()
    };
  }

  /**
   * Parse raw JSON into a ResourceUnit object
   * @params {STARPEACE.concrete.ResourceUnitJson} json - raw JSON object to parse into ResourceUnit
   * @return {STARPEACE.concrete.ResourceUnit} ResourceUnit representation of parsed JSON
   */
  static fromJson (json: ResourceUnitJson): ResourceUnit {
    return  new ResourceUnit(json.id, Translation.fromJson(json.labelPlural));
  }
}
