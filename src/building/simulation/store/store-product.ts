import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { StoreProductOutput, StoreProductOutputJson } from './store-product-output';

/**
 * @memberof STARPEACE.building.simulation.storage
 * @property {STARPEACE.industry.ResourceQuantityJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.building.simulation.store.StoreProductOutputJson[]} outputs - array of output resource quantities
 */
export interface StoreProductJson {
  inputs: ResourceQuantityJson[];
  outputs: StoreProductOutputJson[];
}

/**
 * Class representing store building simulation product outputs
 * @memberof STARPEACE.building.simulation.store
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} inputs - array of input resource quantities
 * @property {STARPEACE.building.simulation.store.StoreProductOutput[]} outputs - array of output resource quantities
 */
export class StoreProduct {
  inputs: ResourceQuantity[];
  outputs: StoreProductOutput[];

  constructor (inputs: ResourceQuantity[], outputs: StoreProductOutput[]) {
    this.inputs = inputs;
    this.outputs = outputs;
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
      outputs: this.outputs.map(i => i.toJson())
    };
  }

  /**
   * Parse raw JSON into a StoreProduct object
   * @param {STARPEACE.building.simulation.store.StoreProductJson} json - raw JSON object to parse into StoreProduct
   * @return {STARPEACE.building.simulation.store.StoreProduct} StoreProduct representation of parsed JSON
   */
  static fromJson (json: StoreProductJson): StoreProduct {
    return new StoreProduct((json.inputs ?? []).map(ResourceQuantity.fromJson), (json.outputs ?? []).map(StoreProductOutput.fromJson));
  }
}
