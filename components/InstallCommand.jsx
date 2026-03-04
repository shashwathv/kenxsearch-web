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
      <span className={styles.prompt}>$</span>
      <span className={styles.cmd}>{INSTALL_CMD}</span>
      <button
        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        aria-label="Copy install command"
      >
        {copied ? 'copied!' : 'copy'}
      </button>
    </div>
  )
}
