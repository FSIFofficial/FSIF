'use client'

import { useId, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AccordionItemData {
  title: React.ReactNode
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItemData[]
  className?: string
  onDark?: boolean
  defaultOpen?: number | null
}

export function Accordion({ items, className, onDark = false, defaultOpen = null }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div className={cn('divide-y', onDark ? 'divide-white/15' : 'divide-border', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const btnId = `${baseId}-btn-${i}`
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors',
                  onDark ? 'text-navy-foreground hover:text-accent-blue' : 'text-foreground hover:text-fsif-blue',
                )}
              >
                <span className="text-pretty">{item.title}</span>
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors',
                    onDark ? 'border-white/25' : 'border-border',
                    isOpen && 'border-fsif-blue bg-fsif-blue text-primary-foreground',
                  )}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className={cn(
                'pb-6 text-[0.95rem] leading-relaxed',
                onDark ? 'text-navy-foreground/75' : 'text-muted-foreground',
              )}
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
