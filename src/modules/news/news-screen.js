import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderNavigation from '../common/header-navigation';
import MenuNavigation from '../common/menu-navigation';
import NewsBox from './news-box';
import { COLORS } from '../../constants/styles';
import newsData from './news-data';

const newsBackground = require('../../images/news-background.png');
const overlay = require('../../images/overlay.png');
const { height, width } = Dimensions.get('window');

const BackgroundImage = styled.Image`
  flex: 1;
`;

const CalendarListView = styled.ListView``;

const CalendarItemListView = styled.ListView`
  flex: 1;
  position: absolute;
  top: 0;
  left: 10;
  width: ${width - 10}
`;

const CalendarContainer = styled.View`
  height: 650;
  width: ${width};
`;

const CalendarYearContainer = styled.View`
`;

const CalendarYear = styled.Text`
  margin-top: 260;
  padding-top: 10;
  padding-bottom: 10;
  color: ${COLORS.WHITE.WHITE};
  font-size: 45;
  font-weight: 900;
`;

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class NewsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(newsData),
      displayMenu: false,
    };

    this.hideMenu = this.hideMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderCalendarRow = this.renderCalendarRow.bind(this);
    this.renderCalendarItem = this.renderCalendarItem.bind(this);
  }

  hideMenu() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      displayMenu: false,
    });
  }

  showMenu() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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

  renderCalendarItem(rowData) {
      return (
        <NewsBox
          title={rowData.text.toUpperCase()}
          image={rowData.image}
          previewText={rowData.previewText}
          contentAlignRight={rowData.alignRight}
        />
      );
  }

  renderCalendarRow(rowData) {
    return (
      <CalendarContainer>
        <CalendarYearContainer>
          <CalendarYear style={{ transform: [{ rotate: '90deg' }] }}>
            {rowData.year}
          </CalendarYear>
        </CalendarYearContainer>
        <CalendarItemListView
          contentContainerStyle={{ flex: 1 }}
          dataSource={ds.cloneWithRows(rowData.info)}
          renderRow={this.renderCalendarItem}
        />
      </CalendarContainer>
    );
  }

  render() {
    const { navigation } = this.props;
    const { displayMenu, dataSource } = this.state;
    return (
      <BackgroundImage
        resizeMode={'stretch'}
        source={newsBackground}
        style={{ width: null, height: null }}
      >
        <BackgroundImage
          resizeMode={'stretch'}
          source={overlay}
          style={{ width: null, height: null }}
        >
          <HeaderNavigation currentScreen={'News'} onPress={this.toggleMenu} />
          {displayMenu && <MenuNavigation navigation={navigation} />}
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: height,
                width: 2,
                backgroundColor: COLORS.GREY.SHADY_LADY,
                position: 'absolute',
                left: width / 2,
              }}
            />
            <CalendarListView dataSource={dataSource} renderRow={this.renderCalendarRow} />
          </View>
        </BackgroundImage>
      </BackgroundImage>
    );
  }
}

export default NewsScreen;
