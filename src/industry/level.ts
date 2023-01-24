import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of level
 * @property {STARPEACE.language.Translation~JSON} label - translation object with label of level
 * @property {number} level - unique number of this level starting at one and incrementing
 */
export interface LevelJson {
  id: string;
  label: TranslationJson;
  level: number;
}

/**
 * Class representing a tycoon level
 * @memberof STARPEACE.industry
 *
 * @property {string} id - unique identifier of level
 * @property {STARPEACE.language.Translation} label - translation with label of level
 * @property {number} level - unique number of this level starting at one and incrementing
 */
export class Level {
  id: string;
  label: Translation;
  level: number;

  constructor (id: string, label: Translation, level: number) {
    this.id = id;
    this.label = label;
    this.level = level;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!this.label?.isValid()) return false;
    if (!_.isNumber(this.level) || !this.level) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.Level~JSON} JSON representation of Level
   */
  toJson (): LevelJson {
    return {
      id: this.id,
      label: this.label.toJson(),
      level: this.level
    };
  }

  /**
   * Parse raw JSON into a Level object
   * @params {STARPEACE.industry.Level~JSON} json - raw JSON object to parse into Level
   * @return {STARPEACE.industry.Level} Level representation of parsed JSON
   */
  static fromJson (json: LevelJson): Level {
    return new Level(json.id, Translation.fromJson(json.label), json.level);
  }
}
