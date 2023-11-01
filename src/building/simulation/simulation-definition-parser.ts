import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson } from './simulation-definition.js';

import { BankDefinition } from './bank/bank-definition.js';
import { CapitolDefinition } from './civic/capitol-definition.js';
import { MausoleumDefinition } from './civic/mausoleum-definition.js';
import { PortalDefinition } from './civic/portal-definition.js';
import { TownhallDefinition } from './civic/townhall-definition.js';
import { TradeCenterDefinition } from './civic/trade-center-definition.js';
import { FactoryDefinition } from './factory/factory-definition.js';
import { HeadquartersDefinition } from './headquarters/headquarters-definition.js';
import { AntennaDefinition } from './media/antenna-definition.js';
import { MediaStationDefinition } from './media/media-station-definition.js';
import { OfficeDefinition } from './office/office-definition.js';
import { ParkDefinition } from './park/park-definition.js';
import { ResidenceDefinition } from './residence/residence-definition.js';
import { ServiceDefinition } from './service/service-definition.js';
import { StorageDefinition } from './storage/storage-definition.js';
import { StoreDefinition } from './store/store-definition.js';


const DEFINITIONS_BY_TYPE: Record<string, typeof SimulationDefinition> = _.keyBy([
  BankDefinition,
  CapitolDefinition,
  MausoleumDefinition,
  PortalDefinition,
  TownhallDefinition,
  TradeCenterDefinition,
  FactoryDefinition,
  HeadquartersDefinition,
  AntennaDefinition,
  MediaStationDefinition,
  OfficeDefinition,
  ParkDefinition,
  ResidenceDefinition,
  ServiceDefinition,
  StorageDefinition,
  StoreDefinition
], (def) => def.TYPE());

/**
* Class used to parse simulation definition json into simulation definitions
* @memberof STARPEACE.building.simulation
*/
export class SimulationDefinitionParser {
  /**
   * Parse raw JSON into a simulation definition object
   */
  static fromJson (json: SimulationDefinitionJson): SimulationDefinition {
    if (DEFINITIONS_BY_TYPE[json.type]) {
      return new DEFINITIONS_BY_TYPE[json.type](json);
    }
    throw `Unknown simulation type ${json.type}`;
  }
}
