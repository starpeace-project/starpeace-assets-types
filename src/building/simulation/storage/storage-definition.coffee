_ = require('lodash')

SimulationDefinition = require('../simulation-definition')
ResourceQuantity = require('../../../industry/resource-quantity')

StorageQuantity = require('./storage-quantity')

###*
# @typedef {object} STARPEACE.building.simulation.storage.StorageDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity~JSON[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.building.simulation.storage.StorageQuantity~JSON[]} storage - array of resource quantities stored by building
###

###*
# Class representing storage building simulation definition
# @memberof STARPEACE.building.simulation.storage
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.industry.ResourceQuantity[]} labor - labor requirements for building
# @property {STARPEACE.industry.ResourceQuantity[]} operations - array of resource quantities required for building operations
# @property {STARPEACE.building.simulation.storage.StorageQuantity[]} storage - array of resource quantities stored by building
###
exports = module.exports = class StorageDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'STORAGE'

  ###*
  # Create a StorageDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@labor) && (!@labor.length || _.every(@labor, (i) -> i.isValid()))
    return false unless Array.isArray(@operations) && (!@operations.length || _.every(@operations, (i) -> i.isValid()))
    return false unless Array.isArray(@storage) && (!@storage.length || _.every(@storage, (i) -> i.isValid()))
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.storage.StorageDefinition~JSON} JSON representation of StorageDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      labor: _.map(@labor, (l) -> l.toJson())
      operations: _.map(@operations, (o) -> o.toJson())
      storage: _.map(@storage, (s) -> s.toJson())
    })

  ###*
  # Parse raw JSON into a StorageDefinition object
  # @param {STARPEACE.building.simulation.storage.StorageDefinition~JSON} json - raw JSON object to parse into StorageDefinition
  # @return {STARPEACE.building.simulation.storage.StorageDefinition} StorageDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new StorageDefinition(json)
    definition.labor = _.map(json.labor, ResourceQuantity.fromJson)
    definition.operations = _.map(json.operations, ResourceQuantity.fromJson)
    definition.storage = _.map(json.storage, StorageQuantity.fromJson)
    definition
