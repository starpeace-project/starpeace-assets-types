import _ from 'lodash';

/**
 * @memberof STARPEACE.building.simulation.storage
 * @property {string} resourceId - identifier of resource type of storage
 * @property {number} max - maximum amount of resource that can be stored
 */
export interface StorageQuantityJson {
  resourceId: string;
  max: number;
}

/**
 * Class representing a storage quantity of a resource
 * @memberof STARPEACE.building.simulation.storage
 *
 * @property {string} resourceId - identifier of resource type of storage
 * @property {number} max - maximum amount of resource that can be stored
 */
export class StorageQuantity {
  resourceId: string;
  max: number;

  constructor (resourceId: string, max: number) {
    this.resourceId = resourceId;
    this.max = max;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.max) || this.max <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StorageQuantityJson} JSON representation of StorageQuantity
   */
  toJson (): StorageQuantityJson {
    return {
      resourceId: this.resourceId,
      max: this.max
    };
  }

  /**
   * Parse raw JSON into a StorageQuantity object
   * @param {STARPEACE.building.simulation.storage.StorageQuantity~JSON} json - raw JSON object to parse into StorageQuantity
   * @return {STARPEACE.building.simulation.storage.StorageQuantity} StorageQuantity representation of parsed JSON
   */
  static fromJson (json: StorageQuantityJson): StorageQuantity {
    return new StorageQuantity(json.resourceId, json.max);
  }
}
