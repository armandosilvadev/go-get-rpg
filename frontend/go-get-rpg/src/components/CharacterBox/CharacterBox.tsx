import styles from './CharacterBox.module.css';
import CharacterProfile from '../layout/CharacterProfile/CharacterProfile';
import CharacterStats from '../layout/CharacterStats/CharacterStats';
import DiceRoller from '../layout/DiceRoll/DiceRoller';
import CharacterSelector from '../layout/CharacterSelector/CharacterSelector';

const CharacterBox = () => {
  return (
    <div className={`${styles.characterBoxContainer} grid`}>
      <CharacterProfile
        characterImage='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.w01XJ7xs7N0mqkQdHamWuAHaHa%3Fpid%3DApi&f=1&ipt=be9772521e01267bcb1b7b2c78f955c2752a9acf5eb5ca89a931ec1982e7dc2a&ipo=images'
        name='Character Name'
      />
      <CharacterStats
        maxHp={100}
        hp={90}
        maxMana={50}
        mana={45}
      />
      <DiceRoller />
      <CharacterSelector />
    </div>
  );
};

export default CharacterBox;
