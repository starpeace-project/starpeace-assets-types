import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition.js';
import { FactoryStage, FactoryStageJson } from './factory-stage.js';

/**
 * @memberof STARPEACE.building.simulation.factory
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.building.simulation.factory.FactoryStageJson[]} stages - each stage of factory production
 */
export interface MovieStudioDefinitionJson extends SimulationDefinitionJson {
  stages: FactoryStageJson[];
}

/**
 * Class representing movie studio building simulation definition
 * @memberof STARPEACE.building.simulation.factory
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.building.simulation.factory.FactoryStage[]} stages - each stage of factory production
 */
export class MovieStudioDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'MOVIE_STUDIO'; }

  stages: FactoryStage[];

  /**
   * Create a MovieStudio object
   * @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
   */
  constructor (json: MovieStudioDefinitionJson) {
    super(json);
    this.stages = (json.stages ?? []).map(FactoryStage.fromJson);
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
   * @return {STARPEACE.building.simulation.bank.MovieStudioDefinitionJson} JSON representation of MovieStudioDefinition
   */
  toJson (): MovieStudioDefinitionJson {
    return _.assign(super.toJson(), {
      stages: this.stages.map((l) => l.toJson())
    });
  }
}
