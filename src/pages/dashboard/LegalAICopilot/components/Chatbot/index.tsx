import React, { useContext, useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RevelantCard from '@/pages/dashboard/Discovery/components/Chatbot/components/RelevantCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { doChaClientSideUsingPost } from '@/services/ChatbotController';
import ChatSkeleton from '@/components/Skeleton/ChatSkeleton';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import {
  removeLastMessage,
  setMessages,
  setRelevantDialogContent,
  updateLastMessage,
  updateLastMessageMetadata,
} from '@/stores/chatbotSlice';
import { DefaultContext } from '@/contexts/default_context';
import { BASE_URL } from '@/config/domain';
import lexari_avatar from '@/assets/lexari_avatar.jpg';
import { Link } from 'react-router-dom';

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
  const [isStreaming, setIsStreaming] = useState<boolean>(false); // is streaming
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

  const processMessage1 = (chatMessages: any) => {
    let buffer = '';

    const handleJson = (json: any) => {
      if (json.type === 'start') {
        const newMessage: API.Message = {
          message: '',
          sender: 'ChatGPT',
          metadata: [],
          contentEditable: false,
        };
        dispatch(setMessages(newMessage));
        setIsTyping(false);
        setIsStreaming(true);
        setUserMessage('');
      } else if (json.type === 'stream') {
        dispatch(updateLastMessage(json.message));
      } else if (json.type === 'info') {
        dispatch(updateLastMessageMetadata(json.metadata));
      } else if (json.type === 'end') {
        setIsStreaming(false);
      }
    };

    const processChunk = (chunk: string) => {
      buffer += chunk;

      // Utility function to find the end of a complete JSON object
      function findEndOfJsonObject(str: string) {
        let depth = 0;
        let inString = false;
        let escape = false;
        for (let i = 0; i < str.length; i += 1) {
          const char = str[i];
          if (escape) {
            escape = false;
            continue;
          }
          if (char === '\\') {
            escape = true;
            continue;
          }
          if (char === '"') {
            inString = !inString;
            continue;
          }
          if (inString) continue;
          if (char === '{') depth += 1;
          else if (char === '}') depth -= 1;
          if (depth === 0) return i; // End of JSON object found
        }
        return -1; // Complete JSON object not found
      }
      // Continuously process the buffer to extract complete JSON objects
      let endOfObjectIndex;
      // eslint-disable-next-line no-cond-assign
      while ((endOfObjectIndex = findEndOfJsonObject(buffer)) !== -1) {
        const jsonChunk = buffer.substring(0, endOfObjectIndex + 1);
        try {
          const json = JSON.parse(jsonChunk);
          handleJson(json); // Process the JSON object
        } catch (error) {
          console.error('Error parsing JSON chunk:', error);
          break; // Break if parsing fails, wait for more data
        }
        buffer = buffer.substring(endOfObjectIndex + 1); // Update the buffer
      }
    };

    try {
      const body = {
        conversation_id: 'string',
        message: chatMessages,
      };
      fetch(`${BASE_URL}/openai/chat/streaming`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.body) {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            const readStream = () => {
              reader.read().then(({ done, value }) => {
                if (done) {
                  console.log('Stream complete');
                  return;
                }

                const chunk = decoder.decode(value, { stream: true });
                processChunk(chunk);
                readStream();
              });
            };

            readStream();
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    } catch (err: any) {
      setErrorDescription(err.message);
      dispatch(removeLastMessage());
    } finally {
      // setIsTyping(false);
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
    processMessage1(userMessage);
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
        className={`from-20% via-30% to-100% h-full w-full self-start ${
          document.length === 0 ? 'rounded-2xl' : 'rounded-r-2xl'
        }`}
      >
        <div className="flex h-full max-h-[95vh]  flex-col">
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
                        <div className="pb-6 mt-4">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={lexari_avatar} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <div className="inline-block bg-blue-100 py-2 px-4">
                                <span className="text-lg font-medium">
                                  LexARI AI
                                </span>
                                <div className="mt-2 flex items-center text-base font-normal text-popover-foreground/80 list-decimal">
                                  <ReactMarkdown
                                    remarkPlugins={[
                                      [remarkGfm, { singleTilde: false }],
                                    ]}
                                    className="prose max-w-none prose-stone dark:text-gray-50"
                                  >
                                    {message.message}
                                  </ReactMarkdown>
                                  {isStreaming && (
                                    <span className="cursor_streaming" />
                                  )}
                                </div>
                              </div>
                              <div className="inline-block bg-orange-100 py-2 px-4 mt-2">
                                <span className="text-lg font-medium">
                                  References
                                </span>
                                <div className="mt-2 flex flex-col text-base font-normal text-popover-foreground/80 list-decimal">
                                  {message.metadata &&
                                    message.metadata.map((metadata: any, i) => {
                                      return (
                                        <li key={i}>
                                          <Link
                                            to={metadata.source_url}
                                            target="_blank"
                                            className="text-sky-300 underline"
                                          >
                                            {metadata.title}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*<div className="mt-4">*/}
                          {/*  <div className="flex items-center gap-1">*/}
                          {/*    <ViewQuiltRoundedIcon />*/}
                          {/*    <span className="text-xl font-medium">*/}
                          {/*      Legal Sources*/}
                          {/*    </span>*/}
                          {/*  </div>*/}
                          {/*  <div className="mt-4 grid grid-cols-3 gap-2">*/}
                          {/*    {message.metadata &&*/}
                          {/*      message.metadata.map((metadata: any) => {*/}
                          {/*        return (*/}
                          {/*          <RevelantCard*/}
                          {/*            key={metadata}*/}
                          {/*            document={document}*/}
                          {/*            metadata={metadata}*/}
                          {/*            onClickSetDocument={onClickSetDocument}*/}
                          {/*          />*/}
                          {/*        );*/}
                          {/*      })}*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          {/*<div className="mt-4">*/}
                          {/*  <Tooltip title="View Relevant">*/}
                          {/*    <IconButton*/}
                          {/*      size="small"*/}
                          {/*      onClick={() => {*/}
                          {/*        dispatch(*/}
                          {/*          setRelevantDialogContent(message.metadata)*/}
                          {/*        );*/}
                          {/*        setRelevantDialogOpen(true);*/}
                          {/*      }}*/}
                          {/*    >*/}
                          {/*      <ViewQuiltRoundedIcon fontSize="small" />*/}
                          {/*    </IconButton>*/}
                          {/*  </Tooltip>*/}
                          {/*</div>*/}
                          {/*<hr className="mt-4" />*/}
                        </div>
                      ) : (
                        <div className="flex gap-4 mt-8">
                          <Avatar>
                            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="inline-block bg-yellow-100 py-2 px-4">
                            <span className="text-lg font-medium">
                              John Doe
                            </span>
                            <div className="mt-2 flex items-center text-base font-normal text-popover-foreground/80 list-decimal">
                              <ReactMarkdown
                                remarkPlugins={[
                                  [remarkGfm, { singleTilde: false }],
                                ]}
                                className="prose max-w-none prose-stone dark:text-gray-50"
                              >
                                {message.message}
                              </ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                {isTyping && <ChatSkeleton title="AI thinking..." />}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
