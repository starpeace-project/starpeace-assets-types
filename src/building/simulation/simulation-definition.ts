import _ from 'lodash';

import { ConstructionQuantity, ConstructionQuantityJson } from './construction-quantity.js';

/**
 * @memberof STARPEACE.building.simulation
 * @property {string} id - unique identifier of building simulation
 * @property {string} type - type identifier of building simulation, mapping to child subclass simulation definitions
 * @property {number} maxLevel - maximum upgrade level of building
 * @property {STARPEACE.building.simulation.ConstructionQuantity~JSON[]} constructionInputs - array of input quantities required for construction
 * @property {number} prestige - prestige earned or lost per level of this building simulation
 * @property {number} maintainance - maintainance required per level of this building simulation per hour
 * @property {number} beauty - beauty earned or lost per level of this building simulation per hour
 * @property {number} pollution - pollution earned or lost per level of this building simulation per hour
 */
export interface SimulationDefinitionJson {
  id: string;
  type: string;
  maxLevel: number;
  constructionInputs: ConstructionQuantityJson[];
  prestige: number;
  maintainance: number;
  beauty: number;
  pollution: number;
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
 * @property {number} maintainance - maintainance required per level of this building simulation per hour
 * @property {number} beauty - beauty earned or lost per level of this building simulation per hour
 * @property {number} pollution - pollution earned or lost per level of this building simulation per hour
 */
export class SimulationDefinition {
  id: string;
  type: string;
  maxLevel: number;
  constructionInputs: ConstructionQuantity[];
  prestige: number;
  maintainance: number;
  beauty: number;
  pollution: number;

  static TYPE (): string { return 'NONE'; }

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
    this.maintainance = json.maintainance ?? 0;
    this.beauty = json.beauty ?? 0;
    this.pollution = json.pollution ?? 0;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.SimulationDefinition~JSON} JSON representation of SimulationDefinition
   */
  toJson (): SimulationDefinitionJson {
    return {
      id: this.id,
      type: this.type,
      maxLevel: this.maxLevel,
      constructionInputs: this.constructionInputs.map(ci => ci.toJson()),
      prestige: this.prestige,
      maintainance: this.maintainance,
      beauty: this.beauty,
      pollution: this.pollution
    };
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
    if (!_.isNumber(this.maintainance)) return false;
    if (!_.isNumber(this.beauty)) return false;
    if (!_.isNumber(this.pollution)) return false;
    return true;
  }
}
