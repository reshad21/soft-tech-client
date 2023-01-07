import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ProductInfo = () => {
    const product = useLoaderData();
    console.log(product);
    const handleUpdatePrice = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const updatePrice = { price }
        console.log(updatePrice);

        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePrice),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product price update Successfully.');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="flex justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Product Name:{product.name}</h2>
                        <p>{product?.details}</p>

                        <form onSubmit={handleUpdatePrice} className="flex justify-between gap-2 items-center">
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text font-bold">Product Price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" defaultValue={product.price} />
                            </div>
                            <div className="mt-8">
                                <button className="btn btn-primary">Update Price</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductInfo;