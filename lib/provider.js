'use strict';

/**
Provider interface.

This class provides roles, permissions and attributes to check and
validate user access.

Usage

  var user = 123;
  var roles = provider.getRoles(user);
  var permissions = provider.getPermissions(roles[i]);
  var attributes = provider.getAttributes(roles[i]);

Note : methods may return a Promise

Extend concrete providers and implement the declared methods.
*/
module.exports = class Provider {

  /**
  Return all the roles available for the given user. The return value
  is an object where the keys are the roles available and the values
  are the depth level of each role.

  The method mey return a promise resolving with the
  expected return value.

  @param use {mixed}
  @return {Object<string,number>}
  */
  getRoles(user) {
    throw new Error('Not implemented');
  }

  /**
  Return all permissions for the specified role.

  The method mey return a promise resolving with the
  expected return value.

  @param role {mixed}
  @return {Array<string>}
  */
  getPermissions(role) {
    throw new Error('Not implemented');
  }

  /**
  Return all attributes for the specified role.

  The method mey return a promise resolving with the
  expected return value.

  @param role {mixed}
  @return {Array<string>}
  */
  getAttributes(role) {
    throw new Error('Not implemented');
  }

}