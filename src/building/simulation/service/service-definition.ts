import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor, SimulationWithOperations, SimulationWithOutputs } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../index.js';

/**
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityJson[]} outputs - array of output service resource quantities provided by building
 */
export interface ServiceDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  operations: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
}

/**
 * Class representing service building simulation definition
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocity[]} outputs - array of output service resource quantities provided by building
 */
export class ServiceDefinition extends SimulationDefinition implements SimulationWithLabor, SimulationWithOperations, SimulationWithOutputs {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'SERVICE'; }

  labor: ResourceVelocityWeighted[];
  operations: ResourceVelocityWeighted[];
  outputs: ResourceVelocity[];

  /**
   * Create a ServiceDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   *
   * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
   * @property {STARPEACE.industry.ResourceVelocityWeighted[]} operations - array of resource quantities required for building operations
   * @property {STARPEACE.industry.ResourceVelocity[]} outputs - array of output resource quantities
   */
  constructor (json: ServiceDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.operations = (json.operations ?? []).map(ResourceVelocityWeighted.fromJson);
    this.outputs = (json.outputs ?? []).map(ResourceVelocity.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.operations) || !!this.operations.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.outputs) || !this.outputs?.length || !!this.outputs.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.service.ServiceDefinitionJson} JSON representation of ServiceDefinition
   */
  toJson (): ServiceDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      operations: this.operations.map(l => l.toJson()),
      outputs: this.outputs.map(l => l.toJson())
    });
  }
}
