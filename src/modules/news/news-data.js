const patriotsWinning = require('../../images/patriots-winning.jpg');
const patriotsWinning2 = require('../../images/patriots-winning-2.jpg');

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
const newsData = years
  .map((year, index) => {
    let alignRight;

    if (index % 2 === 0) {
      alignRight = true;
    }

    return {
      year: year,
      info: [
        {
          image: index % 2 === 0 ? patriotsWinning2 : patriotsWinning,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          alignRight: alignRight,
        },
        {
          image: index % 2 === 0 ? patriotsWinning : patriotsWinning2,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          alignRight: !alignRight,
        },
        {
          image: index % 2 === 0 ? patriotsWinning2 : patriotsWinning,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nulla nec quam tincidunt sollicitudin vitae non lacus.',
          alignRight: alignRight,
        },
      ],
    };
  })
  .reverse();

export default newsData;
