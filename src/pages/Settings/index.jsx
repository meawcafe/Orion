const Settings = ({section_index, index}) => {
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
      <h1>Settings</h1>
    </div>
  )
}

export default Settings;