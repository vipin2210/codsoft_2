import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useState } from "react";

const CARDS = 5;
const MAX_VISIBILITY = 3;

const Card = ({ videosrc, content, title, name }) => (
    <div className='sm:flex sm:flex-row w-full justify-center lg:pl-56 mt-16'>
        <div className='sm:w-60 h-96 w-full '>
            <video controls className='rounded-lg '>
                <source src={videosrc} type='video/webm' />
            </video>
        </div>
        <div className='sm:w-3/4 mt-4 sm:mt-0 text-white w-full sm:px-14 sm:pr-28 sm:flex sm:flex-col text-xl'>
            {content}
            <div className='text-white font-bold text-3xl pt-8 uppercase'>
                {name}
            </div>
            <div className='font-moon-dance text-white'>Legendary {title}</div>
        </div>
    </div>
);

const BitesCarousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className='carousel'>
            {active > 0 && (
                <button
                    className='nav left'
                    onClick={() => setActive((i) => i - 1)}
                >
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className='card-container'
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 3,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 3,
                        "pointer-events": active === i ? "auto" : "none",
                        opacity:
                            Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                        display:
                            Math.abs(active - i) > MAX_VISIBILITY
                                ? "none"
                                : "block",
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button
                    className='nav right'
                    onClick={() => setActive((i) => i + 1)}
                >
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};

export default BitesCarousel;
