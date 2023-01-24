import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';

/**
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
 * @property {number} capacity - capacity of resource for which building provides offices
 * @property {number} efficiency - base efficiency of building
 */
export interface OfficeDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  capacity: number;
  efficiency: number;
}

/**
 * Class representing media station building simulation definition
 * @memberof STARPEACE.building.simulation.media
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 */
export class OfficeDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'OFFICE'; }

  labor: ResourceQuantity[];
  capacity: number;
  efficiency: number;

  /**
   * Create a OfficeDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: OfficeDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.capacity = json.capacity ?? 0;
    this.efficiency = json.efficiency ?? 0;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !this.labor?.length || !!this.labor.find((l) => !l.isValid())) return false;
    if (!_.isNumber(this.capacity) || this.capacity < 0) return false;
    if (!_.isNumber(this.efficiency) || this.efficiency < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.OfficeDefinitionJson} JSON representation of OfficeDefinition
   */
  toJson (): OfficeDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      capacity: this.capacity,
      efficiency: this.efficiency
    });
  }
}
