import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/index';
import Colors from './components/Colors';
import AddColorForm from './components/AddColorForm';
import './global-styles/App.scss';

function App() {
  const [state, setState] = useState({ colors: [] });
  
  const addColorHandler = (colorName, colorCode) => {
    const color = {
      colorId: uuidv4(),
      colorName,
      colorCode
    };
    const colors = [
      ...state.colors,
      color
    ];
    setState({ colors });
  }

  const delColorHandler = colorId => {
    const colors = state.colors.filter(stateColor => stateColor.colorId !== colorId);
    setState({ colors });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <AddColorForm addColorHandler={addColorHandler}/>
        <Colors colors={state.colors} delColorHandler={delColorHandler}/>
      </main>
    </div>
  );
}

export default App;
