import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                  <img src="https://github.com/leonardoalbano.png" alt="" />
                  <div className={ styles.authorInfo }>
                      <strong>Leonardo Albano</strong>
                      <span>Web Developer</span>

                  </div>
                </div>
                <time  
                  title='10 de maio as 08:13h' 
                  dateTime='2022-05-10 8:30:55'
                >
                    Publicado em 1h
                </time>
            </header>

            <div className={styles.content}>
              <p>Fala galeraa 👋

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a> jane.design/doctorcare </a></p>

                <p>
                  <a href="">#novoprojeto</a>{' '}
                  <a href="">#nlw</a>{' '}
                  <a href=""> #rocketseat</a>
                
                </p>
                    
              </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentario"
                />

                <button type="submit">Publicar</button>
            </form>
        </article>

        
    )
}