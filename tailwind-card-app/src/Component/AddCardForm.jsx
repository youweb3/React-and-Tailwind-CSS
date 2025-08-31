import React, { useState } from 'react'

const AddCardForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, buttonText, imageUrl });

        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setButtonText('');
        setDescription('');
        setImageUrl('');
    };

    return (
        <div className='p-4 bg-gray-100 rounded shadow max-w-md mx-auto mt-3'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded " />
                <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded" />
                <input type='text' placeholder='Button Text' value={buttonText} onChange={(e) => setButtonText(e.target.value)} className="border p-2 rounded" />
                <input type='text' placeholder='ImageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2 rounded" />
                <button type='submit' className="bg-red-600 text-white p-2 rounded hover:bg-blue-500 border-2 hover:border-black cursor-pointer  mx-auto px-6 ">Add Card</button>
            </form>
        </div>
    );
};

export default AddCardForm;