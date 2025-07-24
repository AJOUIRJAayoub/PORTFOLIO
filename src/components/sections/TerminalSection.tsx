import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react'
import { TERMINAL_COMMANDS } from '@/utils/constants'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface CommandHistory {
  command: string
  output: string
  timestamp: Date
}

export default function TerminalSection() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: "Bienvenue dans mon terminal interactif ! 🚀\nTapez 'help' pour voir les commandes disponibles.",
      timestamp: new Date()
    }
  ])
  const [isMatrixMode, setIsMatrixMode] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output = ''

    switch (trimmedCmd) {
      case 'help':
        output = TERMINAL_COMMANDS.help.output
        break
      case 'about':
        output = TERMINAL_COMMANDS.about.output
        break
      case 'skills':
        output = TERMINAL_COMMANDS.skills.output
        break
      case 'projects':
        output = "Redirection vers la section projets..."
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
        break
      case 'contact':
        output = "Email: your.email@example.com\nLinkedIn: linkedin.com/in/yourprofile\nGitHub: github.com/yourusername"
        break
      case 'clear':
        setHistory([])
        setCommandHistory([])
        return
      case 'theme':
        output = "Changement de thème... (fonctionnalité à venir)"
        break
      case 'matrix':
        setIsMatrixMode(!isMatrixMode)
        output = isMatrixMode ? "Mode Matrix désactivé" : "Mode Matrix activé ! 🟢"
        break
      case 'date':
        output = new Date().toLocaleString('fr-FR')
        break
      case 'whoami':
        output = "Vous êtes un visiteur curieux explorant mon portfolio ! 👨‍💻"
        break
      default:
        output = `Commande '${cmd}' non reconnue. Tapez 'help' pour voir les commandes disponibles.`
    }

    const newEntry: CommandHistory = {
      command: cmd,
      output,
      timestamp: new Date()
    }

    setHistory(prev => [...prev, newEntry])
    setCommandHistory(prev => [...prev, cmd])
    setInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <section id="terminal" className="py-20 px-4 relative overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <TerminalIcon className="w-8 h-8 text-primary-400" />
            <h2 className="text-4xl font-bold text-white">Terminal Interactif</h2>
          </div>

          <motion.div
            className="bg-dark-900 rounded-lg overflow-hidden shadow-2xl border border-dark-700"
            initial={{ scale: 0.95 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Terminal Header */}
            <div className="bg-dark-800 px-4 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-dark-400 text-sm font-mono">guest@portfolio:~$</span>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalRef}
              className="p-6 h-[400px] overflow-y-auto font-mono text-sm relative"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Matrix Effect */}
              {isMatrixMode && (
                <div className="absolute inset-0 pointer-events-none">
                  <MatrixRain />
                </div>
              )}

              {/* Command History */}
              <div className="space-y-4">
                {history.map((entry, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-400">{entry.command}</span>
                    </div>
                    <pre className="text-dark-300 ml-6 mt-1 whitespace-pre-wrap">
                      {entry.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Input Line */}
              <div className="flex items-center space-x-2 mt-4">
                <ChevronRight className="w-4 h-4 text-primary-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white outline-none"
                  placeholder="Tapez une commande..."
                  autoFocus
                />
                <motion.span
                  className="inline-block w-2 h-4 bg-primary-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Matrix Rain Effect Component
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ width: '100%', height: '100%' }}
    />
  )
}