/* eslint-disable react/prop-types */
'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className='flex justify-center items-center py-12'>
      <div className='max-w-md flex flex-col gap-y-2 w-full'>
        <div className='bg-purple-400 p-1  rounded-xl flex justify-between items-center gap-x-2 font-bold text-white'>
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-purple-300 rounded-xl text-cneter ring-violet-500 focus:ring-2 focus:bg-white focus:text-purple-600 ${
                selectedTab === index ? 'ring-2 bg-white text-purple-600' : ''
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className=' p-2 rounded-xl'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? '' : 'hidden'}`}
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