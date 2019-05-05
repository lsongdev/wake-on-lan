const wol = require('..');
const assert = require('assert');

const MAC = 'D8-50-E6-3F-1A-FD';

const packet = wol.createMagicPacket(MAC);
// The magic packet is a broadcast frame containing anywhere within its payload 6 bytes of all 255 (FF FF FF FF FF FF in hexadecimal), 
// followed by sixteen repetitions of the target computer's 48-bit MAC address, for a total of 102 bytes.
assert.equal(packet[0], 0xff);
assert.equal(packet.length, 102);