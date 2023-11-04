import { Translation, TranslationJson } from '../language/translation.js';

/**
 * @memberof STARPEACE.invention
 * @property {string} id - identifier of invention
 * @property {string} industryCategoryId - category of invention
 * @property {string} industryTypeId - industry type of invention
 * @property {STARPEACE.language.TranslationJson} name - translation object with name of invention
 * @property {STARPEACE.language.TranslationJson} description - translation object with description of invention
 * @property {string[]} dependsOnIds - array of other invention definition identifiers this depends on
 * @property {object} properties - properties of invention
 */
 export interface InventionDefinitionJson {
  id: string;
  industryCategoryId: string;
  industryTypeId: string;
  name: TranslationJson;
  description: TranslationJson;
  dependsOnIds: string[];
  properties: Record<string, number | string>;
}

/**
 * Class representing metadata definition of an invention
 * @memberof STARPEACE.invention
 *
 * @property {string} id - Unique identifier of invention definition metadata
 * @property {string} industryCategoryId - Category of invention
 * @property {string} industryTypeId - Industry type of invention
 * @property {STARPEACE.language.Translation} name - Translation object with name of invention
 * @property {STARPEACE.language.Translation} description - Translation with description of invention
 * @property {string[]} dependsOnIds - Array of other invention definition identifiers this depends on
 * @property {object} properties - Properties of invention
 */
export class InventionDefinition {
  id: string;
  industryCategoryId: string;
  industryTypeId: string;
  name: Translation;
  description: Translation;
  dependsOnIds: string[];
  properties: Record<string, number | string>;

  constructor (id: string, industryCategoryId: string, industryTypeId: string, name: Translation, description: Translation, dependsOnIds: string[], properties: Record<string, number | string>) {
    this.id = id;
    this.industryCategoryId = industryCategoryId;
    this.industryTypeId = industryTypeId;
    this.name = name;
    this.description = description;
    this.dependsOnIds = dependsOnIds;
    this.properties = properties;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!this.id?.length) return false;
    if (!this.industryCategoryId?.length) return false;
    if (!this.industryTypeId?.length) return false;

    if (!this.name?.isValid()) return false;
    if (!this.description?.isValid()) return false;

    // TODO: validate properties
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.invention.InventionDefinitionJson} JSON representation of InventionDefinition
   */
  toJson (): InventionDefinitionJson {
    return {
      id: this.id,
      industryCategoryId: this.industryCategoryId,
      industryTypeId: this.industryTypeId,
      name: this.name?.toJson(),
      description: this.description?.toJson(),
      dependsOnIds: this.dependsOnIds,
      properties: this.properties
    };
  }

  /**
   * Parse raw JSON into a InventionDefinition object
   * @params {STARPEACE.invention.InventionDefinition~JSON} json - raw JSON object to parse into InventionDefinition
   * @return {STARPEACE.invention.InventionDefinition} InventionDefinition representation of parsed JSON
   */
  static fromJson (json: InventionDefinitionJson): InventionDefinition {
    return new InventionDefinition(
      json.id,
      json.industryCategoryId,
      json.industryTypeId,
      Translation.fromJson(json.name),
      Translation.fromJson(json.description),
      json.dependsOnIds ?? [],
      Object.fromEntries(Object.entries(json.properties ?? {}).filter(e => e[1] !== undefined))
    );
  }
}
