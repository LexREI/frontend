import Layout from '@/layouts/Layout';
import Actions from '@/pages/Discovery/components/Actions';
import PDFViewer from '@/pages/Discovery/components/PDFViewer';
import Chatbot from '@/pages/Discovery/components/Chatbot';
import { useEffect, useState } from 'react';
import { documentsListUsingGet } from '@/services/DocumentController';

function Discovery() {
  const [actionsOpen, setActionsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [documents, setDocuments] = useState<API.Documents[]>([]); // [{name: 'doc1', url: 'http://example.com/doc1.pdf'}
  const [document, setDocument] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [messages, setMessages] = useState<any[]>([
    {
      message: 'Ask Lexari with your legal research and analysis!',
      sender: 'ChatGPT',
      metadata: null,
      contentEditable: false,
    },
  ]);

  const onClickSearch = (pageNumber: number, pageTextHighlight: string) => {
    setPage(pageNumber);
    setSearchText(pageTextHighlight);
  };

  const getDocumentsList = async () => {
    const res = await documentsListUsingGet();
    if (res) {
      setDocuments(res.data.files);
    }
  };

  useEffect(() => {
    getDocumentsList();
  }, []);

  return (
    <Layout
      component={
        <main className="flex w-full h-full">
          <Actions
            actionsOpen={actionsOpen}
            setActionsOpen={setActionsOpen}
            documents={documents}
            setDocument={setDocument}
          />
          <div className="grid grid-cols-2 w-full rounded-2xl">
            <PDFViewer
              document={document}
              page={page}
              searchText={searchText}
            />
            <Chatbot
              messages={messages}
              setMessages={setMessages}
              setDocument={setDocument}
              onClickSearch={onClickSearch}
              setActionsOpen={setActionsOpen}
            />
          </div>
        </main>
      }
    />
  );
}

export default Discovery;
