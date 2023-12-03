import React from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate()
    const handleAddToCart = () => {
        navigate("/checkout?step=2")
    }
    return (
        <div className='bg-white '>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>

                <div className='col-span-2 mt-3 '>
                    {[1, 1, 1, 1].map((item) => < CartItem />)}
                </div>

                <div className='px-5  sticky top-0  h-[100vh] mt-5 lg:mt-3'>
                    <div className='p-6 border '>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                        <hr />
                        <div className=' space-y-3 font-semibold '>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>$4697</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Disccount</span>
                                <span className='text-green-600' >$3419</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Total</span>
                                <span className='text-green-600'>$1278</span>
                            </div>
                        </div>

                        <Button onClick={handleAddToCart} variant='contained' className="w-full mt-5 bg-purple-600"
                            sx={{ px: "2rem", py: ".7rem", mt: '2rem' }}>Checkout </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;