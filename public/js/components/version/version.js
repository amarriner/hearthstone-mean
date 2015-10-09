'use strict';

angular.module('hearthstone.version', [
  'hearthstone.version.interpolate-filter',
  'hearthstone.version.version-directive'
])

.value('version', '0.1');
