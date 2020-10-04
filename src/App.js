import React from 'react';

import { Normalize } from 'styled-normalize';
import Hero from './components/Hero';
import GlobalStyles from './assets/styles/GlobalStyles';
import { FlexBox } from './shared-ui/Containers';
import Members from './components/Members';

const App = () => (
  <FlexBox>
    <Normalize />
    <GlobalStyles />

    <Hero />
    <Members />
  </FlexBox>
);
export default App;
