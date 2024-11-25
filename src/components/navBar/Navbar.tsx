"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useContext } from "react";
import Image from "next/image";

import { UserContext } from "@/src/context/user";

export default function NavbarComponent() {
  const { logout } = useContext(UserContext);

  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand className="mr-4">
          {/* Logo de Hogar Esperanza */}
          {/* <Image
  alt="Logo Hogar Esperanza"
  src="https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1190.PNG?alt=media&token=c313bd2e-b00c-413d-ac31-50201b059e73"
  width={200} // Ajusta a tus necesidades
  height={200} // Ajusta a tus necesidades
/> */}
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3" />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <h1 style={{ flexWrap: "wrap", wordBreak: "break-all" }}>
          Zona administrativa
        </h1>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Acciones de perfil" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Conectado como</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Mis ajustes</DropdownItem>
            <DropdownItem key="team_settings">Ajustes de equipo</DropdownItem>
            <DropdownItem key="analytics">Analíticas</DropdownItem>
            <DropdownItem key="system">Sistema</DropdownItem>
            <DropdownItem key="configurations">Configuraciones</DropdownItem>
            <DropdownItem key="help_and_feedback">
              Ayuda y comentarios
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                logout();
                window.location.reload();
              }}
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

// https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1190.PNG?alt=media&token=c313bd2e-b00c-413d-ac31-50201b059e73
