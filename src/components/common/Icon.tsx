import {
  ArrowDownRight as ArrowDownRightIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Braces as BracesIcon,
  CalendarDays as CalendarDaysIcon,
  Check as CheckIcon,
  Code2 as Code2Icon,
  Copy as CopyIcon,
  Download as DownloadIcon,
  GraduationCap as GraduationCapIcon,
  Layers as LayersIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Moon as MoonIcon,
  Server as ServerIcon,
  Sparkles as SparklesIcon,
  Sun as SunIcon,
  Wrench as WrenchIcon,
  X as XIcon,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react'

/**
 * Lucide geometry rendered at the lighter 1.6 stroke used across the site.
 * Keeping one wrapper means every interface icon shares the same optical
 * weight, including the icons in buttons and compact metadata rows.
 */
function themed(Icon: LucideIcon) {
  function ThemedIcon({ strokeWidth = 1.6, ...props }: LucideProps) {
    return <Icon strokeWidth={strokeWidth} aria-hidden="true" {...props} />
  }

  ThemedIcon.displayName = `${Icon.displayName ?? 'Icon'}Themed`

  return ThemedIcon
}

export const ArrowDownRight = themed(ArrowDownRightIcon)
export const ArrowRight = themed(ArrowRightIcon)
export const ArrowUp = themed(ArrowUpIcon)
export const ArrowUpRight = themed(ArrowUpRightIcon)
export const Braces = themed(BracesIcon)
export const CalendarDays = themed(CalendarDaysIcon)
export const Check = themed(CheckIcon)
export const Code2 = themed(Code2Icon)
export const Copy = themed(CopyIcon)
export const Download = themed(DownloadIcon)
export const GraduationCap = themed(GraduationCapIcon)
export const Layers = themed(LayersIcon)
export const Mail = themed(MailIcon)
export const Menu = themed(MenuIcon)
export const Moon = themed(MoonIcon)
export const Server = themed(ServerIcon)
export const Sparkles = themed(SparklesIcon)
export const Sun = themed(SunIcon)
export const Wrench = themed(WrenchIcon)
export const X = themed(XIcon)
