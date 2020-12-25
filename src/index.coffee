
###*
# @namespace STARPEACE
###

###*
# @namespace STARPEACE.building
###
###*
# @namespace STARPEACE.building.simulation
###
###*
# @namespace STARPEACE.building.simulation.bank
###
###*
# @namespace STARPEACE.building.simulation.civic
###
###*
# @namespace STARPEACE.building.simulation.factory
###
###*
# @namespace STARPEACE.building.simulation.headquarters
###
###*
# @namespace STARPEACE.building.simulation.media
###
###*
# @namespace STARPEACE.building.simulation.office
###
###*
# @namespace STARPEACE.building.simulation.park
###
###*
# @namespace STARPEACE.building.simulation.residence
###
###*
# @namespace STARPEACE.building.simulation.service
###
###*
# @namespace STARPEACE.building.simulation.storage
###
###*
# @namespace STARPEACE.building.simulation.store
###
###*
# @namespace STARPEACE.concrete
###
###*
# @namespace STARPEACE.effect
###
###*
# @namespace STARPEACE.industry
###
###*
# @namespace STARPEACE.invention
###
###*
# @namespace STARPEACE.language
###
###*
# @namespace STARPEACE.overlay
###
###*
# @namespace STARPEACE.plane
###
###*
# @namespace STARPEACE.road
###
###*
# @namespace STARPEACE.seal
###
###*
# @namespace STARPEACE.sign
###

exports = module.exports = {
  building: {
    simulation: {
      bank: {
        BankDefinition: require('./building/simulation/bank/bank-definition')
      }
      civic: {
        CapitolDefinition: require('./building/simulation/civic/capitol-definition')
        MausoleumDefinition: require('./building/simulation/civic/mausoleum-definition')
        PortalDefinition: require('./building/simulation/civic/portal-definition')
        TownhallDefinition: require('./building/simulation/civic/townhall-definition')
        TradecenterDefinition: require('./building/simulation/civic/tradecenter-definition')
      }
      factory: {
        FactoryDefinition: require('./building/simulation/factory/factory-definition')
        FactoryStage: require('./building/simulation/factory/factory-stage')
      }
      headquarters: {
        HeadquartersDefinition: require('./building/simulation/headquarters/headquarters-definition')
      }
      media: {
        AntennaDefinition: require('./building/simulation/media/antenna-definition')
        MediaStationDefinition: require('./building/simulation/media/media-station-definition')
      }
      office: {
        OfficeDefinition: require('./building/simulation/office/office-definition')
      }
      park: {
        ParkDefinition: require('./building/simulation/park/park-definition')
      }
      residence: {
        ResidenceDefinition: require('./building/simulation/residence/residence-definition')
      }
      service: {
        ServiceDefinition: require('./building/simulation/service/service-definition')
      }
      storage: {
        StorageDefinition: require('./building/simulation/storage/storage-definition')
        StorageQuantity: require('./building/simulation/storage/storage-quantity')
      }
      store: {
        StoreDefinition: require('./building/simulation/store/store-definition')
        StoreProductCustomer: require('./building/simulation/store/store-product-customer')
        StoreProductOutput: require('./building/simulation/store/store-product-output')
        StoreProduct: require('./building/simulation/store/store-product')
      }

      BuildingSimulationDefinition: require('./building/simulation/simulation-definition')
      BuildingSimulationDefinitionParser: require('./building/simulation/simulation-definition-parser')
      ConstructionQuantity: require('./building/simulation/construction-quantity')
    }

    BuildingDefinition: require('./building/building-definition')
    BuildingImageDefinition: require('./building/building-image-definition')
    CoordinateList: require('./building/coordinate-list')
    Coordinate: require('./building/coordinate')
    ImageEffect: require('./building/image-effect')
  }

  concrete: {
    ConcreteDefinition: require('./concrete/concrete-definition')
  }

  effect: {
    EffectDefinition: require('./effect/effect-definition')
  }

  industry: {
    CityZone: require('./industry/city-zone')
    IndustryCategory: require('./industry/industry-category')
    IndustryType: require('./industry/industry-type')
    Level: require('./industry/level')
    ResourceQuantity: require('./industry/resource-quantity')
    ResourceType: require('./industry/resource-type')
    ResourceUnit: require('./industry/resource-unit')
  }

  invention: {
    InventionDefinition: require('./invention/invention-definition')
  }

  language: {
    Translation: require('./language/translation')
  }

  overlay: {
    OverlayDefinition: require('./overlay/overlay-definition')
  }

  plane: {
    PlaneDefinition: require('./plane/plane-definition')
  }

  road: {
    RoadDefinition: require('./road/road-definition')
  }

  seal: {
    CompanySeal: require('./seal/company-seal')
  }

  sign: {
    SignDefinition: require('./sign/sign-definition')
  }
}
