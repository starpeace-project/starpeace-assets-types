import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';

/**
 * @memberof STARPEACE.industry
 * @property {string} id - unique identifier of level
 * @property {STARPEACE.language.Translation~JSON} label - translation object with label of level
 * @property {STARPEACE.language.Translation~JSON} description - translation object with core description of level
 * @property {number} level - unique number of this level starting at one and incrementing
 * @property {number} facilityLimit - maximum number of facilities
 * @property {boolean} supplierPriority - has supplier priority
 * @property {boolean} supplierIfel - able to buy from Trade Center
 * @property {number} rewardPrestige - amount of prestige rewarded by reaching level
 * @property {number} refundResearch - percent of research refunded at end of year
 * @property {number} refundDemolition - percent of construction refunded on demolition
 * @property {number} requiredFee - required fee to pay to reach level
 * @property {number} requiredHourlyProfit - required hourly profit to reach level
 * @property {number} requiredPrestige - required prestige to reach level
 */
export interface LevelJson {
  id: string;
  label: TranslationJson;
  description: TranslationJson;
  level: number;
  facilityLimit: number;
  supplierPriority: boolean;
  supplierIfel: boolean;
  rewardPrestige: number;
  refundResearch: number;
  refundDemolition: number;
  requiredFee: number;
  requiredHourlyProfit: number;
  requiredPrestige: number;
}

/**
 * Class representing a tycoon level
 * @memberof STARPEACE.industry
 *
 * @property {string} id - unique identifier of level
 * @property {STARPEACE.language.Translation} label - translation with label of level
 * @property {STARPEACE.language.Translation} description - translation with description of level
 * @property {number} level - unique number of this level starting at one and incrementing
 * @property {number} facilityLimit - maximum number of facilities
 * @property {boolean} supplierPriority - has supplier priority
 * @property {boolean} supplierIfel - able to buy from Trade Center
 * @property {number} rewardPrestige - amount of prestige rewarded by reaching level
 * @property {number} refundResearch - percent of research refunded at end of year
 * @property {number} refundDemolition - percent of construction refunded on demolition
 * @property {number} requiredFee - required fee to pay to reach level
 * @property {number} requiredHourlyProfit - required hourly profit to reach level
 * @property {number} requiredPrestige - required prestige to reach level
 */
export class Level {
  id: string;
  label: Translation;
  description: Translation;
  level: number;

  facilityLimit: number;
  supplierPriority: boolean;
  supplierIfel: boolean;
  rewardPrestige: number;
  refundResearch: number;
  refundDemolition: number;
  requiredFee: number;
  requiredHourlyProfit: number;
  requiredPrestige: number;

  constructor (id: string, label: Translation, description: Translation, level: number, facilityLimit: number, supplierPriority: boolean, supplierIfel: boolean,
        rewardPrestige: number, refundResearch: number, refundDemolition: number, requiredFee: number, requiredHourlyProfit: number, requiredPrestige: number) {
    this.id = id;
    this.label = label;
    this.description = description;
    this.level = level;
    this.facilityLimit = facilityLimit;
    this.supplierPriority = supplierPriority;
    this.supplierIfel = supplierIfel;
    this.rewardPrestige = rewardPrestige;
    this.refundResearch = refundResearch;
    this.refundDemolition = refundDemolition;
    this.requiredFee = requiredFee;
    this.requiredHourlyProfit = requiredHourlyProfit;
    this.requiredPrestige = requiredPrestige;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!this.label?.isValid()) return false;
    if (!this.description?.isValid()) return false;
    if (!_.isNumber(this.level) || !this.level) return false;
    if (!_.isNumber(this.facilityLimit) || this.facilityLimit < 0) return false;
    if (!_.isNumber(this.rewardPrestige) || this.rewardPrestige < 0) return false;
    if (!_.isNumber(this.refundResearch) || this.refundResearch < 0) return false;
    if (!_.isNumber(this.refundDemolition) || this.refundDemolition < 0) return false;
    if (!_.isNumber(this.requiredFee) || this.requiredFee < 0) return false;
    if (!_.isNumber(this.requiredHourlyProfit) || this.requiredHourlyProfit < 0) return false;
    if (!_.isNumber(this.requiredPrestige) || this.requiredPrestige < 0) return false;
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
      description: this.description.toJson(),
      level: this.level,
      facilityLimit: this.facilityLimit,
      supplierPriority: this.supplierPriority,
      supplierIfel: this.supplierIfel,
      rewardPrestige: this.rewardPrestige,
      refundResearch: this.refundResearch,
      refundDemolition: this.refundDemolition,
      requiredFee: this.requiredFee,
      requiredHourlyProfit: this.requiredHourlyProfit,
      requiredPrestige: this.requiredPrestige
    };
  }

  /**
   * Parse raw JSON into a Level object
   * @params {STARPEACE.industry.Level~JSON} json - raw JSON object to parse into Level
   * @return {STARPEACE.industry.Level} Level representation of parsed JSON
   */
  static fromJson (json: LevelJson): Level {
    return new Level(
      json.id,
      Translation.fromJson(json.label),
      Translation.fromJson(json.description),
      json.level,
      json.facilityLimit,
      json.supplierPriority,
      json.supplierIfel,
      json.rewardPrestige,
      json.refundResearch,
      json.refundDemolition,
      json.requiredFee,
      json.requiredHourlyProfit,
      json.requiredPrestige
    );
  }
}
