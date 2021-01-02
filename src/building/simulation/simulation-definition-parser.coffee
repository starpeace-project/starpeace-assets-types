_ = require('lodash')

DEFINITIONS = [
  require('./bank/bank-definition'),
  require('./civic/capitol-definition'),
  require('./civic/mausoleum-definition'),
  require('./civic/portal-definition'),
  require('./civic/townhall-definition'),
  require('./civic/trade-center-definition'),
  require('./factory/factory-definition'),
  require('./headquarters/headquarters-definition'),
  require('./media/antenna-definition'),
  require('./media/media-station-definition'),
  require('./office/office-definition'),
  require('./park/park-definition'),
  require('./residence/residence-definition'),
  require('./service/service-definition'),
  require('./storage/storage-definition'),
  require('./store/store-definition')
]
DEFINITIONS_BY_TYPE = _.keyBy(DEFINITIONS, (def) -> def.TYPE())

###*
# Class used to parse simulation definition json into simulation definitions
# @memberof STARPEACE.building.simulation
###
exports = module.exports = class SimulationDefinitionParser

  ###*
  # Parse raw JSON into a simulation definition object
  # @param {
    STARPEACE.building.simulation.bank.BankDefinition~JSON|
    STARPEACE.building.simulation.civic.CapitolDefinition~JSON|
    STARPEACE.building.simulation.civic.MausoleumDefinition~JSON|
    STARPEACE.building.simulation.civic.PortalDefinition~JSON|
    STARPEACE.building.simulation.civic.TownhallDefinition~JSON|
    STARPEACE.building.simulation.civic.TradeCenterDefinition~JSON|
    STARPEACE.building.simulation.factory.FactoryDefinition~JSON|
    STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON|
    STARPEACE.building.simulation.media.AntennaDefinition~JSON|
    STARPEACE.building.simulation.media.MediaStationDefinition~JSON|
    STARPEACE.building.simulation.office.OfficeDefinition~JSON|
    STARPEACE.building.simulation.park.ParkDefinition~JSON|
    STARPEACE.building.simulation.residence.ResidenceDefinition~JSON|
    STARPEACE.building.simulation.service.ServiceDefinition~JSON|
    STARPEACE.building.simulation.storage.StorageDefinition~JSON|
    STARPEACE.building.simulation.store.StoreDefinition~JSON
  } json - raw JSON object to parse into simulation definition
  # @return {
    STARPEACE.building.simulation.bank.BankDefinition|
    STARPEACE.building.simulation.civic.CapitolDefinition|
    STARPEACE.building.simulation.civic.MausoleumDefinition|
    STARPEACE.building.simulation.civic.PortalDefinition|
    STARPEACE.building.simulation.civic.TownhallDefinition|
    STARPEACE.building.simulation.civic.TradeCenterDefinition|
    STARPEACE.building.simulation.factory.FactoryDefinition|
    STARPEACE.building.simulation.headquarters.HeadquartersDefinition|
    STARPEACE.building.simulation.media.AntennaDefinition|
    STARPEACE.building.simulation.media.MediaStationDefinition|
    STARPEACE.building.simulation.office.OfficeDefinition|
    STARPEACE.building.simulation.park.ParkDefinition|
    STARPEACE.building.simulation.residence.ResidenceDefinition|
    STARPEACE.building.simulation.service.ServiceDefinition|
    STARPEACE.building.simulation.storage.StorageDefinition|
    STARPEACE.building.simulation.store.StoreDefinition
  } simulation definition representation of parsed JSON
  ###
  @fromJson: (json) ->
    return DEFINITIONS_BY_TYPE[json.type].fromJson(json) if DEFINITIONS_BY_TYPE[json.type]?
    throw "unknown simulation type #{json.type}"
