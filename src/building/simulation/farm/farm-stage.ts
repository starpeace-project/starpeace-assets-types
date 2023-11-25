import { ResourceVelocityWeighted, ResourceVelocityWeightedJson } from '../../../industry/resource-velocity-weighted.js';
import { ResourceVelocity, ResourceVelocityJson } from '../../../industry/resource-velocity.js';
import { TimeDuration, TimeDurationJson } from '../../../industry/time-duration.js';

/**
 * @memberof STARPEACE.building.simulation.farm
 * @property {TimeDurationJson | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityWeightedJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceVelocityJson[]} outputs - array of output resource quantities
 */
export interface FarmStageJson {
  duration: TimeDurationJson | undefined;
  labor: ResourceVelocityWeightedJson[];
  operations: ResourceVelocityWeightedJson[];
  inputs: ResourceVelocityWeightedJson[];
  outputs: ResourceVelocityJson[];
}

/**
 * Class representing farm building simulation stage metadata
 * @memberof STARPEACE.building.simulation.farm
 *
 * @property {TimeDuration | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceVelocityWeighted[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceVelocity[]} outputs - array of output resource quantities
 */
export class FarmStage {
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
   * @return {STARPEACE.building.simulation.farm.FarmStageJson} JSON representation of FarmStage
   */
  toJson (): FarmStageJson {
    return {
      duration: this.duration?.toJson(),
      labor: this.labor.map((l) => l.toJson()),
      operations: this.operations.map((o) => o.toJson()),
      inputs: this.inputs.map((i) => i.toJson()),
      outputs: this.outputs.map((o) => o.toJson())
    };
  }

  /**
   * Parse raw JSON into a FarmStage object
   * @param {STARPEACE.building.simulation.farm.FarmStageJson} json - raw JSON object to parse into FarmStage
   * @return {STARPEACE.building.simulation.farm.FarmStage} FarmStage representation of parsed JSON
   */
   static fromJson (json: FarmStageJson): FarmStage {
    return new FarmStage(
      json.duration ? TimeDuration.fromJson(json.duration) : undefined,
      (json.labor ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.operations ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.inputs ?? []).map(ResourceVelocityWeighted.fromJson),
      (json.outputs ?? []).map(ResourceVelocity.fromJson)
    );
  }
}
