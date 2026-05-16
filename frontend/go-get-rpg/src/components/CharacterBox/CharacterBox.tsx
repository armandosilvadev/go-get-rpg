import styles from './CharacterBox.module.css';
import CharacterProfile from '../layout/CharacterProfile/CharacterProfile';
import CharacterStats from '../layout/CharacterStats/CharacterStats';
import DiceRoller from '../layout/DiceRoll/DiceRoller';
import CharacterSelector from '../layout/CharacterSelector/CharacterSelector';
import DiceHistory from '../layout/DiceHistory/DiceHistory';
import { type CharacterData } from '../interface/characterData';
import { useEffect, useState } from 'react';
import { defaultImage } from '../../variables/defaultImage';
import { useCharacterData } from '../../hooks/useCharacterData';

const CHARACTER_STORAGE_KEY: string = 'selectedCharacter';

const CharacterBox = () => {
  // character data
  const { data } = useCharacterData();

  // selected character
  const [selectedCharacter, setSelectedCharacter] = useState<
    CharacterData | undefined
  >(() => {
    const storedCharacter = localStorage.getItem(CHARACTER_STORAGE_KEY);

    if (storedCharacter) return JSON.parse(storedCharacter);
    else return undefined;
  });

  const handleSelectedCharacter = (id: string) => {
    if (!id) {
      setSelectedCharacter(undefined);
      localStorage.removeItem(CHARACTER_STORAGE_KEY);
    }

    const character = data?.find(character => character.id === id);

    if (character) {
      setSelectedCharacter(character);
    }
  };

  useEffect(() => {
    if (selectedCharacter) {
      localStorage.setItem(
        CHARACTER_STORAGE_KEY,
        JSON.stringify(selectedCharacter),
      );
    } else {
      localStorage.removeItem(CHARACTER_STORAGE_KEY);
    }
  }, [selectedCharacter]);

  return (
    <div className={`${styles.characterBoxContainer} grid`}>
      <CharacterProfile
        characterImage={selectedCharacter?.charImage ?? defaultImage}
        name={selectedCharacter?.name}
      />
      <CharacterStats
        maxHp={selectedCharacter?.maxHp ?? 0}
        hp={selectedCharacter?.hp ?? 0}
        maxMana={selectedCharacter?.maxMana}
        mana={selectedCharacter?.mana}
      />
      <DiceRoller />
      <CharacterSelector
        data={data}
        handleSelectCharacter={handleSelectedCharacter}
      />
      <DiceHistory />
    </div>
  );
};

export default CharacterBox;
