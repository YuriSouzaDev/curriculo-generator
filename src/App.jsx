import Form from './components/molecules/Form/FormPersonalInfo';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="form__container">
        <h1 className="cv__title">CV Generator</h1>
        <Form />
      </div>
      <div className="curriculum__container"></div>
    </div>
  );
};

export default App;
