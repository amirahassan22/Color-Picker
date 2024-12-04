import React, { useState } from "react";
import Values from 'values.js'
import { toast } from "react-toastify";
import ColorShades from "../ColorShades/ColorShades";
  

export default function ColorPicker() {
  const [colorHex, setColorHex] = useState("");
  const [colorShades,setColorShades] = useState(new Values("#f15025").all(10));

  const changeColor = (e) => {
    setColorHex(e.target.value);
  };
  const handleColor = (e) => {
    e.preventDefault();
    handleColorShading(colorHex)
    
  };
  const handleColorShading = (color)=>{
   if (color !== "") {
    try {
      const generatedColorShades = new Values(color).all(10);
      console.log(generatedColorShades);
      setColorShades(generatedColorShades);
    } catch (error) {
      toast.error(error.message)
    }
   }else{
    toast.error("Try to enter a color")
   }
  }

  return (
    <section className="w-full py-8">
      <div className="w-full flex flex-col md:flex-row items-center mb-8 px-7 py-4">
        <h1 className="text-2xl  relative  mb-9 md:mb-0 font-mono font-medium tracking-wider capitalize after:content-[''] after:absolute after:-bottom-1 after:rounded-2xl after:left-2/4 after:-translate-x-1/2  after:w-2/5 after:h-1 after:bg-red-200 md:after:bg-transparent md:after:h-0" >color generator</h1>
        <form className="flex items-center ms-7" onSubmit={handleColor}>
          <input
            type="color"
            value={colorHex}
            name="colorPalette"
            className="w-12 h-11"
            onChange={changeColor}
          />
          <input
            type="text"
            value={colorHex}
            className="h-11 focus:border-0 px-4 text-gray-500 font-medium"
            onChange={changeColor}
            placeholder="#f15025"
          />
          <button
            type="submit"
            className="text-white rounded-r-lg"
            style={{ backgroundColor: colorHex || "#3e71ffde"  }}
          >
            Submit
          </button>
        </form>
      </div>
      <ColorShades colorShades={colorShades} />
    </section>
  );
}
