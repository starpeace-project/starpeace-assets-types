import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.headquarters
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceVelocityWeighted~JSON[]} labor - labor requirements for building
 * @property {boolean} satellite - flag indicating whether building is satellite headquarters
 * @property {string} satelliteCategory - satellite category if building is flagged as satellite
 */
export interface HeadquartersDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
  satellite: boolean;
  satelliteCategory: string | null;
}

/**
 * Class representing factory building simulation definition
 * @memberof STARPEACE.building.simulation.factory
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {boolean} satellite - flag indicating whether building is satellite headquarters
 * @property {string} satelliteCategory - satellite category if building is flagged as satellite
 */
export class HeadquartersDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'HEADQUARTERS'; }

  labor: ResourceVelocityWeighted[];
  satellite: boolean;
  satelliteCategory: string | null;

  /**
   * Create a HeadquartersDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: HeadquartersDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceVelocityWeighted.fromJson);
    this.satellite = json.satellite ?? false;
    this.satelliteCategory = json.satelliteCategory ?? null;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!_.isBoolean(this.satellite)) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.HeadquartersDefinitionJson} JSON representation of HeadquartersDefinition
   */
  toJson (): HeadquartersDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      satellite: this.satellite,
      satelliteCategory: this.satelliteCategory
    });
  }
}
