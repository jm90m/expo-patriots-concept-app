import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/styles';
const Container = styled.View`
`;

const ContentContainer = styled.View`
  align-self: ${props => (props.alignRight ? 'flex-end' : 'flex-start')};
  height: 170;
  width: 150;
  background-color: ${COLORS.WHITE.WHITE};
  margin-right: 10;
  margin-left: 10;
`;

const Title = styled.Text`
  color: ${COLORS.GREEN.CYPRUS};
  font-weight: 700;
  font-size: 11;
`;

const PreviewText = styled.Text`
  font-size: 10;
  font-weight: 500;
  color: #555;
`;

const PreviewTextContainer = styled.View`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  justify-content: space-between;
`;

const PreviewImage = styled.Image`
  flex: 3;
`;

class NewsBox extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.any,
    previewText: PropTypes.string,
    contentAlignRight: PropTypes.bool,
  };

  render() {
    const { title, image, previewText, contentAlignRight } = this.props;
    return (
      <Container>
        <ContentContainer alignRight={contentAlignRight}>
          <PreviewImage
            source={image}
            style={{ height: null, width: null }}
            resizeMode={'stretch'}
          />
          <PreviewTextContainer>
            <Title numberOfLines={2}>{title}</Title>
            <PreviewText numberOfLines={1}>{previewText}</PreviewText>
          </PreviewTextContainer>
        </ContentContainer>
      </Container>
    );
  }
}

export default NewsBox;
