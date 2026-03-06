import styles from './Footer.module.css'

const LINKS = [
  { label: 'github',  href: 'https://github.com/shashwathv/KenXSearch' },
  { label: 'issues',  href: 'https://github.com/shashwathv/KenXSearch/issues' },
  { label: 'license', href: 'https://github.com/shashwathv/KenXSearch/blob/main/LICENSE' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* tmux-style status bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <div className={styles.session}>
            <span className={styles.sessionIcon}>▶</span>
            <span>kenxsearch</span>
          </div>
          <div className={styles.statusSep}>│</div>
          <span className={styles.statusItem}>0:bash</span>
          <span className={styles.statusItem}>1:vim</span>
          <span className={styles.statusItem}>2:htop</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>linux-x86_64</span>
          <div className={styles.statusSep}>│</div>
          <span className={styles.statusItem}>MIT License</span>
          <div className={styles.statusSep}>│</div>
          <span className={styles.statusItem}>v1.0.0</span>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>kenxsearch</span>
          <span className={styles.tagline}>
            # circle to search — natively on linux
          </span>
        </div>

        <nav className={styles.links}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener">
              {l.label}
            </a>
          ))}
        </nav>

        <span className={styles.kanji} title="to see">
          見 — miru — to see
        </span>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 kenxsearch. released under MIT.</span>
        <span className={styles.credit}>
          built for linux, by linux users.
        </span>
      </div>
    </footer>
  )
}