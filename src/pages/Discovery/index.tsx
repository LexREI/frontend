import Layout from '@/layouts/Layout';
import Actions from '@/pages/Discovery/components/Actions';
import PDFViewer from '@/pages/Discovery/components/PDFViewer';
import Chatbot from '@/pages/Discovery/components/Chatbot';
import { useContext, useEffect, useState } from 'react';
import { documentsListUsingGet } from '@/services/DocumentController';
import { DefaultContext } from '@/contexts/default_context';
import { RelevantDialog } from '@/pages/Discovery/components/RelevantDialog';

function Discovery() {
  const { setErrorDescription, setProcessLoading, setProcessLoadingTitle } =
    useContext(DefaultContext);
  const [relevantDialogOpen, setRelevantDialogOpen] = useState<boolean>(false);
  const [actionsOpen, setActionsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [documents, setDocuments] = useState<API.Documents[]>([]); // [{name: 'doc1', url: 'http://example.com/doc1.pdf'}
  const [document, setDocument] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [messages, setMessages] = useState<API.Message[]>([]);
  const [relevantDialogContent, setRelevantDialogContent] = useState<
    (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[] | null
  >([]);

  const onClickSearch = (pageNumber: number, pageTextHighlight: string) => {
    setPage(pageNumber);
    setSearchText(pageTextHighlight);
  };

  const onClickSetDocument = (doc: string) => {
    // setProcessLoading(true);
    // setProcessLoadingTitle('Loading document...');
    setDocument(doc);
  };

  const getDocumentsList = async () => {
    try {
      const res = await documentsListUsingGet();
      if (res) {
        setDocuments(res.data.files);
      }
    } catch (err: any) {
      setErrorDescription(err.response.data.message);
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
            getDocumentsList={getDocumentsList}
          />
          <div
            className={`grid w-full rounded-2xl ${
              document.length === 0 ? 'grid-cols-1' : 'grid-cols-2'
            }`}
          >
            <PDFViewer
              document={document}
              page={page}
              searchText={searchText}
            />
            <Chatbot
              messages={messages}
              document={document}
              setMessages={setMessages}
              onClickSearch={onClickSearch}
              setActionsOpen={setActionsOpen}
              setRelevantDialogOpen={setRelevantDialogOpen}
              setRelevantDialogContent={setRelevantDialogContent}
              onClickSetDocument={onClickSetDocument}
            />
          </div>
          {relevantDialogOpen && (
            <RelevantDialog
              open={relevantDialogOpen}
              setOpen={setRelevantDialogOpen}
              content={relevantDialogContent}
              onClickSetDocument={onClickSetDocument}
            />
          )}
        </main>
      }
    />
  );
}

export default Discovery;
