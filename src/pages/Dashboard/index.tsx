import React, { useState } from 'react';
import Layout from '@/layouts/Layout';
import Chatbot from '@/pages/Dashboard/components/Chatbot';
import Relevant from '@/pages/Dashboard/components/Relevant';
import RelatedQuestion from '@/pages/Dashboard/components/RelatedQuestion';
import PDFViewer from '@/pages/Dashboard/components/PDFViewer';

function Dashboard() {
  const [page, setPage] = useState<number>(1);
  const [messages, setMessages] = useState<any[]>([
    {
      message: '👋 Hello, How I can help you today?',
      sender: 'ChatGPT',
      metadata: null,
    },
  ]);
  return (
    // <Layout
    //   component={
    //     <main className="grid grid-cols-2 gap-4">
    //       <PDFViewer />
    //       <Chatbot />
    //       <Relevant />
    //       <RelatedQuestion />
    //     </main>
    //   }
    // />
    <section className="grid grid-cols-2 gap-4">
      <PDFViewer page={page} />
      <Chatbot messages={messages} setMessages={setMessages} />
      <Relevant
        metadatas={messages[messages.length - 1].metadata}
        setPage={setPage}
      />
      {/* <RelatedQuestion /> */}
    </section>
  );
}

export default Dashboard;
