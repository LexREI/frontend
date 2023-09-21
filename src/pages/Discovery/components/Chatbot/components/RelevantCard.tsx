import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@/components/ui/button';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type RevelantCardProps = {
  setDocument: (document: string) => void;
  metadata: any;
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
};

export default function RevelantCard(props: RevelantCardProps) {
  const { setDocument, metadata, onClickSearch } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="PDF Title Here" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          page: {metadata.pageNumber + 1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          download_link: {metadata.download_link}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="flex gap-2">
          <Button onClick={() => setDocument(metadata.download_link)}>
            Open
          </Button>
          <Button
            onClick={() =>
              onClickSearch(metadata.pageNumber + 1, metadata.pageContent)
            }
          >
            Navigate
          </Button>
        </div>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Content:</Typography>
          <Typography paragraph>{metadata.pageContent}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
