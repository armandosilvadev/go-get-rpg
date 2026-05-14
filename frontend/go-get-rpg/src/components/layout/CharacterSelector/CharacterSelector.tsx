import Button from '../../ui/Button/Button';
import CharacterList from '../CharacterList/CharacterList';
import styles from './CharacterSelector.module.css';

const CharacterSelector = () => {
  return (
    <div className={`${styles.characterSelectorContainer} flex flex-center flex-column`}>
    <div className={styles.buttonContainer}>
      <Button text='+'/>
    </div>
      <CharacterList />
    </div>
  );
};

export default CharacterSelector;
