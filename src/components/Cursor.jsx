import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ref = useRef(); const [mode, setMode] = useState('')
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return
    const move = (e) => { if (ref.current) ref.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)` }
    const over = (e) => setMode(e.target.closest('[data-cursor]')?.dataset.cursor || (e.target.closest('a,button') ? 'link' : ''))
    addEventListener('pointermove', move); document.addEventListener('pointerover', over)
    return () => { removeEventListener('pointermove', move); document.removeEventListener('pointerover', over) }
  }, [])
  return <div ref={ref} className={`cursor ${mode}`}><span>{mode === 'view' ? 'VIEW' : ''}</span></div>
}
