import { useEffect, useState } from "react";
import getUnsplashImage from "../../services/getUnsplashImage";

const ListItem = ({ item, setSelectedList, setSectionIndex }) => {
  const { title, description, items } = item;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    getUnsplashImage(title).then((image_url) => setImageUrl(image_url));
  }, [item]);

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
        alignItems: "center",
      }}
      onClick={() => {
        setSelectedList(item);
        setTimeout(() => {
          setSectionIndex(1);
        }, 500);
      }}
    >
      <div>
        <img
          style={{
            width: "5rem",
            height: "5rem",
            objectFit: "cover",
            borderRadius: "0.8rem",
          }}
          src={imageUrl}
          alt={title}
        />
      </div>

      <div
        style={{
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "var(--text1)",
          }}
        >
          {title}
        </span>
        <span
          className="nowrap-2-lines"
          style={{
            fontSize: "0.8rem",
            color: "var(--text2)",
          }}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default ListItem;
