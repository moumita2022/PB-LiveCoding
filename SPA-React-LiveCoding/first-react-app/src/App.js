import Article from "./Article";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>

      <Footer />
    </div>
  );
}

export default App;
