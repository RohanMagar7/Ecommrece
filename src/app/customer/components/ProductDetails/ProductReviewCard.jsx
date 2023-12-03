
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';


export default function FullWidthGrid() {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar classname="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                            M
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-bold text-lg'>Magarohan</p>
                            <p className='opacity-50 '>May 8, 2003</p>
                        </div>
                    </div>
                    <Rating value={2.5} name='half-rating' readOnly precision={0.5} />
                    <p>nice product , i love this shirts</p>
                </Grid>
            </Grid>
        </div>
    );
}
