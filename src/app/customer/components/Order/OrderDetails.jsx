import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid, Box, } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

function OrderDetails() {
    return (
        <div className=' px:5 lg:px-20'>

            <div>
                <h1 className=' text-bold text-xl py-7'> Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border ' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item sx={6}>
                        <div className='flex items-center space-x-4 '>
                            <img className=' w-[5rem] h-[5rem] object-cover object-top m-3' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                            <div className=' space-y-2 ml-5'>
                                <p className=' font-semibold'>Men Printed Pure Cotton Straight Kurta</p>
                                <p className=' space-x-5 opacity-50 text-xs font-semibold'> <span> Color : Green</span> <span>Size : M</span></p>
                                <p>Seller : Linaria</p>
                                <p>$ 499</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>

                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon xs={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}



            </Grid>



        </div>
    )
}

export default OrderDetails