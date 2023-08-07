import React from 'react';
import {
  ClipboardIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

function Chatbot() {
  return (
    <section className="h-[600px]">
      <div className="w-full h-full sm:col-span-7 self-start rounded-2xl">
        <Card className="flex flex-col rounded-l-2xl rounded-r-none h-full">
          <CardHeader className="border-b-2 drop-shadow-md">
            <CardTitle>AI Chat</CardTitle>
          </CardHeader>
          <div className="flex flex-col overflow-auto p-4">
            <div>
              {/* presentation */}
              <div className="flex p-4 gap-2 pt-6">
                <img
                  className="rounded-full w-12 h-12 bg-amber-50"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt="bot"
                />
                <div className="flex flex-col w-full">
                  <div className="__chat_box pt-3 text-gray-600">
                    What is LexREI?
                  </div>
                </div>
              </div>
              <div className="flex p-4 gap-2 backdrop-blur-lg bg-green-100/30 rounded-2xl shadow-lg shadow-green-50/40">
                <img
                  className="rounded-full w-12 h-12 bg-amber-50"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt="bot"
                />
                <div className="flex flex-col w-full">
                  <div className="__chat_box pt-2 text-gray-600">
                    LexREI is a legal research tool that uses AI to help you
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
                    <div className="ml-auto bg-white text-gray-500 p-2 rounded-xl text-sm">
                      <ClipboardIcon className="inline-block h-4 w-4" />
                      copy
                    </div>
                  </div>
                </div>
              </div>
              {/* presentation */}
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
                  autoComplete="off"
                  required
                />
              </div>
            </form>
            <h3 className="flex mt-2 ml-auto text-sm text-gray-500">
              Power by &nbsp;
              <p className="font-medium text-gray-700">LexREI</p>
            </h3>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Chatbot;
