import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function Actions() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('upload');

  const onClickTab = (tab: string) => {
    setExpanded(true);
    setActiveTab(tab);
  };

  return (
    <aside className="max-w-[300px] h-full">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          >
            Discovery
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <ArrowBackIosNewRoundedIcon />
            ) : (
              <ArrowForwardIosRoundedIcon />
            )}
          </button>
        </div>

        <div className="h-full">
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
              <TabsTrigger
                value="upload"
                onClick={() => onClickTab('upload')}
                className="hover:bg-white"
              >
                {expanded ? 'Upload' : <DriveFolderUploadRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="download"
                onClick={() => onClickTab('download')}
                className="hover:bg-white"
              >
                {expanded ? 'Download' : <DownloadRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="question"
                onClick={() => onClickTab('question')}
                className="hover:bg-white"
              >
                {expanded ? 'Questions' : <HelpOutlineRoundedIcon />}
              </TabsTrigger>
              <TabsTrigger
                value="account2"
                onClick={() => onClickTab('account2')}
                className="hover:bg-white"
              >
                {expanded ? 'Contents' : <TocRoundedIcon />}
              </TabsTrigger>
            </TabsList>
            {expanded && (
              <div className="h-full">
                <TabsContent value="account">
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent
                  value="question"
                  className={`${
                    activeTab === 'question'
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
                    <div className="px-4">
                      <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <HelpOutlineRoundedIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PDF up to 10MB
                          </p>
                        </div>
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
                    <div className="px-4 flex justify-between">
                      <Button variant="secondary">Clear</Button>
                      <Button>Download</Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            )}
          </Tabs>
        </div>
      </nav>
    </aside>
  );
}

export default Actions;
