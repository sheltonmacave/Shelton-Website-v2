import * as React from "react"
import { Button } from "./button"
import { Badge } from "./badge"
// SVG icons as React components (inline, no imports)
function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function Briefcase(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function Code(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function PenTool(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-6-6 2-2a2.828 2.828 0 1 1 4 4l-2 2z" /><path d="M16 7l-1.5-1.5" />
    </svg>
  );
}
function Music(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <circle cx="8.5" cy="17.5" r="2.5" /><path d="M16 18V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15" />
    </svg>
  );
}
function BarChart2(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
import { cn } from "../../utils/cn"

function Palette(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <path d="M12 21a9 9 0 1 1 9-9c0 3-2.5 2-3 2s-1 1-1 2 1 2 2 2" />
      <circle cx="7.5" cy="10.5" r="1.5" />
      <circle cx="12" cy="7.5" r="1.5" />
      <circle cx="16.5" cy="10.5" r="1.5" />
    </svg>
  );
}
function Headphones(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="1em" height="1em" {...props}>
      <path d="M3 18v-3a9 9 0 0 1 18 0v3" />
      <rect x="2" y="18" width="4" height="4" rx="1" />
      <rect x="18" y="18" width="4" height="4" rx="1" />
    </svg>
  );
}

const careers = [
  {
    value: "empreendedor",
    label: "Empreendedor",
    icon: <Briefcase className="w-4 h-4 mr-2 text-blue-500" />,
    status: <Badge className="ml-2 border border-green-600 text-green-600 bg-transparent">Ativo</Badge>,
  },
  {
    value: "devweb",
    label: "Desenvolvedor Web",
    icon: <Code className="w-4 h-4 mr-2 text-purple-500" />,
    status: <Badge className="ml-2 border border-green-600 text-green-600 bg-transparent">Ativo</Badge>,
  },
  {
    value: "designer",
    label: "Designer / Editor",
    icon: <Palette className="w-4 h-4 mr-2 text-orange-500" />,
    status: <Badge className="ml-2 border border-green-600 text-green-600 bg-transparent">Ativo</Badge>,
  },
  {
    value: "produtormusical",
    label: "Produtor Musical",
    icon: <Headphones className="w-4 h-4 mr-2 text-yellow-500" />,
    status: <Badge className="ml-2 border border-yellow-600 text-yellow-600 bg-transparent">Ocasional</Badge>,
  },
  {
    value: "analista",
    label: "Analista de Dados",
    icon: <BarChart2 className="w-4 h-4 mr-2 text-green-600" />,
    status: <Badge className="ml-2 border border-red-600 text-red-600 bg-transparent">Pausa</Badge>,
  },
]

export function ComboboxCareer() {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(null)
  const wrapperRef = React.useRef(null)

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  // Função para extrair a cor do ícone da carreira selecionada
  function getSelectedColor(selected) {
    if (!selected) return { borderColor: '#a3a3a3', color: '#a3a3a3' };
    // Procura pela primeira classe text-*
    const icon = selected.icon;
    if (icon && icon.props && icon.props.className) {
      const match = icon.props.className.match(/text-([a-z]+-\d{3})/);
      if (match) {
        const colorClass = match[1];
        // Tailwind para cor inline
        const colorMap = {
          'blue-500': '#3b82f6',
          'purple-500': '#a21caf',
          'orange-500': '#f97316',
          'yellow-500': '#eab308',
          'green-600': '#16a34a',
          'red-600': '#dc2626',
          'gray-500': '#6b7280',
        };
        const color = colorMap[colorClass] || 'var(--color-main)';
        return { borderColor: color, color };
      }
    }
    return { borderColor: 'var(--color-main)', color: 'var(--color-main)' };
  }

  return (
    <div className="flex flex-col items-center w-full">
      <label className="mb-2 text-md font-medium text-white">Selecione a Carreira</label>
      <div className="relative w-full max-w-xs" ref={wrapperRef}>
        <Button
          variant="outline"
          className={
            `w-full flex justify-between items-center focus:ring-main ` +
            (selected ? '' : 'border-gray-400 text-gray-400')
          }
          style={selected ? getSelectedColor(selected) : { borderColor: '#a3a3a3', color: '#a3a3a3' }}
          onClick={e => {
            e.stopPropagation();
            setOpen((v) => !v)
          }}
        >
          <span className="flex items-center">
            {selected ? <>{selected.icon}{selected.label}</> : <span className="text-gray-400">Escolha...</span>}
          </span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
        {open && (
          <div className="absolute z-50 mt-2 w-full rounded-md bg-background/90 shadow-lg ring-1 ring-black/10 backdrop-blur-md" style={{background: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)"}}>
            <ul className="py-1">
              {careers.map((career) => (
                <li
                  key={career.value}
                  className={cn(
                    "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-main/10 transition-colors",
                    selected && selected.value === career.value && "bg-main/20"
                  )}
                  onClick={() => { setSelected(career); setOpen(false); }}
                >
                  <span className="flex items-center">{career.icon}{career.label}</span>
                  {career.status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
