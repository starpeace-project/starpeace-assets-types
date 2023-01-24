import _ from 'lodash';

/**
 * @typedef {object} STARPEACE.language.Translation~JSON
 * @property {string} DE - German translation value
 * @property {object} EN - English translation value
 * @property {object} ES - Spanish translation value
 * @property {object} FR - French translation value
 * @property {object} IT - Italian translation value
 * @property {object} PT - Portuguese translation value
 */
export interface TranslationJson {
  DE: string;
  EN: string;
  ES: string;
  FR: string;
  IT: string;
  PT: string;
}

/**
 * Class representing a multi-language translation
 * @memberof STARPEACE.language
 *
 * @property {string} german - German translation value
 * @property {string} english - English translation value
 * @property {string} spanish - Spanish translation value
 * @property {string} french - French translation value
 * @property {string} italian - Italian translation value
 * @property {string} portuguese - Portuguese translation value
 */
export class Translation {
  german: string;
  english: string;
  spanish: string;
  french: string;
  italian: string;
  portuguese: string;

  constructor (german: string, english: string, spanish: string, french: string, italian: string, portuguese: string) {
    this.german = german;
    this.english = english;
    this.spanish = spanish;
    this.french = french;
    this.italian = italian;
    this.portuguese = portuguese;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.german) || !this.german.length) return false;
    if (!_.isString(this.english) || !this.english.length) return false;
    if (!_.isString(this.spanish) || !this.spanish.length) return false;
    if (!_.isString(this.french) || !this.french.length) return false;
    if (!_.isString(this.italian) || !this.italian.length) return false;
    if (!_.isString(this.portuguese) || !this.portuguese.length) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.language.TranslationJson} JSON representation of Translation
   */
  toJson (): TranslationJson {
    return {
      DE: this.german,
      EN: this.english,
      ES: this.spanish,
      FR: this.french,
      IT: this.italian,
      PT: this.portuguese
    };
  }

  /**
   * Parse raw JSON into a Translation object
   * @params {STARPEACE.language.TranslationJson} json - raw JSON object to parse into Translation
   * @return {STARPEACE.language.Translation} Translation representation of parsed JSON
   */
  static fromJson (json: TranslationJson): Translation {
    return new Translation(json.DE, json.EN, json.ES, json.FR, json.IT, json.PT);
  }
}
