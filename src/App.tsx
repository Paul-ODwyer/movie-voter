// App.tsx
import Header from "./Header";
import Movie from "./Movie";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Movie title="Megamind" />
        <Movie title="Benhur" />
        <Movie title="Top Gun" />
        <Movie title="Nacho Libre" />
      </main>
    </div>
  );
}

export default App;
