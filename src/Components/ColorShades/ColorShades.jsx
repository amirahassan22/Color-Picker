import React from 'react'
import { nanoid } from 'nanoid';
import SingleColor from '../SingleColor/SingleColor';

export default function ColorShades({colorShades}) {
  console.log(nanoid());
  
  return (
    <section>
        <div className="w-full mt-7 mx-0 px-0">
        {/* 21 spans needed */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center mt-8">
            {colorShades.map(colorShade => {
                return(
                  <SingleColor key={nanoid()} colorShade={colorShade}/>
                );
            })} 
        </div>
      </div>
    </section>
  )
}
