import { Header } from "./components/Header";
import styles from './App.module.css'

import "./global.css";
import { Body } from "./components/Body";

export function App() {
  return (
    <div className={styles.teste}>
      <Header />
      <Body />
    </div>
  );
}


