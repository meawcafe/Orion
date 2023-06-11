import { ArrowLeft, Info } from "@phosphor-icons/react";
import NavbarButton from "./NavbarButton";

const TopNavbar = ({ current_page }) => {
  console.log(current_page);
  return (
    <div
      style={{
        height: "max-content",
        width: "100%",
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--background1)",
          justifyContent: "space-between",
          width: "100%",
          borderRadius: "20rem",
          alignItems: "center",
        }}
      >
        <div>
          <NavbarButton
            {...{
              icon: <ArrowLeft />,
              text: "Lista",
              href: "/",
            }}
          />
        </div>
        <span>{current_page.name}</span>
        <div>
          <NavbarButton
            {...{
              icon: <Info />,
              text: "Lista",
              href: "/",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
