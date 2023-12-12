import _ from 'lodash';

import { Translation, TranslationJson } from '../language/translation.js';


/**
 * @memberof STARPEACE.building
 * @property {string} imageId - default building image definition identifier for this building
 * @property {number} minLevel - minimum inclusive level applicable for image
 * @property {number} maxLevel - maximum inclusive level applicable for image
 */
export interface BuildingDefinitionLevelImageJson {
  imageId: string;
  minLevel: number;
  maxLevel: number;
}

/**
 * @memberof STARPEACE.building
 * @property {string} id - unique identifier for building definition
 * @property {string} imageId - default building image definition identifier for this building
 * @property {BuildingDefinitionLevelImageJson[]} levelImages - array of images for different building levels
 * @property {string} signId - identifier for sign of this building
 * @property {string} constructionImageId - building image definition identifier to use during construction of this building
 * @property {STARPEACE.language.TranslationJson} name - translation object with name of building
 * @property {string} zoneId - identifier for city zone of this building
 * @property {string} industryCategoryId - identifier for category of this building
 * @property {string} industryTypeId - identifier for industry type of this building
 * @property {string} sealId - identifier for seal of this building
 * @property {boolean} foundation - flag indicating whether building has concrete foundation
 * @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
 * @property {string[]} requiredInventionIds - array of invention definition identifiers that must be researched before construction of this building
 * @property {string[]} allowedInventionIds - array of invention definition identifiers that are allowed for research after construction of this building
 */
export interface BuildingDefinitionJson {
  id: string;
  imageId: string;
  signId?: string | undefined;
  levelImages?: BuildingDefinitionLevelImageJson[] | undefined;
  constructionImageId: string;
  name: TranslationJson;
  zoneId: string;
  industryCategoryId: string;
  industryTypeId: string;
  sealId: string;
  foundation: boolean;
  restricted?: boolean | undefined;
  requiredInventionIds?: string[] | undefined;
  allowedInventionIds?: string[] | undefined;
}

/**
 * @memberof STARPEACE.building
 * @property {string} imageId - default building image definition identifier for this building
 * @property {number} minLevel - minimum inclusive level applicable for image
 * @property {number} maxLevel - maximum inclusive level applicable for image
 */
export class BuildingDefinitionLevelImage {
  imageId: string;
  minLevel: number;
  maxLevel: number;

  constructor (imageId: string, minLevel: number, maxLevel: number) {
    this.imageId = imageId;
    this.minLevel = minLevel;
    this.maxLevel = maxLevel;
  }

  isValid (): boolean {
    if (!_.isString(this.imageId) || !this.imageId?.length) return false;
    if (!_.isNumber(this.minLevel)) return false;
    if (!_.isNumber(this.maxLevel)) return false;
    if (this.minLevel < 1 || this.maxLevel < 1 || this.minLevel > this.maxLevel) return false;
    return true;
  }

  toJson (): BuildingDefinitionLevelImageJson {
    return {
      imageId: this.imageId,
      minLevel: this.minLevel,
      maxLevel: this.maxLevel
    };
  }

  static fromJson (json: BuildingDefinitionLevelImageJson): BuildingDefinitionLevelImage {
    return new BuildingDefinitionLevelImage(json.imageId, json.minLevel, json.maxLevel);
  }
}

/**
 * Class representing building definition metadata
 * @memberof STARPEACE.building
 *
 * @property {string} id - unique identifier for building definition
 * @property {string} imageId - default building image definition identifier for this building
 * @property {string} signId - identifier for sign of this building
 * @property {BuildingDefinitionLevelImage[]} levelImages - array of images for different building levels
 * @property {string} constructionImageId - building image definition identifier to use during construction of this building
 * @property {STARPEACE.language.Translation} name - translation object with name of building
 * @property {string} zoneId - identifier for city zone of this building
 * @property {string} industryCategoryId - identifier for category of this building
 * @property {string} industryTypeId - identifier for industry type of this building
 * @property {string} sealId - identifier for seal of this building
 * @property {boolean} foundation - flag indicating whether building has concrete foundation
 * @property {boolean} restricted - flag indicating whether this building is restricted from tycoon construction
 * @property {string[]} requiredInventionIds - array of invention definition identifiers that must be researched before construction of this building
 * @property {string[]} allowedInventionIds - array of invention definition identifiers that are allowed for research after construction of this building
 */
export class BuildingDefinition {
  id: string;
  imageId: string;
  signId: string | undefined;
  levelImages: BuildingDefinitionLevelImage[];
  constructionImageId: string;
  name: Translation;
  zoneId: string;
  industryCategoryId: string;
  industryTypeId: string;
  sealId: string;
  foundation: boolean;
  restricted: boolean;
  requiredInventionIds: string[];
  allowedInventionIds: string[];

  /**
  * Create a BuildingDefinition object
  * @param {STARPEACE.building.simulation.BuildingDefinitionJson} json - raw JSON object to populate into simulation definition
  */
  constructor (id: string, imageId: string, signId: string | undefined, levelImages: BuildingDefinitionLevelImage[], constructionImageId: string, name: Translation, zoneId: string, industryCategoryId: string, industryTypeId: string, sealId: string, foundation: boolean, restricted: boolean, requiredInventionIds: string[], allowedInventionIds: string[]) {
    this.id = id;
    this.imageId = imageId;
    this.signId = signId;
    this.levelImages = levelImages;
    this.constructionImageId = constructionImageId;
    this.name = name;
    this.zoneId = zoneId;
    this.industryCategoryId = industryCategoryId;
    this.industryTypeId = industryTypeId;
    this.sealId = sealId;
    this.foundation = foundation;
    this.restricted = restricted;
    this.requiredInventionIds = requiredInventionIds;
    this.allowedInventionIds = allowedInventionIds;
  }

  getImageIdForLevel (level: number): string {
    for (const image of this.levelImages) {
      if (level >= image.minLevel && level <= image.maxLevel) {
        return image.imageId;
      }
    }
    return this.imageId;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id?.length) return false;
    if (!_.isString(this.imageId) || !this.imageId?.length) return false;
    if (this.levelImages?.length) {
      if (!this.levelImages.every(i => i.isValid())) {
        return false;
      }

      let level = 0;
      for (const image of this.levelImages) {
        if (image.minLevel <= level || image.maxLevel <= level) return false;
        level = image.maxLevel;
      }
    }
    if (!_.isString(this.constructionImageId) || !this.constructionImageId?.length) return false;
    if (!this.name.isValid()) return false;
    if (!_.isString(this.zoneId) || !this.zoneId?.length) return false;
    if (!_.isString(this.sealId) || !this.sealId?.length) return false;
    if (!_.isString(this.industryCategoryId) || !this.industryCategoryId?.length) return false;
    if (!_.isString(this.industryTypeId) || !this.industryTypeId?.length) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.BuildingDefinition~JSON} JSON representation of BuildingDefinition
   */
  toJson (): BuildingDefinitionJson {
    return {
      id: this.id,
      imageId: this.imageId,
      signId: this.signId,
      levelImages: this.levelImages?.map(i => i.toJson()),
      constructionImageId: this.constructionImageId,
      name: this.name.toJson(),
      zoneId: this.zoneId,
      industryCategoryId: this.industryCategoryId,
      industryTypeId: this.industryTypeId,
      sealId: this.sealId,
      foundation: this.foundation,
      restricted: this.restricted,
      requiredInventionIds: this.requiredInventionIds,
      allowedInventionIds: this.allowedInventionIds
    };
  }

  /**
   * Parse raw JSON into a BuildingDefinition object
   * @param {STARPEACE.building.BuildingDefinition~JSON} json - raw JSON object to parse into BuildingDefinition
   * @return {STARPEACE.building.BuildingDefinition} BuildingDefinition representation of parsed JSON
   */
  static fromJson (json: BuildingDefinitionJson): BuildingDefinition {
    return new BuildingDefinition(
      json.id,
      json.imageId,
      json.signId ?? undefined,
      (json.levelImages ?? []).map(BuildingDefinitionLevelImage.fromJson),
      json.constructionImageId,
      Translation.fromJson(json.name),
      json.zoneId,
      json.industryCategoryId,
      json.industryTypeId,
      json.sealId,
      json.foundation ?? false,
      json.restricted ?? false,
      json.requiredInventionIds ?? [],
      json.allowedInventionIds ?? []
    );
  }
}
