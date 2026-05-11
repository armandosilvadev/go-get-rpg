import styles from './CharacterSelector.module.css';

interface CharacterSelectorProps {
  profilePic: string | undefined;
  name: string | undefined;
}

const CharacterSelector = ({ profilePic, name }: CharacterSelectorProps) => {
  return <div className={styles.characterSelectorContainer}></div>;
};

export default CharacterSelector;
