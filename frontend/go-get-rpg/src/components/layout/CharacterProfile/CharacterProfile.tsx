import styles from './CharacterProfile.module.css';

interface CharacterProfileProps {
  image: string;
  name: string | undefined;
}

const CharacterProfile = ({ image, name }: CharacterProfileProps) => {
  return (
    <div className={styles.profileBox}>
      <figure className={`${styles.figureBox} flex flex-center flex-column`}>
        <img
          src={image}
          alt={`${name}'s image`}
          className={styles.characterImage}
        />
        <figcaption className={styles.characterName}>{name}</figcaption>
      </figure>
    </div>
  );
};

export default CharacterProfile;
