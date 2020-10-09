import React from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyles from './assets/styles/GlobalStyles';
import { FlexBox } from './shared-ui/Containers';

import Header from './components/Header';
import Hero from './components/Hero';
import Members from './components/Members';

const App = () => (
  <FlexBox>
    <Normalize />
    <GlobalStyles />
    <Header />
    <Hero />
    <Members />
  </FlexBox>
);
export default App;
