import styles from './Footer.module.css'

const LINKS = [
  { label: 'GitHub',  href: 'https://github.com/shashwathv/lensix' },
  { label: 'Issues',  href: 'https://github.com/shashwathv/lensix/issues' },
  { label: 'License', href: 'https://github.com/shashwathv/lensix/blob/main/LICENSE' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>kenxsearch</span>

        <ul className={styles.links}>
          {LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span className={styles.kanji} title="to see">見 — to see</span>
      </div>
    </footer>
  )
}
