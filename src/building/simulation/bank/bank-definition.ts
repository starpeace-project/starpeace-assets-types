import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.bank
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 */
export interface BankDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
}

/**
 * Class representing bank building simulation definition
 * @memberof STARPEACE.building.simulation.bank
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 */
export class BankDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'BANK'; }

  labor: ResourceVelocityWeighted[];

  /**
   * Create a BankDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: BankDefinitionJson) {
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
   * @return {STARPEACE.building.simulation.bank.SimulationDefinitionJson} JSON representation of BankDefinition
   */
  toJson (): BankDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson())
    });
  }
}
