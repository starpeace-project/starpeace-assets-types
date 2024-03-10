import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.park
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 */
export interface ParkDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
}

/**
 * Class representing park building simulation definition
 * @memberof STARPEACE.building.simulation.park
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 */
export class ParkDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'PARK'; }

  labor: ResourceVelocityWeighted[];

  /**
   * Create a ParkDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: ParkDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.ParkDefinitionJson} JSON representation of ParkDefinition
   */
  toJson (): ParkDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson())
    });
  }
}
