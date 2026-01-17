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

export const NavSidebar = () => {
  return (
    <Sidebar className="z-100">
      <SidebarContent>
        <SidebarGroup>
          <nav>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu autoFocus>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/about">About</Link>
                  </SidebarMenuButton>

                  <SidebarMenuButton asChild>
                    <Link href="/">Blog</Link>
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
