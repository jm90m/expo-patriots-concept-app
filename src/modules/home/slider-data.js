const patriotsWinning = require('../../images/patriots-winning.jpg');
const patriotsWinning2 = require('../../images/patriots-winning-2.jpg');

const newsTitles = [
  'Patriots Undefeated this season',
  'Patriots 2018 Superbowl Champions',
  'Winning too much!?',
  'Patriots 2017 Superbowl Champions',
];
const sliderData = newsTitles.map((title, index) => ({
  title,
  image: index % 2 === 0 ? patriotsWinning2 : patriotsWinning,
  previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
}));

export default sliderData;
