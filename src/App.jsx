import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Main />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
