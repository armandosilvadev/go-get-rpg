import { useState } from 'react';
import styles from './AddCharacterModal.module.css';
import Button from '../ui/Button/Button';

interface AddCharacterModalProps {
  isOpen: boolean;
  handleIsOpen(): void;
}

const AddCharacterModal = ({
  isOpen,
  handleIsOpen,
}: AddCharacterModalProps) => {
  const [currentlyHp, setCurrentlyHp] = useState<number>(0);
  const [currentlyMana, setCurrentlyMana] = useState<number>(0);
  const [hasMana, setHasMana] = useState<boolean>(false);

  const handleCurrentlyHp = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setCurrentlyHp(Number(e.target.value));
  };

  const handleCurrentlyMana = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setCurrentlyMana(Number(e.target.value));
  };

  const handleHasMana = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setHasMana(e.target.checked);
  };

  return (
    <div
      className={`${styles.addCharacterContainer} ${styles[isOpen ? 'show' : 'hidden']}`}
    >
      <h2>Add New Character</h2>
      <form className={`${styles.addCharacterForm} flex flex-column`}>
        <div className={styles.nameBox}>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            maxLength={30}
            id='InName'
            required
            autoFocus
          />
        </div>

        <div className={styles.hpBox}>
          <label htmlFor='InMaxHP'>Maximum HP: </label>
          <input
            type='number'
            id='InMaxHp'
            min={1}
            max={999}
            required
            onChange={handleCurrentlyHp}
          />

          <label htmlFor='InHp'>Currently HP: </label>
          <input
            type='number'
            id='InHp'
            min={0}
            max={currentlyHp}
            placeholder={currentlyHp.toString()}
          />
        </div>

        <input
          type='checkbox'
          id='manaSelect'
          onChange={handleHasMana}
        />
        <label htmlFor='manaSelect'>Mana</label>

        <div
          className={`${styles.manaBox} ${styles[hasMana ? 'show' : 'hidden']}`}
        >
          <label htmlFor='InMaxMana'>Maximum Mana: </label>
          <input
            type='number'
            id='InMaxMana'
            min={0}
            max={999}
            required={hasMana}
            onChange={handleCurrentlyMana}
          />

          <label htmlFor='InMana'>Mana: </label>
          <input
            type='number'
            id='InMana'
            min={0}
            max={currentlyMana}
            placeholder={currentlyMana.toString()}
          />
        </div>

        <input
          type='checkbox'
          id='InIsNpc'
        />
        <label htmlFor='InIsNpc'>NPC</label>

        <div className={styles.buttonContainer}>
          <Button
            text='Cancel'
            onClick={handleIsOpen}
          />
          <Button
            type='submit'
            text='Add'
          />
        </div>
      </form>
    </div>
  );
};

export default AddCharacterModal;
