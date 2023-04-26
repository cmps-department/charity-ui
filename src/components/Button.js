function Button({ onClick, children }) {
  return (
    <button
      className="max-w-[300px] w-full box-border ease-in duration-200 
                font-semibold uppercase 
                bg-primary-100 text-center py-3 rounded-xl border-3 border-primary-100 hover:bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
