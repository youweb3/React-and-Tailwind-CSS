import React from 'react';

const Card = ({ title, description, buttonText, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:shadow-lg hover:bg-yellow-400">
            <img className="w-10 pl-3 pt-3" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-amber-800">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-black hover:bg-blue-700 cursor-pointer border-4 hover:border-yellow-300 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Card;