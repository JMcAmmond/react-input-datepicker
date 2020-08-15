import React from 'react';
import { Container, IntroContainer, HeadLines } from './elements';
import Blob from './Blob';

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <Container>
        <Blob />
        <HeadLines>
          <h1>react-input-datepicker</h1>
          <p>A simple and reusable input datepicker component for React</p>
        </HeadLines>
      </Container>
    </IntroContainer>
  );
};

export default Intro;
