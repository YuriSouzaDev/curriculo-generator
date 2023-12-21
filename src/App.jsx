import FormPersonalInfo from './components/molecules/Form/FormPersonalInfo';
import './App.css';
import FormSkills from './components/molecules/Form/FormSkills';

const App = () => {
  return (
    <div className="container">
      <div className="form__container">
        <h1 className="cv__title">CV Generator</h1>
        <FormPersonalInfo />
        <FormSkills />
        <h1>teste</h1>
      </div>
      <div className="curriculum__container"></div>
    </div>
  );
};

export default App;
