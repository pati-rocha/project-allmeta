import Header from "./components/Header/header";
import SalesCard from "./components/SalesCard/salesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
