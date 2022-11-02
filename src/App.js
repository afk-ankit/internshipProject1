
import './App.css';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { useTheme } from './Store/ThemeProvider';

function App() {
  const [themeStyle, dispatch] = useTheme()


  return (
    <div className={`App ${themeStyle}`} >
      <Newsletter />
      <Footer />
      <button onClick={() => { dispatch() }}>Toggle</button>
    </div>
  );

}
export default App;
