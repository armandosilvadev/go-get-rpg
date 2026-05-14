import type { CharacterData } from '../../interface/characterData';
import Button from '../Button/Button';
import styles from './CharacterCard.module.css';

const CharacterCard = ({
  id,
  charImage,
  name,
  maxHp,
  hp,
  maxMana,
  mana,
  isNpc,
}: CharacterData) => {
  return (
    <div
      id={id}
      className={`${styles.characterCard} ${styles[isNpc ? 'npc' : 'player']} flex`}
    >
      <div className={`${styles.characterProfile} flex`}>
        <img
          src={charImage}
          className={styles.characterImage}
        />
        <span className={styles.characterName}>{name}</span>
      </div>
      <div className={`${styles.statsCotainer} flex`}>
        <span className={styles.hpBox}>
          {hp} / {maxHp}
        </span>
        <span className={styles.manaBox}>
          {mana} / {maxMana}
        </span>
      </div>
      <Button text='X'/>
    </div>
  );
};

export default CharacterCard;
