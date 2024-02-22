import Layout from '@/layouts/Layout';
import Actions from '@/pages/Discovery/components/Actions';
import PDFViewer from '@/pages/Discovery/components/PDFViewer';
import Chatbot from '@/pages/Discovery/components/Chatbot';
import { useContext, useEffect, useState } from 'react';
import { documentsListUsingGet } from '@/services/DocumentController';
import { DefaultContext } from '@/contexts/default_context';
import { RelevantDialog } from '@/pages/Discovery/components/RelevantDialog';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { setDocument, setDocuments } from '@/stores/chatbotSlice';

function LegalAICopilot() {
  const { setErrorDescription, setProcessLoading, setProcessLoadingTitle } =
    useContext(DefaultContext);

  const { document } = useAppSelector((state) => state.chatbot);
  const dispatch = useAppDispatch();

  const [relevantDialogOpen, setRelevantDialogOpen] = useState<boolean>(false);
  const [actionsOpen, setActionsOpen] = useState<boolean>(false);

  const onClickSetDocument = (doc: string) => {
    // setProcessLoading(true);
    // setProcessLoadingTitle('Loading document...');
    dispatch(setDocument(doc));
  };

  const getDocumentsList = async () => {
    try {
      const res = await documentsListUsingGet();
      if (res) {
        dispatch(setDocuments(res.data.files));
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
        <main className="flex h-[94vh] w-full">
          <Actions
            actionsOpen={actionsOpen}
            setActionsOpen={setActionsOpen}
            getDocumentsList={getDocumentsList}
          />
          <div
            className={`grid w-full rounded-2xl ${
              document.length === 0 ? 'grid-cols-1' : 'grid-cols-2'
            }`}
          >
            <PDFViewer />
            <Chatbot
              setActionsOpen={setActionsOpen}
              setRelevantDialogOpen={setRelevantDialogOpen}
              onClickSetDocument={onClickSetDocument}
            />
          </div>
          {relevantDialogOpen && (
            <RelevantDialog
              open={relevantDialogOpen}
              setOpen={setRelevantDialogOpen}
              onClickSetDocument={onClickSetDocument}
            />
          )}
        </main>
      }
    />
  );
}

export default LegalAICopilot;
