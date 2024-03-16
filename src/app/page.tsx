import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="w-auto h-full overflow-auto flex justify-center items-start">
        <div className="pl-[20px] sm:px-[32px] text-[#9fadbc] flex flex-col items-start justify-start gap-[50px]">
          {/* top */}
          <div className="w-full py-[32px]  border-b-[1px] border-[#31383d]">
            <div className="max-w-[856px] flex justify-between items-center mx-auto">
              <div className="px-[8px] flex justify-start items-center gap-[10px] ">
                <div className="gradient w-[55px] h-[55px] flex justify-center items-center rounded-md ">
                  <h1 className="text-[#171a1e] text-[20px]">T</h1>
                </div>

                <div className="flex flex-col justify-between items-start">
                  <p className="text-[14px]">Trello Workspace</p>
                  <p>Free</p>
                </div>
              </div>
              <button className="hidden px-[12px] py-[8px] bg-blue-500 rounded-md text-white sm:flex">
                Invite To workspace
              </button>
            </div>
          </div>

          {/* mid */}

          <div className="w-full">
            <div className="mx-auto flex flex-col items-start justify-start gap-[20px]">
              <h1>Borads</h1>
              <div className="flex gap-[20px] flex-wrap">
                <select className="bg-transparent border-[1px] border-[#31383d] py-[4px] px-[8px]">
                  <option value="">Most recent</option>
                </select>
                <select className="bg-transparent border-[1px] border-[#31383d] py-[4px] px-[8px]">
                  <option value="">Choose something</option>
                </select>
              </div>
              <div className="w-full flex flex-col justify-center md:justify-start items-center gap-[10px] md:flex-wrap md:flex-row">
                <div className="w-[80%] md:w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
                <div className="w-[80%] md:w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
                <div className="w-[80%] md:w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
                <div className="w-[80%] md:w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
