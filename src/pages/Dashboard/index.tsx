import React from 'react';
import Layout from '@/layouts/Layout';
import Chatbot from '@/pages/Dashboard/components/Chatbot';
import Relevant from '@/pages/Dashboard/components/Relevant';
import RelatedQuestion from '@/pages/Dashboard/components/RelatedQuestion';
import PDFViewer from '@/pages/Dashboard/components/PDFViewer';

function Dashboard() {
  return (
    <Layout
      component={
        <main className="grid grid-cols-2 gap-4">
          <PDFViewer />
          <Chatbot />
          <Relevant />
          <RelatedQuestion />
        </main>
      }
    />
  );
}

export default Dashboard;
