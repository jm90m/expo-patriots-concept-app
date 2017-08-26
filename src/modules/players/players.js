const brady = require('../../images/brady.png');
const gronk = require('../../images/gronk.png');
const edelman = require('../../images/edelman.png');
const jimmy = require('../../images/jimmy.png');

const patriotsPlayers = [
  {
    name: 'Tom Brady',
    image: brady,
  },
  {
    name: 'Rob Gronkowski',
    image: gronk,
  },
  {
    name: 'Julian Edelman',
    image: edelman,
  },
  {
    name: 'Jimmy Garoppolo',
    image: jimmy,
  },
];

export default patriotsPlayers.map(player => {
  return {
    ...player,
    games: Math.floor(Math.random() * 1000),
    touchdowns: Math.floor(Math.random() * 1000),
    yards: Math.floor(Math.random() * 1000),
    completions: Math.floor(Math.random() * 1000),
    highlights: {
      games: {
        stat: `${Math.floor(Math.random() * 100)}%`,
        description: 'Lorem ipsum dolor sit amet',
      },
      touchdowns: {
        stat: `${Math.floor(Math.random() * 100)}%`,
        description: 'Lorem ipsum dolor sit amet',
      },
      yards: {
        stat: `${Math.floor(Math.random() * 100)}%`,
        description: 'Lorem ipsum dolor sit amet',
      },
      completions: {
        stat: `${Math.floor(Math.random() * 100)}%`,
        description: 'Lorem ipsum dolor sit amet',
      },
    },
  };
});
