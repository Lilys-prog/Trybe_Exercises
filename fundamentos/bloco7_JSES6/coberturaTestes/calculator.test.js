// ao escrever testes é importante pensar na abrangência dos mesmos e nos cenários possíveis. Só pq o teste funciona e tem cobertura, não quer dizer que seja o melhor teste ou que ele garante que a função tem alcance para todos os casos. Especialmente se os testes forem muito simples.

const {sum, sub, mult, div} = require('./calculator');

describe('The sum function', () => {
  it('returns 3 when sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  })
  it('returns -3 when sum(-1, -2)', () => {
    expect(sum(-1, -2)).toBe(-3);
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

// no caso da função div, precisa colocar um teste que cubra a possibilidade de erro ao tentar dividir por 0
describe('The div function', () => {
  it('returns 4 when div(100, 25)', () => {
    expect(div(100, 25)).toBe(4);
  })
  it('throwns an error whhen it tries to divide by zero', () => {
    expect(() => div(1, 0)).toThrow(Error);
  })
})