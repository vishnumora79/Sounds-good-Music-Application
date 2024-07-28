import React, { useState } from "react";

function Song({ song }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpected(!expected);
    };

    return (
    <div
         onClick={toggleExpand}
         className= {`cursor-pointer p-3 m-4 border border-gray-300 rounded-md shadow-md ${expanded ? 'fixed inset-0 bg-white z-50' : ""}`}
         style={{maxWidth : expanded ? '100%' : '200px', maxHeight : expanded ? '100pz' : '300px', overflow : 'hidden'}}
      >

      <img src= {song.cover} alt={song.name} className={`w-full ${expanded ? 'h-64' : 'h-32'}`} />  
      <div className="mt-2">
        <h3 className="text-lg font-bold">{song.name}</h3>
        <p className="text-green-700">{song.artist}</p>
        {expanded && (
            <div className="mt-4">
                <audio controls src={song.audio}></audio> 
            </div>
        )}
      </div>
    </div>
    );
};

export default Song;