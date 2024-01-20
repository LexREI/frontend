import React, { useContext, useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { doChaClientSideUsingPost } from '@/services/ChatbotController';
import { Button } from '@/components/ui/button';
import RevelantCard from '@/pages/Discovery/components/Chatbot/components/RelevantCard';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ChatSkeleton from '@/components/Skeleton/ChatSkeleton';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import {
  removeLastMessage,
  setMessages,
  setRelevantDialogContent,
} from '@/stores/chatbotSlice';
import { DefaultContext } from '@/contexts/default_context';

type ChatbotProps = {
  setActionsOpen: (actionsOpen: boolean) => void;
  setRelevantDialogOpen: (relevantDialogOpen: boolean) => void;
  onClickSetDocument: (doc: string) => void;
};

function Chatbot(props: ChatbotProps) {
  const { setActionsOpen, setRelevantDialogOpen, onClickSetDocument } = props;
  const { setErrorDescription } = useContext(DefaultContext);
  const { page, document, messages } = useAppSelector((state) => state.chatbot);
  const dispatch = useAppDispatch();

  const [userMessage, setUserMessage] = useState<string>(''); // user input
  const [isTyping, setIsTyping] = useState<boolean>(false); // is typing
  const divEditRef = useRef<HTMLDivElement>(null);

  const handleSendOnChange = (message: string) => {
    setUserMessage(message);
  };

  const processMessage = async (chatMessages: any) => {
    try {
      const body: API.OpenAIChatUsingPostBody = {
        message: chatMessages,
      };
      setUserMessage('');
      const response = await doChaClientSideUsingPost(body);

      const newMessage: API.Message = {
        message: response.data.answer,
        sender: 'ChatGPT',
        metadata: response.data.metadata,
        contentEditable: false,
      };
      dispatch(setMessages(newMessage));
    } catch (err: any) {
      setErrorDescription(err.message);
      dispatch(removeLastMessage());
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async (e: any) => {
    setIsTyping(true);
    e.preventDefault();
    const newMessage: API.Message = {
      message: userMessage,
      sender: 'user',
      metadata: null,
      contentEditable: false,
    };

    dispatch(setMessages(newMessage));
    // Initial system message
    await processMessage(userMessage);
  };

  // Confirm the contentEditable is True, allow user to edit
  // const onClickEdit = (index: number) => () => {
  //   const newMessages = [...messages];
  //   newMessages[index].contentEditable = true;
  //   setMessages(newMessages);
  // };
  //
  // // Confirm the contentEditable is False, confirm and save the message
  // const onClickConfirm = (index: number) => () => {
  //   const newMessages = [...messages];
  //   newMessages[index].contentEditable = false;
  //   setMessages(newMessages);
  // };

  /*
   * Format the metadata array to string for export to xlsx
   * */
  function formatMetadata(
    metadataArray:
      | (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[]
      | null
  ) {
    if (!metadataArray) {
      return '';
    }
    return metadataArray
      .map((item, index) => {
        return `${index + 1}. pageContent: "${item.page_content}",\r\n`;
        // `${index + 1}. pageNumber: ${item.pageNumber},\r\n` +
        // `${index + 1}. download_link: "${item.download_link}",\r\n` +
        // '==================\r\n'
      })
      .join('');
  }
  const exportToXlsx = (filename: string) => {
    const transformedData = [];
    for (let i = 0; i < messages.length; i += 2) {
      const userMessageObj = messages[i];
      const chatGptResponse = messages[i + 1]; // Assuming there's always a response after a user message
      transformedData.push({
        Question: userMessageObj.message,
        Answer: chatGptResponse.message,
        metadata: formatMetadata(chatGptResponse.metadata),
      });
    }
    const worksheet = XLSX.utils.json_to_sheet(transformedData);
    // Set the width of the first three columns
    worksheet['!cols'] = [
      { wpx: 300 }, // Width of the first column in pixels
      { wpx: 400 }, // Width of the second column
      { wpx: 800 }, // Width of the third column
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filename);
  };

  /*
   * Handle auto scroll to bottom when send the message
   * */
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const smoothScrollTo = (
    element: HTMLDivElement,
    target: number,
    duration: number
  ) => {
    const start = element.scrollTop;
    const change = target - start;
    let startTime = 0;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      element.scrollTop = easeInOutQuad(progress, start, change, duration);
      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };
    window.requestAnimationFrame(animateScroll);
  };

  // Focus on the contentEditable is True
  useEffect(() => {
    const editableMessage = messages.find((m) => m.contentEditable);
    if (editableMessage && divEditRef.current) {
      divEditRef.current.focus();
    }

    if (messagesEndRef.current) {
      const targetScroll = messagesEndRef.current.scrollHeight;
      smoothScrollTo(messagesEndRef.current, targetScroll, 500);
    }
  }, [messages]);

  return (
    <section>
      <div
        className={`from-20% via-30% to-100% h-full w-full self-start bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 ${
          document.length === 0 ? 'rounded-2xl' : 'rounded-r-2xl'
        }`}
      >
        <div className="flex h-full max-h-[95vh]  flex-col">
          <div className="flex items-center justify-between border-b border-slate-300 p-4">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              LEXARI
            </h3>
            <div className="flex gap-2">
              {messages.length > 0 && (
                <Button
                  className="h-8 w-8 p-0"
                  onClick={() => exportToXlsx('LEXARI_chat_message.xlsx')}
                >
                  <FileDownloadIcon className="h-6 w-6" />
                </Button>
              )}
              <Button
                className="h-8 w-8 p-0"
                onClick={() => setActionsOpen(true)}
              >
                <Bars3BottomRightIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
          {messages.length === 0 ? (
            <div className="mt-4 flex h-full flex-col p-4 text-center">
              <h2 className="text-3xl font-bold text-primary">LEXARI</h2>
              <div className="mb-20 flex h-full flex-col items-center justify-center text-muted-foreground/80">
                <p>
                  Harnessing AI and advanced research innovations to enable
                  legal professionals.
                </p>
                <p>Simple yet powerful.</p>
              </div>
            </div>
          ) : (
            <div
              ref={messagesEndRef}
              className="flex flex-col overflow-auto p-4"
            >
              <div>
                {messages.map((message, index) => {
                  return (
                    <div key={index}>
                      {message.sender === 'ChatGPT' ? (
                        <div className="pb-6">
                          <div className="mt-4">
                            <div className="flex items-center gap-1">
                              <AlignHorizontalLeftRoundedIcon />
                              <span className="text-xl font-medium">
                                Answer
                              </span>
                            </div>
                            <div className="mt-2 text-base font-normal text-popover-foreground/80 list-decimal">
                              <ReactMarkdown
                                remarkPlugins={[
                                  [remarkGfm, { singleTilde: false }],
                                ]}
                                className="prose max-w-none prose-stone dark:text-gray-50"
                              >
                                {message.message}
                              </ReactMarkdown>
                              {/*{message.message}*/}
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center gap-1">
                              <ViewQuiltRoundedIcon />
                              <span className="text-xl font-medium">
                                Legal Sources
                              </span>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-2">
                              {message.metadata &&
                                message.metadata.map((metadata: any) => {
                                  return (
                                    <RevelantCard
                                      key={metadata}
                                      document={document}
                                      metadata={metadata}
                                      onClickSetDocument={onClickSetDocument}
                                    />
                                  );
                                })}
                            </div>
                          </div>
                          <div className="mt-4">
                            <Tooltip title="View Relevant">
                              <IconButton
                                size="small"
                                onClick={() => {
                                  dispatch(
                                    setRelevantDialogContent(message.metadata)
                                  );
                                  setRelevantDialogOpen(true);
                                }}
                              >
                                <ViewQuiltRoundedIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <hr className="mt-4" />
                        </div>
                      ) : (
                        <div className="text-2xl font-medium">
                          {message.message}
                        </div>
                      )}
                    </div>
                  );
                })}
                {isTyping && <ChatSkeleton />}
              </div>
            </div>
          )}
          <div className="mt-auto px-6 py-2">
            <form className="relative flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Chat here...
              </label>
              <input
                type="text"
                id="simple-search"
                className="block w-full rounded-2xl bg-background p-2.5 py-4 pl-4 pr-12 text-sm shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Ask anything"
                value={userMessage}
                autoComplete="off"
                required
                onChange={(e: any) => handleSendOnChange(e.target.value)}
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                {isTyping || userMessage.length === 0 ? (
                  <Button
                    type="submit"
                    className="h-10 w-10 rounded-lg bg-transparent text-sm font-medium text-gray-600"
                    disabled
                  >
                    <SendRoundedIcon />
                    <span className="sr-only">Search</span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="h-10 w-10 rounded-lg border border-blue-700 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => handleSend(e)}
                  >
                    <SendRoundedIcon />
                    <span className="sr-only">Search</span>
                  </Button>
                )}
              </div>
            </form>
            <h3 className="mt-2 ml-auto flex text-sm text-gray-500">
              Powered by &nbsp;
              <p className="font-medium text-gray-700">LEXARI</p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
