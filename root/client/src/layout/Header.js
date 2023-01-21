import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

import { useGameContext } from "../context/GameContext";
import NewGameModal from "../components/NewGameModal";

const Header = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const currentLocation = useLocation().pathname;

  const { initGameModal, setGameModal,handleInitGameModal } = useGameContext();

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <>
      {initGameModal && <NewGameModal />}
      <nav ref={navRef} className="w-full top-0 z-20">
        <div className="items-center px-4 max-w-screen-full mx-auto lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <Link to="/">
              <span className="text-2xl">
                <span className="text-amber-500 font-bold">Xo</span>Game
              </span>
            </Link>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div>
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                <li className="mt-8 lg:mt-0">
                  <button
                    onClick={() => handleInitGameModal()}
                    className="py-3 px-4 text-center text-white bg-gradient-to-l from-orange-500 to-orange-400 hover:from-amber-600 hover:to-amber-500 hover:border-2 border-yellow-600 rounded-md shadow block lg:inline"
                  >
                    {currentLocation === "/gameboard" ? "New Game" : "Play Now"}
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex mx-10">
              <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                {navLinks.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-300 hover:text-indigo-600 font-semibold"
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
