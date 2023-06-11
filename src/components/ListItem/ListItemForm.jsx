import { Plus, Rows, X } from "@phosphor-icons/react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ListItemForm = ({ open, setOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "100",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1.8rem",
        padding: "1rem",

        opacity: open ? "1" : "0",
        pointerEvents: open ? "all" : "none",
        transition: "0.3s ease-in-out",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: "0.5",
          zIndex: "-1",
        }}
        onClick={() => {
          setOpen(false);
        }}
      />

      {/* form container */}
      <div
        style={{
          width: "100%",
          height: "max-content",
          backgroundColor: "var(--background2)",
          borderRadius: "1.2rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",

          position: "relative",
          top: open ? "0" : "4rem",
          opacity: open ? "1" : "0",
          transition: "0.3s cubic-bezier(0.57, 0.01, 0.27, 1)",
        }}
      >
        {/* header */}
        <div
          style={{
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "var(--text1)",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Rows size={30} weight="regular" />
            Criar lista
          </span>
          <X
            weight="bold"
            size={30}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextareaAutosize
            type="text"
            placeholder="Descrição da lista"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={(e) => setDescription(e.target.value.trim())}
            maxRows={5}
          />
        </form>

        {/* bottom */}
        <div
          style={{
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <button
            className="animation-on-press"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              paddingRight: "1.2rem",
              borderRadius: "0.8rem",
              background:
                "linear-gradient(90deg, var(--danger1) 0%, var(--danger2) 100%)",
              marginTop: "1rem",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <X size={24} color="var(--reverse-text3)" weight="bold" />

            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "var(--reverse-text3)",
              }}
            >
              Cancelar
            </span>
          </button>

          <button
            className="animation-on-press"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              paddingRight: "1.2rem",
              borderRadius: "0.8rem",
              background:
                "linear-gradient(90deg, var(--accent-color1) 0%, var(--accent-color2) 100%)",
              marginTop: "1rem",
            }}
            // onClick={() => setSectionIndex(0)}
          >
            <Plus size={24} color="var(--reverse-text3)" weight="bold" />

            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "var(--reverse-text3)",
              }}
            >
              Adicionar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItemForm;
