import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Divider, Link} from '@mui/material';
import { createTheme, ThemeProvider, } from '@mui/material';
import './Layout.css';

const theme = createTheme({
    palette: {
        background: {
            default: 'black',
          },
        },
    
    typography: {
        h2: {
            fontFamily: 'Abril Fatface',
          },
        fontFamily: 'Montserrat',
      },
})

const useStyle = makeStyles(() =>({
    footer: {
        textAlign: 'center',
        color:'#D3D3D3',
        backgroundColor:'black',
        padding: '10px',
        bottom: '0'
    },

}));



export default function Layout({children}) {
    const styles = useStyle();
  return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box component='body' maxWidth='xl' className={styles.layout}>
                    <Navbar/>
                    <div>
                        {children}
                    </div>
                    <Divider sx={{backgroundColor:'black'}}/>
                    <footer className={styles.footer}>
                        <Typography variant='h5' component='p'>
                        © 2022 <Link sx={{color:'#D3D3D3'}} underline="hover" target='_blank' href='http://squirfox.com'>Squirfox</Link> - All Rights Reserved
                        </Typography>
                    </footer>
                </Box>
            </CssBaseline>
        </ThemeProvider>
  )
}
