import { useSyncExternalStore } from 'react';

export const GATEWAY_PASSCODE = '1947';
export const EVIDENCE = [
  { slot: 1, key: 'cam_ward', digit: '7', en: 'Ward 07 recording', bn: 'ওয়ার্ড ০৭ রেকর্ডিং' },
  { slot: 2, key: 'cam_stair', digit: '1', en: 'Stairwell anomaly', bn: 'সিঁড়ির অস্বাভাবিক সংকেত' },
  { slot: 3, key: 'cam_cellar', digit: '4', en: 'Basement negative', bn: 'বেসমেন্টের নেগেটিভ' },
  { slot: 4, key: 'archive_echo', digit: '9', en: 'The echo cipher', bn: 'প্রতিধ্বনি সংকেত' },
  { slot: 5, key: 'archive_bridge', digit: '2', en: 'Hardinge Bridge file', bn: 'হার্ডিঞ্জ ব্রিজ ফাইল' },
  { slot: 6, key: 'archive_river', digit: '6', en: 'Ichamati memorandum', bn: 'ইছামতী স্মারক' },
];
export const WIRES = [
  { id: 'wire_a', morse: '.-', letter: 'A' },
  { id: 'wire_t', morse: '-', letter: 'T' },
  { id: 'wire_e', morse: '.', letter: 'E' },
  { id: 'wire_n', morse: '-.', letter: 'N' },
];
export const TERMINALS = [
  { id: 'port_e', letter: 'E' }, { id: 'port_n', letter: 'N' },
  { id: 'port_a', letter: 'A' }, { id: 'port_t', letter: 'T' },
];
export const CAMERAS = [
  { id: 'CAM–01', room: { en: 'Isolation ward 07', bn: 'আইসোলেশন ওয়ার্ড ০৭' }, note: { en: 'The light bleeds through the wall. Restore exposure to recover the numeral.', bn: 'দেয়ালের ভেতর দিয়ে আলো আসছে। সংখ্যা দেখতে এক্সপোজার বাড়ান।' }, reveal: 'cam_ward', condition: { type: 'exposure', value: 74 } },
  { id: 'CAM–02', room: { en: 'Eastern stairwell', bn: 'পূর্ব দিকের সিঁড়ি' }, note: { en: 'The distortion hides a number beneath the interference.', bn: 'বিকৃতির ভেতরে একটি সংখ্যা লুকানো আছে।' }, reveal: 'cam_stair', condition: { type: 'distortion', value: 72 } },
  { id: 'CAM–03', room: { en: 'Lower cellar', bn: 'নিচতলার বেসমেন্ট' }, note: { en: 'The last witness can only be seen in infrared.', bn: 'শেষ সাক্ষীকে শুধু নাইট ভিশনে দেখা যায়।' }, reveal: 'cam_cellar', condition: { type: 'nightVision' } },
  { id: 'CAM–04', room: { en: 'Surgery theatre', bn: 'অপারেশন থিয়েটার' }, note: { en: 'No subject detected. Repeated interference is normal here.', bn: 'কোনো ব্যক্তি পাওয়া যায়নি। এখানে সংকেতের বিকৃতি স্বাভাবিক।' } },
  { id: 'CAM–05', room: { en: 'Records corridor', bn: 'রেকর্ড করিডর' }, note: { en: 'A distant voice repeats: the bridge remembers.', bn: 'দূরের কণ্ঠ বলছে: সেতু সব মনে রেখেছে।' } },
  { id: 'CAM–06', room: { en: 'River-side entrance', bn: 'নদীর দিকের প্রবেশপথ' }, note: { en: 'The entrance is sealed. The archive holds the remaining evidence.', bn: 'প্রবেশপথ বন্ধ। বাকি সূত্র আর্কাইভে আছে।' } },
];
export const PATIENTS = [
  { id: 'P-001', name: 'Mariam Rahman', age: 28, ward: '07', status: 'missing', location: 'Isolation Ward', en: 'Patient whispered a four-letter word: HFKR. Each letter was moved three steps forward.', bn: 'রোগী চার অক্ষরের শব্দ বলেছেন: HFKR। প্রতিটি অক্ষর তিন ঘর এগিয়ে লেখা।' },
  { id: 'P-009', name: 'Aminul Haque', age: 42, ward: '12', status: 'archived', location: 'Tarash Bahadur Shahi Mosque', en: 'An old prayer stone marked the corridor. The date on the back was deliberately obscured.', bn: 'একটি পুরোনো প্রার্থনার পাথর করিডরের চিহ্ন ছিল। পেছনের তারিখ মুছে ফেলা হয়েছে।' },
  { id: 'P-014', name: 'Shaila Akter', age: 35, ward: '03', status: 'missing', location: 'Hardinge Bridge', en: 'The telegram says: the steel crossing opened in 1915. The year is the key.', bn: 'টেলিগ্রামে লেখা আছে: লোহার সেতু ১৯১৫ সালে চালু হয়। সালটিই চাবি।' },
  { id: 'P-021', name: 'Kabir Hossain', age: 51, ward: '10', status: 'archived', location: 'Ichamati River', en: 'Eight letters were scratched on the observation mirror: I C H A M A T I.', bn: 'আয়নায় আটটি অক্ষর আঁচড়ানো: I C H A M A T I।' },
  { id: 'P-032', name: 'Nasrin Sultana', age: 19, ward: '04', status: 'transferred', location: 'Eastern Stairwell', en: 'Temperature dropped after midnight, precisely when the second surveillance feed went dark.', bn: 'মধ্যরাতে তাপমাত্রা কমে যায়, তখন দ্বিতীয় ক্যামেরার পর্দা অন্ধকার হয়।' },
  { id: 'P-046', name: 'Sabbir Chowdhury', age: 56, ward: '02', status: 'archived', location: 'Old Archive', en: 'The archive should never be accessed without the surveillance sequence.', bn: 'নজরদারির সূত্র ছাড়া আর্কাইভে প্রবেশ করা উচিত নয়।' },
  { id: 'P-057', name: 'Farzana Karim', age: 31, ward: '05', status: 'missing', location: 'Basement', en: 'Infrared camera logs may show what the unaided eye cannot.', bn: 'ইনফ্রারেড ক্যামেরায় খালি চোখে না দেখা বিষয় ধরা পড়ে।' },
  { id: 'P-068', name: 'Rezaul Islam', age: 47, ward: '09', status: 'transferred', location: 'River Gate', en: 'The last rescue signal was interrupted before it reached the Ichamati.', bn: 'শেষ উদ্ধার সংকেত ইছামতীতে পৌঁছানোর আগেই বিচ্ছিন্ন হয়ে যায়।' },
];
const STORE_KEY = 'pabna_haunting_react_v1';
const defaults = Object.freeze({
  lang: 'en', sound: false, operator: '', clearance: false, reveals: {},
  wireSolved: false, strikes: 0, escapeDeadline: null, rescued: false, failed: false,
});
function read() {
  if (typeof window === 'undefined') return { ...defaults };
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || '{}');
    return { ...defaults, ...saved, reveals: saved.reveals && typeof saved.reveals === 'object' ? saved.reveals : {} };
  } catch { return { ...defaults }; }
}
let snapshot = read();
const listeners = new Set();
function notify() { for (const listener of listeners) listener(); }
export function getState() { return snapshot; }
export function setState(patch) {
  snapshot = { ...snapshot, ...patch };
  try { window.localStorage.setItem(STORE_KEY, JSON.stringify(snapshot)); } catch { /* restricted storage */ }
  notify();
  return snapshot;
}
export function reveal(key) {
  if (!EVIDENCE.some(item => item.key === key) || snapshot.reveals[key]) return;
  setState({ reveals: { ...snapshot.reveals, [key]: true } });
}
export function collectedCode(reveals = snapshot.reveals) {
  return EVIDENCE.map(item => reveals[item.key] ? item.digit : '·').join('');
}
export const foundEvidence = (state = snapshot) => EVIDENCE.filter(e => state.reveals[e.key]).length;
export const allEvidenceFound = (state = snapshot) => foundEvidence(state) === EVIDENCE.length;
export function startLockdown() {
  if (!allEvidenceFound()) return false;
  if (!snapshot.escapeDeadline && !snapshot.rescued) setState({ escapeDeadline: Date.now() + 5 * 60 * 1000, failed: false });
  return true;
}
export function penalize(seconds = 15) {
  if (!snapshot.escapeDeadline || snapshot.failed || snapshot.rescued) return;
  const deadline = snapshot.escapeDeadline - seconds * 1000;
  setState({ escapeDeadline: deadline, strikes: snapshot.strikes + 1, failed: deadline <= Date.now() });
}
export function resetGame() {
  const lang = snapshot.lang;
  const sound = snapshot.sound;
  setState({ ...defaults, lang, sound, reveals: {} });
}
export function useHaunting() {
  return useSyncExternalStore(callback => { listeners.add(callback); return () => listeners.delete(callback); }, getState, getState);
}
if (typeof window !== 'undefined') window.addEventListener('storage', event => {
  if (event.key === STORE_KEY) { snapshot = read(); notify(); }
});
