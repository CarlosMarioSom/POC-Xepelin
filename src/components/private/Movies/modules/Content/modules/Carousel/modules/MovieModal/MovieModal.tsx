import React from 'react';
import { IMovieModalComponentProps } from './types/moviesModalInterfaces';
import './MovieModal.scss';
import { Box, Modal, Typography } from '@mui/material';
import enLabels from '../../../../../../../../../constants/en-labels';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#FFFFFF',
  borderRadius: '10px',
  pt: 4,
  px: 4,
  pb: 3,
};

const MovieModal = (props: IMovieModalComponentProps) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={{ ...modalStyle }}>
        <div className='movieModal'>
          <div className='movieModal__imageContent'>
            <div className='movieModal__image'></div>
          </div>
          <div className='movieModal__textContent'>
            <span className='movieModal__text movieModal__text--title'>
              {props.movie?.title}
            </span>
            <div className='movieModal__addToFavoritesContent'>
              <img
                src={require('./../../../../../../../../../assets/icons/Plus.png')}
                alt='PlusIcon'
                className='movieModal____addToFavoritesContent__plusIcon'
              />
              <span className='movieModal__text'>
                {enLabels.movieModal.addToFavorites}
              </span>
            </div>
            <span className='movieModal__text movieModal__text--overview'>
              {props.movie?.overview}
            </span>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default MovieModal;
