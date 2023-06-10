import { useState } from "react";
import CartItem from "../../components/CartItem";
import TextareaAutosize from 'react-textarea-autosize';
import { PencilLine } from "@phosphor-icons/react";


const ShoppingList = ({ list, show_cart, setShowCart }) => {
  const [list_description, setListDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: show_cart ? "-100vw" : 0,
        opacity: show_cart ? 0 : 1,

        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        paddingTop: 0,
        backgroundColor: "var(--background3)",

        transition: "0.3s ease-in-out",
      }}
    >
      <div
        style={{
          padding: '0.5rem',
          flexDirection: "column",
        }}
      >
        <TextareaAutosize
          type="text"
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
          padding: "0.5rem",
          gap: "0.5rem",
          overflowY: "scroll",
          paddingBottom: '2rem',
        }}
      >
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
        <CartItem {...{ product_name: "rice" }} />
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
      </div>
      <div 
          style={{
            height: '4rem',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'linear-gradient(0deg, var(--background3) 0%, rgba(255,255,255,0) 100%)'
          }}
        />
    </div>
  );
};

export default ShoppingList;
