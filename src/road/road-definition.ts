import _ from 'lodash';

/**
 * @memberof STARPEACE.road
 * @property {string} id - identifier of asset
 * @property {string} image - image path of asset
 */
export interface RoadDefinitionJson {
  id: string;
  image: string;
}

/**
 * Class representing road metadata
 * @memberof STARPEACE.road
 *
 * @property {string} id - Unique identifier of road asset
 * @property {string} image - image path of asset
 */
export class RoadDefinition {
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
  * @return {STARPEACE.road.RoadDefinitionJson} JSON representation of RoadDefinition
   */
  toJson (): RoadDefinitionJson {
    return {
      id: this.id,
      image: this.image
    };
  }

  /**
  * Parse raw JSON into a RoadDefinition object
  * @params {STARPEACE.road.RoadDefinitionJson} json - raw JSON object to parse into RoadDefinition
  * @return {STARPEACE.road.RoadDefinition} RoadDefinition representation of parsed JSON
   */
  static fromJson (json: RoadDefinitionJson): RoadDefinition {
    return new RoadDefinition(json.id, json.image);
  }
}
