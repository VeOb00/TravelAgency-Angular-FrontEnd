import { durationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new durationPipe();
    expect(pipe).toBeTruthy();
  });
});
