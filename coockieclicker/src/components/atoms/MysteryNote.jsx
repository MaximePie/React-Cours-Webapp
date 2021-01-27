import React from 'react';
import noteImage from '../../images/mysterynote.png'

export default function MysteryNote({ onClick, position }) {

  const noteTopPosition = Math.random() * Math.floor(370);
  const noteLeftPosition = Math.random() * Math.floor(170);

  return (
    <img
      src={noteImage}
      className="MysteryNote"
      onClick={onClick} alt="Note mystère"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    />
  );
}
