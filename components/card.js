import React from 'react';
import 'app/globals.css'

const Card = ({ color, title, content, textColor, imageSrc, width, height }) => (
    <div className={`${color} p-4 rounded shadow-md mb-2`}>
      <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h1>
      {imageSrc && <img src={imageSrc} alt={title} width={width} height={height} className="mb-4" />}
      <p className={`${textColor}`}>{content}</p>
    </div>
  );
  

export default Card;

  