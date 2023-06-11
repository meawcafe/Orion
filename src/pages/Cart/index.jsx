const Cart = ({section_index, index}) => {
  return (
    <div
      style={{
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        backgroundColor: "rgba(0, 0, 255)",
        opacity: section_index === index ? 1 : 0,
        transition: "0.3s ease-in-out",
      }}
    >
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
