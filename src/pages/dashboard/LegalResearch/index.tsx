import Layout from '@/layouts/Layout';
import Results from '@/pages/dashboard/LegalResearch/components/Results';
import Search from '@/pages/dashboard/LegalResearch/components/Search';

function LegalResearch() {
  return (
    <Layout
      component={
        <main className="flex h-[94vh] w-full flex-col gap-4">
          <h1 className="text-3xl font-bold">Legal Research</h1>
          <Search />
          <Results />
        </main>
      }
    />
  );
}

export default LegalResearch;
