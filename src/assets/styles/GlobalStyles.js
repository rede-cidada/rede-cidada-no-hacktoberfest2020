import { createGlobalStyle } from 'styled-components/macro';
import { colors, fonts } from './styles';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    
  }

  html { 
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;

    font-family: ${fonts?.base};
    font-size: 62.5%;

    background: ${colors?.primaryDark};
    color: ${colors?.neutral};

    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
