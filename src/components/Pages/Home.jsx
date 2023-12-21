import FormContainer from '../organisms/FormContainer/FormContainer';
import styles from './Home.module.css';

function Curriculum() {
  return (
    <div>
      <div className={styles.container}>
        <FormContainer />
        <div className="curriculum__container"></div>
      </div>
    </div>
  );
}

export default Curriculum;
