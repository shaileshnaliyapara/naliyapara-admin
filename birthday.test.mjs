import assert from 'node:assert/strict';
import { formatBirthdayMessage } from './birthday.mjs';

assert.equal(
  formatBirthdayMessage('મહેશ', 'નળીયાપરા'),
  'મહેશ નળીયાપરા (નળીયાપરા) ને જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ! 🎉🎂\nનળીયાપરા પરિવાર તરફથી હાર્દિક શુભકામનાઓ. ❤️'
);

assert.equal(
  formatBirthdayMessage('મહેશ નળીયાપરા', 'અમદાવાદ'),
  'મહેશ નળીયાપરા (અમદાવાદ) ને જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ! 🎉🎂\nનળીયાપરા પરિવાર તરફથી હાર્દિક શુભકામનાઓ. ❤️'
);

console.log('birthday formatting tests passed');
