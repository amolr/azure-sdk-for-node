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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResponseWithContinuationVirtualNetwork class.
 * @constructor
 * The response of a list operation.
 * @member {array} [value] Results of the list operation.
 * 
 * @member {string} [nextLink] Link for next set of results.
 * 
 */
function ResponseWithContinuationVirtualNetwork() {
}

util.inherits(ResponseWithContinuationVirtualNetwork, Array);

/**
 * Defines the metadata of ResponseWithContinuationVirtualNetwork
 *
 * @returns {object} metadata of ResponseWithContinuationVirtualNetwork
 *
 */
ResponseWithContinuationVirtualNetwork.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResponseWithContinuation[VirtualNetwork]',
    type: {
      name: 'Composite',
      className: 'ResponseWithContinuationVirtualNetwork',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VirtualNetworkElementType',
                type: {
                  name: 'Composite',
                  className: 'VirtualNetwork'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResponseWithContinuationVirtualNetwork;