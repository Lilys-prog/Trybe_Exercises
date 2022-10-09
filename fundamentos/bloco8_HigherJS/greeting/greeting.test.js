const greeting = require('./greeting');
const badMoodGreeting = require('./greeting');
const defaultGreeting = require('./greeting');
const loveGreeting = require('./greeting');

describe('Testa greeting', () => {
  it('Testa se greeting é uma função', () => {
    expect(typeof greeting).toBe('function');
  });  
  it('Testa se ao receber a função defaultGreeting como parâmetro, retorna `Olá, como vai você?`', () => {
    expect(greeting(defaultGreeting())).toBe('Olá, como vai você?');
  }); 
  it('Testa se ao receber a função loveGreeting como parâmetro, retorna `Oi, bb`', () => {
    expect(greeting(loveGreeting())).toBe('Oi, bb');
  }); 
  it('Testa se ao receber a função badMoodGreeting como parâmetro, retorna `Rum!`', () => {
    expect(greeting(badMoodGreeting())).toBe('Rum!');
  });
});