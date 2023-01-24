import _ from 'lodash';

/**
 * @memberof STARPEACE.building.simulation.store
 * @property {string} resourceId - identifier of resource type of customer
 * @property {number} maxVelocity - maximum amount of resource that can be bought by customers per hour
 * @property {number} probability - base probability customers will purchase products per hour
 */
export interface StoreProductCustomerJson {
  resourceId: string;
  maxVelocity: number;
  probability: number;
}

/**
 * Class representing store building customer metadata
 * @memberof STARPEACE.building.simulation.store
 *
 * @property {string} resourceId - identifier of resource type of customer
 * @property {number} maxVelocity - maximum amount of resource that can be bought by customers per hour
 * @property {number} probability - base probability customers will purchase products per hour
 */
export class StoreProductCustomer {
  resourceId: string;
  maxVelocity: number;
  probability: number;

  constructor (resourceId: string, maxVelocity: number, probability: number) {
    this.resourceId = resourceId;
    this.maxVelocity = maxVelocity;
    this.probability = probability;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    if (!_.isNumber(this.probability) || this.probability <= 0 || this.probability > 1.0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StoreProductCustomerJson} JSON representation of StorageQuantity
   */
  toJson (): StoreProductCustomerJson {
    return {
      resourceId: this.resourceId,
      maxVelocity: this.maxVelocity,
      probability: this.probability
    };
  }

  /**
   * Parse raw JSON into a StoreProductCustomer object
   * @param {STARPEACE.building.simulation.store.StoreProductCustomerJson} json - raw JSON object to parse into StoreProductCustomer
   * @return {STARPEACE.building.simulation.store.StoreProductCustomer} StoreProductCustomer representation of parsed JSON
   */
  static fromJson (json: StoreProductCustomerJson): StoreProductCustomer {
    return new StoreProductCustomer(json.resourceId, json.maxVelocity, json.probability);
  }
}
