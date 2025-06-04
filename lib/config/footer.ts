export interface FooterLink {
  href: string
  label: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterConfig {
  brand: {
    title: string
    description: string
  }
  sections: FooterSection[]
  copyright: string
}

export const footerConfig: FooterConfig = {
  brand: {
    title: "Network Security Framework",
    description: "A research framework for real-time security-aware routing, intrusion detection, and network traffic visualization."
  },
  sections: [
    {
      title: "Navigation",
      links: [
        { href: "/", label: "Home" },
        { href: "/#features", label: "Framework Overview" },
        { href: "/#system-flow", label: "System Flow" },
      ]
    },
    {
      title: "Project Resources",
      links: [
        { href: "https://github.com/nerdylua/Modified-SAR-Routing-algorithms", label: "Source Code" }, 
      ]
    },
    {
      title: "Contact",
      links: [
        { href: "mailto:nihaalsp7@gmail.com", label: "Project Lead" }, 
        // { href: "#", label: "Principal Investigator" } 
      ]
    }
  ],
  copyright: `© 2025 Network Security Framework. All rights reserved.` 
}
