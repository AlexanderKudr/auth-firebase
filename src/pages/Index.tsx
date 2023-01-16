import {Header} from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import { Title } from "../components/Title";
export const Index = () => {
  return (
    <div className="container">
      <Header />
      <section>
        <Title title="Upgrade your web develompent today" />
        <Paragraph paragraph="Learn web develompent using the latest tech" />
      </section>
    </div>
  );
};
