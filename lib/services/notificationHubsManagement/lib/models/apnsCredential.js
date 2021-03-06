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
 * Description of a NotificationHub ApnsCredential.
 *
 */
class ApnsCredential {
  /**
   * Create a ApnsCredential.
   * @member {string} [apnsCertificate] The APNS certificate.
   * @member {string} [certificateKey] The certificate key.
   * @member {string} [endpoint] The endpoint of this credential.
   * @member {string} [thumbprint] The Apns certificate Thumbprint
   * @member {string} [keyId] A 10-character key identifier (kid) key, obtained
   * from your developer account
   * @member {string} [bundleId] Id that uniquely identifies an Application
   * Bundle on a device or simulator
   * @member {string} [teamId] A unique 10 character string generated by Apple
   * thats assigned to your team
   * @member {string} [token] Provider Authentication Token, obtained through
   * your developer account
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApnsCredential
   *
   * @returns {object} metadata of ApnsCredential
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApnsCredential',
      type: {
        name: 'Composite',
        className: 'ApnsCredential',
        modelProperties: {
          apnsCertificate: {
            required: false,
            serializedName: 'properties.apnsCertificate',
            type: {
              name: 'String'
            }
          },
          certificateKey: {
            required: false,
            serializedName: 'properties.certificateKey',
            type: {
              name: 'String'
            }
          },
          endpoint: {
            required: false,
            serializedName: 'properties.endpoint',
            type: {
              name: 'String'
            }
          },
          thumbprint: {
            required: false,
            serializedName: 'properties.thumbprint',
            type: {
              name: 'String'
            }
          },
          keyId: {
            required: false,
            serializedName: 'properties.keyId',
            type: {
              name: 'String'
            }
          },
          bundleId: {
            required: false,
            serializedName: 'properties.bundleId',
            type: {
              name: 'String'
            }
          },
          teamId: {
            required: false,
            serializedName: 'properties.teamId',
            type: {
              name: 'String'
            }
          },
          token: {
            required: false,
            serializedName: 'properties.token',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApnsCredential;
