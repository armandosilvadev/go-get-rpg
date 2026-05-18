import { defaultImage } from '../../../variables/defaultImage';
import { type CharacterData } from '../../interface/characterData';
import CharacterCard from '../../ui/CharacterCard/CharacterCard';
import styles from './CharacterList.module.css';

interface CharacterListProps {
  data: CharacterData[] | undefined;
  handleSelectCharacter(id: string): void;
}

const CharacterList = ({ data, handleSelectCharacter }: CharacterListProps) => {
  return (
    <div className={styles.characterListContainer}>
      <ul className={`${styles.characterList} flex flex-column`}>
        {data?.map(character => {
          return (
            <li key={character.id}>
              <CharacterCard
                id={character.id}
                image={character.image ?? defaultImage}
                name={character.name}
                maxHp={character.maxHp}
                hp={character.hp}
                maxMana={character.maxMana}
                mana={character.mana}
                npc={character.npc}
                selectCharacter={handleSelectCharacter}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
