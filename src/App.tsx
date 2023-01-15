import Header from "./components/Header";
import { Card } from "./components/Card";
import { buttons } from "./utils/buttonsData";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Card>{buttons}</Card>
    </div>
  );
};
