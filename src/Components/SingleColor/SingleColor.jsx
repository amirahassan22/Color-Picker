import React from "react";
import { toast } from "react-toastify";

export default function SingleColor({colorShade}) {
    const copyValue = async()=>{
        if (navigator.clipboard) {
         try {
            await navigator.clipboard.writeText(`#${colorShade.hex}`);
            toast.success("color copied to clipboard <3")
         } catch (error) {
            toast.error("error while copying , try again <3")
         }
        }else{
            toast.error("clipboard access not available")
        }
       }
  return (
    <article
      className="py-6"
      style={{
        backgroundColor: "#" + colorShade.hex,
        color: colorShade.type === "tint" ? "#000" : "#fff",
      }}
      onClick={() => copyValue(colorShade.hex)}
    >
      <p>{colorShade.weight}%</p>
      <p>#{colorShade.hex}</p>
    </article>
  );
}
