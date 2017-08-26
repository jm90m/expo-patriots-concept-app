import React, { Component } from 'react';
import styled from 'styled-components/native';
import { LayoutAnimation } from 'react-native';
import HeaderNavigation from '../common/header-navigation';
import MenuNavigation from '../common/menu-navigation';
import NewsSlider from './news-slider';

const homeBackground = require('../../images/home-background.png');
const overlay = require('../../images/overlay.png');

const BackgroundImage = styled.Image`
  flex: 1;
`;

const NewsContainer = styled.View`
  flex: 3;
`;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  hideMenu() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      displayMenu: false,
    });
  }

  showMenu() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      displayMenu: true,
    });
  }

  toggleMenu() {
    if (this.state.displayMenu) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  render() {
    const { navigation } = this.props;
    const { displayMenu } = this.state;
    return (
      <BackgroundImage
        resizeMode={'stretch'}
        source={homeBackground}
        style={{ width: null, height: null }}
      >
        <BackgroundImage
          resizeMode={'stretch'}
          source={overlay}
          style={{ width: null, height: null }}
        >
          <HeaderNavigation currentScreen={'Home'} onPress={this.toggleMenu} />
          {displayMenu && <MenuNavigation navigation={navigation} />}
          <NewsContainer>
            <NewsSlider />
          </NewsContainer>
        </BackgroundImage>
      </BackgroundImage>
    );
  }
}

export default HomeScreen;
