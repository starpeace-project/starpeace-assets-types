import _ from 'lodash';

import { ResourceQuantity, ResourceQuantityJson } from '../../../industry/resource-quantity';
import { SimulationDefinition, SimulationDefinitionJson } from '../simulation-definition';

/**
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinitionJson
 * @property {STARPEACE.industry.ResourceQuantityJson[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantityJson[]} service - array of output service resource quantities provided by building
 */
export interface ServiceDefinitionJson extends SimulationDefinitionJson {
  labor: ResourceQuantityJson[];
  service: ResourceQuantityJson[];
}

/**
 * Class representing service building simulation definition
 * @memberof STARPEACE.building.simulation.service
 * @extends STARPEACE.building.simulation.SimulationDefinition
 *
 * @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
 * @property {STARPEACE.industry.ResourceQuantity[]} service - array of output service resource quantities provided by building
 */
export class ServiceDefinition extends SimulationDefinition {
  /**
   * Type identifier for simulation definition
   * @static
   */
  static TYPE (): string { return 'SERVICE'; }

  labor: ResourceQuantity[];
  service: ResourceQuantity[];

  /**
   * Create a ServiceDefinition object
   * @param {STARPEACE.building.simulation.SimulationDefinitionJson} json - raw JSON object to populate into simulation definition
   */
  constructor (json: ServiceDefinitionJson) {
    super(json);
    this.labor = (json.labor ?? []).map(ResourceQuantity.fromJson);
    this.service = (json.service ?? []).map(ResourceQuantity.fromJson);
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!super.isValid()) return false;
    if (!Array.isArray(this.labor) || !this.labor?.length || !!this.labor.find((l) => !l.isValid())) return false;
    if (!Array.isArray(this.service) || !this.service?.length || !!this.service.find((l) => !l.isValid())) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.building.simulation.bank.ServiceDefinitionJson} JSON representation of ServiceDefinition
   */
  toJson (): ServiceDefinitionJson {
    return _.assign(super.toJson(), {
      labor: this.labor.map(l => l.toJson()),
      service: this.service.map(l => l.toJson())
    });
  }
}
