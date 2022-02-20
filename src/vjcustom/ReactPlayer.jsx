import React from 'react';
import ReactPlayer from 'react-player';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Typography, IconButton, Tooltip } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { withStyles, makeStyles, Grid, Slider } from '@material-ui/core';
import {
   Bookmark,
   FastRewind,
   FastForward,
   PlayArrow,
   Pause,
} from '@material-ui/icons';

// import styles from './ReactPlayer.module.css';

const useStyles = makeStyles({
   playerWrapper: {
      width: '800px',
      height: '450px',
      position: 'relative',
   },
   controlsWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.6)",
      display:  'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 1
   },
   controlIcons: {
      color: '#777',
      fontSize: 50,
      transform: 'scale(0.9)',
      "&:hover": {
         color: '#fff',
         transform: 'scale(1)'
      }
   }
});

function ValueLabelComponent(props) {
   const { children, open, value } = props;

   return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
         {children}
      </Tooltip>
   );
}

const PrettoSlider = withStyles({
   root: {
      // color: '#52af77',
      height: 8,
   },
   thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
         boxShadow: 'inherit',
      },
   },
   active: {},
   valueLabel: {
      left: 'calc(-50% + 4px)',
   },
   track: {
      height: 8,
      borderRadius: 4,
   },
   rail: {
      height: 8,
      borderRadius: 4,
   },
})(Slider);

const VideoPlayer = () => {
   const classes = useStyles();

   return (
      <div>
         <AppBar position="fixed">
            <Toolbar>
               <Typography variant="h6">React Video Player</Typography>
            </Toolbar>
         </AppBar>

         <Toolbar />

         <Container maxWidth="md">
            <div className={classes.playerWrapper}>
               <ReactPlayer
                  width={'100%'}
                  height={'100%'}
                  muted={true}
                  controls
                  url="https://www.youtube.com/watch?v=MnBI139TpiI"
               />

               <div className={classes.controlsWrapper}>
                  <Grid
                     container
                     direction="row"
                     alignItems="center"
                     justifyContent="space-between"
                     style={{ padding: 16 }}>
                     <Grid item>
                        <Typography variant="h5" style={{ color: '#fff' }}>
                           Video Title
                        </Typography>
                     </Grid>

                     <Grid item>
                        <Button
                           variant="contained"
                           color="primary"
                           startIcon={<Bookmark />}>
                           Bookmark
                        </Button>
                     </Grid>
                  </Grid>

                  {/* MIDDLE CONTROLS */}
                  <Grid
                     container
                     direction="row"
                     alignItems="center"
                     justifyContent="center">
                     <IconButton className={classes.controlIcons}>
                        <FastRewind fontSize="inherit" />
                     </IconButton>

                     <IconButton className={classes.controlIcons}>
                        <PlayArrow fontSize="inherit" />
                     </IconButton>

                     <IconButton className={classes.controlIcons}>
                        <FastForward fontSize="inherit" />
                     </IconButton>
                  </Grid>

                  {/* BOTTOM CONTROLS */}
                  <Grid
                     style={{ padding: 16 }}
                     container
                     direction="row"
                     alignItems="center"
                     justifyContent="space-between">
                     <Grid item xs={12}>
                        <PrettoSlider min={0} max={100} defaultValue={20} />
                     </Grid>
                  </Grid>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default VideoPlayer;

// 13.45
// React video player with custom controls #3 - Styling and building control UI