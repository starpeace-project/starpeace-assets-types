import _ from 'lodash';

/**
 * @property {string} resourceId - identifier of resource
 * @property {number} maxVelocity - maximum quantity of resource per hour
 * @property {number} weightEfficiency - importance weight of efficiency on this quantity
 * @property {number} weightQuality - importance weight of quality on this quantity
 */
export interface ResourceQuantityJson {
  resourceId: string;
  maxVelocity: number;
  weightEfficiency: number;
  weightQuality: number;
}

/**
 * Class representing a resource quantity and metadata
 * @memberof STARPEACE.industry
 *
 * @property {string} resourceId - identifier of resource
 * @property {number} maxVelocity - maximum quantity of resource per hour
 * @property {number} weightEfficiency - importance weight of efficiency on this quantity
 * @property {number} weightQuality - importance weight of qualityy on this quantity
 */
export class ResourceQuantity {
  resourceId: string;
  maxVelocity: number;
  weightEfficiency: number;
  weightQuality: number;

  constructor (resourceId: string, maxVelocity: number, weightEfficiency: number, weightQuality: number) {
    this.resourceId = resourceId;
    this.maxVelocity = maxVelocity;
    this.weightEfficiency = weightEfficiency;
    this.weightQuality = weightQuality;
  }

  /**
   * Determine whether object and game configuration has valid attributes.
   * @return {boolean} true if object has valid configuration, false otherwise
   */
  isValid (): boolean {
    if (!_.isString(this.resourceId) || !this.resourceId.length) return false;
    if (!_.isNumber(this.maxVelocity) || this.maxVelocity <= 0) return false;
    if (!_.isNumber(this.weightEfficiency) || this.weightEfficiency < 0) return false;
    if (!_.isNumber(this.weightQuality) || this.weightQuality < 0) return false;
    return true;
  }

  /**
   * Retrieve JSON representation of object
   * @return {STARPEACE.industry.ResourceQuantityJson} JSON representation of ResourceQuantity
   */
  toJson (): ResourceQuantityJson {
    return {
      resourceId: this.resourceId,
      maxVelocity: this.maxVelocity,
      weightEfficiency: this.weightEfficiency,
      weightQuality: this.weightQuality
    };
  }

  /**
   * Parse raw JSON into a ResourceQuantity object
   * @params {STARPEACE.industry.ResourceQuantityJson} json - raw JSON object to parse into ResourceQuantity
   * @return {STARPEACE.industry.ResourceQuantity} ResourceQuantity representation of parsed JSON
   */
  static fromJson (json: ResourceQuantityJson): ResourceQuantity {
    return new ResourceQuantity(json.resourceId, json.maxVelocity, json.weightEfficiency ?? 0, json.weightQuality ?? 0);
  }
}
