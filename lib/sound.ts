/**
 * Web Audio API Procedural Synthesis for VEYRA × Niraj Jewellers Atelier
 * Zero external audio dependencies. Generates subtle meditative goldsmith drone & metallic ticks.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private droneGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private isPlaying: boolean = false;
  private listeners: Set<(active: boolean) => void> = new Set();

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public subscribe(listener: (active: boolean) => void): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  public start(): boolean {
    const ctx = this.getContext();
    if (!ctx) return false;

    if (this.isPlaying) return true;

    try {
      const now = ctx.currentTime;

      // Master drone gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.035, now + 1.8);

      // Low pass filter to create a warm, meditative subterranean room tone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, now);
      filter.Q.setValueAtTime(1.2, now);

      // Oscillator 1: Fundamental metallic resonance at 55Hz (A1)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, now);

      // Oscillator 2: First harmonic at 110Hz with slight detune (A2)
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(110.4, now);

      // Subtle pink noise for furnace / workshop air warmth
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.015;
        b6 = white * 0.115926;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      // Connect nodes
      osc1.connect(filter);
      osc2.connect(filter);
      noiseSource.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      noiseSource.start(now);

      this.droneGain = masterGain;
      this.osc1 = osc1;
      this.osc2 = osc2;
      this.noiseNode = noiseSource;
      this.isPlaying = true;
      this.notify();
      return true;
    } catch (e) {
      console.warn("Web Audio drone initialization deferred:", e);
      return false;
    }
  }

  public stop(): void {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;
      if (this.droneGain) {
        this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
        this.droneGain.gain.exponentialRampToValueAtTime(0.00001, now + 0.6);
      }

      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.noiseNode?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.noiseNode?.disconnect();
        } catch {
          // ignore disconnect errors
        }
        this.osc1 = null;
        this.osc2 = null;
        this.noiseNode = null;
        this.droneGain = null;
      }, 700);

      this.isPlaying = false;
      this.notify();
    } catch (e) {
      console.warn("Sound stop failed:", e);
    }
  }

  /**
   * Produces a soft, high-frequency metallic tick (~1800Hz, 12ms decay) on UI clicks
   */
  public playTick(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1850, now);
      filter.Q.setValueAtTime(4.0, now);

      osc.type = "sine";
      osc.frequency.setValueAtTime(1820, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.012);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.015);
    } catch {
      // ignore tick error if user hasn't interacted
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const sound = new SoundEngine();
