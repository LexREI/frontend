import Layout from '@/layouts/Layout';
import Form from '@/pages/admins/WebCrawler/components/Form';

function WebCrawler() {
  return (
    <Layout
      component={
        <main className="flex h-full w-full">
          {/*<h1>Website Content Crawler</h1>*/}
          <Form />
        </main>
      }
    />
  );
}

export default WebCrawler;
