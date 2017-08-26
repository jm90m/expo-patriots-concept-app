import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/modules/home/home-screen';
import { DrawerNavigator } from 'react-navigation';
import { AppLoading, Asset } from 'expo';
import PlayersScreen from './src/modules/players/players-screen';
import NewsScreen from './src/modules/news/news-screen';

const AppDrawerNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  News: {
    screen: NewsScreen,
  },
  Players: {
    screen: PlayersScreen,
  },
});

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <AppDrawerNavigator />
        </View>
      );
    }
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./src/images/brady.png'),
          require('./src/images/edelman.png'),
          require('./src/images/field.png'),
          require('./src/images/gronk.png'),
          require('./src/images/home-background.png'),
          require('./src/images/jimmy.png'),
          require('./src/images/light-overlay.png'),
          require('./src/images/news-background.png'),
          require('./src/images/overlay.png'),
          require('./src/images/patriots-winning.jpg'),
          require('./src/images/patriots-winning-2.jpg'),
        ]),
      ]);
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.',
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}
