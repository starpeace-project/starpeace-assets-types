import _ from 'lodash';

import { ConstructionQuantity, ConstructionQuantityJson } from './construction-quantity.js';
import { ResourceVelocityWeighted } from '../../industry/resource-velocity-weighted.js';
import { ResourceVelocity } from '../../industry/resource-velocity.js';
import { StorageQuantity } from './storage/storage-quantity.js';

/**
 * @memberof STARPEACE.building.simulation
 * @property {string} id - unique identifier of building simulation
 * @property {string} type - type identifier of building simulation, mapping to child subclass simulation definitions
 * @property {number} maxLevel - maximum upgrade level of building
 * @property {STARPEACE.building.simulation.ConstructionQuantity~JSON[]} constructionInputs - array of input quantities required for construction
 * @property {number} prestige - prestige earned or lost per level of this building simulation
 * @property {number} maintenance - maintenance required per level of this building simulation per hour
 * @property {number} beauty - beauty earned or lost per level of this building simulation per hour
 * @property {number} nature - nature earned or lost per level of this building simulation per hour
 * @property {number} pollution - pollution earned or lost per level of this building simulation per hour
 */
export interface SimulationDefinitionJson {
  id: string;
  type: string;
  maxLevel: number;
  constructionInputs: ConstructionQuantityJson[];

  prestige?: number;
  maintenance?: number;

  beauty?: number;
  nature?: number;
  pollution?: number;
}

export interface SimulationWithInputs {
  inputs: ResourceVelocityWeighted[];
}
export function isSimulationWithInputs (object: SimulationWithInputs | SimulationDefinition): object is SimulationWithInputs {
  return (object as SimulationWithInputs).inputs !== undefined;
}

export interface SimulationWithLabor {
  labor: ResourceVelocityWeighted[];
}
export function isSimulationWithLabor (object: SimulationWithLabor | SimulationDefinition): object is SimulationWithLabor {
  return (object as SimulationWithLabor).labor !== undefined;
}

export interface SimulationWithOperations {
  operations: ResourceVelocityWeighted[];
}
export function isSimulationWithOperations (object: SimulationWithOperations | SimulationDefinition): object is SimulationWithOperations {
  return (object as SimulationWithOperations).operations !== undefined;
}

export interface SimulationWithOutputs {
  outputs: ResourceVelocity[];
}
export function isSimulationWithOutputs (object: SimulationWithOutputs | SimulationDefinition): object is SimulationWithOutputs {
  return (object as SimulationWithOutputs).outputs !== undefined;
}

export interface SimulationWithStorage {
  storage: StorageQuantity[];
}
export function isSimulationWithStorage (object: SimulationWithStorage | SimulationDefinition): object is SimulationWithStorage {
  return (object as SimulationWithStorage).storage !== undefined;
}

/**
 * Base class representing building simulation with common properties for all building simulations
 * @memberof STARPEACE.building.simulation
 *
 * @property {string} id - unique identifier of building simulation
 * @property {string} type - type identifier of building simulation, mapping to child subclass simulation definitions
 * @property {number} maxLevel - maximum upgrade level of building
 * @property {STARPEACE.building.simulation.ConstructionQuantity[]} constructionInputs - array of input quantities required for construction
 * @property {number} prestige - prestige earned or lost per level of this building simulation
 * @property {number} maintenance - maintenance required per level of this building simulation per hour
 * @property {number} beauty - beauty earned or lost per level of this building simulation per hour
 * @property {number} nature - nature earned or lost per level of this building simulation per hour
 * @property {number} pollution - pollution earned or lost per level of this building simulation per hour
 */
export class SimulationDefinition {
  id: string;
  type: string;
  maxLevel: number;
  constructionInputs: ConstructionQuantity[];

  prestige: number;
  maintenance: number;

  beauty: number;
  nature: number;
  pollution: number;

  static TYPE (): string {
    return 'NONE';
  }

  /**
  * Create a SimulationDefinition object
  * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
  */
  constructor (json: SimulationDefinitionJson) {
    this.id = json.id;
    this.type = json.type;
    this.maxLevel = json.maxLevel;
    this.constructionInputs = (json.constructionInputs ?? []).map(ConstructionQuantity.fromJson);
    this.prestige = json.prestige ?? 0;
    this.maintenance = json.maintenance ?? 0;
    this.beauty = json.beauty ?? 0;
    this.nature = json.nature ?? 0;
    this.pollution = json.pollution ?? 0;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.SimulationDefinition~JSON} JSON representation of SimulationDefinition
   */
  toJson (): SimulationDefinitionJson {
    const json: SimulationDefinitionJson = {
      id: this.id,
      type: this.type,
      maxLevel: this.maxLevel,
      constructionInputs: this.constructionInputs.map(ci => ci.toJson())
    };

    if (this.prestige !== 0) {
      json.prestige = this.prestige;
    }
    if (this.maintenance !== 0) {
      json.maintenance = this.maintenance;
    }
    if (this.beauty !== 0) {
      json.beauty = this.beauty;
    }
    if (this.nature !== 0) {
      json.nature = this.nature;
    }
    if (this.pollution !== 0) {
      json.pollution = this.pollution;
    }
    return json;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.id) || !this.id.length) return false;
    if (!_.isString(this.type) || !this.type.length) return false;
    if (!_.isNumber(this.maxLevel) && this.maxLevel <= 0) return false;
    if (!_.isNumber(this.prestige)) return false;
    if (!_.isNumber(this.maintenance)) return false;
    if (!_.isNumber(this.beauty)) return false;
    if (!_.isNumber(this.nature)) return false;
    if (!_.isNumber(this.pollution)) return false;
    return true;
  }
}
