import "./styles/main.css";



import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Words from "./pages/Words";
import Flashcards from "./pages/Flashcards";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Words />
      {/* <Flashcards /> */}
      <Footer />
    </div>
  );
}

export default App;
