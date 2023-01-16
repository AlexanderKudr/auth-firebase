interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
}

export const Button = ({ children, icon, ...rest }: Props) => {
  return (
    <button {...rest} >
      {icon && icon}
      {children}
    </button>
  );
};
