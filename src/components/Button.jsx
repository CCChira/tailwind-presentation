import React from 'react';
/*
  We use type to specify the overall styling of the button
  We use modifiers to give specific styling to one instance of the button, 
  usually differing from the type styles
  !!! If you use Tailwind snippets/intellisense/Headwind, it will not work with
  Tailwind classes written in a string and not in the className so keep that in mind
*/
export default function Button({ children, type, modifiers }) {
  const defaultButton = 'px-2 py-2 rounded-full font-bold w-30 h-10';
  const types = {
    primary: 'bg-orange-primary text-white',
    secondary: 'bg-white text-orange-primary',
    default: 'bg-white text-black',
  };
  return (
    <button className={`${defaultButton} ${types[type]} ${modifiers}`}>
      {children}
    </button>
  );
}
