import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} service - array of output service resource quantities provided by building
 */
export interface ServiceDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityWeightedJson[];
}

/**
 * Class representing service building simulation definition
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} service - array of output service resource quantities provided by building
 */
export class ServiceDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'SERVICE'; }

  labor: ResourceVelocityWeighted[];
  outputs: ResourceVelocityWeighted[];

  /**
   * Create a ServiceDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: ServiceDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.outputs = (json.outputs ?? []).map(ResourceVelocityWeighted.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.outputs) || !this.outputs?.length || !!this.outputs.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.ServiceDefinitionJson} JSON representation of ServiceDefinition
   */
  toJson (): ServiceDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      outputs: this.outputs.map(l => l.toJson())
    });
  }
}
