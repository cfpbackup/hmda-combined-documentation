import React from "react"
import Header from './Header'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';

const Navbar = () => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <>
      <Header />
      {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
    </>
  )
}

export default Navbar