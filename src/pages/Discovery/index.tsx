import Layout from '@/layouts/Layout';
import Actions from '@/pages/Discovery/components/Actions';
import PDFViewer from '@/pages/Discovery/components/PDFViewer';
import Chatbot from '@/pages/Discovery/components/Chatbot';
import { useState } from 'react';

function Discovery() {
  const [page, setPage] = useState<number>(1);
  const [document, setDocument] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([
    {
      message: '👋 Hello, How I can help you today?',
      sender: 'ChatGPT',
      metadata: null,
    },
  ]);

  const onClickSearch = (pageNumber: number, pageTextHighlight: string) => {
    setPage(pageNumber);
    setSearchText(pageTextHighlight);
  };

  return (
    <Layout
      component={
        <main className="flex w-full">
          <Actions />
          <div className="grid grid-cols-2 w-full">
            <PDFViewer
              document={document}
              page={page}
              searchText={searchText}
            />
            <Chatbot messages={messages} setMessages={setMessages} />
          </div>
        </main>
      }
    />
  );
}

export default Discovery;
