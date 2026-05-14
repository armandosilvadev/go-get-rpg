import type { CharacterData } from '../../interface/characterData';
import Button from '../../ui/Button/Button';
import CharacterList from '../CharacterList/CharacterList';
import styles from './CharacterSelector.module.css';

interface CharacterSelectorProps {
  data: CharacterData[] | undefined;
  handleSelectCharacter(id: string): void;
}

const CharacterSelector = ({
  data,
  handleSelectCharacter,
}: CharacterSelectorProps) => {
  return (
    <div
      className={`${styles.characterSelectorContainer} flex flex-center flex-column`}
    >
      <div className={styles.buttonContainer}>
        <Button text='+' />
      </div>
      <CharacterList data={data} handleSelectCharacter={handleSelectCharacter}/>
    </div>
  );
};

export default CharacterSelector;
