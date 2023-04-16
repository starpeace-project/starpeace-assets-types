import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';
import { StoreProduct, StoreProductJson } from './store-product';

/**
 * @memberof STARPEACE.building.simulation.store
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.store.StoreProductJson[]} products - array of output resource products sold by building
 */
export interface StoreDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  operations: ResourceQuantityJson[];
  products: StoreProductJson[];
}

/**
 * Class representing store building simulation definition
 * @memberof STARPEACE.building.simulation.store
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.store.StoreProduct[]} products - array of output resource products sold by building
 */
export class StoreDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'STORE'; }

  labor: ResourceQuantity[];
  operations: ResourceQuantity[];
  products: StoreProduct[];

  /**
   * Create a StoreDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: StoreDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.operations = (json.operations ?? []).map(ResourceQuantity.fromJson);
    this.products = (json.products ?? []).map(StoreProduct.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find(l => !l.isValid())) return false;
    if (!Array.isArray(this.operations) || !!this.operations.find(o => !o.isValid())) return false;
    if (!Array.isArray(this.products) || !this.products?.length || !!this.products.find(s => !s.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StoreDefinitionJson} JSON representation of StoreDefinition
   */
  toJson (): StoreDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      operations: this.operations.map(o => o.toJson()),
      products: this.products.map(s => s.toJson())
    });
  }
}
