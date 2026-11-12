const strings = {
  en: {
    'brand.short': 'PABNA / 047', 'brand.name': 'PABNA PARANORMAL RESEARCH CELL', 'brand.tag': 'FIELD SIGNAL TERMINAL',
    'nav.gateway': 'Gateway', 'nav.surveillance': 'Surveillance', 'nav.archive': 'Patient archive', 'nav.lockdown': 'Lockdown', 'nav.evidence': 'Evidence dossier',
    'hud.sound': 'Enable audio', 'hud.muted': 'Mute audio', 'hud.unassigned': 'operator unassigned',
    'common.of': 'of', 'common.saved': 'Progress saved locally · fictional experience', 'common.back': 'Back to gateway', 'common.continue': 'Continue', 'common.locked': 'Access restricted',
    'surveillance.exposure': 'Exposure', 'surveillance.distortion': 'Distortion', 'surveillance.gain': 'Signal gain', 'surveillance.night': 'Night vision', 'surveillance.glitch': 'Glitch', 'surveillance.withheld': 'Signal withheld', 'surveillance.plain': 'No readable signal', 'surveillance.recovered': 'Evidence recovered', 'surveillance.live': 'Live simulation', 'surveillance.tamper': 'tamper events · {n}',
    'lockdown.code.title': 'Decrypted final transmission', 'lockdown.wires.selected': 'Selected pattern · {morse}', 'lockdown.wires.hint': 'Select a Morse wire, then its matching letter terminal', 'lockdown.wires.title': 'Morse wire reconnection',
  },
  bn: {
    'brand.short': 'পাবনা / ০৪৭', 'brand.name': 'পাবনা প্যারানরমাল রিসার্চ সেল', 'brand.tag': 'ফিল্ড সিগন্যাল টার্মিনাল',
    'nav.gateway': 'গেটওয়ে', 'nav.surveillance': 'নজরদারি', 'nav.archive': 'রোগীর নথি', 'nav.lockdown': 'লকডাউন', 'nav.evidence': 'প্রমাণের নথি',
    'hud.sound': 'শব্দ চালু', 'hud.muted': 'শব্দ বন্ধ', 'hud.unassigned': 'অপারেটর নেই',
    'common.of': 'এর মধ্যে', 'common.saved': 'অগ্রগতি এই ব্রাউজারে সংরক্ষিত · কাল্পনিক অভিজ্ঞতা', 'common.back': 'গেটওয়েতে ফিরুন', 'common.continue': 'চালিয়ে যান', 'common.locked': 'প্রবেশ নিষিদ্ধ',
    'surveillance.exposure': 'এক্সপোজার', 'surveillance.distortion': 'বিকৃতি', 'surveillance.gain': 'সিগন্যাল গেইন', 'surveillance.night': 'নাইট ভিশন', 'surveillance.glitch': 'গ্লিচ', 'surveillance.withheld': 'সংকেত গোপন', 'surveillance.plain': 'পঠনযোগ্য সংকেত নেই', 'surveillance.recovered': 'প্রমাণ উদ্ধার', 'surveillance.live': 'লাইভ সিমুলেশন', 'surveillance.tamper': 'বিকৃতির সংখ্যা · {n}',
    'lockdown.code.title': 'শেষ সংকেতের পাঠোদ্ধার', 'lockdown.wires.selected': 'নির্বাচিত সংকেত · {morse}', 'lockdown.wires.hint': 'মোর্স তার নির্বাচন করে সঠিক অক্ষরে যুক্ত করুন', 'lockdown.wires.title': 'মোর্স তার সংযোগ',
  }
};
export function translate(lang, key, vars = {}) {
  let value = strings[lang]?.[key] ?? strings.en[key] ?? key;
  for (const [name, replacement] of Object.entries(vars)) value = value.replaceAll(`{${name}}`, String(replacement));
  return value;
}
export function tx(data, lang = 'en') { return typeof data === 'string' ? data : (data?.[lang] || data?.en || ''); }
