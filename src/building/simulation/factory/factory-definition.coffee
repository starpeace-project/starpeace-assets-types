_ = require('lodash')

FactoryStage = require('./factory-stage')
SimulationDefinition = require('../simulation-definition')

###*
# @typedef {object} STARPEACE.building.simulation.factory.FactoryDefinition~JSON
# @extends STARPEACE.building.simulation.SimulationDefinition~JSON
# @property {STARPEACE.building.simulation.factory.FactoryStage~JSON[]} stages - each stage of factory production
###

###*
# Class representing tradecenter building simulation definition
# @memberof STARPEACE.building.simulation.factory
# @extends STARPEACE.building.simulation.SimulationDefinition
#
# @property {STARPEACE.building.simulation.factory.FactoryStage[]} stages - each stage of factory production
###
class FactoryDefinition extends SimulationDefinition
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
  # Retrieve JSON representation of object
  # @return {STARPEACE.building.simulation.factory.FactoryDefinition~JSON} JSON representation of FactoryDefinition
  ###
  toJSON: () ->
    _.assign(super.toJSON(), {
      stages: _.map(@stages, (s) -> s.toJSON())
    })

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  is_valid: () ->
    return false unless super.is_valid()
    return false unless Array.isArray(@stages) && @stages?.length > 0 && _.every(@stages, (s) -> s.is_valid())
    true

  ###*
  # Parse raw JSON into a FactoryDefinition object
  # @param {STARPEACE.building.simulation.factory.FactoryDefinition~JSON} json - raw JSON object to parse into FactoryDefinition
  # @return {STARPEACE.building.simulation.factory.FactoryDefinition} FactoryDefinition representation of parsed JSON
  ###
  @from_json: (json) ->
    definition = new FactoryDefinition(json)
    definition.stages = _.map(json.stages, FactoryStage.from_json)
    definition

exports = module.exports = FactoryDefinition
