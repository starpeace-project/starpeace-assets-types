import _ from 'lodash';

/**
 * @typedef {object} STARPEACE.building.simulation.CoordinateJson
 * @property {number} x - coordinate value along x axis
 * @property {number} y - coordinate value along y axis
 */
 export interface CoordinateJson {
  x: number;
  y: number;
}

/**
 * Class representing an x and y coordinate
 * @memberof STARPEACE.building
 *
 * @property {number} x - coordinate value along x axis
 * @property {number} y - coordinate value along y axis
 */
export class Coordinate {
  x: number;
  y: number;

  /**
   * Create a Coordinate object
   * @param {number} x - coordinate value along x axis
   * @param {number} y - coordinate value along y axis
   */
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isNumber(this.x)) return false;
    if (!_.isNumber(this.y)) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.CoordinateJson} JSON representation of Coordinate
   */
  toJson (): CoordinateJson {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
   * Parse raw JSON into a Coordinate object
   * @param {STARPEACE.building.CoordinateJson} json - raw JSON object to parse into Coordinate
   * @return {STARPEACE.building.Coordinate} Coordinate representation of parsed JSON
   */
  static fromJson (json: CoordinateJson): Coordinate {
    return new Coordinate(json.x, json.y);
  }
}
