import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson, SimulationWithLabor } from '../simulation-definition.js';
import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';

/**
 * @memberof STARPEACE.building.simulation.media
 * @extends STARPEACE.building.simulation.SimulationDefinition~JSON
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 */
export interface MediaStationDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceVelocityWeightedJson[];
}

/**
 * Class representing media station building simulation definition
 * @memberof STARPEACE.building.simulation.media
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 */
export class MediaStationDefinition extends SimulationDefinition implements SimulationWithLabor {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'MEDIA_STATION'; }

  labor: ResourceVelocityWeighted[];

  /**
   * Create a MediaStationDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: MediaStationDefinitionJson) {
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
   * @return {STARPEACE.building.simulation.bank.MediaStationDefinitionJson} JSON representation of MediaStationDefinition
   */
  toJson (): MediaStationDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson())
    });
  }
}
