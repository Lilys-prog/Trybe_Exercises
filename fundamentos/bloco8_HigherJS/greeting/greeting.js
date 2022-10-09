
// const greetingPeople = () => 'Oláááááá, enfermeira!';

// module.exports = (greetingPeople);

// =========================================
// =========================================
// =========================================

const greeting = (callback) => {
  return callback();
}

const defaultGreeting = () => 'Olá, como vai você?';

const badMoodGreeting = () => 'Rum!';

const loveGreeting = () => 'Oi, bb';


module.exports = (greeting, loveGreeting, badMoodGreeting, defaultGreeting);