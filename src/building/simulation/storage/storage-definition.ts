import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';
import { StorageQuantity, StorageQuantityJson } from './storage-quantity';

/**
 * @memberof STARPEACE.building.simulation.storage
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.storage.StorageQuantityJson[]} storage - array of resource quantities stored by building
 */
export interface StorageDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  operations: ResourceQuantityJson[];
  storage: StorageQuantityJson[];
}

/**
 * Class representing storage building simulation definition
 * @memberof STARPEACE.building.simulation.storage
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.building.simulation.storage.StorageQuantity[]} storage - array of resource quantities stored by building
 */
export class StorageDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'STORAGE'; }

  labor: ResourceQuantity[];
  operations: ResourceQuantity[];
  storage: StorageQuantity[];

  /**
   * Create a StorageDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: StorageDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.operations = (json.operations ?? []).map(ResourceQuantity.fromJson);
    this.storage = (json.storage ?? []).map(StorageQuantity.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find(l => !l.isValid())) return false;
    if (!Array.isArray(this.operations) || !!this.operations.find(o => !o.isValid())) return false;
    if (!Array.isArray(this.storage) || !this.storage?.length || !!this.storage.find(s => !s.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.StorageDefinitionJson} JSON representation of StorageDefinition
   */
  toJson (): StorageDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      operations: this.operations.map(o => o.toJson()),
      storage: this.storage.map(s => s.toJson())
    });
  }
}
