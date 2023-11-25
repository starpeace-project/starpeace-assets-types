import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 */
export interface MausoleumDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
}

/**
 * Class representing mausoleum building simulation definition
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 */
export class MausoleumDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'MAUSOLEUM'; }

  labor: ResourceVelocityWeighted[];

  /**
   * Create a MausoleumDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: MausoleumDefinitionJson) {
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
   * @return {STARPEACE.building.simulation.bank.MausoleumDefinitionJson} JSON representation of MausoleumDefinition
   */
  toJson (): MausoleumDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson())
    });
  }
}
