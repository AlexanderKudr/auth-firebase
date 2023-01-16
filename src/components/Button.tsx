interface Button {
  className: string;
  signOut: Function;
}
export const Button = ({ className, signOut }: Button) => {
  return (
    <button className="sign-out" onClick={signOut}>
      Sign out
    </button>
  );
};
