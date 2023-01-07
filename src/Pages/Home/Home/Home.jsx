import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch('https://soft-tech-server.vercel.app/products');
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

    // const handleProductUpdate = (id) => {
    //     console.log(id);
    // }

    return (
        <div className="mx-auto max-w-7xl">
            <h1>Home page:{products.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 align-middle justify-center">
                {
                    products?.map(product => {
                        return (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={product?._id}>
                                <figure><img src={product?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product?.name}</h2>
                                    <p>{product?.details}</p>
                                    <div className="card-actions flex justify-between items-center">
                                        <label htmlFor="" className='font-bold'>Price: {product?.price}</label>

                                        <div className="">
                                            <Link to={`/product/${product?._id}`}><button className='btn btn-outline'>Update Price</button></Link>
                                        </div>

                                        {/* <div className="">
                                            <label htmlFor="my-modal-3" className="btn">open modal</label>
                                            <UpdateModal product={product}></UpdateModal>
                                        </div> */}
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