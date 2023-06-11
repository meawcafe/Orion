import { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import TextareaAutosize from "react-textarea-autosize";
import { Rows } from "@phosphor-icons/react";

const ShoppingList = ({
  selected_list,
  section_index,
  setSectionIndex,
  index,
}) => {
  const [list_description, setListDescription] = useState("");

  useEffect(() => {
    setListDescription(selected_list?.description);
  }, [selected_list]);

  return (
    <div
      style={{
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        padding: "0.5rem",
        gap: "0.5rem",
        paddingTop: 0,
        backgroundColor: "var(--background3)",
        position: "relative",
        overflow: "hidden",
        opacity: section_index === index ? 1 : 0,
        transition: "0.3s ease-in-out",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: list_description ? "flex" : "none",
        }}
      >
        <TextareaAutosize
          type="text"
          placeholder="Descrição da lista"
          value={list_description}
          onChange={(e) => setListDescription(e.target.value)}
          onBlur={(e) => setListDescription(e.target.value.trim())}
          maxRows={4}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: "0.5rem",
          overflowY: "scroll",
          paddingBottom: "2rem",
          borderRadius: "1.2rem 1.2rem 0 0",
        }}
      >
        {/* <CartItem {...{ product_name: "rice" }} /> */}

        {selected_list?.items?.map((item, index) => (
          <CartItem key={index} {...{ item }} />
        ))}

        {selected_list?.items?.length > 0 && (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              color: "var(--text2)",
              padding: "2rem 0",
            }}
          >
            Fim da lista
          </span>
        )}

        {selected_list?.items?.length === 0 && (
          <div
            style={{
              flexDirection: "column",
              gap: "0.5rem",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "var(--text2)",
                textAlign: "center",
                fontSize: "1.2rem",
                padding: "0 2rem",
                textOverflow: "inherit",
                whiteSpace: "wrap",
                fontWeight: "bold",
              }}
            >
              Hum, sua lista está vazia.
            </span>

            <span
              style={{
                color: "var(--text2)",
                textAlign: "center",
                fontSize: "1rem",
                padding: "0 2rem",
                textOverflow: "inherit",
                whiteSpace: "wrap",
              }}
            >
              O que você pretende adicionar?
            </span>
          </div>
        )}

        {selected_list === null && (
          <div
            style={{
              flexDirection: "column",
              gap: "0.5rem",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "var(--text2)",
                textAlign: "center",
                fontSize: "1.2rem",
                padding: "0 2rem",
                textOverflow: "inherit",
                whiteSpace: "wrap",
                fontWeight: "bold",
              }}
            >
              Nesta página, você pode ver e editar os itens de alguma lista
            </span>

            <span
              style={{
                color: "var(--text2)",
                textAlign: "center",
                fontSize: "1rem",
                padding: "0 2rem",
                textOverflow: "inherit",
                whiteSpace: "wrap",
              }}
            >
              Mas antes, você precisa selecionar uma lista para começarmos.
            </span>

            <button
              className="animation-on-press"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.8rem",
                background:
                  "linear-gradient(90deg, var(--accent-color1) 0%, var(--accent-color2) 100%)",
                marginTop: "1rem",
              }}
              onClick={() => setSectionIndex(0)}
            >
              <Rows size={24} color="var(--reverse-text3)" />

              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "var(--reverse-text3)",
                }}
              >
                Selecionar lista
              </span>
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          height: "4rem",
          position: "absolute",
          bottom: 0,
          width: "100%",
          background:
            "linear-gradient(0deg, var(--background3) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
};

export default ShoppingList;
