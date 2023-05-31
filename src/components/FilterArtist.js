import React from 'react'

const FilterArtist = () => {
    return (
        <div class="flex flex-col md:w-52 max-w-xs border-solid border-2 m-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-rose-50">
            <div class="px-1 m-4">
                <div class="flex justify-between">
                    <div class="font-bold text-xl">Filter</div>
                    <div><select class="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
                        <option>hide</option>
                        <option>show</option>
                    </select></div>
                </div>
                <div class="flex items-start space-x-3 py-2 focus:text-red-600">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Singer</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Musicians</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Comedians</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input id="1st" type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Reasonable Artist</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Poet</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Other Artist</h1>
                    </div>
                </div>
            </div>
            <div class="px-1 m-4">
                <div class="flex justify-between">
                    <div class="font-bold text-xl">Category</div>
                    <div><select class="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
                        <option>hide</option>
                        <option>show</option>
                    </select></div>
                </div>
                <div class="flex items-start space-x-3 py-2 focus:text-red-600">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Ghazalkaar</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Sufi Singer</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Rapper</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input id="1st" type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Other</h1>
                    </div>
                </div>
            </div>
            <div class="px-1 m-4">
                <div class="flex justify-between">
                    <div class="font-bold text-xl">City</div>
                    <div><select class="bg-gray-50 border border-gray-300 text-md rounded-2xl p-1">
                        <option>hide</option>
                        <option>show</option>
                    </select></div>
                </div>
                <div class="flex items-start space-x-3 py-2 focus:text-red-600">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Delhi/NCR</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Noida</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Mumbai</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input id="1st" type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Haryana</h1>
                    </div>
                </div>
                <div class="flex items-start space-x-3 py-2">
                    <input type="checkbox" class="rounded h-6 w-6 accent-red-600" />

                    <div class="flex flex-col">
                        <h1 class="text-gray-700 font-medium leading-none">Other</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilterArtist;
