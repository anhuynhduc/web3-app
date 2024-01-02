"use client"
import React,{ ReactNode, useState }from 'react';

interface LayoutProps {
  children: ReactNode
}
export const Theme: React.FC<LayoutProps> = ({ children }) => {
  const [theme,setTheme] = useState('Light')

  const handleThemesDark = () =>{
    setTheme("Dark")
  }

  const handleThemesLight = () =>{
    setTheme("Light")
  }
  return (
    <div className={` color-transition ${theme == "Light" ?  ('bg-white') :('bg-black')}`}>
      <div className='flex gap-5'>
        <button onClick={() =>handleThemesDark()} className=' bg-white border-black px-4 py-2 rounded-md border-2 text-red-600'>Dark</button>
        <button onClick={() =>handleThemesLight()} className=' bg-white border-black px-4 py-2 rounded-md border-2 text-red-600'>Light</button>
      </div>
      <div className={` color-transition ${theme == "Light" ?  ('!text-black') :('!text-white')}`}>
        {children}
      </div>
    </div>
  );
};