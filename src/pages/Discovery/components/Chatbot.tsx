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
      <div className="w-full h-full sm:col-span-7 self-start rounded-2xl">
        <div className="flex flex-col h-full">
          <CardHeader className="bg-indigo-400/50">
            <CardTitle>AI Chat</CardTitle>
          </CardHeader>
          <div className="flex flex-col overflow-auto p-4">
            <div>
              {messages.map((message) => {
                return (
                  <div key={message.message}>
                    {message.sender === 'ChatGPT' ||
                    message.sender === 'assistant' ? (
                      <div className="flex p-4 gap-2 backdrop-blur-lg bg-green-100/30 rounded-2xl shadow-lg shadow-green-50/40">
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
                            <div>
                              <div className="flex gap-2">
                                <div className="bg-white rounded-full p-2">
                                  <HandThumbUpIcon className="h-4 w-4" />
                                </div>
                                <div className="bg-white rounded-full p-2">
                                  <HandThumbDownIcon className="h-4 w-4" />
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto bg-white text-gray-500 p-2 rounded-xl text-sm cursor-pointer hover:bg-green-100 transition duration-300"
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
              {/*<div className="flex p-4 gap-2 pt-6">*/}
              {/*  <img*/}
              {/*    className="rounded-full w-12 h-12 bg-amber-50"*/}
              {/*    src={userAvatar}*/}
              {/*    alt="bot"*/}
              {/*  />*/}
              {/*  <div className="flex flex-col w-full">*/}
              {/*    <div className="__chat_box pt-3 text-gray-600">*/}
              {/*      What is PresetAI?*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="flex p-4 gap-2 backdrop-blur-lg bg-green-100/30 rounded-2xl shadow-lg shadow-green-50/40">*/}
              {/*  <img*/}
              {/*    className="rounded-full w-12 h-12 bg-amber-50"*/}
              {/*    src={logo}*/}
              {/*    alt="bot"*/}
              {/*  />*/}
              {/*  <div className="flex flex-col w-full">*/}
              {/*    <div className="__chat_box pt-2 text-gray-600">*/}
              {/*      PresetAI is a powerhouse for chat-based search operations. We*/}
              {/*      specialize in addressing developer documentation queries with*/}
              {/*      simplicity and efficiency. Integration is effortless, and*/}
              {/*      achievable everywhere with just a single line of code.*/}
              {/*    </div>*/}
              {/*    <div className="flex items-center mt-4">*/}
              {/*      <div>*/}
              {/*        <div className="flex gap-2">*/}
              {/*          <div className="bg-white rounded-full p-2">*/}
              {/*            <HandThumbUpIcon className="h-4 w-4" />*/}
              {/*          </div>*/}
              {/*          <div className="bg-white rounded-full p-2">*/}
              {/*            <HandThumbDownIcon className="h-4 w-4" />*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="ml-auto bg-white text-gray-500 p-2 rounded-xl text-sm">*/}
              {/*        <ClipboardIcon className="inline-block h-4 w-4" />*/}
              {/*        copy*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
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
                  className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Chat here..."
                  value={userMessage}
                  autoComplete="off"
                  required
                  onChange={(e: any) => handleSendOnChange(e.target.value)}
                />
              </div>
              {isTyping ? (
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-blue-700 "
                  disabled
                >
                  <SendRoundedIcon />
                  <span className="sr-only">Search</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => handleSend(e)}
                >
                  <SendRoundedIcon />
                  <span className="sr-only">Search</span>
                </button>
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
