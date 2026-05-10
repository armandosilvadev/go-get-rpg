import styles from "./Profile.module.css";

interface ProfileProps {
  profilePic: string;
  name: string;
}

const Profile = ({ profilePic, name }: ProfileProps) => {
  return (
    <div className={styles.profileBox}>
      <img src={profilePic} />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
};

export default Profile;
