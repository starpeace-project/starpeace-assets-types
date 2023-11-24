import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity.js';
import { TimeDuration, TimeDurationJson } from '../../../industry/time-duration.js';

/**
 * @memberof STARPEACE.building.simulation.factory
 * @property {TimeDurationJson | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceQuantityJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceQuantityJson[]} outputs - array of output resource quantities
 */
export interface FactoryStageJson {
  duration: TimeDurationJson | undefined;
  labor: ResourceQuantityJson[];
  operations: ResourceQuantityJson[];
  inputs: ResourceQuantityJson[];
  outputs: ResourceQuantityJson[];
}

/**
 * Class representing factory building simulation stage metadata
 * @memberof STARPEACE.building.simulation.factory
 *
 * @property {TimeDuration | undefined} duration - length of stage duration
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceQuantity[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceQuantity[]} outputs - array of output resource quantities
 */
export class FactoryStage {
  duration: TimeDuration | undefined;
  labor: ResourceQuantity[];
  operations: ResourceQuantity[];
  inputs: ResourceQuantity[];
  outputs: ResourceQuantity[];

  constructor (duration: TimeDuration | undefined, labor: ResourceQuantity[], operations: ResourceQuantity[], inputs: ResourceQuantity[], outputs: ResourceQuantity[]) {
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
   * @return {STARPEACE.building.simulation.factory.FactoryStageJson} JSON representation of FactoryStage
   */
  toJson (): FactoryStageJson {
    return {
      duration: this.duration?.toJson(),
      labor: this.labor.map((l) => l.toJson()),
      operations: this.operations.map((o) => o.toJson()),
      inputs: this.inputs.map((i) => i.toJson()),
      outputs: this.outputs.map((o) => o.toJson())
    };
  }

  /**
   * Parse raw JSON into a FactoryStage object
   * @param {STARPEACE.building.simulation.factory.FactoryStageJson} json - raw JSON object to parse into FactoryStage
   * @return {STARPEACE.building.simulation.factory.FactoryStage} FactoryStage representation of parsed JSON
   */
   static fromJson (json: FactoryStageJson): FactoryStage {
    return new FactoryStage(
      json.duration ? TimeDuration.fromJson(json.duration) : undefined,
      (json.labor ?? []).map(ResourceQuantity.fromJson),
      (json.operations ?? []).map(ResourceQuantity.fromJson),
      (json.inputs ?? []).map(ResourceQuantity.fromJson),
      (json.outputs ?? []).map(ResourceQuantity.fromJson)
    );
  }
}
