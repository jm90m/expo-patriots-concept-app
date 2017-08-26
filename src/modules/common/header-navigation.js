import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  height: 50;
  background-color: rgba(0,0,0,0.4);
  align-items: center;
  flex-direction: row;
`;

const NavigationTitle = styled.Text`
  color: #fff;
  font-size: 12;
  font-weight: 800;
`;

const TouchableIcon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 7;
  margin-bottom: 7;
  margin-left: 7;
  margin-right: 7;
`;

class HeaderNavigation extends Component {
  static propTypes = {
    currentScreen: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    currentScreen: '',
  };

  render() {
    const { onPress, title, currentScreen } = this.props;
    const navigationTitle = title && currentScreen
      ? `${currentScreen} | ${title}`
      : `${currentScreen}`;
    return (
      <Container>
        <TouchableIcon onPress={onPress}>
          <MaterialIcons
            name="more-vert"
            size={20}
            style={{
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              marginRight: 5,
              fontWeight: '600',
            }}
            color="#fff"
          />
        </TouchableIcon>
        <NavigationTitle>
          {navigationTitle}
        </NavigationTitle>
      </Container>
    );
  }
}

export default HeaderNavigation;
