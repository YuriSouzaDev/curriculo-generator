import PersonalInformations from '../../components/atoms/PersonalInformations/PersonalInformations';
import FormContainer from '../../components/organisms/FormContainer/FormContainer';
import styles from './Home.module.css';

function Curriculum() {
  return (
    <div>
      <div className={styles.container}>
        <FormContainer />
        <div className="curriculum__container">
          <PersonalInformations />
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
