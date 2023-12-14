import _ from 'lodash';

/**
 * @memberof STARPEACE.building.simulation.storage
 * @property {string} resourceId - identifier of resource type of storage
 * @property {number} maxCapacity - maximum amount of resource that can be stored
 * @property {number} maxVelocity - maximum quantity of resource per hour
 */
export interface StorageQuantityJson {
  resourceId: string;
  maxCapacity: number;
  maxVelocity: number;
}

/**
 * Class representing a storage quantity of a resource
 * @memberof STARPEACE.building.simulation.storage
 *
 * @property {string} resourceId - identifier of resource type of storage
 * @property {number} maxCapacity - maximum amount of resource that can be stored
 * @property {number} maxVelocity - maximum quantity of resource per hour
 */
export class StorageQuantity {
  resourceId: string;
  maxCapacity: number;
  maxVelocity: number;

  constructor (resourceId: string, maxCapacity: number, maxVelocity: number) {
    this.resourceId = resourceId;
    this.maxCapacity = maxCapacity;
    this.maxVelocity = maxVelocity;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.maxCapacity) || this.maxCapacity <= 0) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StorageQuantityJson} JSON representation of StorageQuantity
   */
  toJson (): StorageQuantityJson {
    return {
      resourceId: this.resourceId,
      maxCapacity: this.maxCapacity,
      maxVelocity: this.maxVelocity
    };
  }

  /**
   * Parse raw JSON into a StorageQuantity object
   * @param {STARPEACE.building.simulation.storage.StorageQuantity~JSON} json - raw JSON object to parse into StorageQuantity
   * @return {STARPEACE.building.simulation.storage.StorageQuantity} StorageQuantity representation of parsed JSON
   */
  static fromJson (json: StorageQuantityJson): StorageQuantity {
    return new StorageQuantity(json.resourceId, json.maxCapacity, json.maxVelocity);
  }
}
