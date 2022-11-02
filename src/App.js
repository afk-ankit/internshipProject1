
import './App.css';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { useTheme } from './Store/ThemeProvider';

function App() {
  const [themeStyle, dispatch] = useTheme()


  return (
    <div className={`App ${themeStyle}`} >
      <div className='app__section '>
        <button onClick={() => { dispatch() }}>Toggle Theme</button>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );

}
export default App;
