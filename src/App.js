import Header from './components/Header/index';
import AddColorForm from './components/AddColorForm';
import './global-styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddColorForm/>
      </main>
    </div>
  );
}

export default App;
