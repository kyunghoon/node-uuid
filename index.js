var v1 = require('./v1');
var v4 = require('./v4');

module.exports = {
  v1,
  v4,
  ordered: {
    generate: function() {
      var unordered = v1();
      return unordered.substr(14, 4) + unordered.substr(9, 4) + unordered.substr(0, 8) + unordered.substr(19, 4) + unordered.substr(24, unordered.length);
    },

    toBinary16: function(orderedUuid) {
      return new Buffer(orderedUuid, 'hex');
    },

    fromBinary16: function(binaryOrderedUuid) {
      return binaryOrderedUuid.toString('hex');
    }
  }
};
