import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import Home from './src/screens/home';
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  return (
    <Home/>
  );
}