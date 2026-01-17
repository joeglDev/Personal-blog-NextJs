import {
  SidebarContent,
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/dist/client/link";
import styles from "./NavSidebar.module.css";

export const NavSidebar = () => {
  return (
    <Sidebar className="z-100">
      <SidebarContent>
        <SidebarGroup>
          <nav>
            <SidebarGroupLabel className={styles.sidepanelTitle}>
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu autoFocus>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link className={styles.sidepanelLink} href="/about">
                      About
                    </Link>
                  </SidebarMenuButton>

                  <SidebarMenuButton asChild>
                    <Link className={styles.sidepanelLink} href="/">
                      Blog
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </nav>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
