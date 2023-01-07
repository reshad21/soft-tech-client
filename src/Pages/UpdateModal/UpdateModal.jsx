import React from 'react';

const UpdateModal = ({ product }) => {
    console.log(product);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <figure></figure>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="py-4">{product.details}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;