import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Albano</strong>

                            <time  
                              title='10 de maio as 08:13h' 
                              dateTime='2022-05-10 8:30:55'
                            >
                                1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom meu querido </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>420</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}