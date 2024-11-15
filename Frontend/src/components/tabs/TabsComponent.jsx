/* eslint-disable react/prop-types */
'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  // Focus the first tab when the component mounts
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        {/* Tabs Section - Fixed and Non-Scrollable */}
        <div className="bg-indigo-400 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)} // Update selected tab when clicked
              className={`outline-none w-full p-2 hover:bg-indigo-300 rounded-xl text-center ring-indigo-500 focus:ring-2 focus:bg-white focus:text-indigo-600 ${
                selectedTab === index ? 'ring-2 bg-white text-indigo-600' : ''
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Section - Scrollable */}
        <div className="max-h-[60vh] overflow-y-auto p-2 pb-4 rounded-xl mt-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? '' : 'hidden'} ${index === items.length - 1 ? 'sm:pb-8' : ''}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;