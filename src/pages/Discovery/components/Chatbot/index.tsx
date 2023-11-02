import React, { useEffect, useRef, useState } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import loading from 'react-useanimations/lib/loading';
import UseAnimations from 'react-useanimations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { doChaClientSideUsingPost } from '@/services/ChatbotController';
import { Button } from '@/components/ui/button';
import RevelantCard from '@/pages/Discovery/components/Chatbot/components/RelevantCard';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import IconButton from '@mui/material/IconButton';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Tooltip from '@mui/material/Tooltip';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import ChatSkeleton from '@/components/Skeleton/ChatSkeleton';

type ChatbotProps = {
  messages: any[];
  document: string;
  setMessages: any;
  setDocument: (document: string) => void;
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
  setActionsOpen: (actionsOpen: boolean) => void;
  setRelevantDialogOpen: (relevantDialogOpen: boolean) => void;
  setRelevantDialogContent: (
    relevantDialogContent: API.RelevantMetadata[]
  ) => void;
};

function Chatbot(props: ChatbotProps) {
  const {
    messages,
    document,
    setMessages,
    setDocument,
    onClickSearch,
    setActionsOpen,
    setRelevantDialogOpen,
    setRelevantDialogContent,
  } = props;
  const [userMessage, setUserMessage] = useState<string>(''); // user input
  const [isTyping, setIsTyping] = useState<boolean>(false); // is typing
  const divEditRef = useRef<HTMLDivElement>(null);

  const handleSendOnChange = (message: string) => {
    setUserMessage(message);
  };

  const processMessage = async (chatMessages: any) => {
    const body: API.OpenAIChatUsingPostBody = {
      message: chatMessages,
    };
    setUserMessage('');
    const response = await doChaClientSideUsingPost(body);

    const newMessage = {
      message: response.data.answer,
      sender: 'ChatGPT',
      metadata: response.data.metadata,
      contentEditable: false,
    };
    setMessages((prevMessages: any) => [...prevMessages, newMessage]);

    setIsTyping(false);
  };

  const handleSend = async (e: any) => {
    setIsTyping(true);
    e.preventDefault();
    const newMessage = {
      message: userMessage,
      sender: 'user',
      metadata: null,
      contentEditable: false,
    };

    setMessages((prevMessages: any) => [...prevMessages, newMessage]);
    // Initial system message
    await processMessage(userMessage);
  };

  // Confirm the contentEditable is True, allow user to edit
  const onClickEdit = (index: number) => () => {
    const newMessages = [...messages];
    newMessages[index].contentEditable = true;
    setMessages(newMessages);
  };

  // Confirm the contentEditable is False, confirm and save the message
  const onClickConfirm = (index: number) => () => {
    const newMessages = [...messages];
    newMessages[index].contentEditable = false;
    setMessages(newMessages);
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
      <div className="w-full h-full self-start rounded-r-2xl bg-gradient-to-b from-slate-50 from-20% via-slate-50 via-30% to-slate-100 to-100%">
        <div className="flex flex-col h-full  max-h-[95vh]">
          <div className="p-4 flex items-center justify-between border-b border-slate-300">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              LEXARI
            </h3>
            <Button
              className="w-8 h-8 p-0"
              onClick={() => setActionsOpen(true)}
            >
              <Bars3BottomRightIcon className="w-6 h-6" />
            </Button>
          </div>
          {messages.length === 0 ? (
            <div className="flex flex-col h-full p-4 text-center mt-4">
              <h2 className="text-3xl font-bold text-primary">LEXARI</h2>
              <div className="text-muted-foreground/80 h-full flex flex-col justify-center items-center mb-20">
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
                      {message.sender === 'ChatGPT' ||
                      message.sender === 'assistant' ? (
                        <div className="pb-6">
                          <div className="mt-4">
                            <div className="flex items-center gap-1">
                              <AlignHorizontalLeftRoundedIcon />
                              <span className="text-xl font-medium">
                                Answer
                              </span>
                            </div>
                            <div className="mt-2 text-base font-normal text-popover-foreground/80">
                              {message.message}
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center gap-1">
                              <ViewQuiltRoundedIcon />
                              <span className="text-xl font-medium">
                                Relevant
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                              {message.metadata &&
                                message.metadata.map((metadata: any) => {
                                  return (
                                    <RevelantCard
                                      key={metadata}
                                      document={document}
                                      setDocument={setDocument}
                                      metadata={metadata}
                                      onClickSearch={onClickSearch}
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
                                  setRelevantDialogContent(message.metadata);
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
                {/*{messages.map((message, index) => {*/}
                {/*  return (*/}
                {/*    <div key={index}>*/}
                {/*      {message.sender === 'ChatGPT' ||*/}
                {/*      message.sender === 'assistant' ? (*/}
                {/*        <div className="flex p-4 gap-2 bg-zinc-200/70 w-[90%] rounded-tl-2xl rounded-r-2xl">*/}
                {/*          <div className="flex flex-col w-full">*/}
                {/*            <div*/}
                {/*              className="text-gray-800"*/}
                {/*              contentEditable={message.contentEditable}*/}
                {/*              ref={message.contentEditable ? divEditRef : null}*/}
                {/*            >*/}
                {/*              {message.message}*/}
                {/*            </div>*/}
                {/*            {message.metadata && (*/}
                {/*              <Card className="mt-2">*/}
                {/*                <CardHeader>*/}
                {/*                  <CardTitle>Relevant</CardTitle>*/}
                {/*                  <CardContent className="grid grid-cols-2 p-0 gap-4 items-start">*/}
                {/*                    {message.metadata.map((metadata: any) => {*/}
                {/*                      return (*/}
                {/*                        <RevelantCard*/}
                {/*                          key={metadata}*/}
                {/*                          setDocument={setDocument}*/}
                {/*                          metadata={metadata}*/}
                {/*                          onClickSearch={onClickSearch}*/}
                {/*                        />*/}
                {/*                      );*/}
                {/*                    })}*/}
                {/*                  </CardContent>*/}
                {/*                </CardHeader>*/}
                {/*              </Card>*/}
                {/*            )}*/}
                {/*            <div className="flex items-center mt-4 ml-auto">*/}
                {/*              <Tooltip title="Copy">*/}
                {/*                <IconButton aria-label="copy" size="medium">*/}
                {/*                  <ContentCopyRoundedIcon fontSize="small" />*/}
                {/*                </IconButton>*/}
                {/*              </Tooltip>*/}
                {/*              {message.contentEditable ? (*/}
                {/*                <Tooltip*/}
                {/*                  title="Confirm"*/}
                {/*                  onClick={onClickConfirm(index)}*/}
                {/*                >*/}
                {/*                  <IconButton aria-label="confirm" size="medium">*/}
                {/*                    <CheckRoundedIcon fontSize="small" />*/}
                {/*                  </IconButton>*/}
                {/*                </Tooltip>*/}
                {/*              ) : (*/}
                {/*                <Tooltip*/}
                {/*                  title="Update"*/}
                {/*                  onClick={onClickEdit(index)}*/}
                {/*                >*/}
                {/*                  <IconButton aria-label="update" size="medium">*/}
                {/*                    <CreateRoundedIcon fontSize="small" />*/}
                {/*                  </IconButton>*/}
                {/*                </Tooltip>*/}
                {/*              )}*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      ) : (*/}
                {/*        <div className="flex gap-2 my-4">*/}
                {/*          <div className="ml-auto flex-col">*/}
                {/*            <div className="flex justify-end gap-2 items-center ml-auto w-full">*/}
                {/*              <span className="text-muted-foreground">*/}
                {/*                11:19 AM*/}
                {/*              </span>*/}
                {/*              <span>User</span>*/}
                {/*            </div>*/}
                {/*            <div className="flex ml-auto">*/}
                {/*              <div className="bg-primary/30 rounded-l-2xl rounded-br-2xl inline-block ml-auto w-[90%]">*/}
                {/*                <div className="p-3 text-gray-800">*/}
                {/*                  {message.message}*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      )}*/}
                {/*    </div>*/}
                {/*  );*/}
                {/*})}*/}

                {isTyping && <ChatSkeleton />}
              </div>
            </div>
          )}
          <div className="mt-auto px-6 py-2">
            <form className="flex items-center relative">
              <label htmlFor="simple-search" className="sr-only">
                Chat here...
              </label>
              <input
                type="text"
                id="simple-search"
                className="bg-background text-sm rounded-2xl shadow-md block w-full pl-4 pr-12 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="w-10 h-10 text-sm font-medium text-gray-600 bg-transparent rounded-lg"
                    disabled
                  >
                    <SendRoundedIcon />
                    <span className="sr-only">Search</span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-10 h-10 text-sm font-medium text-white rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => handleSend(e)}
                  >
                    <SendRoundedIcon />
                    <span className="sr-only">Search</span>
                  </Button>
                )}
              </div>
            </form>
            <h3 className="flex mt-2 ml-auto text-sm text-gray-500">
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
