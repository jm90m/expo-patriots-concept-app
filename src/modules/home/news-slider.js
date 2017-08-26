import React, { Component } from 'react';
import { Dimensions, LayoutAnimation } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/styles';
import sliderData from './slider-data';

const { height, width } = Dimensions.get('window');

const SliderContainer = styled.View`
  flex: 1;
`;

const SliderItemContainer = styled.View`
  flex: 1;
  padding-top: 40;
  padding-right: 20;
  padding-left: 20;
  padding-bottom: 40;
`;

const Title = styled.Text`
  font-size: 30;
  color: ${COLORS.WHITE.WHITE};
  padding-left: 5;
  padding-right: 5;
  padding-top: 5;
`;

const PreviewText = styled.Text`
  font-size: 14;
  color: ${COLORS.WHITE.WHITE};
  padding-left: 5;
  padding-right: 5;
  padding-top: 5;
  padding-bottom: 5;
`;

const PreviewImage = styled.Image`
  height: 200;
  width: 100%;
  align-self: center;
`;

const NavigationControls = styled.View`
  flex: 1;
  height: 50;
  width: ${width};
  top: 140;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
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

class NewsSlider extends Component {
  constructor(props) {
    super(props);
    this._newsIndex = 0;
    this.state = {
      currentNews: sliderData[this._newsIndex],
    };

    this.prevNews = this.prevNews.bind(this);
    this.nextNews = this.nextNews.bind(this);
  }

  prevNews() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this._newsIndex > 0) {
      this._newsIndex -= 1;
      this.setState({
        currentNews: sliderData[this._newsIndex],
      });
    }
  }

  nextNews() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this._newsIndex < sliderData.length - 1) {
      this._newsIndex += 1;
      this.setState({
        currentNews: sliderData[this._newsIndex],
      });
    }
  }

  render() {
    const { currentNews } = this.state;
    return (
      <SliderContainer>
        <SliderItemContainer>
          <Title numberOfLines={2}>{currentNews.title}</Title>
          <PreviewImage source={currentNews.image} resizeMode={'stretch'} />
          <PreviewText numberOfLines={2}>{currentNews.previewText}</PreviewText>
        </SliderItemContainer>
        <NavigationControls>
          <NavigationTouchableCircle onPress={this.prevNews}>
            <MaterialIcons
              name="navigate-before"
              onPress={this.prevPlayer}
              size={20}
              color={COLORS.WHITE.WHITE}
            />
          </NavigationTouchableCircle>
          <NavigationTouchableCircle onPress={this.nextNews}>
            <MaterialIcons
              name="navigate-next"
              onPress={this.nextPlayer}
              size={20}
              color={COLORS.WHITE.WHITE}
            />
          </NavigationTouchableCircle>
        </NavigationControls>
      </SliderContainer>
    );
  }
}

export default NewsSlider;
