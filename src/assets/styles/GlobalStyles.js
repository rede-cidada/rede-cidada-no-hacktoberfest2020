import { createGlobalStyle } from 'styled-components/macro';
import { colors, fonts } from './styles';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    width: 100%;
    margin: 0;
    
  }

  html { 
    font-family: ${fonts?.base};
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    background: ${colors?.primaryDark};
    color: ${colors?.neutral};

    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
