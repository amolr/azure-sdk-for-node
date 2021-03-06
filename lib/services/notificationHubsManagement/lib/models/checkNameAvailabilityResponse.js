/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response containing the status of namespace availability
 *
 */
class CheckNameAvailabilityResponse {
  /**
   * Create a CheckNameAvailabilityResponse.
   * @member {boolean} [nameAvailable] Checks if the namespace name is
   * available
   * @member {string} [reason] States the reason due to which the namespace
   * name is not available
   * @member {string} [message] The messsage returned when checking for
   * namespace name availability
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailabilityResponse
   *
   * @returns {object} metadata of CheckNameAvailabilityResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailabilityResponse',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailabilityResponse',
        modelProperties: {
          nameAvailable: {
            required: false,
            serializedName: 'nameAvailable',
            type: {
              name: 'Boolean'
            }
          },
          reason: {
            required: false,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailabilityResponse;
