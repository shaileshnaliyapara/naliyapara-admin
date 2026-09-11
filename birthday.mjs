export function formatBirthdayMessage(name, village) {
  const n = String(name ?? '').trim();
  const v = String(village ?? '').trim();
  if (!n) throw new Error('Name is required');
  if (!v) throw new Error('Village is required');
  const displayName = /નળીયાપરા\s*$/u.test(n) ? n : `${n} નળીયાપરા`;
  return `${displayName} (${v}) ને જન્મદિવસની ખૂબ ખૂબ શુભેચ્છાઓ! 🎉🎂\nનળીયાપરા પરિવાર તરફથી હાર્દિક શુભકામનાઓ. ❤️`;
}
