import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import LoadingButton from '@mui/lab/LoadingButton';
import { useContext, useState } from 'react';
import JSZip from 'jszip';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import { useSearchParams } from 'react-router-dom';
import { DefaultContext } from '@/contexts/default_context';
import { documentUploadUsingPost } from '@/services/DocumentController';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { setDocument } from '@/stores/chatbotSlice';

interface Tab {
  name: string;
  value: string;
  icon: JSX.Element;
  isActive: boolean;
}

interface Question {
  name: string;
  value: string;
  isActive: boolean;
}

interface QuestionList {
  title: string;
  value: string;
  questions: Question[];
}

const tabsInit: Tab[] = [
  {
    name: 'Upload',
    value: 'upload',
    icon: <DriveFolderUploadRoundedIcon />,
    isActive: true,
  },
  {
    name: 'Download',
    value: 'download',
    icon: <DownloadRoundedIcon />,
    isActive: false,
  },
  {
    name: 'Questions',
    value: 'questions',
    icon: <HelpOutlineRoundedIcon />,
    isActive: false,
  },
  {
    name: 'Contents',
    value: 'contents',
    icon: <TocRoundedIcon />,
    isActive: false,
  },
];

const questionsListInit: QuestionList[] = [
  {
    title: 'Question list 1',
    value: 'question-list-1',
    questions: [
      {
        name: 'Question 1',
        value: 'question-1',
        isActive: false,
      },
      {
        name: 'Question 2',
        value: 'question-2',
        isActive: false,
      },
      {
        name: 'Question 3',
        value: 'question-3',
        isActive: false,
      },
      {
        name: 'Question 4',
        value: 'question-4',
        isActive: false,
      },
    ],
  },
  {
    title: 'Question list 2',
    value: 'question-list-2',
    questions: [
      {
        name: 'Question 5',
        value: 'question-5',
        isActive: false,
      },
      {
        name: 'Question 6',
        value: 'question-6',
        isActive: false,
      },
      {
        name: 'Question 7',
        value: 'question-7',
        isActive: false,
      },
      {
        name: 'Question 8',
        value: 'question-8',
        isActive: false,
      },
    ],
  },
  {
    title: 'Question list 3',
    value: 'question-list-3',
    questions: [
      {
        name: 'Question 9',
        value: 'question-9',
        isActive: false,
      },
      {
        name: 'Question 10',
        value: 'question-10',
        isActive: false,
      },
      {
        name: 'Question 11',
        value: 'question-11',
        isActive: false,
      },
      {
        name: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?',
        value: 'question-12',
        isActive: false,
      },
    ],
  },
];

type Props = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  getDocumentsList: () => void;
};

function TabList(props: Props) {
  const { expanded, setExpanded, getDocumentsList } = props;
  const { setSuccessDescription, setErrorDescription } =
    useContext(DefaultContext);
  const { documents } = useAppSelector((state) => state.chatbot);
  const dispatch = useAppDispatch();

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [questionsList, setQuestionsList] =
    useState<QuestionList[]>(questionsListInit);
  const [activeTabParams, setActiveTabParams] = useSearchParams({ tab: '' });
  const activeTab = activeTabParams.get('tab') || 'upload';

  const [uploadFiles, setUploadFiles] = useState<File[] | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const onClickTab = (tab: string) => {
    setExpanded(true);
    setActiveTabParams(
      (prev: any) => {
        prev.set('tab', tab);
        return prev;
      },
      { replace: true }
    );
    setTabs((curr) =>
      curr.map((item) => {
        if (item.value === tab) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      })
    );
  };

  const handleFilesSelect = (url: string) => {
    if (urls.includes(url)) {
      setUrls((curr) => curr.filter((item) => item !== url));
    } else {
      setUrls((curr) => [...curr, url]);
    }
  };

  const handleZipFiles = async () => {
    const zip = new JSZip();

    // Fetch all files
    const promises = urls.map(async (url, index) => {
      const response = await fetch(url);
      const blob = await response.blob();
      zip.file(`document_${index + 1}.pdf`, blob);
    });

    // Wait for all files to be added to the zip
    await Promise.all(promises);

    // Generate the zip file as a Blob
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    // Create a Blob URL for download and return it
    return window.URL.createObjectURL(zipBlob);
  };

  const onClickClearSelected = () => {
    setUrls([]);
  };

  const downloadPdfs = async () => {
    setDownloadLoading(true);
    try {
      const resultingBlobUrl = await handleZipFiles();
      const link = document.createElement('a');
      link.href = resultingBlobUrl;
      link.download = 'LexREI.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setUrls([]);
    } catch (err: any) {
      setErrorDescription(err.response.data.message);
    } finally {
      setDownloadLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(e.target.files || []);
    setUploadFiles(filesArray);
  };

  const onClickClearFileUpload = () => {
    setUploadFiles(null);
  };

  const uploadPdf = async () => {
    if (!uploadFiles || uploadFiles.length === 0) return;

    setUploadLoading(true);
    const uploadPromises = [];

    for (let i = 0; i < uploadFiles.length; i++) {
      const formData = new FormData();
      formData.append('file', uploadFiles[i]);

      const uploadPromise = documentUploadUsingPost(formData);
      uploadPromises.push(uploadPromise);
    }

    try {
      // Wait for all uploads to finish using Promise.all
      const responses = await Promise.all(uploadPromises);
      setUploadFiles(null);

      // Do something with the responses if necessary
      getDocumentsList();
      setSuccessDescription('Successfully uploaded files');
    } catch (err: any) {
      setErrorDescription(err.response.data.message);
    } finally {
      setUploadLoading(false);
    }
  };

  return (
    <Tabs
      className="flex h-full flex-col"
      defaultValue={activeTab}
      onClick={() => setExpanded(true)}
    >
      <TabsList
        className={`${
          expanded
            ? 'grid w-full grid-cols-4'
            : 'flex h-full flex-col justify-start gap-4 rounded-none'
        }`}
      >
        {tabs.map((tab) => {
          return (
            <TabsTrigger
              key={tab.name}
              value={tab.value}
              onClick={() => onClickTab(tab.value)}
              className="hover:bg-white"
            >
              {expanded ? tab.name : tab.icon}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {expanded && (
        <div className="h-full">
          <TabsContent
            value="upload"
            className={`${
              activeTab === 'upload'
            } ? 'flex pb-4' : '' h-full flex-col `}
          >
            <div className="flex h-full flex-col">
              <div className="relative my-2 space-y-4 px-4">
                <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 py-4">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a pdf</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileChange(e)}
                          multiple
                        />
                      </label>
                      {uploadFiles && uploadFiles.length > 0 ? (
                        <ul className="pl-1 font-bold">
                          {uploadFiles.slice(0, 2).map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                          {uploadFiles.length > 2 && <li>...</li>}
                        </ul>
                      ) : (
                        <p className="pl-1 font-bold">or drag and drop</p>
                      )}
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PDF up to 10MB
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <LoadingButton
                    variant="outlined"
                    size="medium"
                    onClick={onClickClearFileUpload}
                  >
                    Clear
                  </LoadingButton>
                  <LoadingButton
                    variant="contained"
                    size="large"
                    loading={uploadLoading}
                    disabled={uploadFiles === null}
                    onClick={() => uploadPdf()}
                  >
                    Upload
                  </LoadingButton>
                </div>
              </div>
              <div className="space-y-3 px-2">
                {documents.map((doc) => {
                  return (
                    <Card
                      key={doc.file_name}
                      className="flex items-center space-x-2 px-2 py-2 shadow-md"
                    >
                      <Checkbox
                        id={doc.file_name}
                        checked={urls.includes(doc.download_link)}
                        onClick={() => handleFilesSelect(doc.download_link)}
                      />
                      <div className="h-14 w-14 text-muted-foreground/70">
                        <DocumentTextIcon className="h-12 w-12" />
                      </div>

                      <div className="w-full space-y-0.5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        <div className="w-full break-all text-sm">
                          {doc.file_name}
                        </div>
                        <LoadingButton
                          variant="contained"
                          size="small"
                          onClick={() =>
                            dispatch(setDocument(doc.download_link))
                          }
                        >
                          Open
                        </LoadingButton>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className="flex justify-between px-4 py-4">
                <LoadingButton
                  variant="outlined"
                  size="medium"
                  onClick={onClickClearSelected}
                >
                  Clear
                </LoadingButton>
                <LoadingButton
                  variant="contained"
                  size="large"
                  loading={downloadLoading}
                  disabled={urls.length === 0}
                  onClick={() => downloadPdfs()}
                >
                  Download
                </LoadingButton>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="download"
            className={`${
              activeTab === 'download'
            } ? 'flex pb-4' : '' h-full flex-col `}
          >
            <div className="flex h-full flex-col pb-4"></div>
          </TabsContent>
          <TabsContent
            value="questions"
            className={`${
              activeTab === 'questions'
            } ? 'flex pb-4' : '' h-full flex-col `}
          >
            <div className="flex h-full flex-col pb-4">
              <Accordion
                type="single"
                collapsible
                className="h-full w-full px-4"
              >
                {questionsList.map((item) => {
                  return (
                    <AccordionItem value={item.title} key={item.title}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex h-full flex-col gap-2 px-2">
                          {item.questions.map((question) => {
                            return (
                              <div
                                className="flex space-x-2"
                                key={question.value}
                              >
                                <Checkbox id={question.value} />
                                <label
                                  htmlFor={question.value}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {question.name}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
              <div className="flex justify-end px-4">
                <Button>Ask Questions</Button>
              </div>
            </div>
          </TabsContent>
        </div>
      )}
    </Tabs>
  );
}

export default TabList;
