<a name="module_STARPEACE"></a>

## STARPEACE

* [STARPEACE](#module_STARPEACE)
    * [.ResourceType](#module_STARPEACE.ResourceType)
    * [.ResourceUnit](#module_STARPEACE.ResourceUnit)
    * [.InventionDefinition](#module_STARPEACE.InventionDefinition)
    * [.CompanySeal](#module_STARPEACE.CompanySeal)
        * _instance_
            * [.toJSON()](#module_STARPEACE.CompanySeal+toJSON) ⇒ <code>CompanySeal~JSON</code>
            * [.is_valid()](#module_STARPEACE.CompanySeal+is_valid) ⇒ <code>boolean</code>
        * _static_
            * [.from_json()](#module_STARPEACE.CompanySeal.from_json) ⇒ <code>CompanySeal</code>
        * _inner_
            * [~JSON](#module_STARPEACE.CompanySeal..JSON) : <code>Object</code>

<a name="module_STARPEACE.ResourceType"></a>

### STARPEACE.ResourceType
Class representing resource type metadata

**Kind**: static class of [<code>STARPEACE</code>](#module_STARPEACE)  
<a name="module_STARPEACE.ResourceUnit"></a>

### STARPEACE.ResourceUnit
Class representing the unit of quantities of a resource

**Kind**: static class of [<code>STARPEACE</code>](#module_STARPEACE)  
<a name="module_STARPEACE.InventionDefinition"></a>

### STARPEACE.InventionDefinition
Class representing metadata definition of an invention

**Kind**: static class of [<code>STARPEACE</code>](#module_STARPEACE)  
<a name="module_STARPEACE.CompanySeal"></a>

### STARPEACE.CompanySeal
Class representing company seal, with metadata and buildings allowed defined.

**Kind**: static class of [<code>STARPEACE</code>](#module_STARPEACE)  

* [.CompanySeal](#module_STARPEACE.CompanySeal)
    * _instance_
        * [.toJSON()](#module_STARPEACE.CompanySeal+toJSON) ⇒ <code>CompanySeal~JSON</code>
        * [.is_valid()](#module_STARPEACE.CompanySeal+is_valid) ⇒ <code>boolean</code>
    * _static_
        * [.from_json()](#module_STARPEACE.CompanySeal.from_json) ⇒ <code>CompanySeal</code>
    * _inner_
        * [~JSON](#module_STARPEACE.CompanySeal..JSON) : <code>Object</code>

<a name="module_STARPEACE.CompanySeal+toJSON"></a>

#### companySeal.toJSON() ⇒ <code>CompanySeal~JSON</code>
Retrieve JSON representation of object

**Kind**: instance method of [<code>CompanySeal</code>](#module_STARPEACE.CompanySeal)  
**Returns**: <code>CompanySeal~JSON</code> - [CompanySeal~JSON](CompanySeal~JSON) representation of CompanySeal  
<a name="module_STARPEACE.CompanySeal+is_valid"></a>

#### companySeal.is\_valid() ⇒ <code>boolean</code>
Determine whether object and game configuration has valid attributes.

**Kind**: instance method of [<code>CompanySeal</code>](#module_STARPEACE.CompanySeal)  
**Returns**: <code>boolean</code> - true if object has valid configuration, false otherwise  
<a name="module_STARPEACE.CompanySeal.from_json"></a>

#### CompanySeal.from\_json() ⇒ <code>CompanySeal</code>
Parse raw JSON into a CompanySeal object

**Kind**: static method of [<code>CompanySeal</code>](#module_STARPEACE.CompanySeal)  
**Returns**: <code>CompanySeal</code> - CompanySeal representation of parsed JSON  
**Params**: <code>Object</code> json - raw JSON object to parse into CompanySeal  
**Params**: <code>string</code> json.id - identitifier of seal  
**Params**: <code>string</code> json.name_short - short name for seal  
**Params**: <code>string</code> json.name_long - longer full name for seal (may be same as json.name_short)  
**Params**: <code>string[]</code> json.buildings - array of building definition identifiers constructable by seal  
<a name="module_STARPEACE.CompanySeal..JSON"></a>

#### CompanySeal~JSON : <code>Object</code>
**Kind**: inner typedef of [<code>CompanySeal</code>](#module_STARPEACE.CompanySeal)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | identifier of seal |
| name_short | <code>string</code> | short name of seal |
| name_long | <code>string</code> | long or full name of seal |
| buildings | <code>Array.&lt;string&gt;</code> | array of building definition identifiers constructable by seal |

