function Mark({ onClick, children }) {
    return (
      <button
        className="max-w-[60px] w-full box-border ease-in duration-200 
                  font-semibold uppercase 
                  bg-primary-400 text-center py-3 rounded-xl border-3 border-primary-100 hover:bg-transparent"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  export default Mark;
  