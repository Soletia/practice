'use client'
import { useState } from "react";

export default function Home({value, setValue}) {
  
  return (

<main>

     <center>
     <p className="coun">Счетчик:</p>
      <div className="counter">
        {value}<br/>
        </div>
        <hr className="divider"/>
        <button className="text-white font-bold py-2 px-4 rounded" onClick={() => setValue(value + 1)}>Увеличить число на 1</button> <br/>
        <button className="text-white font-bold py-2 px-4 rounded m-4" onClick={() => setValue(value - 1)}>Уменьшить число на 1</button>

      </center>
    </main>
        );
  };

