import { useDeleteCharacter } from '../../../hooks/useDeleteCharacter';
import type { CharacterData } from '../../interface/characterData';
import Button from '../Button/Button';
import styles from './CharacterCard.module.css';

interface CharacterCardProps extends CharacterData {
  selectCharacter(id: string): void;
}

const CharacterCard = ({
  id,
  image,
  name = '',
  maxHp,
  hp,
  maxMana,
  mana,
  npc,
  selectCharacter,
}: CharacterCardProps) => {
  const { mutate } = useDeleteCharacter();

  const handleDelete = (id: string) => {
    mutate(id);
  };
  return (
    <div
      id={id}
      className={`${styles.characterCard} ${styles[npc ? 'npc' : 'player']} flex`}
      onClick={() => selectCharacter(id ? id : '')}
    >
      <div className={`${styles.characterProfile} flex`}>
        <img
          src={image}
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

      {/* delete button */}
      <Button
        text='X'
        onClick={e => {
          e.stopPropagation();

          selectCharacter('');
          handleDelete(id ? id : '');
        }}
      />
    </div>
  );
};

export default CharacterCard;
