import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

type CardWithFormProps = {
  metadata: any;
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export function CardWithForm(props: CardWithFormProps) {
  const { metadata, onClickSearch } = props;
  return (
    <Card
      onClick={() =>
        onClickSearch(metadata.pageNumber + 1, metadata.pageContent)
      }
      className="cursor-pointer"
    >
      <CardHeader>
        <CardDescription>
          <HtmlTooltip
            title={
              <>
                <Typography color="inherit">Page Content</Typography>
                <p>{metadata.pageContent}</p>
              </>
            }
          >
            <Button>Hover</Button>
          </HtmlTooltip>
        </CardDescription>
        <CardDescription>
          <Button>
            <a href={metadata.download_link} target="_blank" rel="noreferrer">
              View PDF
            </a>
          </Button>
        </CardDescription>
        <CardDescription>page: {metadata.pageNumber + 1}</CardDescription>
      </CardHeader>
    </Card>
  );
}
