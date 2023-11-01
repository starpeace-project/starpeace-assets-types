import _ from 'lodash';

import { StoreProductCustomer, StoreProductCustomerJson } from './store-product-customer.js';

/**
 * @memberof STARPEACE.building.simulation.store
 * @property {string} resourceId - identifier of resource type of output
 * @property {number} maxVelocity - maximum amount of resource that can be sold per hour
 * @property {STARPEACE.building.simulation.store.StoreProductCustomerJson[]} customers - array of store customer metadata
 */
export interface StoreProductOutputJson {
  resourceId: string;
  maxVelocity: number;
  customers: StoreProductCustomerJson[];
}

/**
 * Class representing store building product output
 * @memberof STARPEACE.building.simulation.store
 *
 * @property {string} resourceId - identifier of resource type of output
 * @property {number} maxVelocity - maximum amount of resource that can be sold per hour
 * @property {STARPEACE.building.simulation.store.StoreProductCustomer[]} customers - array of store customer metadata
 */
export class StoreProductOutput {
  resourceId: string;
  maxVelocity: number;
  customers: StoreProductCustomer[];

  constructor (resourceId: string, maxVelocity: number, customers: StoreProductCustomer[]) {
    this.resourceId = resourceId;
    this.maxVelocity = maxVelocity;
    this.customers = customers;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    if (!Array.isArray(this.customers) || !this.customers?.length || !!this.customers.find(c => !c.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.store.StoreProductOutput~JSON} JSON representation of StoreProductOutput
   */
  toJson (): StoreProductOutputJson {
    return {
      resourceId: this.resourceId,
      maxVelocity: this.maxVelocity,
      customers: this.customers.map(c => c.toJson())
    };
  }

  /**
   * Parse raw JSON into a StoreProductOutput object
   * @param {STARPEACE.building.simulation.store.StoreProductOutputJson} json - raw JSON object to parse into StoreProductOutput
   * @return {STARPEACE.building.simulation.store.StoreProductOutput} StoreProductOutput representation of parsed JSON
   */
  static fromJson (json: StoreProductOutputJson): StoreProductOutput {
    return new StoreProductOutput(json.resourceId, json.maxVelocity, (json.customers ?? []).map(StoreProductCustomer.fromJson));
  }
}
