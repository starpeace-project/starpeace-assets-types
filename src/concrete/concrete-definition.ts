import _ from 'lodash';

/**
 * @memberof STARPEACE.concrete
 * @property {string} id - identifier of asset
 * @property {string} image - image path of asset
 */
export interface ConcreteDefinitionJson {
  id: string;
  image: string;
}

/**
 * Class representing concrete metadata
 * @memberof STARPEACE.concrete
 *
 * @property {string} id - Unique identifier of concrete asset
 * @property {string} image - image path of asset
 */
export class ConcreteDefinition {
  id: string;
  image: string;

  constructor (id: string, image: string) {
    this.id = id;
    this.image = image;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.image) || !this.image.length) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.concrete.ConcreteDefinitionJson} JSON representation of ConcreteDefinition
   */
  toJson (): ConcreteDefinitionJson {
    return {
      id: this.id,
      image: this.image
    };
  }

  /**
   * Parse raw JSON into a ConcreteDefinition object
   * @params {STARPEACE.concrete.ConcreteDefinitionJson} json - raw JSON object to parse into ConcreteDefinition
   * @return {STARPEACE.concrete.ConcreteDefinition} ConcreteDefinition representation of parsed JSON
   */
  static fromJson (json: ConcreteDefinitionJson): ConcreteDefinition {
    return  new ConcreteDefinition(json.id, json.image);
  }
}
