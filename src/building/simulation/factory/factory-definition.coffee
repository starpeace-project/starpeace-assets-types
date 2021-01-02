_ = require('lodash')

FactoryStage = require('./factory-stage')
SimulationDefinition = require('../simulation-definition')

###*
# @typedef {object} STARPEACE.building.simulation.factory.FactoryDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.building.simulation.factory.FactoryStage~JSON[]} stages - each stage of factory production
###

###*
# Class representing factory building simulation definition
# @memberof STARPEACE.building.simulation.factory
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.building.simulation.factory.FactoryStage[]} stages - each stage of factory production
###
exports = module.exports = class FactoryDefinition extends SimulationDefinition
  ###*
  # Type identifier for simulation definition
  # @static
  ###
  @TYPE: () -> 'FACTORY'

  ###*
  # Create a FactoryDefinition object
  # @param {STARPEACE.building.simulation.SimulationDefinition~JSON} json - raw JSON object to populate into simulation definition
  ###
  constructor: (json) ->
    super(json)

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless super.isValid()
    return false unless Array.isArray(@stages) && @stages?.length > 0 && _.every(@stages, (s) -> s.isValid())
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.factory.FactoryDefinition~JSON} JSON representation of FactoryDefinition
  ###
  toJson: () ->
    _.assign(super.toJson(), {
      stages: _.map(@stages, (s) -> s.toJson())
    })

  ###*
  # Parse raw JSON into a FactoryDefinition object
  # @param {STARPEACE.building.simulation.factory.FactoryDefinition~JSON} json - raw JSON object to parse into FactoryDefinition
  # @return {STARPEACE.building.simulation.factory.FactoryDefinition} FactoryDefinition representation of parsed JSON
  ###
  @fromJson: (json) ->
    definition = new FactoryDefinition(json)
    definition.stages = _.map(json.stages, FactoryStage.fromJson)
    definition
