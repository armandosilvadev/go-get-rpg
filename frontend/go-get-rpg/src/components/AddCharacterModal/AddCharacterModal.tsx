import { useState } from 'react';
import styles from './AddCharacterModal.module.css';
import Button from '../ui/Button/Button';
import { useAddCharacter } from '../../hooks/useAddCharacter';
import type { CharacterData } from '../interface/characterData';

interface AddCharacterModalProps {
  isOpen: boolean;
  handleIsOpen(): void;
}

const AddCharacterModal = ({
  isOpen,
  handleIsOpen,
}: AddCharacterModalProps) => {
  // name
  const [name, setName] = useState<string>('');

  // max hp
  const [maxHp, setMaxHp] = useState<number>(0);
  // hp
  const [hp, setHp] = useState<number>();

  // has mana is checked
  const [hasMana, setHasMana] = useState<boolean>(false);
  // max mana
  const [maxMana, setMaxMana] = useState<number>(0);
  // mana
  const [mana, setMana] = useState<number>();

  // is npc
  const [npc, setNpc] = useState<boolean>(false);

  // mutate character
  const { isError, error, isPending, mutate } = useAddCharacter();

  const handleHasMana = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setHasMana(e.target.checked);
  };

  // submit new character
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const characterData: CharacterData = {
      name: name.trim(),
      maxHp,
      hp: hp || maxHp,
      maxMana,
      mana: mana || maxMana,
      npc,
    };

    mutate(characterData, {
      onSuccess: () => {
        handleIsOpen();
        e.target.reset();
      },
    });
  };

  return (
    <div
      className={`${styles.addCharacterContainer} ${styles[isOpen ? 'show' : 'hidden']}`}
    >
      <h2>Add New Character</h2>
      <form
        className={`${styles.addCharacterForm} flex flex-column`}
        onSubmit={handleSubmit}
      >
        <div className={styles.nameBox}>
          <label htmlFor='InName'>Name: </label>
          <input
            type='text'
            maxLength={30}
            id='InName'
            required
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={styles.hpBox}>
          <label htmlFor='InMaxHp'>Maximum HP: </label>
          <input
            type='number'
            id='InMaxHp'
            min={1}
            max={999}
            required
            onChange={e => setMaxHp(Number(e.target.value))}
          />

          <label htmlFor='InHp'>Currently HP: </label>
          <input
            type='number'
            id='InHp'
            min={0}
            max={maxHp}
            placeholder={maxHp.toString()}
            onChange={e => setHp(Number(e.target.value))}
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
            onChange={e => setMaxMana(Number(e.target.value))}
          />

          <label htmlFor='InMana'>Mana: </label>
          <input
            type='number'
            id='InMana'
            min={0}
            max={maxMana}
            placeholder={maxMana.toString()}
            onChange={e => setMana(Number(e.target.value))}
          />
        </div>

        <input
          type='checkbox'
          id='InIsNpc'
          onChange={e => setNpc(e.target.checked)}
        />
        <label htmlFor='InIsNpc'>NPC</label>

        {isError && <p>{error.message}</p>}

        <div className={styles.buttonContainer}>
          <Button
            text='Cancel'
            type='button'
            onClick={handleIsOpen}
          />
          <Button
            type='submit'
            text={isPending ? 'Adding...' : 'Add'}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCharacterModal;
