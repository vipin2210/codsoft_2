import Link from "next/link";
import { useState } from "react";

function Button() {
    return (
        <div class='containerTab '>
            <div class='tabsButton  rounded-full p-1 '>
                <input type='radio' id='radio-1' name='tabs' />
                <label
                    class='tabButton w-[150px] min-[360px]:w-[180px] text-lg min-[360px]:text-xl sm:w-[200px]
                   
                    text-center '
                    for='radio-1'
                >
                    Upcoming Events
                </label>
                <input type='radio' id='radio-2' name='tabs' />
                <label
                    class='tabButton w-[150px] min-[360px]:w-[180px] text-lg min-[360px]:text-xl sm:w-[200px] text-center'
                    for='radio-2'
                >
                    Past Events
                </label>
                {/* <input type='radio' id='radio-3' name='tabs' />
                <label class='tabButton' for='radio-3'>
                    Completed 
                </label> */}
                <span class='gliderTabButton w-[150px] min-[360px]:w-[180px] rounded-full sm:w-[200px]'></span>
            </div>
        </div>
    );
}

export default Button;
