import { useState } from 'react';
import Header from './components/Header/index';
import ColoursList from './components/ColoursList';
import AddColorForm from './components/AddColorForm';
import './global-styles/App.scss';

function App() {
  const [state, setState] = useState({ colors: [] });
  
  const addColorHandler = (colorName, colorCode) => {
    const color = {
      colorName,
      colorCode
    };
    const colors = [
      ...state.colors,
      color
    ];
    setState({ colors });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <AddColorForm addColorHandler={addColorHandler}/>
        <ColoursList colors={state.colors}/>
      </main>
    </div>
  );
}

export default App;
