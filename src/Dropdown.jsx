// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import DropDownList from './dropDownList.json';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 active:border-white border-transparent duration-300 active:text-white'
      >
        Drop Down
        {isOpen ? (
          <AiOutlineCaretUp className='h-8' />
        ) : (
          <AiOutlineCaretDown className='h-8' />
        )}
      </button>

      {isOpen && (
        <div className='absolute bg-blue-400 top-20 flex flex-col items-start rounded-lg p-2 w-full'>
          {DropDownList.map((item, i) => (
            
              <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4' key={i}>
                <h3 className='font-bold p-4'>{item.Thingy}</h3>
                <h3 className='p-4'>{item.Emoji}</h3>
              </div>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
