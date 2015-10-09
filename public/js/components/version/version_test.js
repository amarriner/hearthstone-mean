'use strict';

describe('hearthstone.version module', function() {
  beforeEach(module('hearthstone.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
