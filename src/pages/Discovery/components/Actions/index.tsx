import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import TabList from '@/pages/Discovery/components/Actions/components/TabList';

type ActionsProps = {
  documents: API.Documents[];
};

function Actions(props: ActionsProps) {
  const { documents } = props;
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="max-w-[320px] h-full">
      <nav className="h-full flex flex-col bg-background border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          >
            Discovery
          </div>
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className="w-10 h-10"
          >
            {expanded ? (
              <ArrowBackIosNewRoundedIcon />
            ) : (
              <ArrowForwardIosRoundedIcon />
            )}
          </Button>
        </div>

        <TabList
          documents={documents}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </nav>
    </aside>
  );
}

export default Actions;
