import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type LoadingProps = {
  open: boolean;
  title: string;
};

export default function Loading(props: LoadingProps) {
  const { open, title } = props;
  return (
    <div>
      <Backdrop
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <div className="mt-4">{title}</div>
      </Backdrop>
    </div>
  );
}
