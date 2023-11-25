import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.media
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {number} range - tile range building can reach
 */
export interface AntennaDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  range: number;
}

/**
 * Class representing antenna building simulation definition
 * @memberof STARPEACE.building.simulation.media
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {number} range - tile range building can reach
 */
export class AntennaDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'ANTENNA'; }

  labor: ResourceVelocityWeighted[];
  range: number;

  /**
   * Create a AntennaDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: AntennaDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.range = json.range ?? 0;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!_.isNumber(this.range) || this.range <= 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.AntennaDefinitionJson} JSON representation of AntennaDefinition
   */
  toJson (): AntennaDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      range: this.range
    });
  }
}
