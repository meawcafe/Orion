import { IconContext } from "@phosphor-icons/react";

const NavbarButton = ({
  icon,
  text,
  href = null,
  action = null,
  action_value = null,
  middle = false,
}) => {
  return (
    <div
      style={{
        width: "3.5rem",
        height: "3.5rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // if middle
        position: middle && "relative",
        borderRadius: middle && "50%",
        bottom: middle && "1rem",
        background: middle && "linear-gradient(90deg, var(--accent-color1) 0%, var(--accent-color2) 100%)",
        boxShadow: middle && "0 0 0 0.4rem var(--background1)",
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
          color: middle ? "white" : "var(--text4)",
          size: "1.4rem",
          weight: "fill",
        }}
      >
        {icon}
      </IconContext.Provider>

      {!middle && (
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: "bold",
            color: "var(--text3)",
            textAlign: "center",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default NavbarButton;
