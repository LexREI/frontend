import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import JSZip from 'jszip';
import { documentUploadUsingPost } from '@/services/DocumentController';

interface Tab {
  name: string;
  value: string;
  icon: JSX.Element;
  current: boolean;
}

type Props = {
  documents: API.Documents[];
  tabs: Tab[];
  activeTab: string;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  onClickTab: (tab: string) => void;
};

function TabList(props: Props) {
  const { documents, tabs, activeTab, expanded, setExpanded, onClickTab } =
    props;

  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [blobUrl, setBlobUrl] = useState<string>('');
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
    } catch (error) {
      console.error('Error during downloading:', error);
    } finally {
      setDownloadLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target;
    if (file && file.files && file.files.length > 0) {
      setUploadFile(file.files[0]);
    }
  };

  const onClickClearFileUpload = () => {
    setUploadFile(null);
  };

  const uploadPdf = async () => {
    if (!uploadFile) return;

    setUploadLoading(true);
    const formData = new FormData();
    formData.append('file', uploadFile);

    try {
      const response = await documentUploadUsingPost(formData);
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploadLoading(false);
    }
  };

  return (
    <Tabs
      className="h-full flex flex-col"
      defaultValue="upload"
      onClick={() => setExpanded(true)}
    >
      <TabsList
        className={` ${
          expanded
            ? 'grid w-full grid-cols-4'
            : 'flex flex-col h-full gap-4 justify-start'
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
            value="questions"
            className={`${
              activeTab === 'questions'
            } ? 'flex flex-col h-full pb-4' : '' `}
          >
            <div className="flex flex-col h-full pb-4">
              <Accordion
                type="single"
                collapsible
                className="w-full h-full px-4"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Question list 1</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 px-2 h-full">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question1" />
                        <label
                          htmlFor="question1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 1
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question2" />
                        <label
                          htmlFor="question2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 2
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question3" />
                        <label
                          htmlFor="question3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 3
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question4" />
                        <label
                          htmlFor="question4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 4
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Question list 2</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 px-2 h-full">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question5" />
                        <label
                          htmlFor="question5"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 5
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question6" />
                        <label
                          htmlFor="question2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 6
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question3" />
                        <label
                          htmlFor="question7"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 7
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question8" />
                        <label
                          htmlFor="question8"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 8
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Question list 3</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 px-2 h-full">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question9" />
                        <label
                          htmlFor="question9"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 9
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question10" />
                        <label
                          htmlFor="question10"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 10
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question11" />
                        <label
                          htmlFor="question11"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 11
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="question12" />
                        <label
                          htmlFor="question4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Question 12
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="px-4 flex justify-end">
                <Button>Ask Questions</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="upload"
            className={`${
              activeTab === 'upload'
            } ? 'flex flex-col h-full pb-4' : '' `}
          >
            <div className="flex flex-col h-full pb-4">
              <div className="flex flex-col gap-2 px-2 h-full">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <InsertDriveFileRoundedIcon />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    pdf1g ewa aw f
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <InsertDriveFileRoundedIcon />
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    pdf2 greawe fg
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms2" />
                  <InsertDriveFileRoundedIcon />
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    pdf3brseb
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms3" />
                  <InsertDriveFileRoundedIcon />
                  <label
                    htmlFor="terms3"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    pdf4 fewaf ew
                  </label>
                </div>
              </div>
              <div className="px-4 space-y-4">
                <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <HelpOutlineRoundedIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
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
                        />
                      </label>
                      <p className="pl-1 font-bold">
                        {uploadFile ? uploadFile.name : 'or drag and drop '}
                      </p>
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
                    disabled={uploadFile === null}
                    onClick={() => uploadPdf()}
                  >
                    Upload
                  </LoadingButton>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="download"
            className={`${
              activeTab === 'download'
            } ? 'flex flex-col h-full pb-4' : '' `}
          >
            <div className="flex flex-col h-full pb-4">
              <div className="space-y-4 px-2 h-full">
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
                      <div className="text-muted-foreground/70 w-14 h-14">
                        <DocumentTextIcon className="w-12 h-12" />
                      </div>

                      <div className="space-y-0.5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        <div className="text-sm break-all">{doc.file_name}</div>
                        <div className="text-xs text-muted-foreground space-x-2">
                          <span>Size: 12MB</span>
                          <span>FORMAT: PDF</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className="px-4 flex justify-between">
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
        </div>
      )}
    </Tabs>
  );
}

export default TabList;
