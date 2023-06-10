import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import ActionButton from "../ActionButton";
import { ShoppingCart } from "@phosphor-icons/react";

const CartItem = ({ product_name }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState("");

  async function getUnsplashImage() {
    try {
      const response = await fetch(
        `https://source.unsplash.com/featured/?${name}`
      );
      const imageUrl = response.url;

      if (imageUrl.includes("source-404")) {
        throw new Error("Nenhuma imagem relacionada encontrada");
      }

      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Erro ao obter a imagem:", error);
      return null;
    }
  }

  useEffect(() => {
    getUnsplashImage();
    setName(product_name);
  }, [product_name]);

  return (
    <div
      style={{
        flexDirection: "row",
        backgroundColor: "var(--background1)",
        padding: "0.5rem",
        borderRadius: "1.2rem",
        width: "100%",
        gap: "0.5rem",
        position: "relative",
      }}
    >
      <div>
        <img
          style={{
            width: "3.5rem",
            height: "3.5rem",
            objectFit: "cover",
            borderRadius: "0.8rem",
          }}
          src={imageUrl}
          alt={name}
        />
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <ActionButton {...{ icon: <ShoppingCart />, has_arrow: true }} />
      </div>
    </div>
  );
};

export default CartItem;
