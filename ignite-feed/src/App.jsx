import { Header } from "./components/Header"
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leonardoalbano.png',
      name: 'Leonardo Albano',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um novo projeto no meu portifólio, dale um confere la seu zikaaa!'},
      { type: 'link', content: 'zika.designer/zikabrifes' },
    ],

    publishedAt: new Date('2024-04-28 20:00:01'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego fernandes ',
      role: 'CTO Rockeseat'
    },

    content: [
      { type: 'paragraph', content: 'Salve Familia' },
      { type: 'paragraph', content: 'Muito legal usar zod'},
      { type: 'link', content: 'diego.designer/diego3g' },
    ],

    publishedAt: new Date('2024-05-10 10:30:01'),
  },
];

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              // eslint-disable-next-line react/jsx-key
              return ( <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                
                /> )
            })
          }

        </main>
      </div>
    </div>
  )
}