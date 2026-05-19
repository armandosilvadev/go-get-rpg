import Button from '../../ui/Button/Button';
import styles from './CharacterStats.module.css';

interface CharacterStatsProps {
  maxHp: number;
  hp: number;
  maxMana?: number;
  mana?: number;
  handleHp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  handleMana(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const CharacterStats = ({
  maxHp,
  hp,
  maxMana,
  mana,
  handleHp,
  handleMana
}: CharacterStatsProps) => {
  return (
    <div className={`${styles.characterStatsBox} flex flex-column flex-center`}>
      <div className={styles.hpBox}>
        <Button
          buttonStyle='minusOne'
          onClick={e => handleHp(e)}
        />
        <Button
          buttonStyle='minusFive'
          onClick={e => handleHp(e)}
        />
        <span className={styles.currentHp}>{hp}</span> /{' '}
        <span className={styles.maxHp}>{maxHp}</span>
        <Button
          buttonStyle='plusFive'
          onClick={e => handleHp(e)}
        />
        <Button
          buttonStyle='plusOne'
          onClick={e => handleHp(e)}
        />
      </div>
      <div
        className={`${styles.manaBox} ${styles[maxMana ? 'show' : 'hidden']}`}
      >
        <Button
          buttonStyle='minusOne'
          onClick={e => handleMana(e)}
        />
        <Button
          buttonStyle='minusFive'
          onClick={e => handleMana(e)}
        />
        <span className={styles.currentMana}>{mana}</span> /{' '}
        <span className={styles.maxMana}>{maxMana}</span>
        <Button
          buttonStyle='plusFive'
          onClick={e => handleMana(e)}
        />
        <Button
          buttonStyle='plusOne'
          onClick={e => handleMana(e)}
        />
      </div>
    </div>
  );
};

export default CharacterStats;
