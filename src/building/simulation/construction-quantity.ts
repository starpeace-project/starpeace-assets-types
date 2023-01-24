import _ from 'lodash';

/**
 * @typedef {object} STARPEACE.building.simulation.ConstructionQuantity~JSON
 * @property {string} resourceId - identifier of resource type required
 * @property {number} quantity - total amount of resource required
 * @property {number} maxVelocity - maximum amount of resource that can be used for construction per hour
 */
export interface ConstructionQuantityJson {
  resourceId: string;
  quantity: number;
  maxVelocity: number;
}

/**
 * Class representing building construction quantities
 * @memberof STARPEACE.building.simulation
 *
 * @property {string} resourceId - identifier of resource type required
 * @property {number} quantity - total amount of resource required
 * @property {number} maxVelocity - maximum amount of resource that can be used for construction per hour
 */
export class ConstructionQuantity {
  resourceId: string;
  quantity: number;
  maxVelocity: number;

  constructor (resourceId: string, quantity: number, maxVelocity: number) {
    this.resourceId = resourceId;
    this.quantity = quantity;
    this.maxVelocity = maxVelocity;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.quantity) || this.quantity < 0) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.ConstructionQuantityJson} JSON representation of ConstructionQuantity
   */
  toJson (): ConstructionQuantityJson {
    return {
      resourceId: this.resourceId,
      quantity: this.quantity,
      maxVelocity: this.maxVelocity
    };
  }

  /**
   * Parse raw JSON into a ConstructionQuantity object
   * @param {STARPEACE.building.simulation.ConstructionQuantityJson} json - raw JSON object to parse into ConstructionQuantity
   * @return {STARPEACE.building.simulation.ConstructionQuantity} ConstructionQuantity representation of parsed JSON
   */
  static fromJson (json: ConstructionQuantityJson): ConstructionQuantity {
    return new ConstructionQuantity(json.resourceId, json.quantity, json.maxVelocity);
  }
}
