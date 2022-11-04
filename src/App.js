
import './App.css';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './Store/ThemeProvider';

function App() {
  const [themeStyle, dispatch] = useTheme()


  return (
    <div className={`App ${themeStyle}`} >
      <ThemeSwitcher />
      <div className='app__section '>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );

}
export default App;
