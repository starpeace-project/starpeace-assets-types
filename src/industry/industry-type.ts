import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of industry type
 * @property {STARPEACE.language.TranslationJson} label - translation object with label of industry
 */
export interface IndustryTypeJson {
  id: string;
  label: TranslationJson;
}

/**
 * Class representing an industry type
 * @memberof STARPEACE.industry
 *
 * @property {string} id - unique identifier of industry type
 * @property {STARPEACE.language.Translation} label - translation with label of industry
 */
export class IndustryType {
  id: string;
  label: Translation;

  constructor (id: string, label: Translation) {
    this.id = id;
    this.label = label;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!this.label?.isValid()) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.IndustryTypeJson} JSON representation of IndustryType
   */
  toJson (): IndustryTypeJson {
    return {
      id: this.id,
      label: this.label.toJson()
    };
  }

  /**
   * Parse raw JSON into a IndustryType object
   * @params {STARPEACE.industry.IndustryTypeJson} json - raw JSON object to parse into IndustryType
   * @return {STARPEACE.industry.IndustryType} Level representation of parsed JSON
   */
  static fromJson (json: IndustryTypeJson): IndustryType {
    return new IndustryType(json.id, Translation.fromJson(json.label));
  }
}
