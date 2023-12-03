import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useNavigate } from 'react-router-dom'

function OrderCard() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md  hover:shadow-2xl border m-4'>

            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item sx={6}>
                    <div className=' flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top'
                            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />

                        <div className='ml-5 space-y-2 '>
                            <p className=''>Men Printed Pure Cotton Straight Kurta</p>
                            <p className=' opacity-50 text-xs font-semibold'>Size : M</p>
                            <p className=' opacity-50 text-xs font-semibold'> Color : Green</p>

                        </div>

                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>1499</p>
                </Grid>
                <Grid item xs={4}>

                    {true && <div><p>
                        <AdjustIcon xs={{ width: "15px", height: "15px" }} className=' text-green-600 mr-2 text-sm' />
                        <span>
                            Delivered On Mar 03
                        </span>

                    </p>

                        <p className='text-xs'>Your Item Has Been Delivered</p></div>}
                    {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div >
    )
}

export default OrderCard