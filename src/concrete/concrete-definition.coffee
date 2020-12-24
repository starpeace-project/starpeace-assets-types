_ = require('lodash')

###*
# @typedef {object} STARPEACE.concrete.ConcreteDefinition~JSON
# @property {string} id - identifier of asset
# @property {string} image - image path of asset
###

###*
# Class representing concrete metadata
# @memberof STARPEACE.concrete
#
# @property {string} id - Unique identifier of concrete asset
# @property {string} image - image path of asset
###
exports = module.exports = class ConcreteDefinition

  ###*
  # Determine whether object and game configuration has valid attributes.
  # @return {boolean} true if object has valid configuration, false otherwise
  ###
  isValid: () ->
    return false unless _.isString(@id) && @id.length > 0
    return false unless _.isString(@image) && @image.length > 0
    true

  ###*
  # Retrieve JSON representation of object
  # @return {STARPEACE.concrete.ConcreteDefinition~JSON} JSON representation of ConcreteDefinition
  ###
  toJson: () ->
    {
      id: @id
      image: @image
    }

  ###*
  # Parse raw JSON into a ConcreteDefinition object
  # @params {STARPEACE.concrete.ConcreteDefinition~JSON} json - raw JSON object to parse into ConcreteDefinition
  # @return {STARPEACE.concrete.ConcreteDefinition} ConcreteDefinition representation of parsed JSON
  ###
  @fromJson = (json) ->
    concrete = new ConcreteDefinition()
    concrete.id = json.id
    concrete.image = json.image
    concrete
