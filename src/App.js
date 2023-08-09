import './App.css';
import { ThemeProvider } from './themeContext';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <div className=''>
      <ThemeProvider initialTheme={'dark'}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
