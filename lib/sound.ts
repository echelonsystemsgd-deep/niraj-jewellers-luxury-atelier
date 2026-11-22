/**
 * Sound Engine - Silent Mode
 * Audio has been disabled per luxury quiet-brand specifications.
 */

class SoundEngine {
  public subscribe(listener: (active: boolean) => void): () => void {
    listener(false);
    return () => {};
  }
  public toggle(): boolean {
    return false;
  }
  public start(): boolean {
    return false;
  }
  public stop(): void {}
  public playTick(): void {}
  public playSuccess(): void {}
  public getStatus(): boolean {
    return false;
  }
}

export const sound = new SoundEngine();
