import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../industry/resource-velocity.js';
import { TimeDuration, TimeDurationJson } from '../../../industry/time-duration.js';

/**
 * @memberof STARPEACE.building.simulation.moviestudio
 * @property {TimeDurationJson | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} outputs - array of output resource quantities
 */
export interface MovieStudioStageJson {
  duration: TimeDurationJson | undefined;
  labor: ResourceVelocityWeightedJson[];
  operations: ResourceVelocityWeightedJson[];
  inputs: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
}

/**
 * Class representing a movie studio building simulation stage metadata
 * @memberof STARPEACE.building.simulation.moviestudio
 *
 * @property {TimeDuration | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceVelocity[]} outputs - array of output resource quantities
 */
export class MovieStudioStage {
  duration: TimeDuration | undefined;
  labor: ResourceVelocityWeighted[];
  operations: ResourceVelocityWeighted[];
  inputs: ResourceVelocityWeighted[];
  outputs: ResourceVelocity[];

  constructor (duration: TimeDuration | undefined, labor: ResourceVelocityWeighted[], operations: ResourceVelocityWeighted[], inputs: ResourceVelocityWeighted[], outputs: ResourceVelocity[]) {
    this.duration = duration;
    this.labor = labor;
    this.operations = operations;
    this.inputs = inputs;
    this.outputs = outputs;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!!this.duration && !this.duration.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.operations) || !!this.operations.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.inputs) || !!this.inputs.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.outputs) || !!this.outputs.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.moviestudio.MovieStudioStageJson} JSON representation of MovieStudioStage
   */
  toJson (): MovieStudioStageJson {
    return {
      duration: this.duration?.toJson(),
      labor: this.labor.map((l) => l.toJson()),
      operations: this.operations.map((o) => o.toJson()),
      inputs: this.inputs.map((i) => i.toJson()),
      outputs: this.outputs.map((o) => o.toJson())
    };
  }

  /**
   * Parse raw JSON into a MovieStudioStage object
   * @param {STARPEACE.building.simulation.moviestudio.MovieStudioStageJson} json - raw JSON object to parse into MovieStudioStage
   * @return {STARPEACE.building.simulation.moviestudio.MovieStudioStage} MovieStudioStage representation of parsed JSON
   */
   static fromJson (json: MovieStudioStageJson): MovieStudioStage {
    return new MovieStudioStage(
      json.duration ? TimeDuration.fromJson(json.duration) : undefined,
      (json.labor ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.operations ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.inputs ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.outputs ?? []).map(ResourceVelocity.fromJson)
    );
  }
}
