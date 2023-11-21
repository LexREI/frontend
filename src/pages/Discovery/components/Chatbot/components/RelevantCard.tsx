import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type RevelantCardProps = {
  document: string;
  metadata: any;
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
  onClickSetDocument: (doc: string) => void;
};

export default function RevelantCard(props: RevelantCardProps) {
  const { document, metadata, onClickSearch, onClickSetDocument } = props;

  return (
    <Card
      className="flex flex-col justify-between p-2 bg-primary/10 border-0 cursor-pointer hover:bg-primary/5 transition duration-300"
      onClick={() => onClickSetDocument(metadata.download_link)}
    >
      <div className="font-medium text-popover-foreground/80 overflow-hidden line-clamp-2">
        {metadata.pageContent}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-popover-foreground/50">
          Page Number · {metadata.pageNumber + 1}
        </span>
        {document === metadata.download_link && (
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() =>
              onClickSearch(metadata.pageNumber + 1, metadata.pageContent)
            }
          >
            <KeyboardArrowRightIcon fontSize="inherit" />
          </IconButton>
        )}
      </div>
    </Card>
  );
}
