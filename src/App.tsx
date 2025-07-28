import React from 'react';
import { PlaylistRecommendation } from './components/PlaylistRecommendation';
import { RecommendationEngine } from './utils/recommendationEngine';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5f5;
  }

  html, body, #root {
    height: 100%;
  }
`;

function App() {
  const recommendationEngine = new RecommendationEngine();

  return (
    <>
      <GlobalStyle />
      <PlaylistRecommendation recommendationEngine={recommendationEngine} />
    </>
  );
}

export default App; 