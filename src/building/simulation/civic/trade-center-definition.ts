import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';

/**
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} products - products sold by this building
 */
export interface TradeCenterDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  products: ResourceQuantityJson[];
}

/**
 * Class representing trade center building simulation definition
 * @memberof STARPEACE.building.simulation.civic
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} products - products sold by this building
 */
export class TradeCenterDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'TRADECENTER'; }

  labor: ResourceQuantity[];
  products: ResourceQuantity[];

  /**
   * Create a TradeCenterDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: TradeCenterDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.products = (json.products ?? []).map(ResourceQuantity.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !!this.labor.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.products) || !this.products?.length || !!this.products.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.TradeCenterDefinitionJson} JSON representation of TradeCenterDefinition
   */
  toJson (): TradeCenterDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map((l) => l.toJson()),
      products: this.products.map((l) => l.toJson())
    });
  }
}
