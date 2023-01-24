import _ from 'lodash';

import { SimulationDefinition, SimulationDefinitionJson } from './simulation-definition';

import { BankDefinition } from './bank/bank-definition';
import { CapitolDefinition } from './civic/capitol-definition';
import { MausoleumDefinition } from './civic/mausoleum-definition';
import { PortalDefinition } from './civic/portal-definition';
import { TownhallDefinition } from './civic/townhall-definition';
import { TradeCenterDefinition } from './civic/trade-center-definition';
import { FactoryDefinition } from './factory/factory-definition';
import { HeadquartersDefinition } from './headquarters/headquarters-definition';
import { AntennaDefinition } from './media/antenna-definition';
import { MediaStationDefinition } from './media/media-station-definition';
import { OfficeDefinition } from './office/office-definition';
import { ParkDefinition } from './park/park-definition';
import { ResidenceDefinition } from './residence/residence-definition';
import { ServiceDefinition } from './service/service-definition';
import { StorageDefinition } from './storage/storage-definition';
import { StoreDefinition } from './store/store-definition';


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
