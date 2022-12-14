import React, { useEffect, useState } from 'react';
import SignleServices from './SignleServices';

const AllServices = () => {


    const [allServicesItems, setAllServicesItems] = useState([]);
    
    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allServices`)
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data){
                setAllServicesItems(data)
            }
        })
    },[])





    return (
        <section className='w-4/5 mx-auto py-18 my-20'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold primary-color'>Services</h3>
                <p className='text-gray-500 space-5 pt-8 pb-16 text-lg'>Many new food recipes are shown here daily.<br/> All are my own food. Hope you will like my food items very much. I like whoever you like. You will know by commenting.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                {
                    allServicesItems.map(product => <SignleServices
                        key={product.id}
                        product={product}
                    ></SignleServices>)
                }
            </div>
        </section>
    );
};

export default AllServices;