import { ArrowRight } from "@phosphor-icons/react";

const ActionButton = (props) => {
  const {
    // text = null,
    icon = null,
    has_arrow = false,
    // success, error, warning, info
    type = "success",
    onClick = () => {
      alert("sem funcao implementada");
    },
    // disabled = false,
    // loading = null,
  } = props;

  const colors = {
    success: "#8df0a8",
    error: "rgb(255,0,0)",
    warning: "rgb(255,255,0)",
    info: "rgb(0,0,255)",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      // disabled={disabled}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        paddingLeft: "0.1rem",
        borderRadius: "0.8rem",
        width: "3.5rem",
        height: "3.5rem",
        backgroundColor: colors[type],
        color: "black",
        border: "none",
        outline: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        position: "relative",
        // opacity: disabled ? 0.5 : 1,
      }}
    >
      {icon}

      {has_arrow && (
        <ArrowRight
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "0.4rem",
            fontSize: "0.8rem",
          }}
          weight="bold"
        />
      )}
    </button>
  );
};

export default ActionButton;
