import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import TabList from '@/pages/Discovery/components/Actions/components/TabList';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';

interface Tab {
  name: string;
  value: string;
  icon: JSX.Element;
  current: boolean;
}
const tabsInit: Tab[] = [
  {
    name: 'Upload',
    value: 'upload',
    icon: <DriveFolderUploadRoundedIcon />,
    current: true,
  },
  {
    name: 'Download',
    value: 'download',
    icon: <DownloadRoundedIcon />,
    current: false,
  },
  {
    name: 'Questions',
    value: 'questions',
    icon: <HelpOutlineRoundedIcon />,
    current: false,
  },
  {
    name: 'Contents',
    value: 'contents',
    icon: <TocRoundedIcon />,
    current: false,
  },
];

function Actions() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [tabs, setTabs] = useState<Tab[]>(tabsInit);

  const onClickTab = (tab: string) => {
    setExpanded(true);
    setActiveTab(tab);
    setTabs((curr) =>
      curr.map((item) => {
        if (item.value === tab) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      })
    );
  };

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
          tabs={tabs}
          activeTab={activeTab}
          expanded={expanded}
          setExpanded={setExpanded}
          onClickTab={onClickTab}
        />
      </nav>
    </aside>
  );
}

export default Actions;
