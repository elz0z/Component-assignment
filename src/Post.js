export default function Post() {
  const postStyle = {
    border: "3px solid teal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  }
  return (
    <div style={postStyle}>
      <h2 style={{ margin: "0", padding: "10px" }}>This is post title</h2>
      <hr style={{ width: "95%" }} />
      <p style={{ margin: "0", padding: "10px" }}>This is post body</p>
    </div >
  )
}