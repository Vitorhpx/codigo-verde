import Quagga from '@ericblade/quagga2';
import { Box } from '@material-ui/core';
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
            width: 640,
            height: 480,
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

  return (
    <Box>
      <div id='interactive' className='viewport' />
    </Box>
  );
};

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired,
};

export default Scanner;
