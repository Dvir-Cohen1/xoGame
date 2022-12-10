import { Link } from "react-router-dom";
import * as React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import GroupIcon from "@mui/icons-material/Group";
import ComputerIcon from "@mui/icons-material/Computer";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const NewGameModal = ({ initGameModal, handleInitGameModal }) => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return initGameModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => handleInitGameModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <form>
            <div className="mt-3">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                <VideogameAssetIcon color="success" />
              </div>
              <div className="mt-2 text-center">
                <h4 className="text-lg font-medium text-gray-800">
                  {/* Game Setting */}
                </h4>
                <div className="text-gray-800 font-medium flex flex-col justify-center text-center">
                  <p className="text-xl">Choose Mode</p>
                  <p className="my-2 text-[15px] leading-relaxed text-gray-500">
                    You can play against the Computer or Invite friend via email
                    / link.
                  </p>
                  <div>
                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      required
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      <ToggleButton size="large" value="live">
                        <GroupIcon />
                      </ToggleButton>
                      <ToggleButton size="large" value="computer">
                        <ComputerIcon />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>

                <div className="flex items-center text-gray-400 border rounded-md my-5">
                  <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                    @
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Sidi Dev"
                    id="username"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none border-0"
                  />
                </div>
              </div>
            </div>

            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                type="submit"
                className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                onClick={() => {
                  return;
                }}
              >
                Start Game
              </button>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => handleInitGameModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NewGameModal;
