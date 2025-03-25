import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-3xl font-semibold">Deepesh 👋</span>
      </h1>
      <button className="bg-red-400 px-5 py-2 rounded-lg hover:bg-white hover:text-red-400 hover:scale-110 hover:transition-transform hover:duration-300 text-lg">
        Log Out
      </button>
    </div>
  );
};

export default Header;
