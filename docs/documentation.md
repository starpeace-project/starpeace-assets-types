
<a name="STARPEACE"></a>

# STARPEACE

* STARPEACE
    * .building
        * [.BuildingDefinition](#STARPEACE.building.BuildingDefinition)
            * [new BuildingDefinition(id)](#new_STARPEACE.building.BuildingDefinition_new)
            * _instance_
                * [.is_valid()](#STARPEACE.building.BuildingDefinition+is_valid) ⇒ <code>boolean</code>
                * [.toJSON()](#STARPEACE.building.BuildingDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.BuildingDefinition..JSON)
            * _static_
                * [.from_json(json)](#STARPEACE.building.BuildingDefinition.from_json) ⇒ [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
            * _inner_
                * [~JSON](#STARPEACE.building.BuildingDefinition..JSON) : <code>object</code>
        * [.BuildingImageDefinition](#STARPEACE.building.BuildingImageDefinition)
            * [new BuildingImageDefinition(id)](#new_STARPEACE.building.BuildingImageDefinition_new)
            * _instance_
                * [.is_valid()](#STARPEACE.building.BuildingImageDefinition+is_valid) ⇒ <code>boolean</code>
                * [.toJSON()](#STARPEACE.building.BuildingImageDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.BuildingImageDefinition..JSON)
            * _static_
                * [.from_json(json)](#STARPEACE.building.BuildingImageDefinition.from_json) ⇒ [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
            * _inner_
                * [~JSON](#STARPEACE.building.BuildingImageDefinition..JSON) : <code>object</code>
        * [.CoordinateList](#STARPEACE.building.CoordinateList)
            * _instance_
                * [.is_valid()](#STARPEACE.building.CoordinateList+is_valid) ⇒ <code>boolean</code>
                * [.toJSON()](#STARPEACE.building.CoordinateList+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.CoordinateList..JSON)
            * _static_
                * [.from_json(json)](#STARPEACE.building.CoordinateList.from_json) ⇒ [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
            * _inner_
                * [~JSON](#STARPEACE.building.CoordinateList..JSON) : <code>object</code>
        * [.Coordinate](#STARPEACE.building.Coordinate)
            * [new Coordinate(x, y)](#new_STARPEACE.building.Coordinate_new)
            * _instance_
                * [.is_valid()](#STARPEACE.building.Coordinate+is_valid) ⇒ <code>boolean</code>
                * [.toJSON()](#STARPEACE.building.Coordinate+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.Coordinate..JSON)
            * _static_
                * [.from_json(json)](#STARPEACE.building.Coordinate.from_json) ⇒ [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
            * _inner_
                * [~JSON](#STARPEACE.building.Coordinate..JSON) : <code>object</code>
        * [.ImageEffect](#STARPEACE.building.ImageEffect)
            * _instance_
                * [.is_valid()](#STARPEACE.building.ImageEffect+is_valid) ⇒ <code>boolean</code>
                * [.toJSON()](#STARPEACE.building.ImageEffect+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.ImageEffect..JSON)
            * _static_
                * [.from_json(json)](#STARPEACE.building.ImageEffect.from_json) ⇒ [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
            * _inner_
                * [~JSON](#STARPEACE.building.ImageEffect..JSON) : <code>object</code>
        * .simulation
            * [.ConstructionQuantity](#STARPEACE.building.simulation.ConstructionQuantity)
                * _instance_
                    * [.toJSON()](#STARPEACE.building.simulation.ConstructionQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.ConstructionQuantity..JSON)
                    * [.is_valid()](#STARPEACE.building.simulation.ConstructionQuantity+is_valid) ⇒ <code>boolean</code>
                * _static_
                    * [.from_json(json)](#STARPEACE.building.simulation.ConstructionQuantity.from_json) ⇒ [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
                * _inner_
                    * [~JSON](#STARPEACE.building.simulation.ConstructionQuantity..JSON) : <code>object</code>
            * [.SimulationDefinitionParser](#STARPEACE.building.simulation.SimulationDefinitionParser)
                * [.from_json(json)](#STARPEACE.building.simulation.SimulationDefinitionParser.from_json) ⇒ [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition) \| [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition) \| [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition) \| [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition) \| [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition) \| [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition) \| [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition) \| [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition) \| [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition) \| [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition) \| [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition) \| [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition) \| [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition) \| [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition) \| [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition) \| [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
            * [.SimulationDefinition](#STARPEACE.building.simulation.SimulationDefinition)
                * [new SimulationDefinition(json)](#new_STARPEACE.building.simulation.SimulationDefinition_new)
                * _instance_
                    * [.toJSON()](#STARPEACE.building.simulation.SimulationDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)
                    * [.is_valid()](#STARPEACE.building.simulation.SimulationDefinition+is_valid) ⇒ <code>boolean</code>
                * _inner_
                    * [~JSON](#STARPEACE.building.simulation.SimulationDefinition..JSON) : <code>object</code>
            * .bank
                * [.BankDefinition](#STARPEACE.building.simulation.bank.BankDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new BankDefinition(json)](#new_STARPEACE.building.simulation.bank.BankDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.bank.BankDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.bank.BankDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.bank.BankDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.bank.BankDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.bank.BankDefinition.from_json) ⇒ [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.bank.BankDefinition..JSON) : <code>object</code>
            * .civic
                * [.CapitolDefinition](#STARPEACE.building.simulation.civic.CapitolDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new CapitolDefinition(json)](#new_STARPEACE.building.simulation.civic.CapitolDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.civic.CapitolDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.civic.CapitolDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.civic.CapitolDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.civic.CapitolDefinition.from_json) ⇒ [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON) : <code>object</code>
                * [.MausoleumDefinition](#STARPEACE.building.simulation.civic.MausoleumDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new MausoleumDefinition(json)](#new_STARPEACE.building.simulation.civic.MausoleumDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.civic.MausoleumDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.civic.MausoleumDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.civic.MausoleumDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.civic.MausoleumDefinition.from_json) ⇒ [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON) : <code>object</code>
                * [.PortalDefinition](#STARPEACE.building.simulation.civic.PortalDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new PortalDefinition(json)](#new_STARPEACE.building.simulation.civic.PortalDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.civic.PortalDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.PortalDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.civic.PortalDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.civic.PortalDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.civic.PortalDefinition.from_json) ⇒ [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.civic.PortalDefinition..JSON) : <code>object</code>
                * [.TownhallDefinition](#STARPEACE.building.simulation.civic.TownhallDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new TownhallDefinition(json)](#new_STARPEACE.building.simulation.civic.TownhallDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.civic.TownhallDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.civic.TownhallDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.civic.TownhallDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.civic.TownhallDefinition.from_json) ⇒ [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON) : <code>object</code>
                * [.TradecenterDefinition](#STARPEACE.building.simulation.civic.TradecenterDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new TradecenterDefinition(json)](#new_STARPEACE.building.simulation.civic.TradecenterDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.civic.TradecenterDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.civic.TradecenterDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.civic.TradecenterDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.civic.TradecenterDefinition.from_json) ⇒ [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON) : <code>object</code>
            * .factory
                * [.FactoryDefinition](#STARPEACE.building.simulation.factory.FactoryDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new FactoryDefinition(json)](#new_STARPEACE.building.simulation.factory.FactoryDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.factory.FactoryDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.factory.FactoryDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.factory.FactoryDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.factory.FactoryDefinition.from_json) ⇒ [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON) : <code>object</code>
                * [.FactoryStage](#STARPEACE.building.simulation.factory.FactoryStage) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.factory.FactoryStage+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryStage..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.factory.FactoryStage+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.from_json(json)](#STARPEACE.building.simulation.factory.FactoryStage.from_json) ⇒ [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.factory.FactoryStage..JSON) : <code>object</code>
            * .headquarters
                * [.HeadquartersDefinition](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new HeadquartersDefinition(json)](#new_STARPEACE.building.simulation.headquarters.HeadquartersDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition.from_json) ⇒ [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON) : <code>object</code>
            * .media
                * [.AntennaDefinition](#STARPEACE.building.simulation.media.AntennaDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new AntennaDefinition(json)](#new_STARPEACE.building.simulation.media.AntennaDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.media.AntennaDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.media.AntennaDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.media.AntennaDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.media.AntennaDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.media.AntennaDefinition.from_json) ⇒ [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.media.AntennaDefinition..JSON) : <code>object</code>
                * [.MediaStationDefinition](#STARPEACE.building.simulation.media.MediaStationDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new MediaStationDefinition(json)](#new_STARPEACE.building.simulation.media.MediaStationDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.media.MediaStationDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.media.MediaStationDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.media.MediaStationDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.media.MediaStationDefinition.from_json) ⇒ [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON) : <code>object</code>
            * .office
                * [.OfficeDefinition](#STARPEACE.building.simulation.office.OfficeDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new OfficeDefinition(json)](#new_STARPEACE.building.simulation.office.OfficeDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.office.OfficeDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.office.OfficeDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.office.OfficeDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.office.OfficeDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.office.OfficeDefinition.from_json) ⇒ [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.office.OfficeDefinition..JSON) : <code>object</code>
            * .park
                * [.ParkDefinition](#STARPEACE.building.simulation.park.ParkDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new ParkDefinition(json)](#new_STARPEACE.building.simulation.park.ParkDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.park.ParkDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.park.ParkDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.park.ParkDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.park.ParkDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.park.ParkDefinition.from_json) ⇒ [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.park.ParkDefinition..JSON) : <code>object</code>
            * .residence
                * [.ResidenceDefinition](#STARPEACE.building.simulation.residence.ResidenceDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new ResidenceDefinition(json)](#new_STARPEACE.building.simulation.residence.ResidenceDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.residence.ResidenceDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.residence.ResidenceDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.residence.ResidenceDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.residence.ResidenceDefinition.from_json) ⇒ [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON) : <code>object</code>
            * .service
                * [.ServiceDefinition](#STARPEACE.building.simulation.service.ServiceDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new ServiceDefinition(json)](#new_STARPEACE.building.simulation.service.ServiceDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.service.ServiceDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.service.ServiceDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.service.ServiceDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.service.ServiceDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.service.ServiceDefinition.from_json) ⇒ [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.service.ServiceDefinition..JSON) : <code>object</code>
            * .storage
                * [.StorageDefinition](#STARPEACE.building.simulation.storage.StorageDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new StorageDefinition(json)](#new_STARPEACE.building.simulation.storage.StorageDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.storage.StorageDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.storage.StorageDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.storage.StorageDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.storage.StorageDefinition.from_json) ⇒ [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.storage.StorageDefinition..JSON) : <code>object</code>
                * [.StorageQuantity](#STARPEACE.building.simulation.storage.StorageQuantity)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.storage.StorageQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageQuantity..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.storage.StorageQuantity+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.from_json(json)](#STARPEACE.building.simulation.storage.StorageQuantity.from_json) ⇒ [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.storage.StorageQuantity..JSON) : <code>object</code>
            * .store
                * [.StoreDefinition](#STARPEACE.building.simulation.store.StoreDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
                    * [new StoreDefinition(json)](#new_STARPEACE.building.simulation.store.StoreDefinition_new)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.store.StoreDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreDefinition..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.store.StoreDefinition+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.TYPE()](#STARPEACE.building.simulation.store.StoreDefinition.TYPE)
                        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreDefinition.from_json) ⇒ [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.store.StoreDefinition..JSON) : <code>object</code>
                * [.StoreProductCustomer](#STARPEACE.building.simulation.store.StoreProductCustomer)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProductCustomer+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProductCustomer+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProductCustomer.from_json) ⇒ [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON) : <code>object</code>
                * [.StoreProductOutput](#STARPEACE.building.simulation.store.StoreProductOutput)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProductOutput+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductOutput..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProductOutput+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProductOutput.from_json) ⇒ [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.store.StoreProductOutput..JSON) : <code>object</code>
                * [.StoreProduct](#STARPEACE.building.simulation.store.StoreProduct)
                    * _instance_
                        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProduct+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProduct..JSON)
                        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProduct+is_valid) ⇒ <code>boolean</code>
                    * _static_
                        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProduct.from_json) ⇒ [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
                    * _inner_
                        * [~JSON](#STARPEACE.building.simulation.store.StoreProduct..JSON) : <code>object</code>
    * .industry
        * [.CityZone](#STARPEACE.industry.CityZone)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.CityZone+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON)
                * [.is_valid()](#STARPEACE.industry.CityZone+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.CityZone.from_json) ⇒ [<code>CityZone</code>](#STARPEACE.industry.CityZone)
            * _inner_
                * [~JSON](#STARPEACE.industry.CityZone..JSON) : <code>object</code>
        * [.IndustryCategory](#STARPEACE.industry.IndustryCategory)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.IndustryCategory+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON)
                * [.is_valid()](#STARPEACE.industry.IndustryCategory+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.IndustryCategory.from_json) ⇒ [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
            * _inner_
                * [~JSON](#STARPEACE.industry.IndustryCategory..JSON) : <code>object</code>
        * [.IndustryType](#STARPEACE.industry.IndustryType)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.IndustryType+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON)
                * [.is_valid()](#STARPEACE.industry.IndustryType+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.IndustryType.from_json) ⇒ [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
            * _inner_
                * [~JSON](#STARPEACE.industry.IndustryType..JSON) : <code>object</code>
        * [.Level](#STARPEACE.industry.Level)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.Level+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.Level..JSON)
                * [.is_valid()](#STARPEACE.industry.Level+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.Level.from_json) ⇒ [<code>Level</code>](#STARPEACE.industry.Level)
            * _inner_
                * [~JSON](#STARPEACE.industry.Level..JSON) : <code>object</code>
        * [.ResourceQuantity](#STARPEACE.industry.ResourceQuantity)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.ResourceQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON)
                * [.is_valid()](#STARPEACE.industry.ResourceQuantity+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.ResourceQuantity.from_json) ⇒ [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
            * _inner_
                * [~JSON](#STARPEACE.industry.ResourceQuantity..JSON) : <code>object</code>
        * [.ResourceType](#STARPEACE.industry.ResourceType)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.ResourceType+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON)
                * [.is_valid()](#STARPEACE.industry.ResourceType+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.ResourceType.from_json) ⇒ [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
            * _inner_
                * [~JSON](#STARPEACE.industry.ResourceType..JSON) : <code>object</code>
        * [.ResourceUnit](#STARPEACE.industry.ResourceUnit)
            * _instance_
                * [.toJSON()](#STARPEACE.industry.ResourceUnit+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON)
                * [.is_valid()](#STARPEACE.industry.ResourceUnit+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.industry.ResourceUnit.from_json) ⇒ [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
            * _inner_
                * [~JSON](#STARPEACE.industry.ResourceUnit..JSON) : <code>object</code>
    * .invention
        * [.InventionDefinition](#STARPEACE.invention.InventionDefinition)
            * [new InventionDefinition(id)](#new_STARPEACE.invention.InventionDefinition_new)
            * _instance_
                * [.is_valid()](#STARPEACE.invention.InventionDefinition+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.invention.InventionDefinition.from_json) ⇒ [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
            * _inner_
                * [~JSON](#STARPEACE.invention.InventionDefinition..JSON) : <code>object</code>
    * .language
        * [.Translation](#STARPEACE.language.Translation)
            * _instance_
                * [.toJSON()](#STARPEACE.language.Translation+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.language.Translation..JSON)
                * [.is_valid()](#STARPEACE.language.Translation+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.language.Translation.from_json) ⇒ [<code>Translation</code>](#STARPEACE.language.Translation)
            * _inner_
                * [~JSON](#STARPEACE.language.Translation..JSON) : <code>object</code>
    * .seal
        * [.CompanySeal](#STARPEACE.seal.CompanySeal)
            * _instance_
                * [.toJSON()](#STARPEACE.seal.CompanySeal+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON)
                * [.is_valid()](#STARPEACE.seal.CompanySeal+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.seal.CompanySeal.from_json) ⇒ [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
            * _inner_
                * [~JSON](#STARPEACE.seal.CompanySeal..JSON) : <code>object</code>


<a name="STARPEACE.building.BuildingDefinition"></a>

### STARPEACE.building.BuildingDefinition
Class representing building definition metadata

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building image definition |
| image_id | <code>string</code> | default building image definition identifier for this building |
| construction_image_id | <code>string</code> | building image definition identifier to use during construction of this building |
| name | [<code>Translation</code>](#STARPEACE.language.Translation) | translation object with name of building |
| zone_id | <code>string</code> | identifier for city zone of this building |
| category_id | <code>string</code> | identifier for category of this building |
| industry_type_id | <code>string</code> | identifier for industry type of this building |
| seal_id | <code>string</code> | identifier for seal of this building |
| restricted | <code>boolean</code> | flag indicating whether this building is restricted from tycoon construction |
| required_invention_ids | <code>Array.&lt;string&gt;</code> | array of invention definition identifiers that must be researched before construction of this building |


* [.BuildingDefinition](#STARPEACE.building.BuildingDefinition)
    * [new BuildingDefinition(id)](#new_STARPEACE.building.BuildingDefinition_new)
    * _instance_
        * [.is_valid()](#STARPEACE.building.BuildingDefinition+is_valid) ⇒ <code>boolean</code>
        * [.toJSON()](#STARPEACE.building.BuildingDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.BuildingDefinition..JSON)
    * _static_
        * [.from_json(json)](#STARPEACE.building.BuildingDefinition.from_json) ⇒ [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.BuildingDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.BuildingDefinition_new"></a>

#### STARPEACE.building.BuildingDefinition()
Create a BuildingDefinition object


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building definition |


<a name="STARPEACE.building.BuildingDefinition+is_valid"></a>

#### STARPEACE.building.BuildingDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.BuildingDefinition+toJSON"></a>

#### STARPEACE.building.BuildingDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
**Returns**: [<code>JSON</code>](#STARPEACE.building.BuildingDefinition..JSON) - JSON representation of BuildingDefinition  

<a name="STARPEACE.building.BuildingDefinition.from_json"></a>

#### STARPEACE.building.BuildingDefinition.from_json
Parse raw JSON into a BuildingDefinition object

**Kind**: static method of [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
**Returns**: [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition) - BuildingDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.BuildingDefinition..JSON) | raw JSON object to parse into BuildingDefinition |


<a name="STARPEACE.building.BuildingDefinition..JSON"></a>

#### STARPEACE.building.BuildingDefinition~JSON
**Kind**: inner typedef of [<code>BuildingDefinition</code>](#STARPEACE.building.BuildingDefinition)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building image definition |
| image_id | <code>string</code> | default building image definition identifier for this building |
| construction_image_id | <code>string</code> | building image definition identifier to use during construction of this building |
| name | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with name of building |
| zone | <code>string</code> | identifier for city zone of this building |
| industry_type | <code>string</code> | identifier for category of this building |
| seal_id | <code>string</code> | identifier for seal of this building |
| restricted | <code>boolean</code> | flag indicating whether this building is restricted from tycoon construction |
| required_inventions | <code>Array.&lt;string&gt;</code> | array of invention definition identifiers that must be researched before construction of this building |


<a name="STARPEACE.building.BuildingImageDefinition"></a>

### STARPEACE.building.BuildingImageDefinition
Class representing image metadata for a building definition

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building image definition |
| image_path | <code>string</code> | path to image file for building |
| tile_width | <code>number</code> | width of building in game tiles |
| tile_height | <code>number</code> | height of building in game tiles |
| hit_area | [<code>Array.&lt;CoordinateList&gt;</code>](#STARPEACE.building.CoordinateList) | array of coordinate lists representing vertices of each polygon making up building hit area |
| effects | [<code>Array.&lt;ImageEffect&gt;</code>](#STARPEACE.building.ImageEffect) | array of image effects for building |


* [.BuildingImageDefinition](#STARPEACE.building.BuildingImageDefinition)
    * [new BuildingImageDefinition(id)](#new_STARPEACE.building.BuildingImageDefinition_new)
    * _instance_
        * [.is_valid()](#STARPEACE.building.BuildingImageDefinition+is_valid) ⇒ <code>boolean</code>
        * [.toJSON()](#STARPEACE.building.BuildingImageDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.BuildingImageDefinition..JSON)
    * _static_
        * [.from_json(json)](#STARPEACE.building.BuildingImageDefinition.from_json) ⇒ [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.BuildingImageDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.BuildingImageDefinition_new"></a>

#### STARPEACE.building.BuildingImageDefinition()
Create a BuildingImageDefinition object


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building image definition |


<a name="STARPEACE.building.BuildingImageDefinition+is_valid"></a>

#### STARPEACE.building.BuildingImageDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.BuildingImageDefinition+toJSON"></a>

#### STARPEACE.building.BuildingImageDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
**Returns**: [<code>JSON</code>](#STARPEACE.building.BuildingImageDefinition..JSON) - JSON representation of BuildingImageDefinition  

<a name="STARPEACE.building.BuildingImageDefinition.from_json"></a>

#### STARPEACE.building.BuildingImageDefinition.from_json
Parse raw JSON into a BuildingImageDefinition object

**Kind**: static method of [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
**Returns**: [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition) - BuildingImageDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.BuildingImageDefinition..JSON) | raw JSON object to parse into BuildingImageDefinition |


<a name="STARPEACE.building.BuildingImageDefinition..JSON"></a>

#### STARPEACE.building.BuildingImageDefinition~JSON
**Kind**: inner typedef of [<code>BuildingImageDefinition</code>](#STARPEACE.building.BuildingImageDefinition)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier for building image definition |
| image_path | <code>string</code> | path to image file for building |
| tile_width | <code>number</code> | width of building in game tiles |
| tile_height | <code>number</code> | height of building in game tiles |
| hit_area | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.CoordinateList..JSON) | array of coordinate lists representing vertices of each polygon making up building hit area |
| effects | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.ImageEffect..JSON) | array of image effects for building |


<a name="STARPEACE.building.CoordinateList"></a>

### STARPEACE.building.CoordinateList
Class representing an array of coordinates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| coordinates | [<code>Array.&lt;Coordinate&gt;</code>](#STARPEACE.building.Coordinate) | array of coordinate values |


* [.CoordinateList](#STARPEACE.building.CoordinateList)
    * _instance_
        * [.is_valid()](#STARPEACE.building.CoordinateList+is_valid) ⇒ <code>boolean</code>
        * [.toJSON()](#STARPEACE.building.CoordinateList+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.CoordinateList..JSON)
    * _static_
        * [.from_json(json)](#STARPEACE.building.CoordinateList.from_json) ⇒ [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
    * _inner_
        * [~JSON](#STARPEACE.building.CoordinateList..JSON) : <code>object</code>


<a name="STARPEACE.building.CoordinateList+is_valid"></a>

#### STARPEACE.building.CoordinateList#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.CoordinateList+toJSON"></a>

#### STARPEACE.building.CoordinateList#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
**Returns**: [<code>JSON</code>](#STARPEACE.building.CoordinateList..JSON) - JSON representation of CoordinateList  

<a name="STARPEACE.building.CoordinateList.from_json"></a>

#### STARPEACE.building.CoordinateList.from_json
Parse raw JSON into a CoordinateList object

**Kind**: static method of [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
**Returns**: [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList) - CoordinateList representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.CoordinateList..JSON) | raw JSON object to parse into CoordinateList |


<a name="STARPEACE.building.CoordinateList..JSON"></a>

#### STARPEACE.building.CoordinateList~JSON
**Kind**: inner typedef of [<code>CoordinateList</code>](#STARPEACE.building.CoordinateList)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| coordinates | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.Coordinate..JSON) | array of coordinate JSON objects |


<a name="STARPEACE.building.Coordinate"></a>

### STARPEACE.building.Coordinate
Class representing an x and y coordinate

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | coordinate value along x axis |
| y | <code>number</code> | coordinate value along y axis |


* [.Coordinate](#STARPEACE.building.Coordinate)
    * [new Coordinate(x, y)](#new_STARPEACE.building.Coordinate_new)
    * _instance_
        * [.is_valid()](#STARPEACE.building.Coordinate+is_valid) ⇒ <code>boolean</code>
        * [.toJSON()](#STARPEACE.building.Coordinate+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.Coordinate..JSON)
    * _static_
        * [.from_json(json)](#STARPEACE.building.Coordinate.from_json) ⇒ [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
    * _inner_
        * [~JSON](#STARPEACE.building.Coordinate..JSON) : <code>object</code>


<a name="new_STARPEACE.building.Coordinate_new"></a>

#### STARPEACE.building.Coordinate()
Create a Coordinate object


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | coordinate value along x axis |
| y | <code>number</code> | coordinate value along y axis |


<a name="STARPEACE.building.Coordinate+is_valid"></a>

#### STARPEACE.building.Coordinate#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.Coordinate+toJSON"></a>

#### STARPEACE.building.Coordinate#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
**Returns**: [<code>JSON</code>](#STARPEACE.building.Coordinate..JSON) - JSON representation of Coordinate  

<a name="STARPEACE.building.Coordinate.from_json"></a>

#### STARPEACE.building.Coordinate.from_json
Parse raw JSON into a Coordinate object

**Kind**: static method of [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
**Returns**: [<code>Coordinate</code>](#STARPEACE.building.Coordinate) - Coordinate representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.Coordinate..JSON) | raw JSON object to parse into Coordinate |


<a name="STARPEACE.building.Coordinate..JSON"></a>

#### STARPEACE.building.Coordinate~JSON
**Kind**: inner typedef of [<code>Coordinate</code>](#STARPEACE.building.Coordinate)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | coordinate value along x axis |
| y | <code>number</code> | coordinate value along y axis |


<a name="STARPEACE.building.ImageEffect"></a>

### STARPEACE.building.ImageEffect
Class representing an image effect applied to a building

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | type identifier of effect |
| x | <code>number</code> | horizontal percent offset of effect image relative building image |
| y | <code>string</code> | vertical percent offset of effect image relative building image |


* [.ImageEffect](#STARPEACE.building.ImageEffect)
    * _instance_
        * [.is_valid()](#STARPEACE.building.ImageEffect+is_valid) ⇒ <code>boolean</code>
        * [.toJSON()](#STARPEACE.building.ImageEffect+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.ImageEffect..JSON)
    * _static_
        * [.from_json(json)](#STARPEACE.building.ImageEffect.from_json) ⇒ [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
    * _inner_
        * [~JSON](#STARPEACE.building.ImageEffect..JSON) : <code>object</code>


<a name="STARPEACE.building.ImageEffect+is_valid"></a>

#### STARPEACE.building.ImageEffect#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.ImageEffect+toJSON"></a>

#### STARPEACE.building.ImageEffect#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
**Returns**: [<code>JSON</code>](#STARPEACE.building.ImageEffect..JSON) - JSON representation of ImageEffect  

<a name="STARPEACE.building.ImageEffect.from_json"></a>

#### STARPEACE.building.ImageEffect.from_json
Parse raw JSON into a ImageEffect object

**Kind**: static method of [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
**Returns**: [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect) - ImageEffect representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.ImageEffect..JSON) | raw JSON object to parse into ImageEffect |


<a name="STARPEACE.building.ImageEffect..JSON"></a>

#### STARPEACE.building.ImageEffect~JSON
**Kind**: inner typedef of [<code>ImageEffect</code>](#STARPEACE.building.ImageEffect)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | type identifier of effect |
| x | <code>number</code> | horizontal percent offset of effect image relative building image |
| y | <code>string</code> | vertical percent offset of effect image relative building image |


<a name="STARPEACE.building.simulation.ConstructionQuantity"></a>

#### STARPEACE.building.simulation.ConstructionQuantity
Class representing building construction quantities

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type required |
| quantity | <code>number</code> | total amount of resource required |
| max_velocity | <code>number</code> | maximum amount of resource that can be used for construction per hour |


* [.ConstructionQuantity](#STARPEACE.building.simulation.ConstructionQuantity)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.ConstructionQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.ConstructionQuantity..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.ConstructionQuantity+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.ConstructionQuantity.from_json) ⇒ [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.ConstructionQuantity..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.ConstructionQuantity+toJSON"></a>

##### STARPEACE.building.simulation.ConstructionQuantity#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.ConstructionQuantity..JSON) - JSON representation of ConstructionQuantity  

<a name="STARPEACE.building.simulation.ConstructionQuantity+is_valid"></a>

##### STARPEACE.building.simulation.ConstructionQuantity#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.ConstructionQuantity.from_json"></a>

##### STARPEACE.building.simulation.ConstructionQuantity.from_json
Parse raw JSON into a ConstructionQuantity object

**Kind**: static method of [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
**Returns**: [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity) - ConstructionQuantity representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.ConstructionQuantity..JSON) | raw JSON object to parse into ConstructionQuantity |


<a name="STARPEACE.building.simulation.ConstructionQuantity..JSON"></a>

##### STARPEACE.building.simulation.ConstructionQuantity~JSON
**Kind**: inner typedef of [<code>ConstructionQuantity</code>](#STARPEACE.building.simulation.ConstructionQuantity)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource | <code>string</code> | identifier of resource type required |
| quantity | <code>number</code> | total amount of resource required |
| max_velocity | <code>number</code> | maximum amount of resource that can be used for construction per hour |


<a name="STARPEACE.building.simulation.SimulationDefinitionParser"></a>

#### STARPEACE.building.simulation.SimulationDefinitionParser
Class used to parse simulation definition json into simulation definitions


<a name="STARPEACE.building.simulation.SimulationDefinitionParser.from_json"></a>

##### STARPEACE.building.simulation.SimulationDefinitionParser.from_json
Parse raw JSON into a simulation definition object

**Kind**: static method of [<code>SimulationDefinitionParser</code>](#STARPEACE.building.simulation.SimulationDefinitionParser)
**Returns**: [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition) \| [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition) \| [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition) \| [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition) \| [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition) \| [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition) \| [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition) \| [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition) \| [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition) \| [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition) \| [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition) \| [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition) \| [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition) \| [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition) \| [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition) \| [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition) - simulation definition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.bank.BankDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.civic.PortalDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.media.AntennaDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.office.OfficeDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.park.ParkDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.service.ServiceDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageDefinition..JSON) \| [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreDefinition..JSON) | raw JSON object to parse into simulation definition |


<a name="STARPEACE.building.simulation.SimulationDefinition"></a>

#### STARPEACE.building.simulation.SimulationDefinition
Base class representing building simulation with common properties for all building simulations

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of building simulation |
| type | <code>string</code> | type identifier of building simulation, mapping to child subclass simulation definitions |
| max_level | <code>number</code> | maximum upgrade level of building |
| construction_inputs | [<code>Array.&lt;ConstructionQuantity&gt;</code>](#STARPEACE.building.simulation.ConstructionQuantity) | array of input quantities required for construction |
| prestige | <code>number</code> | prestige earned or lost per level of this building simulation |
| maintainance | <code>number</code> | maintainance required per level of this building simulation per hour |
| beauty | <code>number</code> | beauty earned or lost per level of this building simulation per hour |
| pollution | <code>number</code> | pollution earned or lost per level of this building simulation per hour |


* [.SimulationDefinition](#STARPEACE.building.simulation.SimulationDefinition)
    * [new SimulationDefinition(json)](#new_STARPEACE.building.simulation.SimulationDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.SimulationDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.SimulationDefinition+is_valid) ⇒ <code>boolean</code>
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.SimulationDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.SimulationDefinition_new"></a>

##### STARPEACE.building.simulation.SimulationDefinition()
Create a SimulationDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.SimulationDefinition+toJSON"></a>

##### STARPEACE.building.simulation.SimulationDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) - JSON representation of SimulationDefinition  

<a name="STARPEACE.building.simulation.SimulationDefinition+is_valid"></a>

##### STARPEACE.building.simulation.SimulationDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.SimulationDefinition..JSON"></a>

##### STARPEACE.building.simulation.SimulationDefinition~JSON
**Kind**: inner typedef of [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of building simulation |
| type | <code>string</code> | type identifier of building simulation, mapping to child subclass simulation definitions |
| max_level | <code>number</code> | maximum upgrade level of building |
| construction_inputs | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.ConstructionQuantity..JSON) | array of input quantities required for construction |
| prestige | <code>number</code> | prestige earned or lost per level of this building simulation |
| maintainance | <code>number</code> | maintainance required per level of this building simulation per hour |
| beauty | <code>number</code> | beauty earned or lost per level of this building simulation per hour |
| pollution | <code>number</code> | pollution earned or lost per level of this building simulation per hour |


<a name="STARPEACE.building.simulation.bank.BankDefinition"></a>

##### STARPEACE.building.simulation.bank.BankDefinition
Class representing bank building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.BankDefinition](#STARPEACE.building.simulation.bank.BankDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new BankDefinition(json)](#new_STARPEACE.building.simulation.bank.BankDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.bank.BankDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.bank.BankDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.bank.BankDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.bank.BankDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.bank.BankDefinition.from_json) ⇒ [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.bank.BankDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.bank.BankDefinition_new"></a>

###### STARPEACE.building.simulation.bank.BankDefinition()
Create a BankDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.bank.BankDefinition+toJSON"></a>

###### STARPEACE.building.simulation.bank.BankDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.bank.BankDefinition..JSON) - JSON representation of BankDefinition  

<a name="STARPEACE.building.simulation.bank.BankDefinition+is_valid"></a>

###### STARPEACE.building.simulation.bank.BankDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.bank.BankDefinition.TYPE"></a>

###### STARPEACE.building.simulation.bank.BankDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)

<a name="STARPEACE.building.simulation.bank.BankDefinition.from_json"></a>

###### STARPEACE.building.simulation.bank.BankDefinition.from_json
Parse raw JSON into a BankDefinition object

**Kind**: static method of [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
**Returns**: [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition) - BankDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.bank.BankDefinition..JSON) | raw JSON object to parse into BankDefinition |


<a name="STARPEACE.building.simulation.bank.BankDefinition..JSON"></a>

###### STARPEACE.building.simulation.bank.BankDefinition~JSON
**Kind**: inner typedef of [<code>BankDefinition</code>](#STARPEACE.building.simulation.bank.BankDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.civic.CapitolDefinition"></a>

##### STARPEACE.building.simulation.civic.CapitolDefinition
Class representing capitol building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.CapitolDefinition](#STARPEACE.building.simulation.civic.CapitolDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new CapitolDefinition(json)](#new_STARPEACE.building.simulation.civic.CapitolDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.civic.CapitolDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.civic.CapitolDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.civic.CapitolDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.civic.CapitolDefinition.from_json) ⇒ [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.civic.CapitolDefinition_new"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition()
Create a CapitolDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.civic.CapitolDefinition+toJSON"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON) - JSON representation of CapitolDefinition  

<a name="STARPEACE.building.simulation.civic.CapitolDefinition+is_valid"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.civic.CapitolDefinition.TYPE"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)

<a name="STARPEACE.building.simulation.civic.CapitolDefinition.from_json"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition.from_json
Parse raw JSON into a CapitolDefinition object

**Kind**: static method of [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
**Returns**: [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition) - CapitolDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.civic.CapitolDefinition..JSON) | raw JSON object to parse into CapitolDefinition |


<a name="STARPEACE.building.simulation.civic.CapitolDefinition..JSON"></a>

###### STARPEACE.building.simulation.civic.CapitolDefinition~JSON
**Kind**: inner typedef of [<code>CapitolDefinition</code>](#STARPEACE.building.simulation.civic.CapitolDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.civic.MausoleumDefinition"></a>

##### STARPEACE.building.simulation.civic.MausoleumDefinition
Class representing mausoleum building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.MausoleumDefinition](#STARPEACE.building.simulation.civic.MausoleumDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new MausoleumDefinition(json)](#new_STARPEACE.building.simulation.civic.MausoleumDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.civic.MausoleumDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.civic.MausoleumDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.civic.MausoleumDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.civic.MausoleumDefinition.from_json) ⇒ [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.civic.MausoleumDefinition_new"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition()
Create a MausoleumDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.civic.MausoleumDefinition+toJSON"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON) - JSON representation of MausoleumDefinition  

<a name="STARPEACE.building.simulation.civic.MausoleumDefinition+is_valid"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.civic.MausoleumDefinition.TYPE"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)

<a name="STARPEACE.building.simulation.civic.MausoleumDefinition.from_json"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition.from_json
Parse raw JSON into a MausoleumDefinition object

**Kind**: static method of [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
**Returns**: [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition) - MausoleumDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition..JSON) | raw JSON object to parse into MausoleumDefinition |


<a name="STARPEACE.building.simulation.civic.MausoleumDefinition..JSON"></a>

###### STARPEACE.building.simulation.civic.MausoleumDefinition~JSON
**Kind**: inner typedef of [<code>MausoleumDefinition</code>](#STARPEACE.building.simulation.civic.MausoleumDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.civic.PortalDefinition"></a>

##### STARPEACE.building.simulation.civic.PortalDefinition
Class representing portal building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.PortalDefinition](#STARPEACE.building.simulation.civic.PortalDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new PortalDefinition(json)](#new_STARPEACE.building.simulation.civic.PortalDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.civic.PortalDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.PortalDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.civic.PortalDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.civic.PortalDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.civic.PortalDefinition.from_json) ⇒ [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.civic.PortalDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.civic.PortalDefinition_new"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition()
Create a PortalDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.civic.PortalDefinition+toJSON"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.civic.PortalDefinition..JSON) - JSON representation of PortalDefinition  

<a name="STARPEACE.building.simulation.civic.PortalDefinition+is_valid"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.civic.PortalDefinition.TYPE"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)

<a name="STARPEACE.building.simulation.civic.PortalDefinition.from_json"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition.from_json
Parse raw JSON into a PortalDefinition object

**Kind**: static method of [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
**Returns**: [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition) - PortalDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.civic.PortalDefinition..JSON) | raw JSON object to parse into PortalDefinition |


<a name="STARPEACE.building.simulation.civic.PortalDefinition..JSON"></a>

###### STARPEACE.building.simulation.civic.PortalDefinition~JSON
**Kind**: inner typedef of [<code>PortalDefinition</code>](#STARPEACE.building.simulation.civic.PortalDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.civic.TownhallDefinition"></a>

##### STARPEACE.building.simulation.civic.TownhallDefinition
Class representing townhall building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.TownhallDefinition](#STARPEACE.building.simulation.civic.TownhallDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new TownhallDefinition(json)](#new_STARPEACE.building.simulation.civic.TownhallDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.civic.TownhallDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.civic.TownhallDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.civic.TownhallDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.civic.TownhallDefinition.from_json) ⇒ [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.civic.TownhallDefinition_new"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition()
Create a TownhallDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.civic.TownhallDefinition+toJSON"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON) - JSON representation of PortalDefinition  

<a name="STARPEACE.building.simulation.civic.TownhallDefinition+is_valid"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.civic.TownhallDefinition.TYPE"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)

<a name="STARPEACE.building.simulation.civic.TownhallDefinition.from_json"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition.from_json
Parse raw JSON into a TownhallDefinition object

**Kind**: static method of [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
**Returns**: [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition) - TownhallDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.civic.TownhallDefinition..JSON) | raw JSON object to parse into TownhallDefinition |


<a name="STARPEACE.building.simulation.civic.TownhallDefinition..JSON"></a>

###### STARPEACE.building.simulation.civic.TownhallDefinition~JSON
**Kind**: inner typedef of [<code>TownhallDefinition</code>](#STARPEACE.building.simulation.civic.TownhallDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.civic.TradecenterDefinition"></a>

##### STARPEACE.building.simulation.civic.TradecenterDefinition
Class representing tradecenter building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.TradecenterDefinition](#STARPEACE.building.simulation.civic.TradecenterDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new TradecenterDefinition(json)](#new_STARPEACE.building.simulation.civic.TradecenterDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.civic.TradecenterDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.civic.TradecenterDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.civic.TradecenterDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.civic.TradecenterDefinition.from_json) ⇒ [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.civic.TradecenterDefinition_new"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition()
Create a TradecenterDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.civic.TradecenterDefinition+toJSON"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON) - JSON representation of TradecenterDefinition  

<a name="STARPEACE.building.simulation.civic.TradecenterDefinition+is_valid"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.civic.TradecenterDefinition.TYPE"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)

<a name="STARPEACE.building.simulation.civic.TradecenterDefinition.from_json"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition.from_json
Parse raw JSON into a TradecenterDefinition object

**Kind**: static method of [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
**Returns**: [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition) - TradecenterDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition..JSON) | raw JSON object to parse into TradecenterDefinition |


<a name="STARPEACE.building.simulation.civic.TradecenterDefinition..JSON"></a>

###### STARPEACE.building.simulation.civic.TradecenterDefinition~JSON
**Kind**: inner typedef of [<code>TradecenterDefinition</code>](#STARPEACE.building.simulation.civic.TradecenterDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.factory.FactoryDefinition"></a>

##### STARPEACE.building.simulation.factory.FactoryDefinition
Class representing tradecenter building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| stages | [<code>Array.&lt;FactoryStage&gt;</code>](#STARPEACE.building.simulation.factory.FactoryStage) | each stage of factory production |


* [.FactoryDefinition](#STARPEACE.building.simulation.factory.FactoryDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new FactoryDefinition(json)](#new_STARPEACE.building.simulation.factory.FactoryDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.factory.FactoryDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.factory.FactoryDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.factory.FactoryDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.factory.FactoryDefinition.from_json) ⇒ [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.factory.FactoryDefinition_new"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition()
Create a FactoryDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.factory.FactoryDefinition+toJSON"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON) - JSON representation of FactoryDefinition  

<a name="STARPEACE.building.simulation.factory.FactoryDefinition+is_valid"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.factory.FactoryDefinition.TYPE"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)

<a name="STARPEACE.building.simulation.factory.FactoryDefinition.from_json"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition.from_json
Parse raw JSON into a FactoryDefinition object

**Kind**: static method of [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
**Returns**: [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition) - FactoryDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryDefinition..JSON) | raw JSON object to parse into FactoryDefinition |


<a name="STARPEACE.building.simulation.factory.FactoryDefinition..JSON"></a>

###### STARPEACE.building.simulation.factory.FactoryDefinition~JSON
**Kind**: inner typedef of [<code>FactoryDefinition</code>](#STARPEACE.building.simulation.factory.FactoryDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| stages | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.factory.FactoryStage..JSON) | each stage of factory production |


<a name="STARPEACE.building.simulation.factory.FactoryStage"></a>

##### STARPEACE.building.simulation.factory.FactoryStage
Class representing factory building simulation stage metadata

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | number index of stage, starting at one and increasing |
| duration | <code>number</code> | length of stage duration in calendar hours |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| operations | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of resource quantities required for building operations |
| inputs | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of input resource quantities |
| outputs | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of output resource quantities |


* [.FactoryStage](#STARPEACE.building.simulation.factory.FactoryStage) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.factory.FactoryStage+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryStage..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.factory.FactoryStage+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.factory.FactoryStage.from_json) ⇒ [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.factory.FactoryStage..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.factory.FactoryStage+toJSON"></a>

###### STARPEACE.building.simulation.factory.FactoryStage#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryStage..JSON) - JSON representation of FactoryStage  

<a name="STARPEACE.building.simulation.factory.FactoryStage+is_valid"></a>

###### STARPEACE.building.simulation.factory.FactoryStage#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.factory.FactoryStage.from_json"></a>

###### STARPEACE.building.simulation.factory.FactoryStage.from_json
Parse raw JSON into a FactoryStage object

**Kind**: static method of [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
**Returns**: [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage) - FactoryStage representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.factory.FactoryStage..JSON) | raw JSON object to parse into FactoryStage |


<a name="STARPEACE.building.simulation.factory.FactoryStage..JSON"></a>

###### STARPEACE.building.simulation.factory.FactoryStage~JSON
**Kind**: inner typedef of [<code>FactoryStage</code>](#STARPEACE.building.simulation.factory.FactoryStage)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | number index of stage, starting at one and increasing |
| duration | <code>number</code> | length of stage duration in calendar hours |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| operations | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of resource quantities required for building operations |
| inputs | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of input resource quantities |
| outputs | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of output resource quantities |


<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition"></a>

##### STARPEACE.building.simulation.headquarters.HeadquartersDefinition
Class representing headquarters building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| satellite | <code>boolean</code> | flag indicating whether building is satellite headquarters |
| satellite_category | <code>string</code> | satellite category if building is flagged as satellite |


* [.HeadquartersDefinition](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new HeadquartersDefinition(json)](#new_STARPEACE.building.simulation.headquarters.HeadquartersDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition.from_json) ⇒ [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.headquarters.HeadquartersDefinition_new"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition()
Create a HeadquartersDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition+toJSON"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON) - JSON representation of HeadquartersDefinition  

<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition+is_valid"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition.TYPE"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)

<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition.from_json"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition.from_json
Parse raw JSON into a HeadquartersDefinition object

**Kind**: static method of [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
**Returns**: [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition) - HeadquartersDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON) | raw JSON object to parse into HeadquartersDefinition |


<a name="STARPEACE.building.simulation.headquarters.HeadquartersDefinition..JSON"></a>

###### STARPEACE.building.simulation.headquarters.HeadquartersDefinition~JSON
**Kind**: inner typedef of [<code>HeadquartersDefinition</code>](#STARPEACE.building.simulation.headquarters.HeadquartersDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| satellite | <code>boolean</code> | flag indicating whether building is satellite headquarters |
| satellite_category | <code>string</code> | satellite category if building is flagged as satellite |


<a name="STARPEACE.building.simulation.media.AntennaDefinition"></a>

##### STARPEACE.building.simulation.media.AntennaDefinition
Class representing antenna building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| range | <code>number</code> | tile range building can reach |


* [.AntennaDefinition](#STARPEACE.building.simulation.media.AntennaDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new AntennaDefinition(json)](#new_STARPEACE.building.simulation.media.AntennaDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.media.AntennaDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.media.AntennaDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.media.AntennaDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.media.AntennaDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.media.AntennaDefinition.from_json) ⇒ [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.media.AntennaDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.media.AntennaDefinition_new"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition()
Create a AntennaDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.media.AntennaDefinition+toJSON"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.media.AntennaDefinition..JSON) - JSON representation of AntennaDefinition  

<a name="STARPEACE.building.simulation.media.AntennaDefinition+is_valid"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.media.AntennaDefinition.TYPE"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)

<a name="STARPEACE.building.simulation.media.AntennaDefinition.from_json"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition.from_json
Parse raw JSON into a AntennaDefinition object

**Kind**: static method of [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
**Returns**: [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition) - AntennaDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.media.AntennaDefinition..JSON) | raw JSON object to parse into AntennaDefinition |


<a name="STARPEACE.building.simulation.media.AntennaDefinition..JSON"></a>

###### STARPEACE.building.simulation.media.AntennaDefinition~JSON
**Kind**: inner typedef of [<code>AntennaDefinition</code>](#STARPEACE.building.simulation.media.AntennaDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| range | <code>number</code> | tile range building can reach |


<a name="STARPEACE.building.simulation.media.MediaStationDefinition"></a>

##### STARPEACE.building.simulation.media.MediaStationDefinition
Class representing media station building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |


* [.MediaStationDefinition](#STARPEACE.building.simulation.media.MediaStationDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new MediaStationDefinition(json)](#new_STARPEACE.building.simulation.media.MediaStationDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.media.MediaStationDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.media.MediaStationDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.media.MediaStationDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.media.MediaStationDefinition.from_json) ⇒ [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.media.MediaStationDefinition_new"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition()
Create a MediaStationDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.media.MediaStationDefinition+toJSON"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON) - JSON representation of MediaStationDefinition  

<a name="STARPEACE.building.simulation.media.MediaStationDefinition+is_valid"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.media.MediaStationDefinition.TYPE"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)

<a name="STARPEACE.building.simulation.media.MediaStationDefinition.from_json"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition.from_json
Parse raw JSON into a MediaStationDefinition object

**Kind**: static method of [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
**Returns**: [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition) - MediaStationDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.media.MediaStationDefinition..JSON) | raw JSON object to parse into MediaStationDefinition |


<a name="STARPEACE.building.simulation.media.MediaStationDefinition..JSON"></a>

###### STARPEACE.building.simulation.media.MediaStationDefinition~JSON
**Kind**: inner typedef of [<code>MediaStationDefinition</code>](#STARPEACE.building.simulation.media.MediaStationDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |


<a name="STARPEACE.building.simulation.office.OfficeDefinition"></a>

##### STARPEACE.building.simulation.office.OfficeDefinition
Class representing office building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| capacity | <code>number</code> | capacity of resource for which building provides offices |
| efficiency | <code>number</code> | base efficiency of building |


* [.OfficeDefinition](#STARPEACE.building.simulation.office.OfficeDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new OfficeDefinition(json)](#new_STARPEACE.building.simulation.office.OfficeDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.office.OfficeDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.office.OfficeDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.office.OfficeDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.office.OfficeDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.office.OfficeDefinition.from_json) ⇒ [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.office.OfficeDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.office.OfficeDefinition_new"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition()
Create a OfficeDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.office.OfficeDefinition+toJSON"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.office.OfficeDefinition..JSON) - JSON representation of OfficeDefinition  

<a name="STARPEACE.building.simulation.office.OfficeDefinition+is_valid"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.office.OfficeDefinition.TYPE"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)

<a name="STARPEACE.building.simulation.office.OfficeDefinition.from_json"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition.from_json
Parse raw JSON into a OfficeDefinition object

**Kind**: static method of [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
**Returns**: [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition) - OfficeDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.office.OfficeDefinition..JSON) | raw JSON object to parse into OfficeDefinition |


<a name="STARPEACE.building.simulation.office.OfficeDefinition..JSON"></a>

###### STARPEACE.building.simulation.office.OfficeDefinition~JSON
**Kind**: inner typedef of [<code>OfficeDefinition</code>](#STARPEACE.building.simulation.office.OfficeDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| capacity | <code>number</code> | capacity of resource for which building provides offices |
| efficiency | <code>number</code> | base efficiency of building |


<a name="STARPEACE.building.simulation.park.ParkDefinition"></a>

##### STARPEACE.building.simulation.park.ParkDefinition
Class representing park building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| sport | <code>number</code> | amount of sport provided by building per hour |


* [.ParkDefinition](#STARPEACE.building.simulation.park.ParkDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new ParkDefinition(json)](#new_STARPEACE.building.simulation.park.ParkDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.park.ParkDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.park.ParkDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.park.ParkDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.park.ParkDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.park.ParkDefinition.from_json) ⇒ [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.park.ParkDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.park.ParkDefinition_new"></a>

###### STARPEACE.building.simulation.park.ParkDefinition()
Create a ParkDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.park.ParkDefinition+toJSON"></a>

###### STARPEACE.building.simulation.park.ParkDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.park.ParkDefinition..JSON) - JSON representation of ParkDefinition  

<a name="STARPEACE.building.simulation.park.ParkDefinition+is_valid"></a>

###### STARPEACE.building.simulation.park.ParkDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.park.ParkDefinition.TYPE"></a>

###### STARPEACE.building.simulation.park.ParkDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)

<a name="STARPEACE.building.simulation.park.ParkDefinition.from_json"></a>

###### STARPEACE.building.simulation.park.ParkDefinition.from_json
Parse raw JSON into a ParkDefinition object

**Kind**: static method of [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
**Returns**: [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition) - ParkDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.park.ParkDefinition..JSON) | raw JSON object to parse into ParkDefinition |


<a name="STARPEACE.building.simulation.park.ParkDefinition..JSON"></a>

###### STARPEACE.building.simulation.park.ParkDefinition~JSON
**Kind**: inner typedef of [<code>ParkDefinition</code>](#STARPEACE.building.simulation.park.ParkDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| sport | <code>number</code> | amount of sport provided by building per hour |


<a name="STARPEACE.building.simulation.residence.ResidenceDefinition"></a>

##### STARPEACE.building.simulation.residence.ResidenceDefinition
Class representing residence building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resident_type | <code>string</code> | identifier of resource type for which residence provides housing |
| capacity | <code>number</code> | capacity of resource for which building provides housing |
| efficiency | <code>number</code> | base efficiency of building |
| crime_resistence | <code>number</code> | base crime resistence of building |
| pollution_resistence | <code>number</code> | base pollution resistence of building |


* [.ResidenceDefinition](#STARPEACE.building.simulation.residence.ResidenceDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new ResidenceDefinition(json)](#new_STARPEACE.building.simulation.residence.ResidenceDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.residence.ResidenceDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.residence.ResidenceDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.residence.ResidenceDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.residence.ResidenceDefinition.from_json) ⇒ [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.residence.ResidenceDefinition_new"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition()
Create a ResidenceDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.residence.ResidenceDefinition+toJSON"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON) - JSON representation of ResidenceDefinition  

<a name="STARPEACE.building.simulation.residence.ResidenceDefinition+is_valid"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.residence.ResidenceDefinition.TYPE"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)

<a name="STARPEACE.building.simulation.residence.ResidenceDefinition.from_json"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition.from_json
Parse raw JSON into a ResidenceDefinition object

**Kind**: static method of [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
**Returns**: [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition) - ResidenceDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition..JSON) | raw JSON object to parse into ResidenceDefinition |


<a name="STARPEACE.building.simulation.residence.ResidenceDefinition..JSON"></a>

###### STARPEACE.building.simulation.residence.ResidenceDefinition~JSON
**Kind**: inner typedef of [<code>ResidenceDefinition</code>](#STARPEACE.building.simulation.residence.ResidenceDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resident_type | <code>string</code> | identifier of resource type for which residence provides housing |
| capacity | <code>number</code> | capacity of resource for which building provides housing |
| efficiency | <code>number</code> | base efficiency of building |
| crime_resistence | <code>number</code> | base crime resistence of building |
| pollution_resistence | <code>number</code> | base pollution resistence of building |


<a name="STARPEACE.building.simulation.service.ServiceDefinition"></a>

##### STARPEACE.building.simulation.service.ServiceDefinition
Class representing service building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| service | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of output service resource quantities provided by building |


* [.ServiceDefinition](#STARPEACE.building.simulation.service.ServiceDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new ServiceDefinition(json)](#new_STARPEACE.building.simulation.service.ServiceDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.service.ServiceDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.service.ServiceDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.service.ServiceDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.service.ServiceDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.service.ServiceDefinition.from_json) ⇒ [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.service.ServiceDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.service.ServiceDefinition_new"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition()
Create a ServiceDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.service.ServiceDefinition+toJSON"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.service.ServiceDefinition..JSON) - JSON representation of ServiceDefinition  

<a name="STARPEACE.building.simulation.service.ServiceDefinition+is_valid"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.service.ServiceDefinition.TYPE"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)

<a name="STARPEACE.building.simulation.service.ServiceDefinition.from_json"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition.from_json
Parse raw JSON into a ServiceDefinition object

**Kind**: static method of [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
**Returns**: [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition) - ServiceDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.service.ServiceDefinition..JSON) | raw JSON object to parse into ServiceDefinition |


<a name="STARPEACE.building.simulation.service.ServiceDefinition..JSON"></a>

###### STARPEACE.building.simulation.service.ServiceDefinition~JSON
**Kind**: inner typedef of [<code>ServiceDefinition</code>](#STARPEACE.building.simulation.service.ServiceDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| service | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of output service resource quantities provided by building |


<a name="STARPEACE.building.simulation.storage.StorageDefinition"></a>

##### STARPEACE.building.simulation.storage.StorageDefinition
Class representing storage building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| operations | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of resource quantities required for building operations |
| storage | [<code>Array.&lt;StorageQuantity&gt;</code>](#STARPEACE.building.simulation.storage.StorageQuantity) | array of resource quantities stored by building |


* [.StorageDefinition](#STARPEACE.building.simulation.storage.StorageDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new StorageDefinition(json)](#new_STARPEACE.building.simulation.storage.StorageDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.storage.StorageDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.storage.StorageDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.storage.StorageDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.storage.StorageDefinition.from_json) ⇒ [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.storage.StorageDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.storage.StorageDefinition_new"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition()
Create a StorageDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.storage.StorageDefinition+toJSON"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageDefinition..JSON) - JSON representation of StorageDefinition  

<a name="STARPEACE.building.simulation.storage.StorageDefinition+is_valid"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.storage.StorageDefinition.TYPE"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)

<a name="STARPEACE.building.simulation.storage.StorageDefinition.from_json"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition.from_json
Parse raw JSON into a StorageDefinition object

**Kind**: static method of [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
**Returns**: [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition) - StorageDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageDefinition..JSON) | raw JSON object to parse into StorageDefinition |


<a name="STARPEACE.building.simulation.storage.StorageDefinition..JSON"></a>

###### STARPEACE.building.simulation.storage.StorageDefinition~JSON
**Kind**: inner typedef of [<code>StorageDefinition</code>](#STARPEACE.building.simulation.storage.StorageDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| operations | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of resource quantities required for building operations |
| storage | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.storage.StorageQuantity..JSON) | array of resource quantities stored by building |


<a name="STARPEACE.building.simulation.storage.StorageQuantity"></a>

##### STARPEACE.building.simulation.storage.StorageQuantity
Class representing a storage quantity of a resource

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of storage |
| max | <code>number</code> | maximum amount of resource that can be stored |


* [.StorageQuantity](#STARPEACE.building.simulation.storage.StorageQuantity)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.storage.StorageQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageQuantity..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.storage.StorageQuantity+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.storage.StorageQuantity.from_json) ⇒ [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.storage.StorageQuantity..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.storage.StorageQuantity+toJSON"></a>

###### STARPEACE.building.simulation.storage.StorageQuantity#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageQuantity..JSON) - JSON representation of StorageQuantity  

<a name="STARPEACE.building.simulation.storage.StorageQuantity+is_valid"></a>

###### STARPEACE.building.simulation.storage.StorageQuantity#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.storage.StorageQuantity.from_json"></a>

###### STARPEACE.building.simulation.storage.StorageQuantity.from_json
Parse raw JSON into a StorageQuantity object

**Kind**: static method of [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
**Returns**: [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity) - StorageQuantity representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.storage.StorageQuantity..JSON) | raw JSON object to parse into StorageQuantity |


<a name="STARPEACE.building.simulation.storage.StorageQuantity..JSON"></a>

###### STARPEACE.building.simulation.storage.StorageQuantity~JSON
**Kind**: inner typedef of [<code>StorageQuantity</code>](#STARPEACE.building.simulation.storage.StorageQuantity)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of storage |
| max | <code>number</code> | maximum amount of resource that can be stored |


<a name="STARPEACE.building.simulation.store.StoreDefinition"></a>

##### STARPEACE.building.simulation.store.StoreDefinition
Class representing store building simulation definition

**Extends**: [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | labor requirements for building |
| operations | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of resource quantities required for building operations |
| products | [<code>Array.&lt;StoreProduct&gt;</code>](#STARPEACE.building.simulation.store.StoreProduct) | array of output resource products sold by building |


* [.StoreDefinition](#STARPEACE.building.simulation.store.StoreDefinition) ⇐ [<code>SimulationDefinition</code>](#STARPEACE.building.simulation.SimulationDefinition)
    * [new StoreDefinition(json)](#new_STARPEACE.building.simulation.store.StoreDefinition_new)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.store.StoreDefinition+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreDefinition..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.store.StoreDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.TYPE()](#STARPEACE.building.simulation.store.StoreDefinition.TYPE)
        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreDefinition.from_json) ⇒ [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.store.StoreDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.building.simulation.store.StoreDefinition_new"></a>

###### STARPEACE.building.simulation.store.StoreDefinition()
Create a StoreDefinition object


| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON) | raw JSON object to populate into simulation definition |


<a name="STARPEACE.building.simulation.store.StoreDefinition+toJSON"></a>

###### STARPEACE.building.simulation.store.StoreDefinition#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
**Overrides**: [<code>toJSON</code>](#STARPEACE.building.simulation.SimulationDefinition+toJSON)  
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreDefinition..JSON) - JSON representation of StoreDefinition  

<a name="STARPEACE.building.simulation.store.StoreDefinition+is_valid"></a>

###### STARPEACE.building.simulation.store.StoreDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
**Overrides**: [<code>is\_valid</code>](#STARPEACE.building.simulation.SimulationDefinition+is_valid)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.store.StoreDefinition.TYPE"></a>

###### STARPEACE.building.simulation.store.StoreDefinition.TYPE
Type identifier for simulation definition

**Kind**: static method of [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)

<a name="STARPEACE.building.simulation.store.StoreDefinition.from_json"></a>

###### STARPEACE.building.simulation.store.StoreDefinition.from_json
Parse raw JSON into a StoreDefinition object

**Kind**: static method of [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
**Returns**: [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition) - StoreDefinition representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreDefinition..JSON) | raw JSON object to parse into StoreDefinition |


<a name="STARPEACE.building.simulation.store.StoreDefinition..JSON"></a>

###### STARPEACE.building.simulation.store.StoreDefinition~JSON
**Kind**: inner typedef of [<code>StoreDefinition</code>](#STARPEACE.building.simulation.store.StoreDefinition)
**Extends**: [<code>JSON</code>](#STARPEACE.building.simulation.SimulationDefinition..JSON)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| labor | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | labor requirements for building |
| operations | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of resource quantities required for building operations |
| products | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.store.StoreProduct..JSON) | array of output resource products sold by building |


<a name="STARPEACE.building.simulation.store.StoreProductCustomer"></a>

##### STARPEACE.building.simulation.store.StoreProductCustomer
Class representing store building customer metadata

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of customer |
| max_velocity | <code>number</code> | maximum amount of resource that can be bought by customers per hour |
| probability | <code>number</code> | base probability customers will purchase products per hour |


* [.StoreProductCustomer](#STARPEACE.building.simulation.store.StoreProductCustomer)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProductCustomer+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProductCustomer+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProductCustomer.from_json) ⇒ [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.store.StoreProductCustomer+toJSON"></a>

###### STARPEACE.building.simulation.store.StoreProductCustomer#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON) - JSON representation of StoreProductCustomer  

<a name="STARPEACE.building.simulation.store.StoreProductCustomer+is_valid"></a>

###### STARPEACE.building.simulation.store.StoreProductCustomer#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.store.StoreProductCustomer.from_json"></a>

###### STARPEACE.building.simulation.store.StoreProductCustomer.from_json
Parse raw JSON into a StoreProductCustomer object

**Kind**: static method of [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
**Returns**: [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer) - StoreProductCustomer representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON) | raw JSON object to parse into StoreProductCustomer |


<a name="STARPEACE.building.simulation.store.StoreProductCustomer..JSON"></a>

###### STARPEACE.building.simulation.store.StoreProductCustomer~JSON
**Kind**: inner typedef of [<code>StoreProductCustomer</code>](#STARPEACE.building.simulation.store.StoreProductCustomer)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of customer |
| max_velocity | <code>number</code> | maximum amount of resource that can be bought by customers per hour |
| probability | <code>number</code> | base probability customers will purchase products per hour |


<a name="STARPEACE.building.simulation.store.StoreProductOutput"></a>

##### STARPEACE.building.simulation.store.StoreProductOutput
Class representing store building product output

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of output |
| max_velocity | <code>number</code> | maximum amount of resource that can be sold per hour |
| customers | [<code>Array.&lt;StoreProductCustomer&gt;</code>](#STARPEACE.building.simulation.store.StoreProductCustomer) | array of store customer metadata |


* [.StoreProductOutput](#STARPEACE.building.simulation.store.StoreProductOutput)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProductOutput+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductOutput..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProductOutput+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProductOutput.from_json) ⇒ [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.store.StoreProductOutput..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.store.StoreProductOutput+toJSON"></a>

###### STARPEACE.building.simulation.store.StoreProductOutput#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductOutput..JSON) - JSON representation of StoreProductOutput  

<a name="STARPEACE.building.simulation.store.StoreProductOutput+is_valid"></a>

###### STARPEACE.building.simulation.store.StoreProductOutput#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.store.StoreProductOutput.from_json"></a>

###### STARPEACE.building.simulation.store.StoreProductOutput.from_json
Parse raw JSON into a StoreProductOutput object

**Kind**: static method of [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
**Returns**: [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput) - StoreProductOutput representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProductOutput..JSON) | raw JSON object to parse into StoreProductOutput |


<a name="STARPEACE.building.simulation.store.StoreProductOutput..JSON"></a>

###### STARPEACE.building.simulation.store.StoreProductOutput~JSON
**Kind**: inner typedef of [<code>StoreProductOutput</code>](#STARPEACE.building.simulation.store.StoreProductOutput)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource type of output |
| max_velocity | <code>number</code> | maximum amount of resource that can be sold per hour |
| customers | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.store.StoreProductCustomer..JSON) | array of store customer metadata |


<a name="STARPEACE.building.simulation.store.StoreProduct"></a>

##### STARPEACE.building.simulation.store.StoreProduct
Class representing store building simulation product outputs

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| inputs | [<code>Array.&lt;ResourceQuantity&gt;</code>](#STARPEACE.industry.ResourceQuantity) | array of input resource quantities |
| outputs | [<code>Array.&lt;StoreProductOutput&gt;</code>](#STARPEACE.building.simulation.store.StoreProductOutput) | array of output resource quantities |


* [.StoreProduct](#STARPEACE.building.simulation.store.StoreProduct)
    * _instance_
        * [.toJSON()](#STARPEACE.building.simulation.store.StoreProduct+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProduct..JSON)
        * [.is_valid()](#STARPEACE.building.simulation.store.StoreProduct+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json(json)](#STARPEACE.building.simulation.store.StoreProduct.from_json) ⇒ [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
    * _inner_
        * [~JSON](#STARPEACE.building.simulation.store.StoreProduct..JSON) : <code>object</code>


<a name="STARPEACE.building.simulation.store.StoreProduct+toJSON"></a>

###### STARPEACE.building.simulation.store.StoreProduct#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
**Returns**: [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProduct..JSON) - JSON representation of StoreProduct  

<a name="STARPEACE.building.simulation.store.StoreProduct+is_valid"></a>

###### STARPEACE.building.simulation.store.StoreProduct#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.building.simulation.store.StoreProduct.from_json"></a>

###### STARPEACE.building.simulation.store.StoreProduct.from_json
Parse raw JSON into a StoreProduct object

**Kind**: static method of [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
**Returns**: [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct) - StoreProduct representation of parsed JSON  

| Param | Type | Description |
| --- | --- | --- |
| json | [<code>JSON</code>](#STARPEACE.building.simulation.store.StoreProduct..JSON) | raw JSON object to parse into StoreProduct |


<a name="STARPEACE.building.simulation.store.StoreProduct..JSON"></a>

###### STARPEACE.building.simulation.store.StoreProduct~JSON
**Kind**: inner typedef of [<code>StoreProduct</code>](#STARPEACE.building.simulation.store.StoreProduct)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| inputs | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.industry.ResourceQuantity..JSON) | array of input resource quantities |
| outputs | [<code>Array.&lt;JSON&gt;</code>](#STARPEACE.building.simulation.store.StoreProductOutput..JSON) | array of output resource quantities |


<a name="STARPEACE.industry.CityZone"></a>

### STARPEACE.industry.CityZone
Class representing a city zone

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of zone |
| value | <code>number</code> | unique numeric value of zone |
| color | <code>string</code> | hexidecimal number value of zone color |


* [.CityZone](#STARPEACE.industry.CityZone)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.CityZone+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON)
        * [.is_valid()](#STARPEACE.industry.CityZone+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.CityZone.from_json) ⇒ [<code>CityZone</code>](#STARPEACE.industry.CityZone)
    * _inner_
        * [~JSON](#STARPEACE.industry.CityZone..JSON) : <code>object</code>


<a name="STARPEACE.industry.CityZone+toJSON"></a>

#### STARPEACE.industry.CityZone#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON) - JSON representation of CityZone  

<a name="STARPEACE.industry.CityZone+is_valid"></a>

#### STARPEACE.industry.CityZone#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.CityZone.from_json"></a>

#### STARPEACE.industry.CityZone.from_json
Parse raw JSON into a CityZone object

**Kind**: static method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)
**Returns**: [<code>CityZone</code>](#STARPEACE.industry.CityZone) - CityZone representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON) json - raw JSON object to parse into CityZone  

<a name="STARPEACE.industry.CityZone..JSON"></a>

#### STARPEACE.industry.CityZone~JSON
**Kind**: inner typedef of [<code>CityZone</code>](#STARPEACE.industry.CityZone)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of zone |
| value | <code>number</code> | unique numeric value of zone |
| color | <code>string</code> | hexidecimal number value of zone color |


<a name="STARPEACE.industry.IndustryCategory"></a>

### STARPEACE.industry.IndustryCategory
Class representing an industry category

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry category |
| label | [<code>Translation</code>](#STARPEACE.language.Translation) | translation with label of industry |


* [.IndustryCategory](#STARPEACE.industry.IndustryCategory)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.IndustryCategory+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON)
        * [.is_valid()](#STARPEACE.industry.IndustryCategory+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.IndustryCategory.from_json) ⇒ [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
    * _inner_
        * [~JSON](#STARPEACE.industry.IndustryCategory..JSON) : <code>object</code>


<a name="STARPEACE.industry.IndustryCategory+toJSON"></a>

#### STARPEACE.industry.IndustryCategory#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON) - JSON representation of IndustryCategory  

<a name="STARPEACE.industry.IndustryCategory+is_valid"></a>

#### STARPEACE.industry.IndustryCategory#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.IndustryCategory.from_json"></a>

#### STARPEACE.industry.IndustryCategory.from_json
Parse raw JSON into a IndustryCategory object

**Kind**: static method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
**Returns**: [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory) - IndustryCategory representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON) json - raw JSON object to parse into IndustryCategory  

<a name="STARPEACE.industry.IndustryCategory..JSON"></a>

#### STARPEACE.industry.IndustryCategory~JSON
**Kind**: inner typedef of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry category |
| label | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with label of industry |


<a name="STARPEACE.industry.IndustryType"></a>

### STARPEACE.industry.IndustryType
Class representing an industry type

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry type |
| label | [<code>Translation</code>](#STARPEACE.language.Translation) | translation with label of industry |


* [.IndustryType](#STARPEACE.industry.IndustryType)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.IndustryType+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON)
        * [.is_valid()](#STARPEACE.industry.IndustryType+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.IndustryType.from_json) ⇒ [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
    * _inner_
        * [~JSON](#STARPEACE.industry.IndustryType..JSON) : <code>object</code>


<a name="STARPEACE.industry.IndustryType+toJSON"></a>

#### STARPEACE.industry.IndustryType#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON) - JSON representation of IndustryType  

<a name="STARPEACE.industry.IndustryType+is_valid"></a>

#### STARPEACE.industry.IndustryType#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.IndustryType.from_json"></a>

#### STARPEACE.industry.IndustryType.from_json
Parse raw JSON into a IndustryType object

**Kind**: static method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
**Returns**: [<code>IndustryType</code>](#STARPEACE.industry.IndustryType) - Level representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON) json - raw JSON object to parse into IndustryType  

<a name="STARPEACE.industry.IndustryType..JSON"></a>

#### STARPEACE.industry.IndustryType~JSON
**Kind**: inner typedef of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry type |
| label | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with label of industry |


<a name="STARPEACE.industry.Level"></a>

### STARPEACE.industry.Level
Class representing a tycoon level

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of level |
| label | [<code>Translation</code>](#STARPEACE.language.Translation) | translation with label of level |
| level | <code>number</code> | unique number of this level starting at one and incrementing |


* [.Level](#STARPEACE.industry.Level)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.Level+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.Level..JSON)
        * [.is_valid()](#STARPEACE.industry.Level+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.Level.from_json) ⇒ [<code>Level</code>](#STARPEACE.industry.Level)
    * _inner_
        * [~JSON](#STARPEACE.industry.Level..JSON) : <code>object</code>


<a name="STARPEACE.industry.Level+toJSON"></a>

#### STARPEACE.industry.Level#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>Level</code>](#STARPEACE.industry.Level)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.Level..JSON) - JSON representation of Level  

<a name="STARPEACE.industry.Level+is_valid"></a>

#### STARPEACE.industry.Level#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>Level</code>](#STARPEACE.industry.Level)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.Level.from_json"></a>

#### STARPEACE.industry.Level.from_json
Parse raw JSON into a Level object

**Kind**: static method of [<code>Level</code>](#STARPEACE.industry.Level)
**Returns**: [<code>Level</code>](#STARPEACE.industry.Level) - Level representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.Level..JSON) json - raw JSON object to parse into Level  

<a name="STARPEACE.industry.Level..JSON"></a>

#### STARPEACE.industry.Level~JSON
**Kind**: inner typedef of [<code>Level</code>](#STARPEACE.industry.Level)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of level |
| label | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with label of level |
| level | <code>number</code> | unique number of this level starting at one and incrementing |


<a name="STARPEACE.industry.ResourceQuantity"></a>

### STARPEACE.industry.ResourceQuantity
Class representing a resource quantity and metadata

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | <code>string</code> | identifier of resource |
| max_velocity | <code>number</code> | maximum quantity of resource per day |
| weight_efficiency | <code>number</code> | importance weight of efficiency on this quantity |
| weight_quality | <code>number</code> | importance weight of qualityy on this quantity |


* [.ResourceQuantity](#STARPEACE.industry.ResourceQuantity)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.ResourceQuantity+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON)
        * [.is_valid()](#STARPEACE.industry.ResourceQuantity+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.ResourceQuantity.from_json) ⇒ [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
    * _inner_
        * [~JSON](#STARPEACE.industry.ResourceQuantity..JSON) : <code>object</code>


<a name="STARPEACE.industry.ResourceQuantity+toJSON"></a>

#### STARPEACE.industry.ResourceQuantity#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON) - JSON representation of ResourceQuantity  

<a name="STARPEACE.industry.ResourceQuantity+is_valid"></a>

#### STARPEACE.industry.ResourceQuantity#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceQuantity.from_json"></a>

#### STARPEACE.industry.ResourceQuantity.from_json
Parse raw JSON into a ResourceQuantity object

**Kind**: static method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
**Returns**: [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity) - ResourceQuantity representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON) json - raw JSON object to parse into ResourceQuantity  

<a name="STARPEACE.industry.ResourceQuantity..JSON"></a>

#### STARPEACE.industry.ResourceQuantity~JSON
**Kind**: inner typedef of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource | <code>string</code> | identifier of resource |
| max_velocity | <code>number</code> | maximum quantity of resource per day |
| weight_efficiency | <code>number</code> | importance weight of efficiency on this quantity |
| weight_quality | <code>number</code> | importance weight of qualityy on this quantity |


<a name="STARPEACE.industry.ResourceType"></a>

### STARPEACE.industry.ResourceType
Class representing resource type metadata

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier of resource |
| label_plural | [<code>Translation</code>](#STARPEACE.language.Translation) | Translation with plural label of resource |
| unit_id | <code>string</code> | Unique identifier of resource unit for this resource |
| price | <code>number</code> | Base price of this resource in dollars |


* [.ResourceType](#STARPEACE.industry.ResourceType)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.ResourceType+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON)
        * [.is_valid()](#STARPEACE.industry.ResourceType+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.ResourceType.from_json) ⇒ [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
    * _inner_
        * [~JSON](#STARPEACE.industry.ResourceType..JSON) : <code>object</code>


<a name="STARPEACE.industry.ResourceType+toJSON"></a>

#### STARPEACE.industry.ResourceType#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON) - JSON representation of ResourceType  

<a name="STARPEACE.industry.ResourceType+is_valid"></a>

#### STARPEACE.industry.ResourceType#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceType.from_json"></a>

#### STARPEACE.industry.ResourceType.from_json
Parse raw JSON into a ResourceType object

**Kind**: static method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
**Returns**: [<code>ResourceType</code>](#STARPEACE.industry.ResourceType) - ResourceType representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON) json - raw JSON object to parse into ResourceType  

<a name="STARPEACE.industry.ResourceType..JSON"></a>

#### STARPEACE.industry.ResourceType~JSON
**Kind**: inner typedef of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of resource |
| label_plural | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with plural label of resource |
| unit_id | <code>string</code> | identifier of resource unit for this resource |
| price | <code>number</code> | base price of this resource in dollars |


<a name="STARPEACE.industry.ResourceUnit"></a>

### STARPEACE.industry.ResourceUnit
Class representing the unit of quantities of a resource

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier of resource unit |
| label_plural | [<code>Translation</code>](#STARPEACE.language.Translation) | Translation with plural label of unit |


* [.ResourceUnit](#STARPEACE.industry.ResourceUnit)
    * _instance_
        * [.toJSON()](#STARPEACE.industry.ResourceUnit+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON)
        * [.is_valid()](#STARPEACE.industry.ResourceUnit+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.industry.ResourceUnit.from_json) ⇒ [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
    * _inner_
        * [~JSON](#STARPEACE.industry.ResourceUnit..JSON) : <code>object</code>


<a name="STARPEACE.industry.ResourceUnit+toJSON"></a>

#### STARPEACE.industry.ResourceUnit#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON) - JSON representation of ResourceUnit  

<a name="STARPEACE.industry.ResourceUnit+is_valid"></a>

#### STARPEACE.industry.ResourceUnit#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceUnit.from_json"></a>

#### STARPEACE.industry.ResourceUnit.from_json
Parse raw JSON into a ResourceUnit object

**Kind**: static method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
**Returns**: [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit) - ResourceUnit representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON) json - raw JSON object to parse into ResourceUnit  

<a name="STARPEACE.industry.ResourceUnit..JSON"></a>

#### STARPEACE.industry.ResourceUnit~JSON
**Kind**: inner typedef of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of resource unit |
| label_plural | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with plural label of unit |


<a name="STARPEACE.invention.InventionDefinition"></a>

### STARPEACE.invention.InventionDefinition
Class representing metadata definition of an invention

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier of invention definition metadata |
| category | <code>string</code> | Category of invention |
| industry_type | <code>string</code> | Industry type of invention |
| name | [<code>Translation</code>](#STARPEACE.language.Translation) | Translation object with name of invention |
| description | [<code>Translation</code>](#STARPEACE.language.Translation) | Translation with description of invention |
| depends_on | <code>Array.&lt;string&gt;</code> | Array of other invention definition identifiers this depends on |
| properties | <code>object</code> | Properties of invention |


* [.InventionDefinition](#STARPEACE.invention.InventionDefinition)
    * [new InventionDefinition(id)](#new_STARPEACE.invention.InventionDefinition_new)
    * _instance_
        * [.is_valid()](#STARPEACE.invention.InventionDefinition+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.invention.InventionDefinition.from_json) ⇒ [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
    * _inner_
        * [~JSON](#STARPEACE.invention.InventionDefinition..JSON) : <code>object</code>


<a name="new_STARPEACE.invention.InventionDefinition_new"></a>

#### STARPEACE.invention.InventionDefinition()
Create an InventionDefinition object


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of invention definition metadata |


<a name="STARPEACE.invention.InventionDefinition+is_valid"></a>

#### STARPEACE.invention.InventionDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.invention.InventionDefinition.from_json"></a>

#### STARPEACE.invention.InventionDefinition.from_json
Parse raw JSON into a InventionDefinition object

**Kind**: static method of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
**Returns**: [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition) - InventionDefinition representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.invention.InventionDefinition..JSON) json - raw JSON object to parse into InventionDefinition  

<a name="STARPEACE.invention.InventionDefinition..JSON"></a>

#### STARPEACE.invention.InventionDefinition~JSON
**Kind**: inner typedef of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of invention |
| category | <code>string</code> | category of invention |
| industry_type | <code>string</code> | industry type of invention |
| name | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with name of invention |
| description | [<code>JSON</code>](#STARPEACE.language.Translation..JSON) | translation object with description of invention |
| depends_on | <code>Array.&lt;string&gt;</code> | array of other invention definition identifiers this depends on |
| properties | <code>object</code> | properties of invention |


<a name="STARPEACE.language.Translation"></a>

### STARPEACE.language.Translation
Class representing a multi-language translation

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| german | <code>string</code> | German translation value |
| english | <code>string</code> | English translation value |
| spanish | <code>string</code> | Spanish translation value |
| french | <code>string</code> | French translation value |
| italian | <code>string</code> | Italian translation value |
| portuguese | <code>string</code> | Portuguese translation value |


* [.Translation](#STARPEACE.language.Translation)
    * _instance_
        * [.toJSON()](#STARPEACE.language.Translation+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.language.Translation..JSON)
        * [.is_valid()](#STARPEACE.language.Translation+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.language.Translation.from_json) ⇒ [<code>Translation</code>](#STARPEACE.language.Translation)
    * _inner_
        * [~JSON](#STARPEACE.language.Translation..JSON) : <code>object</code>


<a name="STARPEACE.language.Translation+toJSON"></a>

#### STARPEACE.language.Translation#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>Translation</code>](#STARPEACE.language.Translation)
**Returns**: [<code>JSON</code>](#STARPEACE.language.Translation..JSON) - JSON representation of Translation  

<a name="STARPEACE.language.Translation+is_valid"></a>

#### STARPEACE.language.Translation#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>Translation</code>](#STARPEACE.language.Translation)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.language.Translation.from_json"></a>

#### STARPEACE.language.Translation.from_json
Parse raw JSON into a Translation object

**Kind**: static method of [<code>Translation</code>](#STARPEACE.language.Translation)
**Returns**: [<code>Translation</code>](#STARPEACE.language.Translation) - Translation representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.language.Translation..JSON) json - raw JSON object to parse into Translation  

<a name="STARPEACE.language.Translation..JSON"></a>

#### STARPEACE.language.Translation~JSON
**Kind**: inner typedef of [<code>Translation</code>](#STARPEACE.language.Translation)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DE | <code>string</code> | German translation value |
| EN | <code>object</code> | English translation value |
| ES | <code>object</code> | Spanish translation value |
| FR | <code>object</code> | French translation value |
| IT | <code>object</code> | Italian translation value |
| PT | <code>object</code> | Portuguese translation value |


<a name="STARPEACE.seal.CompanySeal"></a>

### STARPEACE.seal.CompanySeal
Class representing company seal, with metadata and buildings allowed defined.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier of seal |
| name_short | <code>string</code> | Short name for seal (same in all languages) |
| name_long | <code>string</code> | Longer full name for seal (may be same as json.name_short; same in all languages) |
| buildings | <code>Array.&lt;string&gt;</code> | Array of building definition identifiers that can be constructed by seal |


* [.CompanySeal](#STARPEACE.seal.CompanySeal)
    * _instance_
        * [.toJSON()](#STARPEACE.seal.CompanySeal+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON)
        * [.is_valid()](#STARPEACE.seal.CompanySeal+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#STARPEACE.seal.CompanySeal.from_json) ⇒ [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
    * _inner_
        * [~JSON](#STARPEACE.seal.CompanySeal..JSON) : <code>object</code>


<a name="STARPEACE.seal.CompanySeal+toJSON"></a>

#### STARPEACE.seal.CompanySeal#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
**Returns**: [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON) - JSON representation of CompanySeal  

<a name="STARPEACE.seal.CompanySeal+is_valid"></a>

#### STARPEACE.seal.CompanySeal#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.seal.CompanySeal.from_json"></a>

#### STARPEACE.seal.CompanySeal.from_json
Parse raw JSON into a CompanySeal object

**Kind**: static method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
**Returns**: [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal) - CompanySeal representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON) json - raw JSON object to parse into CompanySeal  

<a name="STARPEACE.seal.CompanySeal..JSON"></a>

#### STARPEACE.seal.CompanySeal~JSON
**Kind**: inner typedef of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of seal |
| name_short | <code>string</code> | short name of seal |
| name_long | <code>string</code> | long or full name of seal |
| buildings | <code>Array.&lt;string&gt;</code> | array of building definition identifiers constructable by seal |

