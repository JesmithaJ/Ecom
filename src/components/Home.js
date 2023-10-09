
import Login from "./Login";
import SearchProduct from "./SearchProduct";

function Home() {

  const isSessionActive = true
  return (
    <div>
     {!isSessionActive && <Login />}
      {/* <Products /> */}
      <p>WELCOME TO THE E COMMERCE APPLICATION</p>
      <div>
      <SearchProduct/>
      </div>
    </div>

  );
}

export default Home;
