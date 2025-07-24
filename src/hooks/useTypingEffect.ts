import { useState, useEffect } from 'react'

export function useTypingEffect(
  text: string,
  speed: number = 50,
  startDelay: number = 0
): string {
  const [displayedText, setDisplayedText] = useState('')
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let index = 0

    const startTyping = () => {
      const typeNextChar = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeoutId = setTimeout(typeNextChar, speed)
        }
      }
      typeNextChar()
    }

    const initialTimeout = setTimeout(startTyping, startDelay)

    return () => {
      clearTimeout(initialTimeout)
      clearTimeout(timeoutId)
    }
  }, [text, speed, startDelay])

  return displayedText
}