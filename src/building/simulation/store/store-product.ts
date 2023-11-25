import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../industry/resource-velocity.js';
import { StoreProductCustomer, StoreProductCustomerJson } from './store-product-customer.js';

/**
 * @memberof STARPEACE.building.simulation.storage
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.building.simulation.store.ResourceVelocityJson[]} outputs - array of output resource quantities
 * @property {STARPEACE.building.simulation.store.StoreProductCustomerJson[]} customers - array of store customer metadata
 */
export interface StoreProductJson {
  inputs: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
  customers: StoreProductCustomerJson[];
}

/**
 * Class representing store building simulation product outputs
 * @memberof STARPEACE.building.simulation.store
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} inputs - array of input resource quantities
 * @property {STARPEACE.building.simulation.store.ResourceVelocity[]} outputs - array of output resource quantities
 * @property {STARPEACE.building.simulation.store.StoreProductCustomer[]} customers - array of store customer metadata
 */
export class StoreProduct {
  inputs: ResourceVelocityWeighted[];
  outputs: ResourceVelocity[];
  customers: StoreProductCustomer[];

  constructor (inputs: ResourceVelocityWeighted[], outputs: ResourceVelocity[], customers: StoreProductCustomer[]) {
    this.inputs = inputs;
    this.outputs = outputs;
    this.customers = customers;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!Array.isArray(this.inputs) || !this.inputs?.length || !!this.inputs.find(c => !c.isValid())) return false;
    if (!Array.isArray(this.outputs) || !this.outputs?.length || !!this.outputs.find(c => !c.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StoreProductJson} JSON representation of StorageQuantity
   */
  toJson (): StoreProductJson {
    return {
      inputs: this.inputs.map(i => i.toJson()),
      outputs: this.outputs.map(i => i.toJson()),
      customers: this.customers.map(c => c.toJson())
    };
  }

  /**
   * Parse raw JSON into a StoreProduct object
   * @param {STARPEACE.building.simulation.store.StoreProductJson} json - raw JSON object to parse into StoreProduct
   * @return {STARPEACE.building.simulation.store.StoreProduct} StoreProduct representation of parsed JSON
   */
  static fromJson (json: StoreProductJson): StoreProduct {
    return new StoreProduct(
      (json.inputs ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.outputs ?? []).map(ResourceVelocity.fromJson),
      (json.customers ?? []).map(StoreProductCustomer.fromJson)
    );
  }
}
