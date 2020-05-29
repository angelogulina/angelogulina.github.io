import React from 'react'
import Helmet from 'react-helmet'
import styles from '../components/main.module.css'

export default () => (
  <main className={styles.space__wrapper} role="main">
    <Helmet>
      <meta name="author" content="Angelo Gulina" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content="https://www.twitter.com/AngeloGulina"
      />
      <meta name="twitter:site" content="@angelogulina" />
      <meta
        name="twitter:description"
        content="Angelo Gulina's Personal Space"
      />
      <meta
        name="twitter:title"
        content="angelogulina.it ~ floating into outer space..."
      />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="angelogulina.it" />
      <meta
        property="og:description"
        content="Angelo Gulina's Personal Space"
      />
      <meta
        property="og:image"
        content="https://www.angelogulina.it/assets/angelogulina.it.png"
      />
      <meta property="og:url" content="https://www.angelogulina.it" />
      <meta
        property="og:title"
        content="angelogulina.it ~ floating into outer space..."
      />
      <link rel="canonical" href="https://angelogulina.it/" />
      <title>... floating into outer space...</title>
    </Helmet>
    <ul className={styles.space__objects}>
      <li className={`${styles.space__object} ${styles.space__sun}`} />
      <li className={`${styles.space__object} ${styles.space__planet}`} />
      <li
        className={`${styles.space__object} ${styles.space__signature}`}
      />
    </ul>
    <div className={styles.space__stars} />

    <h1 className={styles.me__name}>
      <a href="https://www.angelogulina.it">Angelo Gulina</a>
    </h1>

    <p className={styles.me__role}>Software Engineer</p>
    <ul className={styles.me__contacts}>
      <li className={styles.me__contact}>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/AngeloGulina"
          target="_blank">
                    twitter
        </a>
      </li>
      <li className={styles.me__contact}>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/AngeloGulina/"
          target="_blank">
                    instagram
        </a>
      </li>
      <li className={styles.me__contact}>
        <a rel="noopener noreferrer" href="mailto:me[@]angelogulina.it">
                    mail
        </a>
      </li>
    </ul>
    <p className={styles.me__disclaimer}>
            Google Analytics tracks number of visitors
      <br />
            You can{' '}
      <span className={styles.optOut} onClick={() => window.gaOptout()}>
                opt out
      </span>
            .
    </p>
  </main>
)
