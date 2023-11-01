import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity.js';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition.js';

/**
 * @memberof STARPEACE.building.simulation.park
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {number} sport - amount of sport provided by building per hour
 */
export interface ParkDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  sport: number;
}

/**
 * Class representing park building simulation definition
 * @memberof STARPEACE.building.simulation.park
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {number} sport - amount of sport provided by building per hour
 */
export class ParkDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'PARK'; }

  labor: ResourceQuantity[];
  sport: number;

  /**
   * Create a ParkDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: ParkDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.sport = json.sport ?? 0;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!_.isNumber(this.sport) || this.sport < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.ParkDefinitionJson} JSON representation of ParkDefinition
   */
  toJson (): ParkDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      sport: this.sport
    });
  }
}
