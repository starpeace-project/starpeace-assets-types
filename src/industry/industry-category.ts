import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of industry category
 * @property {STARPEACE.language.TranslationJson} label - translation object with label of industry
 */
export interface IndustryCategoryJson {
  id: string;
  label: TranslationJson;
}

/**
 * Class representing an industry category
 * @memberof STARPEACE.industry
 *
 * @property {string} id - unique identifier of industry category
 * @property {STARPEACE.language.Translation} label - translation with label of industry
 */
export class IndustryCategory {
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
   * @return {STARPEACE.industry.IndustryCategoryJson} JSON representation of IndustryCategory
   */
  toJson (): IndustryCategoryJson {
    return {
      id: this.id,
      label: this.label.toJson()
    };
  }

  /**
   * Parse raw JSON into a IndustryCategory object
   * @params {STARPEACE.industry.IndustryCategoryJson} json - raw JSON object to parse into IndustryCategory
   * @return {STARPEACE.industry.IndustryCategory} IndustryCategory representation of parsed JSON
   */
  static fromJson (json: IndustryCategoryJson): IndustryCategory {
    return new IndustryCategory(json.id, Translation.fromJson(json.label));
  }
}
