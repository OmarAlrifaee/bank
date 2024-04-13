const Button = ({ text, bg }) => (
  <button
    className={`${bg} p-4 mt-12 text-black font-semibold capitalize font-poppins rounded-lg md:mx-0 mx-auto`}
  >
    {text}
  </button>
);

export default Button;
