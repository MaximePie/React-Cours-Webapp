import React from 'react';

const Message = ({ message }) => {

  if (message === '') return null;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default Message;