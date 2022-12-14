import React, {useState} from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review');
    const storedReview = useLoaderData();
    // console.log('update reveiws', review)
    const [user, setUser] = useState(storedReview)



    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allReviews/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            toast.success('successfully update you Review Good job.')
        })
    }



    const handleInputChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const newUser = {...user};
        newUser.serviceInfo= value;
        setUser(newUser)
    }





    return (
        <form onSubmit={handleUpdateUser} className='container mx-auto my-20  form-control'>
            <div className="card w-96 bg-base-100 shadow-xl  mx-auto">
                <div className="card-body flex flex-col space-y-5 form-control">
                    <h2 className="card-title">{storedReview?.userName}</h2>
                    <textarea onChange={handleInputChange} name='update' className="textarea textarea-bordered" defaultValue={storedReview?.serviceInfo} placeholder="serviceInfo"></textarea>
                    <div className="card-actions justify-end">
                        <button  type='submit' className="btn btn-primary">Update Now</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UpdateReview;