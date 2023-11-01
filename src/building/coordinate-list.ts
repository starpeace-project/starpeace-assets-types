import { Coordinate, CoordinateJson } from "./coordinate.js";

/**
 * Class representing building construction quantities
 * @memberof STARPEACE.building.simulation
 *
 * @property {string} resourceId - identifier of resource type required
 * @property {number} quantity - total amount of resource required
 * @property {number} maxVelocity - maximum amount of resource that can be used for construction per hour
 */
export class CoordinateList {
  coordinates: Coordinate[];

  constructor (coordinates: Coordinate[]) {
    this.coordinates = coordinates;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!Array.isArray(this.coordinates) || !this.coordinates.length || !!this.coordinates.find(c => !c.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.CoordinateListJson} JSON representation of CoordinateList
   */
  toJson (): CoordinateJson[] {
    return this.coordinates.map(c => c.toJson());
  }

  /**
   * Parse raw JSON into a CoordinateList object
   * @param {STARPEACE.building.CoordinateList~JSON} json - raw JSON object to parse into CoordinateList
   * @return {STARPEACE.building.CoordinateList} CoordinateList representation of parsed JSON
   */
  static fromJson (json: CoordinateJson[]): CoordinateList {
    return new CoordinateList((json ?? []).map(Coordinate.fromJson));
  }
}
