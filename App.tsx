import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/home';
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <Home/>
    </ThemeProvider>
  );
}