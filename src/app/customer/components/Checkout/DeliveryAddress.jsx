import React from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {

    const navigate = useNavigate()
    const handledeliver = () => {
        navigate("/checkout?step=3")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.curentTarget);

        const address = {
            firstName: data.get("firstName"),

        }
        console.log('location', address)
    }

    return (
        <div className='p-10'>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className=' py-10 border rounded-e-md shadow-md h-[30.5] overflow-y-scroll'>

                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button onClick={handledeliver} sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='conteined' > Deliver Here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>

                    <Box className="border rounded-s-md shadow-md p-5">

                        <form onSubmit={handleSubmit}>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} >

                                    <TextField
                                        required
                                        id='streetAddress'
                                        name='streetAddress'
                                        label="Address"
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="City"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='zipCode'
                                        name='zipCode'
                                        label="Zip/Postal code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Button onSubmit={handledeliver} sx={{ py: 1, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='conteined' type='submit' > Deliver Here</Button>


                                </Grid>


                            </Grid>

                        </form>

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddress;