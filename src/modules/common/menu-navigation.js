import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/styles';

const MenuContainer = styled.View`
  flex: 4;
  justify-content: center;
`;

const MenuItemTouchable = styled.TouchableOpacity`
  margin-bottom: 5;
  margin-top: 5;
  margin-left: 50;
  width: 100;
  background-color: transparent;
`;

const MenuItemText = styled.Text`
  color: ${props => (props.isActive ? COLORS.RED.FREE_SPEECH_RED : COLORS.WHITE.WHITE)};
  font-weight: 700;
  font-size: 12;
`;

class MenuNavigation extends Component {
  static propTypes = {
    selected: PropTypes.string,
    navigation: PropTypes.object,
    styles: PropTypes.object,
  };

  static defaultProps = {
    navigation: {},
    styles: {},
  };

  render() {
    const { navigation, styles } = this.props;
    const menuOptions = [
      { label: 'Home', value: 'Home' },
      { label: 'News', value: 'News' },
      { label: 'Players', value: 'Players' },
    ];
    return (
      <MenuContainer style={styles}>
        {menuOptions.map((option, index) => (
          <MenuItemTouchable key={index} onPress={() => navigation.navigate(option.value)}>
            <MenuItemText>{option.label}</MenuItemText>
          </MenuItemTouchable>
        ))}
      </MenuContainer>
    );
  }
}

export default MenuNavigation;
