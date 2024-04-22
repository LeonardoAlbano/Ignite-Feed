import { Header } from "./components/Header"
import { Post } from "./Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leonardo"
            content="Uma boa pra nois fml"
          />

        </main>
      </div>
    </div>
  )
}