import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';

/**
 * @memberof STARPEACE.building.simulation.factory
 * @property {number} index - number index of stage, starting at one and increasing
 * @property {number} duration - length of stage duration in calendar hours
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceQuantityJson[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceQuantityJson[]} outputs - array of output resource quantities
 */
export interface FactoryStageJson {
  index: number;
  duration: number;
  labor: ResourceQuantityJson[];
  operations: ResourceQuantityJson[];
  inputs: ResourceQuantityJson[];
  outputs: ResourceQuantityJson[];
}

/**
 * Class representing factory building simulation stage metadata
 * @memberof STARPEACE.building.simulation.factory
 *
 * @property {number} index - number index of stage, starting at one and increasing
 * @property {number} duration - length of stage duration in calendar hours
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
 * @property {STARPEACE.industry.ResourceQuantity[]} inputs - array of input resource quantities
 * @property {STARPEACE.industry.ResourceQuantity[]} outputs - array of output resource quantities
 */
export class FactoryStage {
  index: number;
  duration: number;
  labor: ResourceQuantity[];
  operations: ResourceQuantity[];
  inputs: ResourceQuantity[];
  outputs: ResourceQuantity[];

  constructor (index: number, duration: number, labor: ResourceQuantity[], operations: ResourceQuantity[], inputs: ResourceQuantity[], outputs: ResourceQuantity[]) {
    this.index = index;
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
    if (!_.isNumber(this.index) || this.index <= 0) return false;
    if (!_.isNumber(this.duration) || this.duration <= 0) return false;
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
      index: this.index,
      duration: this.duration,
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
      json.index,
      json.duration,
      (json.labor ?? []).map(ResourceQuantity.fromJson),
      (json.operations ?? []).map(ResourceQuantity.fromJson),
      (json.inputs ?? []).map(ResourceQuantity.fromJson),
      (json.outputs ?? []).map(ResourceQuantity.fromJson)
    );
  }
}
