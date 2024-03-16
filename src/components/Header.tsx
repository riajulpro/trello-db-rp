import { FaAngleDown, FaRegBell } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <nav className="w-full">
        <div className="w-full h-[47px] p-[8px] border-b-[1px] border-[#31383d] flex justify-between items-center text-[#9fadbc]">
          {/* left side */}
          <div className="w-full flex sm:justify-start justify-between items-center gap-[10px]w-full sm:w-fit">
            <h2 className="font-[700]">TRELLO</h2>
            <div className="hidden lg:flex justify-start items-center gap-[10px]">
              <button className="flex justify-center items-center gap-[5px] px-[10px] py-[6px]">
                Workspace <FaAngleDown />
              </button>
              <button className="flex justify-center items-center gap-[5px] px-[10px] py-[6px]">
                Recent <FaAngleDown />
              </button>
              <button className="flex justify-center items-center gap-[5px] px-[10px] py-[6px]">
                Started <FaAngleDown />
              </button>
              <button className="flex justify-center items-center gap-[5px] px-[10px] py-[6px]">
                Template <FaAngleDown />
              </button>
            </div>

            <button className="px-[12px] py-[5px] bg-blue-500 rounded-md text-white">
              Create
            </button>
          </div>

          {/* right side*/}

          <div className="hidden sm:flex justify-start items-center gap-[10px]">
            <div className="flex items-center justify-start gap-[5px] w-[198px] h-[30px] py-[6px] px-[8px] border-[1px] border-[#31383d] rounded-md">
              <IoSearchSharp />
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none text-[#9fadbc] w-full"
              />
            </div>
            <FaRegBell />

            <div className="w-[28px] h-[28px] bg-[#31383d] rounded-full"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
