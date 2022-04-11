import CharacterList from "./Components/Characters/CharactersList";
import Header from "./Components/Header/Header";
import MiddleContent from "./Components/MiddleContent/MiddleContent";

const App = () => {
  return (
    <div>
      <Header />
      <MiddleContent />
      <CharacterList />
    </div>
  );
};

export default App;
