import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';

/**
 * @memberof STARPEACE.seal
 * @property {string} id - identifier of seal
 * @property {string} nameShort - short name of seal
 * @property {string} nameLong - long or full name of seal
 * @property {string[]} buildingIds - array of building definition identifiers constructable by seal
 */
export interface CompanySealJson {
  id: string;
  nameShort: string;
  nameLong: string;
  descriptions: TranslationJson[];
  playable: boolean;
  buildingIds: string[];

  pros: TranslationJson | null;
  cons: TranslationJson | null;
  strengths: TranslationJson | null;
  weaknesses: TranslationJson | null;
}

/**
 * Class representing company seal, with metadata and buildings allowed defined.
 * @memberof STARPEACE.seal
 *
 * @property {string} id - Unique identifier of seal
 * @property {string} nameShort - Short name for seal (same in all languages)
 * @property {string} nameLong - Longer full name for seal (may be same as json.name_short; same in all languages)
 * @property {string[]} buildingIds - Array of building definition identifiers that can be constructed by seal
 */
export class CompanySeal {
  id: string;
  nameShort: string;
  nameLong: string;
  descriptions: Translation[];
  playable: boolean;
  buildingIds: string[];

  pros: Translation | null;
  cons: Translation | null;
  strengths: Translation | null;
  weaknesses: Translation | null;

  constructor (id: string, nameShort: string, nameLong: string, descriptions: Translation[], playable: boolean, buildingIds: string[], pros: Translation | null, cons: Translation | null, strengths: Translation | null, weaknesses: Translation | null) {
    this.id = id;
    this.nameShort = nameShort;
    this.nameLong = nameLong;
    this.descriptions = descriptions;
    this.playable = playable;
    this.buildingIds = buildingIds;
    this.pros = pros;
    this.cons = cons;
    this.strengths = strengths;
    this.weaknesses = weaknesses;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.nameShort) || !this.nameShort.length) return false;
    if (!_.isString(this.nameLong) || !this.nameLong.length) return false;
    if (!_.isBoolean(this.playable)) return false;
    if (!_.isArray(this.descriptions) || !this.descriptions.length || !!this.descriptions.find(d => !d.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.seal.CompanySealJson} JSON representation of CompanySeal
   */
  toJson (): CompanySealJson {
    return {
      id: this.id,
      nameShort: this.nameShort,
      nameLong: this.nameLong,
      descriptions: this.descriptions.map((d) => d.toJson()),
      playable: this.playable,
      buildingIds: this.buildingIds,
      pros: this.pros?.toJson() ?? null,
      cons: this.cons?.toJson() ?? null,
      strengths: this.strengths?.toJson() ?? null,
      weaknesses: this.weaknesses?.toJson() ?? null
    };
  }

  /**
   * Parse raw JSON into a CompanySeal object
   * @params {STARPEACE.seal.CompanySeal~JSON} json - raw JSON object to parse into CompanySeal
   * @return {STARPEACE.seal.CompanySeal} CompanySeal representation of parsed JSON
   */
  static fromJson (json: CompanySealJson): CompanySeal {
    return new CompanySeal(
      json.id,
      json.nameShort,
      json.nameLong,
      _.map(json.descriptions, Translation.fromJson),
      json.playable,
      json.buildingIds ?? [],
      json.pros ? Translation.fromJson(json.pros) : null,
      json.cons ? Translation.fromJson(json.cons) : null,
      json.strengths ? Translation.fromJson(json.strengths) : null,
      json.weaknesses ? Translation.fromJson(json.weaknesses) : null
    );
  }
}
