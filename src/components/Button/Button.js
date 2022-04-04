const Button = (actionOnClick, text) => {
  return (
    <>
      <button onClick={actionOnClick}>{text}</button>
    </>
  );
};
export default Button;
