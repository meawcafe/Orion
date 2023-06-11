import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import ActionButton from "../ActionButton";
import { ShoppingCart } from "@phosphor-icons/react";
import getUnsplashImage from "../../services/getUnsplashImage";

const CartItem = ({ item }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    getUnsplashImage(item.name).then((image_url) => setImageUrl(image_url));
    setName(item.name);
  }, [item.name]);

  return (
    <div
      className="animation-on-press"
      style={{
        flexDirection: "row",
        backgroundColor: "var(--background2)",
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
