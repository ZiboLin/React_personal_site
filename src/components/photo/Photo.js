import React from 'react';
import PhotoBlock from "./PhotoBlock";

import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Photo(){
    return (
    <Box>
        <Grid container display={'flex'} justifyContent={'center'} spacing={2} columnSpacing={8} >
            {info.fun_things.map((img, index) =>(
                <Grid item display={'flex'} justifyContent={'center'}  xs={12} md={5} key={index}  >
                    <PhotoBlock image={img.image} title={img.title} YT_link ={img.YT_link}/>
                </Grid>

            ))}
        </Grid>
    </Box>
    );
};