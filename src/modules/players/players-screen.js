import React, { Component } from 'react';
import styled from 'styled-components/native';
import HeaderNavigation from '../common/header-navigation';
import { LayoutAnimation, Dimensions, TouchableWithoutFeedback } from 'react-native';
import players from './players';
import { COLORS } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import MenuNavigation from '../common/menu-navigation';
const fieldBackground = require('../../images/field.png');
const overlay = require('../../images/light-overlay.png');
const { height, width } = Dimensions.get('window');

const BackgroundImage = styled.Image`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5;
  margin-right: 5;
  margin-top: 5;
  padding-left: 60;
  width: 100%;
`;

const RowOverlay = styled.View`
  width: 100%;
  margin-top: 20;
  margin-bottom: 20;
  background-color: rgba(0,0,0,.4);
`;

const Row = styled.View`
  justify-content: center;
`;

const RowTitleText = styled.Text`
  text-align: right;
  font-weight: 800;
  font-size: 18;
  color: #E0E0E0;
  align-self: flex-end;
`;

const StatContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
`;

const StatText = styled.Text`
  color: #80C0FF;
  text-align: right;
  font-weight: 700;
  font-size: 12;
`;

const StatDescriptionText = styled.Text`
  text-align: right;
  color: ${COLORS.WHITE.WHITE};
  font-size: 12;
  font-weight: 600;
`;

const Circle = styled.View`
  align-items: center;
  justify-content: center;
  width: 70;
  height: 70;
  border-radius: 35;
  border-color: ${COLORS.GREY.SHADY_LADY};
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
  border-width: 3;
  background-color: rgba(0,0,0,0.2);
`;

const CircleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  font-size: 28;
  font-weight: 700;
`;

const NavigationControls = styled.View`
  position: absolute;
  height: 50;
  top: ${height / 2 - 50};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${width};
`;

const NavigationTouchableCircle = styled.TouchableOpacity`
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
  border-radius: 15;
  border-width: 1;
  border-color: ${COLORS.WHITE.WHITE};
  background-color: rgba(255,255,255,0.2);
`;

class PlayersScreen extends Component {
  constructor(props) {
    super(props);
    this._playerIndex = 0;
    this.state = {
      currentPlayer: players[this._playerIndex],
      displayMenu: true,
    };

    this.nextPlayer = this.nextPlayer.bind(this);
    this.prevPlayer = this.prevPlayer.bind(this);
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

  nextPlayer() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (this._playerIndex < players.length - 1) {
      this._playerIndex += 1;
      this.setState({
        currentPlayer: players[this._playerIndex],
      });
    }
  }

  prevPlayer() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (this._playerIndex > 0) {
      this._playerIndex -= 1;
      this.setState({
        currentPlayer: players[this._playerIndex],
      });
    }
  }

  render() {
    const { currentPlayer, displayMenu } = this.state;
    const { navigation } = this.props;
    const playerStatFields = [
      {
        label: 'GAMES',
        key: 'games',
      },
      {
        label: 'TOUCHDOWNS',
        key: 'touchdowns',
      },
      {
        label: 'YARDS',
        key: 'yards',
      },
      {
        label: 'COMPLETIONS',
        key: 'completions',
      },
    ];
    return (
      <TouchableWithoutFeedback onPress={this.hideMenu} style={{ flex: 1 }}>
        <BackgroundImage
          source={fieldBackground}
          resizeMode={'stretch'}
          style={{ width: null, height: null }}
        >
          <BackgroundImage
            source={currentPlayer.image}
            resizeMode={'stretch'}
            style={{ width: null, height: null }}
          >
            <BackgroundImage
              source={overlay}
              resizeMode={'stretch'}
              style={{ width: null, height: null }}
            >
              <HeaderNavigation
                title={currentPlayer.name.toUpperCase()}
                onPress={this.toggleMenu}
                currentScreen={'Players'}
              />
              {displayMenu && <MenuNavigation navigation={navigation} />}
              <Container>
                {playerStatFields.map((stat, index) => (
                  <RowOverlay key={index}>
                    <RowContainer>
                      <Row>
                        <RowTitleText>{stat.label}</RowTitleText>
                        <StatContainer>
                          <StatText>{currentPlayer.highlights[stat.key].stat}</StatText>
                          <StatDescriptionText>
                            {` ${currentPlayer.highlights[stat.key].description.toUpperCase()}`}
                          </StatDescriptionText>
                        </StatContainer>
                      </Row>
                      <Circle>
                        <CircleText>{currentPlayer[stat.key]}</CircleText>
                      </Circle>
                    </RowContainer>
                  </RowOverlay>
                ))}
                <NavigationControls>
                  <NavigationTouchableCircle>
                    <MaterialIcons
                      name="navigate-before"
                      onPress={this.prevPlayer}
                      size={20}
                      color={COLORS.WHITE.WHITE}
                    />
                  </NavigationTouchableCircle>
                  <NavigationTouchableCircle>
                    <MaterialIcons
                      name="navigate-next"
                      onPress={this.nextPlayer}
                      size={20}
                      color={COLORS.WHITE.WHITE}
                    />
                  </NavigationTouchableCircle>
                </NavigationControls>
              </Container>
            </BackgroundImage>
          </BackgroundImage>
        </BackgroundImage>
      </TouchableWithoutFeedback>
    );
  }
}

export default PlayersScreen;
