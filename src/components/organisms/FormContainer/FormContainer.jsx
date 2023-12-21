import FormPersonalInfo from '../../molecules/Form/FormPersonalInfo';
import FormSkills from '../../molecules/Form/FormSkills';

function FormContainer() {
  return (
    <div className="form__container">
      <h1 className="cv__title">CV Generator</h1>
      <FormPersonalInfo />
      <FormSkills />
    </div>
  );
}

export default FormContainer;
