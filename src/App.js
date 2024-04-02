import Header from './Header';
import Post from "./Post";
import Aside from './Aside';
function App() {
  return (
    <>
      <Header />
      { /*POST AND SIDEMENU CONTAINER*/}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "85vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        { /*POST CONTAINER*/}
        <main style={{ width: "65%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
        { /***POST CONTAINER***/}

        { /*ASIDE CONTAINER*/}
        <div style={{
          width: "32%",
        }}>
          <Aside />
        </div>
        { /***ASIDE CONTAINER***/}

      </div >
      { /*POST AND SIDEMENU CONTAINER*/}
    </>
  );
}
export default App;