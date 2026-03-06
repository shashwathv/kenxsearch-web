'use client'
import { useState } from 'react'
import s from './InstallCommand.module.css'

const CMD = 'bash -c "$(curl -fsSL https://raw.githubusercontent.com/shashwathv/KenXSearch/main/scripts/bootstrap.sh)"'

export default function InstallCommand({ centered = false }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(CMD)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`${s.wrap} ${centered ? s.centered : ''}`}>
      <span className={s.prompt}>
        <span className={s.user}>user</span>
        <span className={s.at}>@</span>
        <span className={s.host}>linux</span>
        <span className={s.colon}>:</span>
        <span className={s.path}>~</span>
        <span className={s.dollar}>$</span>
      </span>
      <span className={s.cmd}>{CMD}</span>
      <button className={`${s.copyBtn} ${copied ? s.copied : ''}`} onClick={copy}>
        {copied ? '✓ copied' : 'copy'}
      </button>
    </div>
  )
}