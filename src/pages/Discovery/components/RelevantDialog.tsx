import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type RelevantDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: API.RelevantMetadata[];
};

export function RelevantDialog(props: RelevantDialogProps) {
  const { open, setOpen, content } = props;
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-[700px] ">
        <DialogHeader>
          <DialogTitle>Relevant</DialogTitle>
        </DialogHeader>
        <div className="max-h-[80vh] overflow-y-auto">
          {content.map((item, index) => {
            return (
              <div className="mt-2" key={index}>
                <h3>
                  Relevant {index + 1}: {item.pageContent}
                </h3>
                <div className="text-secondary-foreground/70 mt-1 text-sm">
                  Page Number · {item.pageNumber + 1}
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
