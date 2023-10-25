import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RelevantDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: API.RelevantMetadata[];
};

export function RelevantDialog(props: RelevantDialogProps) {
  const { open, setOpen, content } = props;
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Relevant</DialogTitle>
        </DialogHeader>
        <>
          {content.map((item, index) => {
            return (
              <div className="mt-2" key={index}>
                {/*<div>{item.download_link}</div>*/}
                {/*<div>{item.pageNumber + 1}</div>*/}
                <h3 className="text-xl">Title Here later</h3>
                <div className="text-secondary-foreground/70">
                  {item.pageContent}
                </div>
                <hr className="mt-2" />
              </div>
            );
          })}
        </>
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
