import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithInputs, SimulationWithLabor, SimulationWithOperations, SimulationWithOutputs } from '../simulation-definition.js';
import { StoreProduct, StoreProductJson } from './store-product.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity } from '../../../index.js';

/**
 * @memberof STARPEACE.building.simulation.store
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.store.StoreProductJson[]} products - array of output resource products sold by building
 */
export interface StoreDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  operations: ResourceVelocityWeightedJson[];
  products: StoreProductJson[];
}

/**
 * Class representing store building simulation definition
 * @memberof STARPEACE.building.simulation.store
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.store.StoreProduct[]} products - array of output resource products sold by building
 */
export class StoreDefinition extends SimulationDefinition implements SimulationWithLabor, SimulationWithOperations, SimulationWithInputs, SimulationWithOutputs {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'STORE'; }

  labor: ResourceVelocityWeighted[];
  operations: ResourceVelocityWeighted[];
  products: StoreProduct[];

  /**
   * Create a StoreDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: StoreDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.operations = (json.operations ?? []).map(ResourceVelocityWeighted.fromJson);
    this.products = (json.products ?? []).map(StoreProduct.fromJson);
  }

  get inputs (): ResourceVelocityWeighted[] {
    return this.products.map(p => p.inputs).flat();
  }

  get outputs (): ResourceVelocity[] {
    return this.products.map(p => p.outputs).flat();
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
