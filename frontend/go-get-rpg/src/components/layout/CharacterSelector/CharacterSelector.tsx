import { useState } from 'react';
import AddCharacterModal from '../../AddCharacterModal/AddCharacterModal';
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
  // modal is open
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleIsModalOpen = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div
      className={`${styles.characterSelectorContainer} flex flex-center flex-column`}
    >
      <div className={styles.buttonContainer}>
        <Button
          text='+'
          onClick={handleIsModalOpen}
        />

        <AddCharacterModal isOpen={isModalOpen} handleIsOpen={handleIsModalOpen}/>
      </div>
      <CharacterList
        data={data}
        handleSelectCharacter={handleSelectCharacter}
      />
    </div>
  );
};

export default CharacterSelector;
