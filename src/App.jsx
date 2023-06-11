import { useRef, useState } from "react";
import ShoppingList from "./pages/ShoppingList";
import Cart from "./pages/Cart";
import BottomNavbar from "./components/BottomNavbar";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import useData from "./services/useData";
import ListItemForm from "./components/ListItem/ListItemForm";

function App() {
  const pages = [
    {
      name: "Início",
    },
    {
      name: "Lista de compras",
    },
    {
      name: "Carrinho",
    },
    {
      name: "Ajustes",
    },
  ];
  const [section_index, setSectionIndex] = useState(0);
  const [selected_list, setSelectedList] = useState(null);
  const [open_list_item_form, setOpenListItemForm] = useState(false);

  const { lists } = useData();

  // Touch Events
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndRef.current = event.changedTouches[0].clientX;
    const dragDistance = touchEndRef.current - touchStartRef.current;

    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) {
        if (section_index - 1 < 0) return;
        console.log("<--");
        console.log(section_index - 1);
        setSectionIndex(section_index - 1);
      } else {
        if (section_index + 1 > 3) return;
        console.log("-->");
        console.log(section_index + 1);
        setSectionIndex(section_index + 1);
      }
    }
  };

  return (
    <div
      className="white-theme normal-colors"
      style={{
        flexDirection: "column",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        borderRadius: "1.8rem",
        backgroundColor: "var(--background3)",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <TopNavbar {...{ current_page: pages[section_index] }} />

      <div
        style={{
          position: "relative",
          width: "400vw",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "var(--background3)",

          left: `calc(-${section_index} * 100vw)`,
          transition: "0.3s ease-in-out",
        }}
      >
        <Home
          {...{
            lists,
            setSelectedList,
            section_index,
            setSectionIndex,
            index: 0,
          }}
        />
        <ShoppingList
          {...{
            selected_list,
            setSectionIndex,
            section_index,
            index: 1,
          }}
        />
        <Cart
          {...{
            section_index,
            index: 2,
          }}
        />
        <Settings
          {...{
            section_index,
            index: 3,
          }}
        />
      </div>

      <BottomNavbar
        {...{
          section_index,
          setSectionIndex,
          setOpenListItemForm,
        }}
      />

      {/* forms */}
      <ListItemForm
        {...{ open: open_list_item_form, setOpen: setOpenListItemForm }}
      />
    </div>
  );
}

export default App;
