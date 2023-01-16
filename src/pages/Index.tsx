import { Group } from "../components/Group";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import { Title } from "../components/Title";
export const Index = () => {
  return (
    <div className="container">
      <Header />
      <Group className="section">
        <Title title="Upgrade your web develompent today" />
        <Paragraph paragraph="Learn web develompent using the latest tech" />
      </Group>
    </div>
  );
};
