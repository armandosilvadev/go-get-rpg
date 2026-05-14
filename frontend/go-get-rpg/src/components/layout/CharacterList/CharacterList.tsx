import { useCharacterData } from '../../../hooks/useCharacterData';
import CharacterCard from '../../ui/CharacterCard/CharacterCard';
import styles from './CharacterList.module.css';

const CharacterList = () => {
  const { data } = useCharacterData();

  return (
    <div className={styles.characterListContainer}>
      <ul className={`${styles.characterList} flex flex-column`}>
        {data?.map(character => {
          return (
            <li key={character.id}>
              <CharacterCard
                id={character.id}
                // charImage={character.charImage}
                charImage='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.w01XJ7xs7N0mqkQdHamWuAHaHa%3Fpid%3DApi&f=1&ipt=be9772521e01267bcb1b7b2c78f955c2752a9acf5eb5ca89a931ec1982e7dc2a&ipo=images'
                name={character.name}
                maxHp={character.maxHp}
                hp={character.hp}
                maxMana={character.maxMana}
                mana={character.mana}
                isNpc={character.isNpc}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
