import React from 'react'
import { ImageList, ImageListItem, Box, Container, Typography, Grid, Paper, Divider} from '@mui/material'
import { makeStyles } from '@mui/styles'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles(() => ({
    skewed: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '50%',
      background: 'pink',
      zIndex: '0',
      transform: 'skewY(8deg)',
      transformOrigin: 'top right',
  },

}))

export default function Prices() {
  const styles = useStyles()
  const options = {

    caption: {
      showCaption: false
    }
  }
  return (
    <Box>
      <br></br>
      <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>        
      <br></br>
      <Container maxWidth='lg'>
        <Grid container spacing={4}   justifyContent="center" alignItems="left">
          <Grid item xs={4}>
            <Typography component='h2' variant='h4' color='white'>
              Galerie
            </Typography>
          </Grid>  
          <Grid item xs={8}>
          <Container maxWidth='lg' sx={{backgroundColor:'white', padding:'20px'}}>
          <SimpleReactLightbox>
            <Container maxWidth='xl'>
                    <SRLWrapper options={options}>
                      <Box maxWidth='lg' sx={{ height: '600px', overflowY: 'scroll'}}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                          {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={{border: '4px solid', borderRadius: '8px'}}>
                              <img
                                src={`${item.img}?w=1024&h=768&fit=clip&auto=format&auto=compress&auto=enhance`}
                                srcSet={ `${item.img}?w=248&fit=clip&auto=format&auto=compress&auto=enhance&dpr=1 1x
                                          ${item.img}?w=248&fit=clip&auto=format&auto=compress&auto=enhance&q=40&dpr=2 2x,
                                          ${item.img}?w=248&fit=clip&auto=format&auto=compress&auto=enhance&q=20&dpr=3 3x`}
                                alt="gallery"
                                loading='lazy'
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>
                      </Box>
                    </SRLWrapper>
            </Container>
          </SimpleReactLightbox>
        </Container>
          </Grid> 
        </Grid>    
      </Container>  
    </Box>


  )
}


const itemData = [
  {
    img: 'https://images-squirfox.imgix.net/galerie/125421426_3075958475964317_9172587192873887975_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/277096794_3451622031731291_7579442171760966140_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/275841416_3446918642201630_1758094347971110213_n.jpg',
   
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/275685768_3446157625611065_27202451918045194_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/246591608_3335891596637669_4003416957162354862_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/172521223_3191866547706842_6757992034449726660_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/168907293_3186280878265409_1479761773726678829_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/158780645_3163999107160253_8815464061452509478_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/155437757_3158482167711947_3370363354521135377_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/145573996_3137636933129804_8080568664695888839_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/137510505_3121941951365969_3271104152491141448_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/138014069_3121941958032635_879927698306255002_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/130717517_3100568593503305_2640969221797698774_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/85096458_2823740211186146_4000354529726955520_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/73323453_2699151576978344_5780422717899538432_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/67891153_2640409596185876_1966927878620708864_n.jpg',
  
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/67525670_2634817930078376_5902750138178207744_n.jpg',
  
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/67412586_2624544691105700_3929058351786229760_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/67216090_2621762258050610_4231710407779155968_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/66433528_2618997351660434_6981905308893315072_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/65146027_2603524703207699_1579568592125427712_n.jpg',
 
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/65657531_2609169882643181_3477262899309707264_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/62053054_2587984988095004_5655556018466193408_n.jpg',
  
  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/61949153_2589790197914483_2179752317115432960_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/60548359_2572762992950537_3787428489485877248_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/60814486_2577386889154814_7337308127445909504_n.jpg',

  },
  {
    img: 'https://images-squirfox.imgix.net/galerie/-1.jpg',

  },
];
