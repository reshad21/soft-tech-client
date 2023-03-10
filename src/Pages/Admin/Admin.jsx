import React from 'react';
import { toast } from 'react-hot-toast';

const Admin = () => {
    const handleProductForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;
        const productInfo = {
            name,
            image,
            price,
            details
        }
        console.log(productInfo);

        fetch('https://soft-tech-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product added Successfully.');
                form.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    return (
        <div className='mx-auto max-w-7xl'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex flex-col">
                    <div>
                        <h1 className='text-5xl font-bold text-slate-700'>Add New Product</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleProductForm}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Image Link</span>
                                </label>
                                <input type="text" name='image' placeholder="image link" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Description</span>
                                </label>
                                <textarea name='details' className="textarea textarea-bordered" placeholder="Description" required></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;