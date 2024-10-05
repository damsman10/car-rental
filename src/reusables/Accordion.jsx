import React, { useState, useRef } from 'react';

const Accordion = ({ title, content, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-div border border-gray-300 rounded-md mb-2.5 overflow-hidden">
            <div
                className={`title-hold flex items-center p-3.5 cursor-pointer ${
                    isOpen ? 'bg-customYellow' : 'bg-white'
                }`}
                onClick={toggleAccordion}
            >
                <div className="icon-hold mr-2.5">{icon}</div>
                <h2 className='text-lg font-semibold flex-1 500px:text-[10px]'>{title}</h2>
                <span className="text-xl">{isOpen ? '-' : '+'}</span>
            </div>

            <div
                className={`accordion-content transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'bg-[#FFFBEE] max-h-[500px]' : 'bg-transparent max-h-0'
                }`}
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <p className='m-0 p-3.5'>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;

