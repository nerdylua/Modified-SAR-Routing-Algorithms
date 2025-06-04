import { LucideIcon } from "lucide-react"

export interface HeaderLink {
  href: string
  label: string
  icon?: LucideIcon
  description?: string
}

export interface HeaderConfig {
  brand: {
    title: string
    icon: string // Path to the icon image
  }
  navigationLinks: HeaderLink[]
}

export const headerConfig: HeaderConfig = {
  brand: {
    title: "Network Security Framework", // Updated brand title
    icon: "/nv-icon.jpg" // Placeholder thematic icon - REPLACE THIS
  },
  navigationLinks: [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/about", // Assuming features section on homepage serves as overview
      label: "About"
    },
    {
      href: "/routing-algorithms", // Link to system flow section
      label: "Routing Algorithms"
    },
    {
      href: "/topology", // Link to a page for the research paper (or direct PDF if preferred)
      label: "Network Topology"
    },
  ]
}