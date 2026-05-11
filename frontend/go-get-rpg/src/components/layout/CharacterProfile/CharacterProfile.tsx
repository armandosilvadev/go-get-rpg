import styles from './CharacterProfile.module.css';

interface CharacterProfileProps {
  characterImage: string;
  name: string;
}

const CharacterProfile = ({ characterImage, name }: CharacterProfileProps) => {
  return (
    <div className={styles.profileBox}>
      <figure className={`${styles.figureBox} flex flex-center flex-column`}>
        <img
          src={characterImage}
          alt={`${name}'s image`}
          className={styles.characterImage}
        />
        <figcaption className={styles.characterName}>{name}</figcaption>
      </figure>
    </div>
  );
};

export default CharacterProfile;
