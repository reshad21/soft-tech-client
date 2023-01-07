import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Home = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-7xl">
            <h1>Home page:{products.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 align-middle justify-center">
                {
                    products?.map((product) => {
                        return (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={product?._id}>
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product?.name}</h2>
                                    <p>{product?.details}</p>
                                    <div className="card-actions flex justify-between align-middle">
                                        <label htmlFor="" className='font-bold'>Price: {product?.price}</label>
                                        <button className="btn btn-primary">Update Price</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Home;