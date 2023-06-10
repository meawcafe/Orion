import {
  ShoppingCart,
  Plus,
  Rows,
  GearSix,
  House,
} from "@phosphor-icons/react";
import NavbarButton from "./NavbarButton";

const BottomNavbar = ({
  show_cart,
  setShowCart,
}) => {
  return (
    <div
      style={{
        height: "max-content",
        width: "100vw",
        padding: "0.5rem",
        backgroundColor: "var(--background1)",
        justifyContent: "space-around",
        borderRadius: "1rem 1rem 0 0",
      }}
    >
      <NavbarButton
        {...{
          icon: <House />,
          text: "Início",
          href: "/",
        }}
      />
      <NavbarButton
        {...{
          icon: <Rows />,
          text: "Lista",
          href: "/",
        }}
      />
      <NavbarButton
        {...{
          icon: <Plus weight="bold" />,
          middle: true,
          text: "Produto",
          href: "/",
        }}
      />
      <NavbarButton
        {...{
          icon: <ShoppingCart />,
          text: "Carrinho",
          // href: "/",
          action: setShowCart,
          action_value: true,
        }}
      />
      <NavbarButton
        {...{
          icon: <GearSix />,
          text: "Ajustes",
          href: "/",
        }}
      />
    </div>
  );
};

export default BottomNavbar;
