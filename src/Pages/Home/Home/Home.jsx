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
        </div>
    );
};

export default Home;