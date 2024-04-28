import _ from 'lodash';

/**
 * @memberof STARPEACE.road
 * @property {string} id - identifier of asset
 * @property {string} imagePath - image path of asset
 */
export interface RoadImageDefinitionJson {
  id: string;
  imagePath: string;
}

/**
 * Class representing road metadata
 * @memberof STARPEACE.road
 *
 * @property {string} id - Unique identifier of road asset
 * @property {string} imagePath - image path of asset
 */
export class RoadImageDefinition {
  id: string;
  imagePath: string;

  constructor (id: string, imagePath: string) {
    this.id = id;
    this.imagePath = imagePath;
  }

  /**
  * Determine whether object and game configuration has valid attributes.
  * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.imagePath) || !this.imagePath.length) return false;
    return true;
  }

  /**
  * Retrieve JSON representation of object
  * @return {STARPEACE.road.RoadDefinitionJson} JSON representation of RoadDefinition
   */
  toJson (): RoadImageDefinitionJson {
    return {
      id: this.id,
      imagePath: this.imagePath
    };
  }

  /**
  * Parse raw JSON into a RoadDefinition object
  * @params {STARPEACE.road.RoadDefinitionJson} json - raw JSON object to parse into RoadDefinition
  * @return {STARPEACE.road.RoadDefinition} RoadDefinition representation of parsed JSON
   */
  static fromJson (json: RoadImageDefinitionJson): RoadImageDefinition {
    return new RoadImageDefinition(
      json.id,
      json.imagePath
    );
  }
}
