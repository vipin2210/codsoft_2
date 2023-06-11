import React from "react";

const FilterArtist = () => {
  return (
    <div className="flex flex-col md:w-52 max-w-xs border-solid border-2 m-6 mt-0 rounded-2xl bg-gradient-to-br from-neutral-50 to-rose-100 drop-shadow-xl">
      <div className="px-1 m-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">Filter</div>
          <div>
            <select className="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
              <option>hide</option>
              <option>show</option>
            </select>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2 focus:text-red-600">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Singer</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Musicians
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Comedians
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Reasonable Artist
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Poet</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Other Artist
            </h1>
          </div>
        </div>
      </div>
      <div className="px-1 m-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">Category</div>
          <div>
            <select className="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
              <option>hide</option>
              <option>show</option>
            </select>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2 focus:text-red-600">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>
          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Ghazalkaar
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Sufi Singer
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Rapper</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Other</h1>
          </div>
        </div>
      </div>
      <div className="px-1 m-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">City</div>
          <div>
            <select className="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
              <option>hide</option>
              <option>show</option>
            </select>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2 focus:text-red-600">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">
              Delhi/NCR
            </h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Noida</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Mumbai</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Haryana</h1>
          </div>
        </div>
        <div className="flex items-start space-x-3 py-2">
          <label className="border-t-2 border-l-2 h-6 border-black  ">
            <input
              type="checkbox"
              className="rounded h-6 w-6 accent-red-600   "
            />
          </label>

          <div className="flex flex-col">
            <h1 className="text-gray-700 font-medium leading-none">Other</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterArtist;
