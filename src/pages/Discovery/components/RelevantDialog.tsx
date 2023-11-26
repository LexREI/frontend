import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { AlertDefault } from '@/components/Alert/AlertDefault';
import { DefaultContext } from '@/contexts/default_context';

type RelevantDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[] | null;
  onClickSetDocument: (doc: string) => void;
};

export function RelevantDialog(props: RelevantDialogProps) {
  const { open, setOpen, content, onClickSetDocument } = props;
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const { setSuccessDescription } = useContext(DefaultContext);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      {success ? (
        <AlertDefault
          description="Copied to clipboard!"
          setSuccessDescription={setSuccessDescription}
        />
      ) : null}
      <DialogContent className="sm:max-w-[760px] ">
        <DialogHeader>
          <DialogTitle>References</DialogTitle>
        </DialogHeader>
        <div className="max-h-[80vh] overflow-y-auto">
          {content &&
            content.map((item, index) => {
              return (
                <div className="mt-2" key={index}>
                  <h3 className="font-bold">Content:</h3>
                  <p className="text-[15px]"> {item.page_content}</p>
                  <div className="">
                    <Tooltip title="Copy">
                      <IconButton
                        size="small"
                        onClick={() => {
                          copyToClipboard(item.page_content);
                        }}
                      >
                        <ContentCopyRoundedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    {item.document_type === 'webpage' ? (
                      <Link to={item.source_url} target="_blank">
                        <Tooltip title="Open Webpage">
                          <IconButton size="small">
                            <MenuBookRoundedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    ) : (
                      <Tooltip title="Open File">
                        <IconButton
                          size="small"
                          onClick={() => {
                            onClickSetDocument(item.download_link);
                            setOpen(false);
                          }}
                        >
                          <PictureAsPdfRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>
                  <div className="text-secondary-foreground/70 mt-1 text-sm">
                    {/*Page Number · {item.pageNumber + 1}*/}
                  </div>
                  <hr className="mt-2" />
                </div>
              );
            })}
        </div>
        <DialogFooter>
          <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={() => setOpen(false)}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
