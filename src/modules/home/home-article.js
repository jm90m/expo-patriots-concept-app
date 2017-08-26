import React, { Component } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/styles';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

const TitleText = styled.Text`
  margin-left: 20;
  font-size: 38;
  line-height: 38;
  font-weight: 900;
  color: ${COLORS.RED.FREE_SPEECH_RED};
`;

const SubTitleText = styled.Text`
  margin-left: 20;
  font-size: 38;
  line-height: 38;
  font-weight: 900;
  color: ${COLORS.GREY.SHADY_LADY};
`;

const PreviewText = styled.Text`
  margin-left: 20;
  font-size: 12;
  color: ${COLORS.WHITE.WHITE};
`;

class HomeArticle extends Component {
  render() {
    const { title, subTitle, preview } = this.props;
    return (
      <Container>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subTitle}</SubTitleText>
        <PreviewText>{preview}</PreviewText>
      </Container>
    );
  }
}

export default HomeArticle;
