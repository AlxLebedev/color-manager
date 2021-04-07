import Header from './components/Header/index';
import AddColorForm from './components/AddColorForm';
import './global-styles/App.scss';

function App() {
  const addColorHandler = (colorName, colorCode) => {
    const color = {
      colorName,
      colorCode
    };
    console.log(color);
  }


  return (
    <div className="App">
      <Header />
      <main>
        <AddColorForm addColorHandler={addColorHandler}/>
      </main>
    </div>
  );
}

export default App;
