import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { buttons } from "../utils/buttonsData";

export const Login = () => {
  return (
    <>
      <Header />
      <Card className="Card">{buttons}</Card>
    </>
  );
};
