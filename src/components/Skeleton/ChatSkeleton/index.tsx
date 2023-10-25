import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';

export default function ChatSkeleton() {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <AlignHorizontalLeftRoundedIcon />
          <span className="text-xl font-medium">Answer</span>
        </div>
        <Skeleton
          sx={{
            width: '80%',
            marginTop: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.11)',
          }}
        />
        <Skeleton
          sx={{
            width: '60%',
            backgroundColor: 'rgba(0, 0, 0, 0.11)',
          }}
          animation="wave"
        />
        <Skeleton animation={false} />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <ViewQuiltRoundedIcon />
          <span className="text-xl font-medium">Relevant</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Skeleton
            sx={{
              height: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.11)',
              borderRadius: 2,
            }}
          />
          <Skeleton
            sx={{
              height: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.11)',
              borderRadius: 2,
            }}
          />
          <Skeleton
            sx={{
              height: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.11)',
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    </Box>
  );
}
