import Button from '../../ui/Button/Button';
import styles from './CharacterStats.module.css';

interface CharacterStatsProps {
  maxHp: number;
  hp: number;
  maxMana?: number;
  mana?: number;
}

/**
 *
 * @param param0 maxHp: number; hp: number; maxMana?: number, mana?: number
 * @returns A character stats component where it can have the maximum and current HP and an option maximum and current MANA
 */

const CharacterStats = ({ maxHp, hp, maxMana, mana }: CharacterStatsProps) => {
  return (
    <div className={`${styles.characterStatsBox} flex flex-column flex-center`}>
      <div className={styles.hpBox}>
        <Button buttonStyle='minusOne' />
        <Button buttonStyle='minusFive' />
        <span className={styles.currentHp}>{hp}</span> /{' '}
        <span className={styles.maxHp}>{maxHp}</span>
        <Button buttonStyle='plusFive' />
        <Button buttonStyle='plusOne' />
      </div>
      <div className={styles.manaBox}>
        <Button buttonStyle='minusOne' />
        <Button buttonStyle='minusFive' />
        <span className={styles.currentMana}>{mana}</span> /{' '}
        <span className={styles.maxMana}>{maxMana}</span>
        <Button buttonStyle='plusFive' />
        <Button buttonStyle='plusOne' />
      </div>
    </div>
  );
};

export default CharacterStats;
