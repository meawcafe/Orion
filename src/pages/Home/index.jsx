import CartItem from "../../components/CartItem";
import ListItem from "../../components/ListItem";

const Home = ({ lists, setSelectedList, section_index, setSectionIndex, index }) => {
  return (
    <div
      style={{
        flexDirection: "column",
        position: "relative",
        width: "100vw",
        maxHeight: "100%",
        padding: "0.5rem",
        gap: "0.5rem",
        backgroundColor: "var(--background3)",
        opacity: section_index === index ? 1 : 0,
        transition: "0.3s ease-in-out",
      }}
    >
      <div>
        <h1>Home</h1>
      </div>

      <div
        style={{
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: "0.5rem",
          overflowY: "scroll",
          paddingBottom: "2rem",
          borderRadius: "1.2rem 1.2rem 0 0",
        }}
      >
        {lists?.map((item, index) => (
          <ListItem key={index} {...{ item, setSelectedList, setSectionIndex }} />
        ))}

        {lists?.length > 0 && (
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

        {lists?.length === 0 && (
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
              Parece que você ainda não tem nenhuma lista...
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
              Vá em frente e crie uma!
            </span>
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

export default Home;
