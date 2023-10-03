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
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';

type ChatbotProps = {
  messages: any[];
  setMessages: any;
  setDocument: (document: string) => void;
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
  setActionsOpen: (actionsOpen: boolean) => void;
};

function Chatbot(props: ChatbotProps) {
  const { messages, setMessages, setDocument, onClickSearch, setActionsOpen } =
    props;
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

  // Focus on the contentEditable is True
  useEffect(() => {
    const editableMessage = messages.find((m) => m.contentEditable);
    if (editableMessage && divEditRef.current) {
      divEditRef.current.focus();
    }
  }, [messages]);

  return (
    <section>
      <div className="w-full h-full self-start rounded-r-2xl bg-gradient-to-b from-slate-50 from-20% via-slate-50 via-30% to-slate-100 to-100%">
        <div className="flex flex-col h-full">
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
          <div className="flex flex-col overflow-auto p-4">
            <div>
              {messages.map((message, index) => {
                return (
                  <div key={message.message}>
                    {message.sender === 'ChatGPT' ||
                    message.sender === 'assistant' ? (
                      <div className="flex p-4 gap-2 backdrop-blur-lg bg-background rounded-2xl shadow-lg">
                        {/*<img*/}
                        {/*  className="rounded-full w-10 h-10 "*/}
                        {/*  src={logo}*/}
                        {/*  alt="bot"*/}
                        {/*/>*/}
                        <div className="flex flex-col w-full">
                          <div
                            className="text-gray-600"
                            contentEditable={message.contentEditable}
                            ref={message.contentEditable ? divEditRef : null}
                          >
                            {message.message}
                          </div>
                          {message.metadata && (
                            <Card className="mt-2">
                              <CardHeader>
                                <CardTitle>Relevant</CardTitle>
                                <CardContent className="grid grid-cols-2 p-0 gap-4 items-start">
                                  {message.metadata.map((metadata: any) => {
                                    return (
                                      <RevelantCard
                                        key={metadata}
                                        setDocument={setDocument}
                                        metadata={metadata}
                                        onClickSearch={onClickSearch}
                                      />
                                    );
                                  })}
                                </CardContent>
                              </CardHeader>
                            </Card>
                          )}
                          <div className="flex items-center mt-4 ml-auto">
                            <Tooltip title="Copy">
                              <IconButton aria-label="copy" size="medium">
                                <ContentCopyRoundedIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            {message.contentEditable ? (
                              <Tooltip
                                title="Confirm"
                                onClick={onClickConfirm(index)}
                              >
                                <IconButton aria-label="confirm" size="medium">
                                  <CheckRoundedIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            ) : (
                              <Tooltip
                                title="Update"
                                onClick={onClickEdit(index)}
                              >
                                <IconButton aria-label="update" size="medium">
                                  <CreateRoundedIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2 my-4">
                        <div className="ml-auto flex-col">
                          <div className="flex gap-2 items-center ml-auto">
                            <span className="text-muted-foreground">
                              11:19 AM
                            </span>
                            <span>User</span>
                          </div>
                          <div className="flex ml-auto">
                            <div className="bg-primary/30 rounded-l-xl rounded-br-xl inline-block ml-auto">
                              <div className="p-3 whitespace-nowrap">
                                {message.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="text-black mt-2 flex gap-2">
                  <UseAnimations animation={loading} />
                  <div>Thinking...</div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-auto px-6 py-2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Chat here...
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-background text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Send a message"
                  value={userMessage}
                  autoComplete="off"
                  required
                  onChange={(e: any) => handleSendOnChange(e.target.value)}
                />
              </div>
              {isTyping ? (
                <Button
                  type="submit"
                  className="w-10 h-10 ml-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-blue-700 "
                  disabled
                >
                  <SendRoundedIcon />
                  <span className="sr-only">Search</span>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-10 h-10 ml-2 text-sm font-medium text-white rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => handleSend(e)}
                >
                  <SendRoundedIcon />
                  <span className="sr-only">Search</span>
                </Button>
              )}
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
