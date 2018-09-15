const wol = require('..');
const assert = require('assert');

wol.wake('d850e63f1afd', function(err, res){
  assert.ok(!err, err);
  assert.ok(res, err);
});
