import React from 'react'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import './items.scss'
const Items = ({ menuItems }) => {
  return (
    <div className='body'>
      <div className='img-list'>
        {/* <video autoPlay loop muted>
        <source
          src='https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov'
          type='video/mp4'
        />
      </video> */}
        <ImageList
          sx={{ width: 1300, height: 450 }}
          cols={3}
          rowHeight={400}
          colWidth={300}
        >
          {menuItems.map((item) => (
            <ImageListItem key={item.id} style={{ width: 300 }}>
              <a href={item.link}>
                <div className='container'>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    loading='lazy'
                    className='image'
                  />
                  <div className='overlay'>
                    <div className='text'>HELLO WORLD</div>
                  </div>
                </div>
                <ImageListItemBar
                  title={item.name}
                  className='item-bar-text'
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.id}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}

export default Items
