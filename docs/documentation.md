
<a name="STARPEACE"></a>

## STARPEACE

* [STARPEACE](#STARPEACE) : <code>object</code>
    * [.building](#STARPEACE.building) : <code>object</code>
        * [.simulation](#STARPEACE.building.simulation) : <code>object</code>
            * [.bank](#STARPEACE.building.simulation.bank) : <code>object</code>
            * [.civic](#STARPEACE.building.simulation.civic) : <code>object</code>
            * [.factory](#STARPEACE.building.simulation.factory) : <code>object</code>
            * [.headquarters](#STARPEACE.building.simulation.headquarters) : <code>object</code>
            * [.media](#STARPEACE.building.simulation.media) : <code>object</code>
            * [.office](#STARPEACE.building.simulation.office) : <code>object</code>
            * [.park](#STARPEACE.building.simulation.park) : <code>object</code>
            * [.residence](#STARPEACE.building.simulation.residence) : <code>object</code>
            * [.service](#STARPEACE.building.simulation.service) : <code>object</code>
            * [.storage](#STARPEACE.building.simulation.storage) : <code>object</code>
            * [.store](#STARPEACE.building.simulation.store) : <code>object</code>
    * [.industry](#STARPEACE.industry) : <code>object</code>
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
    * [.invention](#STARPEACE.invention) : <code>object</code>
        * [.InventionDefinition](#STARPEACE.invention.InventionDefinition)
            * [new InventionDefinition(id)](#new_STARPEACE.invention.InventionDefinition_new)
            * _instance_
                * [.is_valid()](#STARPEACE.invention.InventionDefinition+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.invention.InventionDefinition.from_json) ⇒ [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)
            * _inner_
                * [~JSON](#STARPEACE.invention.InventionDefinition..JSON) : <code>object</code>
    * [.language](#STARPEACE.language) : <code>object</code>
        * [.Translation](#STARPEACE.language.Translation)
            * _instance_
                * [.toJSON()](#STARPEACE.language.Translation+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.language.Translation..JSON)
                * [.is_valid()](#STARPEACE.language.Translation+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.language.Translation.from_json) ⇒ [<code>Translation</code>](#STARPEACE.language.Translation)
            * _inner_
                * [~JSON](#STARPEACE.language.Translation..JSON) : <code>object</code>
    * [.seal](#STARPEACE.seal) : <code>object</code>
        * [.CompanySeal](#STARPEACE.seal.CompanySeal)
            * _instance_
                * [.toJSON()](#STARPEACE.seal.CompanySeal+toJSON) ⇒ [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON)
                * [.is_valid()](#STARPEACE.seal.CompanySeal+is_valid) ⇒ <code>boolean</code>
            * _static_
                * [.from_json()](#STARPEACE.seal.CompanySeal.from_json) ⇒ [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)
            * _inner_
                * [~JSON](#STARPEACE.seal.CompanySeal..JSON) : <code>object</code>


<a name="STARPEACE.industry.CityZone"></a>

#### STARPEACE.industry.CityZone
Class representing a city zone

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.CityZone#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON) - JSON representation of CityZone  

<a name="STARPEACE.industry.CityZone+is_valid"></a>

##### STARPEACE.industry.CityZone#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.CityZone.from_json"></a>

##### STARPEACE.industry.CityZone.from_json
Parse raw JSON into a CityZone object

**Kind**: static method of [<code>CityZone</code>](#STARPEACE.industry.CityZone)  
**Returns**: [<code>CityZone</code>](#STARPEACE.industry.CityZone) - CityZone representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.CityZone..JSON) json - raw JSON object to parse into CityZone  

<a name="STARPEACE.industry.CityZone..JSON"></a>

##### STARPEACE.industry.CityZone~JSON
**Kind**: inner typedef of [<code>CityZone</code>](#STARPEACE.industry.CityZone)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of zone |
| value | <code>number</code> | unique numeric value of zone |
| color | <code>string</code> | hexidecimal number value of zone color |


<a name="STARPEACE.industry.IndustryCategory"></a>

#### STARPEACE.industry.IndustryCategory
Class representing an industry category

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.IndustryCategory#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON) - JSON representation of IndustryCategory  

<a name="STARPEACE.industry.IndustryCategory+is_valid"></a>

##### STARPEACE.industry.IndustryCategory#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.IndustryCategory.from_json"></a>

##### STARPEACE.industry.IndustryCategory.from_json
Parse raw JSON into a IndustryCategory object

**Kind**: static method of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)  
**Returns**: [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory) - IndustryCategory representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.IndustryCategory..JSON) json - raw JSON object to parse into IndustryCategory  

<a name="STARPEACE.industry.IndustryCategory..JSON"></a>

##### STARPEACE.industry.IndustryCategory~JSON
**Kind**: inner typedef of [<code>IndustryCategory</code>](#STARPEACE.industry.IndustryCategory)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry category |
| label | <code>object</code> | translation object with label of industry |


<a name="STARPEACE.industry.IndustryType"></a>

#### STARPEACE.industry.IndustryType
Class representing an industry type

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.IndustryType#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON) - JSON representation of IndustryType  

<a name="STARPEACE.industry.IndustryType+is_valid"></a>

##### STARPEACE.industry.IndustryType#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.IndustryType.from_json"></a>

##### STARPEACE.industry.IndustryType.from_json
Parse raw JSON into a IndustryType object

**Kind**: static method of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)  
**Returns**: [<code>IndustryType</code>](#STARPEACE.industry.IndustryType) - Level representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.IndustryType..JSON) json - raw JSON object to parse into IndustryType  

<a name="STARPEACE.industry.IndustryType..JSON"></a>

##### STARPEACE.industry.IndustryType~JSON
**Kind**: inner typedef of [<code>IndustryType</code>](#STARPEACE.industry.IndustryType)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of industry type |
| label | <code>object</code> | translation object with label of industry |


<a name="STARPEACE.industry.Level"></a>

#### STARPEACE.industry.Level
Class representing a tycoon level

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.Level#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>Level</code>](#STARPEACE.industry.Level)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.Level..JSON) - JSON representation of Level  

<a name="STARPEACE.industry.Level+is_valid"></a>

##### STARPEACE.industry.Level#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>Level</code>](#STARPEACE.industry.Level)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.Level.from_json"></a>

##### STARPEACE.industry.Level.from_json
Parse raw JSON into a Level object

**Kind**: static method of [<code>Level</code>](#STARPEACE.industry.Level)  
**Returns**: [<code>Level</code>](#STARPEACE.industry.Level) - Level representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.Level..JSON) json - raw JSON object to parse into Level  

<a name="STARPEACE.industry.Level..JSON"></a>

##### STARPEACE.industry.Level~JSON
**Kind**: inner typedef of [<code>Level</code>](#STARPEACE.industry.Level)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of level |
| label | <code>object</code> | translation object with label of level |
| level | <code>number</code> | unique number of this level starting at one and incrementing |


<a name="STARPEACE.industry.ResourceQuantity"></a>

#### STARPEACE.industry.ResourceQuantity
Class representing a resource quantity and metadata

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.ResourceQuantity#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON) - JSON representation of ResourceQuantity  

<a name="STARPEACE.industry.ResourceQuantity+is_valid"></a>

##### STARPEACE.industry.ResourceQuantity#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceQuantity.from_json"></a>

##### STARPEACE.industry.ResourceQuantity.from_json
Parse raw JSON into a ResourceQuantity object

**Kind**: static method of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)  
**Returns**: [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity) - ResourceQuantity representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceQuantity..JSON) json - raw JSON object to parse into ResourceQuantity  

<a name="STARPEACE.industry.ResourceQuantity..JSON"></a>

##### STARPEACE.industry.ResourceQuantity~JSON
**Kind**: inner typedef of [<code>ResourceQuantity</code>](#STARPEACE.industry.ResourceQuantity)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| resource | <code>string</code> | identifier of resource |
| max_velocity | <code>number</code> | maximum quantity of resource per day |
| weight_efficiency | <code>number</code> | importance weight of efficiency on this quantity |
| weight_quality | <code>number</code> | importance weight of qualityy on this quantity |


<a name="STARPEACE.industry.ResourceType"></a>

#### STARPEACE.industry.ResourceType
Class representing resource type metadata

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.ResourceType#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON) - JSON representation of ResourceType  

<a name="STARPEACE.industry.ResourceType+is_valid"></a>

##### STARPEACE.industry.ResourceType#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceType.from_json"></a>

##### STARPEACE.industry.ResourceType.from_json
Parse raw JSON into a ResourceType object

**Kind**: static method of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)  
**Returns**: [<code>ResourceType</code>](#STARPEACE.industry.ResourceType) - ResourceType representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceType..JSON) json - raw JSON object to parse into ResourceType  

<a name="STARPEACE.industry.ResourceType..JSON"></a>

##### STARPEACE.industry.ResourceType~JSON
**Kind**: inner typedef of [<code>ResourceType</code>](#STARPEACE.industry.ResourceType)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of resource |
| label_plural | <code>object</code> | translation object with plural label of resource |
| unit_id | <code>string</code> | identifier of resource unit for this resource |
| price | <code>number</code> | base price of this resource in dollars |


<a name="STARPEACE.industry.ResourceUnit"></a>

#### STARPEACE.industry.ResourceUnit
Class representing the unit of quantities of a resource

**Kind**: static class of [<code>industry</code>](#STARPEACE.industry)  
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

##### STARPEACE.industry.ResourceUnit#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)  
**Returns**: [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON) - JSON representation of ResourceUnit  

<a name="STARPEACE.industry.ResourceUnit+is_valid"></a>

##### STARPEACE.industry.ResourceUnit#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.industry.ResourceUnit.from_json"></a>

##### STARPEACE.industry.ResourceUnit.from_json
Parse raw JSON into a ResourceUnit object

**Kind**: static method of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)  
**Returns**: [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit) - ResourceUnit representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.industry.ResourceUnit..JSON) json - raw JSON object to parse into ResourceUnit  

<a name="STARPEACE.industry.ResourceUnit..JSON"></a>

##### STARPEACE.industry.ResourceUnit~JSON
**Kind**: inner typedef of [<code>ResourceUnit</code>](#STARPEACE.industry.ResourceUnit)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of resource unit |
| label_plural | <code>object</code> | translation object with plural label of unit |


<a name="STARPEACE.invention.InventionDefinition"></a>

#### STARPEACE.invention.InventionDefinition
Class representing metadata definition of an invention

**Kind**: static class of [<code>invention</code>](#STARPEACE.invention)  
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

##### STARPEACE.invention.InventionDefinition()
Create an InventionDefinition object


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique identifier of invention definition metadata |


<a name="STARPEACE.invention.InventionDefinition+is_valid"></a>

##### STARPEACE.invention.InventionDefinition#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.invention.InventionDefinition.from_json"></a>

##### STARPEACE.invention.InventionDefinition.from_json
Parse raw JSON into a InventionDefinition object

**Kind**: static method of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)  
**Returns**: [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition) - InventionDefinition representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.invention.InventionDefinition..JSON) json - raw JSON object to parse into InventionDefinition  

<a name="STARPEACE.invention.InventionDefinition..JSON"></a>

##### STARPEACE.invention.InventionDefinition~JSON
**Kind**: inner typedef of [<code>InventionDefinition</code>](#STARPEACE.invention.InventionDefinition)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of invention |
| category | <code>string</code> | category of invention |
| industry_type | <code>string</code> | industry type of invention |
| name | <code>object</code> | translation object with name of invention |
| description | <code>object</code> | translation object with description of invention |
| depends_on | <code>Array.&lt;string&gt;</code> | array of other invention definition identifiers this depends on |
| properties | <code>object</code> | properties of invention |


<a name="STARPEACE.language.Translation"></a>

#### STARPEACE.language.Translation
Class representing a multi-language translation

**Kind**: static class of [<code>language</code>](#STARPEACE.language)  
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

##### STARPEACE.language.Translation#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>Translation</code>](#STARPEACE.language.Translation)  
**Returns**: [<code>JSON</code>](#STARPEACE.language.Translation..JSON) - JSON representation of Translation  

<a name="STARPEACE.language.Translation+is_valid"></a>

##### STARPEACE.language.Translation#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>Translation</code>](#STARPEACE.language.Translation)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.language.Translation.from_json"></a>

##### STARPEACE.language.Translation.from_json
Parse raw JSON into a Translation object

**Kind**: static method of [<code>Translation</code>](#STARPEACE.language.Translation)  
**Returns**: [<code>Translation</code>](#STARPEACE.language.Translation) - Translation representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.language.Translation..JSON) json - raw JSON object to parse into Translation  

<a name="STARPEACE.language.Translation..JSON"></a>

##### STARPEACE.language.Translation~JSON
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

#### STARPEACE.seal.CompanySeal
Class representing company seal, with metadata and buildings allowed defined.

**Kind**: static class of [<code>seal</code>](#STARPEACE.seal)  
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

##### STARPEACE.seal.CompanySeal#toJSON
Retrieve JSON representation of object

**Kind**: instance method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)  
**Returns**: [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON) - JSON representation of CompanySeal  

<a name="STARPEACE.seal.CompanySeal+is_valid"></a>

##### STARPEACE.seal.CompanySeal#is_valid
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  

<a name="STARPEACE.seal.CompanySeal.from_json"></a>

##### STARPEACE.seal.CompanySeal.from_json
Parse raw JSON into a CompanySeal object

**Kind**: static method of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)  
**Returns**: [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal) - CompanySeal representation of parsed JSON  
**Params**: [<code>JSON</code>](#STARPEACE.seal.CompanySeal..JSON) json - raw JSON object to parse into CompanySeal  

<a name="STARPEACE.seal.CompanySeal..JSON"></a>

##### STARPEACE.seal.CompanySeal~JSON
**Kind**: inner typedef of [<code>CompanySeal</code>](#STARPEACE.seal.CompanySeal)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of seal |
| name_short | <code>string</code> | short name of seal |
| name_long | <code>string</code> | long or full name of seal |
| buildings | <code>Array.&lt;string&gt;</code> | array of building definition identifiers constructable by seal |

