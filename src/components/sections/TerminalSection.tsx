import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface CommandHistory {
  command: string
  output: string
  timestamp: Date
}

const TERMINAL_COMMANDS = {
  help: {
    output: `Commandes disponibles :
  • about     - À propos de moi
  • skills    - Mes compétences (en apprentissage !)
  • projects  - Mes projets académiques
  • contact   - Mes coordonnées
  • clear     - Effacer le terminal
  • whoami    - Qui êtes-vous ?
  • motivation - Ma motivation
  • cv        - Télécharger mon CV`
  },
  about: {
    output: `Je suis Ayoub AJOUIRJA, étudiant en 4ème année à SUPINFO Lyon.
Je recherche une alternance en développement web pour novembre 2025.
Passionné par la tech, j'ai encore beaucoup à apprendre et c'est ce qui me motive !`
  },
  skills: {
    output: `Technologies que j'ai découvertes :
• Frontend : HTML/CSS (70%), JavaScript (60%), React (50%)
• Backend : PHP (65%), Node.js (45%)
• Outils : Git (55%), WordPress (70%)
• En cours d'apprentissage : Docker, TypeScript, Tests

⚠️ Je suis encore étudiant, ces pourcentages représentent ma familiarité, pas une expertise !`
  },
  motivation: {
    output: `Ma motivation en 3 points :
1. 🎓 J'ai soif d'apprendre et de progresser
2. 💪 Je suis prêt à m'investir à 200% dans mon alternance
3. 🚀 J'ai hâte de contribuer à de vrais projets !

Ce qui me motive : transformer mes connaissances théoriques en compétences pratiques.`
  },
  cv: {
    output: `📄 Téléchargement du CV...
Disponible sur demande par email : ayoub.ajouirja@supinfo.com`
  },
  contact: {
    output: `📧 Email : ayoub.ajouirja@supinfo.com
📱 Téléphone : 07 67 80 62 05
📍 Localisation : Jayat (01340)
🚗 Mobilité : 150km autour de Jayat`
  },
  whoami: {
    output: `Vous êtes un recruteur à la recherche d'un alternant motivé ? 
Parfait, vous êtes au bon endroit ! 😊`
  }
}

export default function TerminalSection() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: "Bienvenue dans mon terminal ! 🎓\nJe suis étudiant et ce terminal reflète mon niveau actuel.\nTapez 'help' pour voir les commandes disponibles.",
      timestamp: new Date()
    }
  ])
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

    if (trimmedCmd === 'clear') {
      setHistory([])
      setCommandHistory([])
      return
    }

    if (TERMINAL_COMMANDS[trimmedCmd as keyof typeof TERMINAL_COMMANDS]) {
      output = TERMINAL_COMMANDS[trimmedCmd as keyof typeof TERMINAL_COMMANDS].output
    } else if (trimmedCmd === 'date') {
      output = new Date().toLocaleString('fr-FR')
    } else if (trimmedCmd === 'projects') {
      output = "Redirection vers mes projets académiques..."
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    } else {
      output = `Commande '${cmd}' non reconnue. Tapez 'help' pour voir les commandes disponibles.
PS: Je suis encore en train d'apprendre, ce terminal aussi ! 😅`
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
            <h2 className="text-4xl font-bold text-white">Terminal Étudiant</h2>
            <span className="text-sm text-gray-400">(Version basique 😊)</span>
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
              <span className="text-gray-400 text-sm font-mono">etudiant@supinfo:~$</span>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalRef}
              className="p-6 h-[400px] overflow-y-auto font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Command History */}
              <div className="space-y-4">
                {history.map((entry, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-400">{entry.command}</span>
                    </div>
                    <pre className="text-gray-300 ml-6 mt-1 whitespace-pre-wrap">
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