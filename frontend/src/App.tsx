import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
      <h1>Olá Mundo!</h1>
      <NotificationButton />
    </>
  );
}

export default App;
