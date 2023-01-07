import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductInfo = () => {
    const product = useLoaderData();
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Product Name:{product.name}</h2>
                        <p>{product?.details}</p>

                        <div className="flex justify-between gap-2 items-center">
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text font-bold">Product Price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="mt-8">
                                <button className="btn btn-primary">Update Price</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductInfo;