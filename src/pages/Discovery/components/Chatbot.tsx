import React, { useRef, useState } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  ClipboardIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import loading from 'react-useanimations/lib/loading';
import UseAnimations from 'react-useanimations';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { doChaClientSideUsingPost } from '@/services/ChatbotController';
import logo from '@/assets/react.svg';
import { Button } from '@/components/ui/button';

type ChatbotProps = {
  messages: any[];
  setMessages: any;
};

function Chatbot(props: ChatbotProps) {
  const { messages, setMessages } = props;
  const [userMessage, setUserMessage] = useState<string>(''); // user input
  const [isTyping, setIsTyping] = useState<boolean>(false); // is typing

  const handleSendOnChange = (message: string) => {
    setUserMessage(message);
  };

  const processMessage = async (chatMessages: any) => {
    const body: API.OpenAIChatUsingPostBody = {
      message: chatMessages,
    };
    setUserMessage('');
    const response = await doChaClientSideUsingPost(body);
    console.log(response.data.answer);

    const newMessage = {
      message: response.data.answer,
      sender: 'ChatGPT',
      metadata: response.data.metadata,
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
    };

    setMessages((prevMessages: any) => [...prevMessages, newMessage]);
    // Initial system message
    await processMessage(userMessage);
  };

  return (
    <section>
      <div className="w-full h-full self-start bg-slate-100">
        <div className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Chatbot name in here</CardTitle>
          </CardHeader>
          <div className="flex flex-col overflow-auto p-4">
            <div>
              {messages.map((message) => {
                return (
                  <div key={message.message}>
                    {message.sender === 'ChatGPT' ||
                    message.sender === 'assistant' ? (
                      <div className="flex p-4 gap-2 backdrop-blur-lg bg-background rounded-2xl shadow-lg">
                        <img
                          className="rounded-full w-12 h-12 bg-amber-50"
                          src={logo}
                          alt="bot"
                        />
                        <div className="flex flex-col w-full">
                          <div className="__chat_box pt-3 text-gray-600 animate__animated animate__fadeInDown">
                            {message.message}
                          </div>
                          <div className="flex items-center mt-4">
                            <button
                              type="button"
                              className="ml-auto bg-white text-gray-500 p-2 rounded-xl text-sm cursor-pointer hover:bg-accent transition duration-300"
                            >
                              <ClipboardIcon className="inline-block h-4 w-4" />
                              copy
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2 mb-2">
                        <div className="ml-auto flex flex-col">
                          <p className="text-gray-900 font-semibold tracking-wide ml-auto">
                            You
                          </p>
                          <div className="__chat_box bg-sky-300 p-3 rounded-xl">
                            {message.message}
                          </div>
                        </div>
                        <img
                          className="rounded-full w-12 h-12"
                          src={logo}
                          alt="user"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              {/* presentation */}
              <div className="flex flex-col items-end p-4 pt-6">
                <div className="flex gap-2 items-center">
                  <span className="text-muted-foreground">11:19 AM</span>
                  <img
                    className="rounded-full w-4 h-4 bg-amber-50"
                    src={logo}
                    alt="bot"
                  />
                  <span>Jaying Young</span>
                </div>

                <div className="flex bg-primary/30 rounded-l-xl rounded-br-xl">
                  <div className="p-3">What is Lexari :)</div>
                </div>
              </div>
              <div className="flex p-4 gap-2 backdrop-blur-lg bg-background rounded-2xl shadow-lg">
                <img
                  className="rounded-full w-12 h-12 bg-amber-50"
                  src={logo}
                  alt="bot"
                />
                <div className="flex flex-col w-full">
                  <div className="pt-2 text-gray-600">
                    LexREI is a legal research assistant that helps you find.
                    FEAW FNEWAK NFKJEWAN FLKEAWN FKLKNWA ELKFN EAA
                    FEWAFEAWFEAWFEWAFEWAFEWAGAEWMRGKWF MAWELK MFWEA FMAWEF
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="ml-auto bg-white text-gray-500 p-2 rounded-xl text-sm">
                      <ClipboardIcon className="inline-block h-4 w-4" />
                      copy
                    </div>
                  </div>
                </div>
              </div>
              {/* presentation */}

              {isTyping && (
                <div className="text-black mt-2 flex gap-2">
                  <UseAnimations animation={loading} />
                  <div>Thinking...</div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-auto p-6">
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
                  placeholder="Chat here..."
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
              Power by &nbsp;
              <p className="font-medium text-gray-700">LexREI</p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
