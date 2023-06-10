import { IconContext } from "@phosphor-icons/react";

const NavbarButton = ({
  icon,
  text,
  href = null,
  action = null,
  action_value = null,
}) => {
  return (
    <div
      style={{
        borderRadius: "1rem",
        width: "3.5rem",
        height: "3.5rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        if (href) {
          // to href
        } else if (action) {
          action(action_value);
        }
      }}
    >
      <IconContext.Provider
        value={{
          color: "var(--text3)",
          size: "1.4rem",
          weight: "bold",
        }}
      >
        {icon}
      </IconContext.Provider>
    </div>
  );
};

export default NavbarButton;
