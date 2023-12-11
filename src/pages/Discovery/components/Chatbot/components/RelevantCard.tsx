import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import file from '@/assets/icons/file.png';
import webpage from '@/assets/icons/webpage.png';
import { Link } from 'react-router-dom';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { onClickSearch } from '@/stores/chatbotSlice';

type RevelantCardProps = {
  document: string;
  metadata: API.RelevantWebpageMetadata | API.RelevantFileMetadata;
  onClickSetDocument: (doc: string) => void;
};

export default function RevelantCard(props: RevelantCardProps) {
  const { document, metadata, onClickSetDocument } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      {metadata.document_type === 'file' ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card
              className="flex cursor-pointer flex-col justify-between border-0 bg-primary/10 p-2 transition duration-300 hover:bg-primary/5"
              onClick={() => onClickSetDocument(metadata.download_link)}
            >
              <div className="flex gap-2">
                <img src={file} alt="file" className="h-14 w-14" />
                <div className="flex flex-col justify-evenly">
                  <h3 className="text-sm font-semibold">{metadata.title}</h3>
                  <p className="text-xs text-muted-foreground">File</p>
                  <p className=" mb-1 text-xs text-muted-foreground">
                    Page Number · {metadata.page_number + 1}
                  </p>
                </div>
                {document === metadata.download_link && (
                  <div className="ml-auto mt-auto">
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() =>
                        dispatch(
                          onClickSearch({
                            pageNumber: metadata.page_number + 1,
                            pageTextHighlight: metadata.page_content,
                          })
                        )
                      }
                    >
                      <KeyboardArrowRightIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                )}
              </div>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Snippet</h4>
                <p className="text-sm">{metadata.page_content}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="flex cursor-pointer flex-col justify-between border-0 bg-primary/10 p-2 transition duration-300 hover:bg-primary/5">
              <Link to={metadata.source_url} target="_blank">
                <div className="flex gap-2">
                  <img src={webpage} alt="file" className="h-14 w-14" />
                  <div className="flex flex-col justify-evenly">
                    <h3 className="text-sm font-semibold">{metadata.title}</h3>
                    <p className="text-xs text-muted-foreground">Webpage</p>
                  </div>
                </div>
              </Link>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Snippet</h4>
                <p className="text-sm">{metadata.page_content}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}

      {/*<Button size="small">Open {metadata.document_type}</Button>*/}

      {/*<div className="flex justify-between items-center">*/}
      {/*  <span className="text-sm text-popover-foreground/50">*/}
      {/*    Page Number · {metadata.pageNumber + 1}*/}
      {/*  </span>*/}
      {/*  {document === metadata.download_link && (*/}
      {/*    <IconButton*/}
      {/*      aria-label="delete"*/}
      {/*      size="small"*/}
      {/*      onClick={() =>*/}
      {/*        onClickSearch(metadata.pageNumber + 1, metadata.pageContent)*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <KeyboardArrowRightIcon fontSize="inherit" />*/}
      {/*    </IconButton>*/}
      {/*  )}*/}
      {/*</div>*/}
    </>
  );
}
