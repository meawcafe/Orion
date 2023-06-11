import { IconContext } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const NavbarButton = ({
  icon,
  text = null,
  middle = false,
  index = null,
  action = null,
  section_index,
  setSectionIndex,
}) => {
  const [current_section, setCurrentSection] = useState(true);

  useEffect(() => {
    if (index === section_index) {
      setCurrentSection(true);
    } else {
      setCurrentSection(false);
    }
  }, [section_index]);

  return (
    <div
      style={{
        width: "3.5rem",
        height: "3.5rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",

        // if middle
        borderRadius: middle && "50%",
        bottom: middle && "1rem",
        background:
          middle &&
          "linear-gradient(0deg, var(--accent-color1) 0%, var(--accent-color2) 100%)",
        boxShadow: middle && "0 0 0 0.4rem var(--background1)",
      }}
      onClick={() => {
        console.log(index);
        if (index !== null) {
          setSectionIndex(index);
        } else if (action) {
          action(true);
        }
      }}
    >
      <IconContext.Provider
        value={{
          color: current_section ? "var(--accent-color1)" : middle ? "white" : "var(--text4)",
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
            color: current_section ? "var(--accent-color1)" : "var(--text4)",
            textAlign: "center",
          }}
        >
          {text}
        </span>
      )}

      <div
        style={{
          position: "absolute",
          width: "0.5rem",
          height: "0.5rem",
          borderRadius: "50%",
          backgroundColor: "var(--accent-color1)",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: current_section ? "-0.25rem" : "-2rem",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default NavbarButton;
