import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px' }}
                    />
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (<Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                        Subscriber
                    </Typography>)}
                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard