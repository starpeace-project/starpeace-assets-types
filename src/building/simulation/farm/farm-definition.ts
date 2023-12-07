import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition.js';
import { FarmStage, FarmStageJson } from './farm-stage.js';

/**
 * @memberof STARPEACE.building.simulation.farm
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.building.simulation.farm.FarmStageJson[]} stages - each stage of farm production
 */
export interface FarmDefinitionJson extends SimulationDefinitionJson {
  stages: FarmStageJson[];
}

/**
 * Class representing farm building simulation definition
 * @memberof STARPEACE.building.simulation.farm
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.building.simulation.farm.FarmStage[]} stages - each stage of farm production
 */
export class FarmDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'FARM'; }

  stages: FarmStage[];

  /**
   * Create a FarmDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
   */
  constructor (json: FarmDefinitionJson) {
    super(json);
    this.stages = (json.stages ?? []).map(FarmStage.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.stages) || !this.stages?.length || !!this.stages.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.farm.FarmDefinitionJson} JSON representation of FarmDefinition
   */
  toJson (): FarmDefinitionJson {
    return _.assign(super.toJson(), {
      stages: this.stages.map((l) => l.toJson())
    });
  }
}
