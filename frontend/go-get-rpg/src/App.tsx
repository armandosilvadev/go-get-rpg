import styles from './App.module.css';
import CharacterBox from './components/CharacterBox/CharacterBox';

function App() {
  return (
    <div className={styles.appContainer}>
      <CharacterBox />
    </div>
  );
}

export default App;
