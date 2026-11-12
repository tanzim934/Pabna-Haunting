/** Generated Web Audio, no external media files or microphone permissions. */
let ctx;
let enabled = false;
let ambientOsc;
let ambientGain;
function context() {
  if (typeof window === 'undefined') return null;
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return null;
  ctx ??= new Ctor();
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}
function note(freq = 220, ms = 90, shape = 'sine', vol = .045, delay = 0) {
  if (!enabled) return;
  const c = context(); if (!c) return;
  const osc = c.createOscillator(); const gain = c.createGain();
  osc.type = shape; osc.frequency.setValueAtTime(freq, c.currentTime + delay);
  gain.gain.setValueAtTime(0.0001, c.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(vol, c.currentTime + delay + .015);
  gain.gain.exponentialRampToValueAtTime(.0001, c.currentTime + delay + ms / 1000);
  osc.connect(gain); gain.connect(c.destination);
  osc.start(c.currentTime + delay); osc.stop(c.currentTime + delay + ms / 1000 + .02);
}
function stopAmbience() {
  if (ambientOsc) { try { ambientOsc.stop(); } catch { /* already stopped */ } ambientOsc.disconnect(); ambientOsc = null; }
  if (ambientGain) { ambientGain.disconnect(); ambientGain = null; }
}
function beginAmbience() {
  if (ambientOsc || !enabled) return;
  const c = context(); if (!c) return;
  ambientOsc = c.createOscillator(); ambientGain = c.createGain();
  ambientOsc.type = 'sine'; ambientOsc.frequency.value = 54;
  ambientGain.gain.value = 0.007;
  ambientOsc.connect(ambientGain); ambientGain.connect(c.destination); ambientOsc.start();
}
export const sound = {
  setEnabled(value) { enabled = Boolean(value); if (enabled) beginAmbience(); else stopAmbience(); },
  click() { note(380, 65); },
  success() { note(410, 120); note(560, 135, 'sine', .04, .13); note(720, 175, 'sine', .03, .27); },
  error() { note(160, 200, 'sawtooth', .025); },
  glitch() { note(60, 240, 'sawtooth', .03); note(107, 170, 'square', .02, .07); },
  beep(type = 'short') { note(type === 'long' ? 510 : 650, type === 'long' ? 180 : 85, 'sine', .05); },
};
