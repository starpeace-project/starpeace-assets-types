import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithInputs, SimulationWithLabor, SimulationWithOperations, SimulationWithOutputs } from '../simulation-definition.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../industry/resource-velocity.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.factory
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceVelocityJson[]} outputs - array of output resource quantities
 */
export interface FactoryDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  operations: ResourceVelocityWeightedJson[];
  inputs: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
}

/**
 * Class representing factory building simulation definition
 * @memberof STARPEACE.building.simulation.factory
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.building.simulation.factory.FactoryStage[]} stages - each stage of factory production
 */
export class FactoryDefinition extends SimulationDefinition implements SimulationWithLabor, SimulationWithOperations, SimulationWithInputs, SimulationWithOutputs {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'FACTORY'; }

  labor: ResourceVelocityWeighted[];
  operations: ResourceVelocityWeighted[];
  inputs: ResourceVelocityWeighted[];
  outputs: ResourceVelocity[];

  /**
   * Create a FactoryDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
   */
  constructor (json: FactoryDefinitionJson) {
    super(json);

    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.operations = (json.operations ?? []).map(ResourceVelocityWeighted.fromJson);
    this.inputs = (json.inputs ?? []).map(ResourceVelocityWeighted.fromJson);
    this.outputs = (json.outputs ?? []).map(ResourceVelocity.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((q) => !q.isValid())) return false;
    if (!Array.isArray(this.operations) || !!this.operations.find((q) => !q.isValid())) return false;
    if (!Array.isArray(this.inputs) || !!this.inputs.find((q) => !q.isValid())) return false;
    if (!Array.isArray(this.outputs) || !!this.outputs.find((q) => !q.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.FactoryDefinitionJson} JSON representation of FactoryDefinition
   */
  toJson (): FactoryDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((q) => q.toJson()),
      operations: this.operations.map((q) => q.toJson()),
      inputs: this.inputs.map((q) => q.toJson()),
      outputs: this.outputs.map((q) => q.toJson())
    });
  }
}
