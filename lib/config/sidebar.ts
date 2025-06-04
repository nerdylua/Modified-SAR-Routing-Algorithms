import Icons from "@/components/global/icons";
import { SidebarConfig } from "@/components/global/app-sidebar";

const sidebarConfig: SidebarConfig = {
  brand: {
    title: "Dashboard",
    icon: "/nv-icon.jpg",
    href: "/"
  },
  sections: [
    {
      label: "Network", 
      items: [
        {
          title: "Home",
          href: "/",
          icon: Icons.home
        },
        {
          title: "Topology Editor",
          href: "/topology",
          icon: Icons.topology
        },
        {
          title: "Routing Algorithms",
          href: "/routing-algorithms",
          icon: Icons.topology
        }
      ]
    },   
  ]
}

export default sidebarConfig