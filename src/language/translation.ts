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
 * @property {Record<string, string>} textByCode - translation by language code
 */
export class Translation {
  textByCode: Record<string, string>;

  constructor (textByCode: Record<string, string>) {
    this.textByCode = textByCode;
  }

  get DE (): string | undefined {
    return this.textByCode['DE'];
  }
  get EN (): string | undefined {
    return this.textByCode['EN'];
  }
  get ES (): string | undefined {
    return this.textByCode['ES'];
  }
  get FR (): string | undefined {
    return this.textByCode['FR'];
  }
  get IT (): string | undefined {
    return this.textByCode['IT'];
  }
  get PT (): string | undefined {
    return this.textByCode['PT'];
  }

  get german (): string | undefined {
    return this.textByCode['DE'];
  }
  get english (): string | undefined {
    return this.textByCode['EN'];
  }
  get spanish (): string | undefined {
    return this.textByCode['ES'];
  }
  get french (): string | undefined {
    return this.textByCode['FR'];
  }
  get italian (): string | undefined {
    return this.textByCode['IT'];
  }
  get portuguese (): string | undefined {
    return this.textByCode['PT'];
  }

  forCode (code: string): string | undefined {
    return this.textByCode[code];
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
      DE: this.german ?? '',
      EN: this.english ?? '',
      ES: this.spanish ?? '',
      FR: this.french ?? '',
      IT: this.italian ?? '',
      PT: this.portuguese ?? ''
    };
  }

  /**
   * Parse raw JSON into a Translation object
   * @params {STARPEACE.language.TranslationJson} json - raw JSON object to parse into Translation
   * @return {STARPEACE.language.Translation} Translation representation of parsed JSON
   */
  static from_json (json: TranslationJson): Translation {
    return Translation.fromJson(json);
  }
  static fromJson (json: TranslationJson | undefined): Translation {
    return new Translation({
      DE: json?.DE ?? '',
      EN: json?.EN ?? '',
      ES: json?.ES ?? '',
      FR: json?.FR ?? '',
      IT: json?.IT ?? '',
      PT: json?.PT ?? ''
    });
  }
}
