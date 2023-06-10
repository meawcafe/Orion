import { useRef, useState } from "react";
import ShoppingList from "./pages/ShoppingList";
import Cart from "./pages/Cart";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";

function App() {

  const [show_cart, setShowCart] = useState(false);

  // Touch Events
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndRef.current = event.changedTouches[0].clientX;
    const dragDistance = touchEndRef.current - touchStartRef.current;

    if (Math.abs(dragDistance) > 80) {
      if (dragDistance > 0) {
        setShowCart(false);
      } else {
        setShowCart(true);
      }
    }
  };

  return (
    <div
      className="white-theme"
      style={{
        position: "relative",
        flexDirection: "column",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        borderRadius: "1.8rem",
        backgroundColor: "var(--background3)",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <TopNavbar />
      
      <div
        style={{
          position: "relative",
          flexDirection: "row",
          width: "100vw",
          height: "100%",
          backgroundColor: "var(--background1)",
        }}
      >
        <ShoppingList {...{ show_cart, setShowCart }} />
        <Cart {...{ show_cart, setShowCart }} />
      </div>

      <BottomNavbar {...{
        show_cart,
        setShowCart,
      }} />
    </div>
  );
}

export default App;
