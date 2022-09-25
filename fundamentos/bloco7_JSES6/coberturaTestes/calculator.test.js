const {sum, sub, mult, div} = require('./calculator');

describe('The sum function', () => {
  it('returns 3 when sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  })
})

describe('The sub function', () => {
  it('returns 2 when sub(5, 3)', () => {
    expect(sub(5, 3)).toBe(2);
  })
  it('Returns -1 when sub(2, 3)', () => {
    expect(sub(2, 3)).toBe(-1);
  })
  it('Returns 0 when sub(2, 2)', () => {
    expect(sub(2, 2)).toBe(0);
  })
})

describe('The mult function', () => {
  it('returns 6 when mult(3, 2)', () => {
    expect(mult(3, 2)).toBe(6);
  })
  it('returns -6 when mult(3, -2)', () => {
    expect(mult(3, -2)).toBe(-6);
  })
})

describe('The div function', () => {
  it('returns 3 when div(1, 2)', () => {
    expect(div(1, 2)).toBe(3);
  })
})