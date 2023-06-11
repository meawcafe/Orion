import {
  ShoppingCart,
  Plus,
  Rows,
  GearSix,
  House,
} from "@phosphor-icons/react";
import NavbarButton from "./NavbarButton";

const BottomNavbar = (props) => {
  const { setOpenListItemForm, section_index } = props;

  const returnCurrentFunction = () => {
    switch (section_index) {
      case 0:
        return setOpenListItemForm;
      case 1:
        return null;
      case 2:
        return null;
      case 3:
        return null;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        height: "max-content",
        width: "100%",
        padding: "0.5rem",
        backgroundColor: "var(--background1)",
        justifyContent: "space-around",
        borderRadius: "1rem 1rem 0 0",
        zIndex: 10,
      }}
    >
      <NavbarButton
        {...{
          icon: <House />,
          text: "Início",
          index: 0,
          ...props
        }}
      />
      <NavbarButton
        {...{
          icon: <Rows />,
          text: "Lista",
          index: 1,
          ...props
        }}
      />
      <NavbarButton
        {...{
          icon: <Plus weight="bold" />,
          middle: true,
          action: returnCurrentFunction(),
          ...props
        }}
      />
      <NavbarButton
        {...{
          icon: <ShoppingCart />,
          text: "Carrinho",
          index: 2,
          ...props
        }}
      />
      <NavbarButton
        {...{
          icon: <GearSix />,
          text: "Ajustes",
          index: 3,
          ...props
        }}
      />
    </div>
  );
};

export default BottomNavbar;
