export const Title = ({ title, style }: { title: string; style?: {} }) => {
  return (
    <h2 style={style} className="title">
      {title}
    </h2>
  );
};
