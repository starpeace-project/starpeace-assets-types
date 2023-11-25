import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor, SimulationWithOutputs } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../index.js';

/**
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityJson[]} outputs - products sold by this building
 */
export interface TradeCenterDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
}

/**
 * Class representing trade center building simulation definition
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} outputs - products sold by this building
 */
export class TradeCenterDefinition extends SimulationDefinition implements SimulationWithLabor, SimulationWithOutputs {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'TRADECENTER'; }

  labor: ResourceVelocityWeighted[];
  outputs: ResourceVelocity[];

  /**
   * Create a TradeCenterDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: TradeCenterDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.outputs = (json.outputs ?? []).map(ResourceVelocity.fromJson);
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
   * @return {STARPEACE.building.simulation.bank.TradeCenterDefinitionJson} JSON representation of TradeCenterDefinition
   */
  toJson (): TradeCenterDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      outputs: this.outputs.map((l) => l.toJson())
    });
  }
}
