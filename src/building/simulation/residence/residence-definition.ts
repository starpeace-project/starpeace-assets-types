import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';

/**
 * @memberof STARPEACE.building.simulation.residence
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {string} residentType - identifier of resource type for which residence provides housing
 * @property {number} capacity - capacity of resource for which building provides housing
 * @property {number} efficiency - base efficiency of building
 * @property {number} crimeResistence - base crime resistence of building
 * @property {number} pollutionResistence - base pollution resistence of building
 */
export interface ResidenceDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  residentType: string;
  capacity: string;
  efficiency: string;
  crimeResistence: string;
  pollutionResistence: string;
}

/**
 * Class representing residence building simulation definition
 * @memberof STARPEACE.building.simulation.residence
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {string} residentType - identifier of resource type for which residence provides housing
 * @property {number} capacity - capacity of resource for which building provides housing
 * @property {number} efficiency - base efficiency of building
 * @property {number} crimeResistence - base crime resistence of building
 * @property {number} pollutionResistence - base pollution resistence of building
 */
export class ResidenceDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'RESIDENCE'; }

  labor: ResourceQuantity[];
  residentType: string;
  capacity: string;
  efficiency: string;
  crimeResistence: string;
  pollutionResistence: string;

  /**
   * Create a ResidenceDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: ResidenceDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.residentType = json.residentType;
    this.capacity = json.capacity;
    this.efficiency = json.efficiency;
    this.crimeResistence = json.crimeResistence;
    this.pollutionResistence = json.pollutionResistence;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!_.isString(this.residentType) || !this.residentType?.length) return false;
    if (!_.isNumber(this.capacity) || this.capacity <= 0) return false;
    if (!_.isNumber(this.efficiency) || this.efficiency < 0 || this.efficiency > 4.0) return false;
    if (!_.isNumber(this.crimeResistence) || this.crimeResistence < 0 || this.crimeResistence > 4.0) return false;
    if (!_.isNumber(this.pollutionResistence) || this.pollutionResistence < 0 || this.pollutionResistence > 4.0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.ResidenceDefinitionJson} JSON representation of ResidenceDefinition
   */
  toJson (): ResidenceDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      residentType: this.residentType,
      capacity: this.capacity,
      efficiency: this.efficiency,
      crimeResistence: this.crimeResistence,
      pollutionResistence: this.pollutionResistence
    });
  }
}
