import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PhotoBlock(props) {
    const {image, title, YT_link} = props;
    return (
        <Box display={'wrap'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box sx={{
                    mx: 'auto',
                    width: 640,
                    height: 360,
                    paddingTop: 3
                }}
            component={'img'} src={image} alt={'xxx'}/>
            <h1 style={{fontSize: '1rem', textAlign: 'center'}}>{title}</h1>
            <Box className={'Photo'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} py={'0.7rem'} />
            <Box sx={{mx:'auto', width:130}} p={1} border={'2px solid black'} borderRadius={'25px'}>
                <IconLink link={YT_link} title={'Link to YouTube'} icon={'fa fa-youtube'}/>
            </Box>
            
        </Box>
    );
}

export default PhotoBlock;