import React from 'react';
import { IconButton, Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'


const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border  m-3  rounded-md'>
            <div className='flex items-center'>
                <div className=' w-[5rem] h-[5rem] lg:w-[9rem]  border lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://tse1.mm.bing.net/th?id=OIP.OfmWuc9RuzByw4g_d89MBQHaJ3&pid=Api&rs=1&c=1&qlt=95&w=87&h=116" alt="" />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>men slim mid rise blaack jeans</p>
                    <p className='opacity-70'>Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo FashionS</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>199</p>
                        <p className='opacity-50 line-through'>211</p>
                        <p className='text-green-600 font-semibold'>5% Off</p>
                    </div>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className=' flex items-center space-x-2'>
                    <IconButton sx={{ color: 'RGB(145 85 253)' }}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'> 3</span>
                    <IconButton sx={{ color: 'RGB(145 85 253)' }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div>
                    <Button>
                        Remove
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default CartItem;