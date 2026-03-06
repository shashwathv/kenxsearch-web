'use client'

import { useState } from 'react'
import styles from './InstallCommand.module.css'

const INSTALL_CMD = 'curl -fsSL https://raw.githubusercontent.com/shashwathv/lensix/main/scripts/bootstrap.sh | bash'

export default function InstallCommand({ centered = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_CMD)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`${styles.wrap} ${centered ? styles.centered : ''}`}>
      <div className={styles.promptRow}>
        <span className={styles.user}>user</span>
        <span className={styles.at}>@</span>
        <span className={styles.host}>linux</span>
        <span className={styles.colon}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
      </div>
      <span className={styles.cmd}>{INSTALL_CMD}</span>
      <button
        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        aria-label="Copy install command"
      >
        {copied ? '✓ copied' : 'copy'}
      </button>
    </div>
  )
}