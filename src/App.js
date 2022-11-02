
import './App.css';
import { useTheme } from './Store/ThemeProvider';

function App() {
  const [themeStyle, dispatch] = useTheme()


  return (
    <div className={`App ${themeStyle}`} >
      <h1>HERO</h1>
      <button onClick={() => {
        dispatch()
      }}>Theme Toggler</button>
    </div>
  );

}
export default App;
