import './App.css';
import Provider from './utilities/Provider';
import Home from './assets/pages/Home';

const App = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default App;
