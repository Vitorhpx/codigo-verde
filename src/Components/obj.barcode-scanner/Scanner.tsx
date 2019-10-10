import Quagga from '@ericblade/quagga2';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useLayoutEffect } from 'react';

const Scanner = ({ onDetected }: any) => {
  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          constraints: {
            width: 375,
            height: 623,
            facingMode: 'environment', // or user
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      (err: any) => {
        if (err) {
          return console.log('Error starting Quagga:', err);
        }
        Quagga.start();
      },
    );
    Quagga.onDetected(onDetected);
    return () => {
      Quagga.offDetected(onDetected);
      Quagga.stop();
    };
  }, [onDetected]);
  const classes = useStyles();
  return (
    <Box>
      <Box id='interactive' className={`viewport ${classes.videoWrapper}`} />
    </Box>
  );
};

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired,
};

const useStyles = makeStyles(theme => ({
  videoWrapper: {
    left: 0,
    right: 0,
    '& video': {
      margin: 'auto',
      position: 'absolute',
      width: '100vw',
      maxWidth: '640px',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
}));

export default Scanner;
