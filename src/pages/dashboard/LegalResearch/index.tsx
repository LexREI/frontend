import Layout from '@/layouts/Layout';
import Results from '@/pages/dashboard/LegalResearch/components/Results';
import Search from '@/pages/dashboard/LegalResearch/components/Search';
import React, { useContext, useState } from 'react';
import { searchCaseUsingPost } from '@/services/CasesSearchController';
import ChatSkeleton from '@/components/Skeleton/ChatSkeleton';
import { DefaultContext } from '@/contexts/default_context';

function LegalResearch() {
  const { fetchLoading, setFetchLoading, setErrorDescription } =
    useContext(DefaultContext);
  const [searchCases, setSearchCases] = useState<
    API.CasesSearchUsingPostResponse[]
  >([]);
  const onSubmitCasesSearch = async (e: any, query: string) => {
    e.preventDefault();
    try {
      setFetchLoading(true);
      setSearchCases([]);
      const body: API.CasesSearchUsingPostBody = { query };
      const response = await searchCaseUsingPost(body);
      // add expand to the response
      response.data.metadata = response.data.metadata.map(
        (item: any, id: number) => {
          return {
            ...item,
            expand: false,
            id,
          };
        }
      );
      setSearchCases(response.data.metadata);
    } catch (err: any) {
      setErrorDescription(err.response.data.message);
    } finally {
      setFetchLoading(false);
    }
  };
  const onClickExpand = (id: number) => {
    const newSearchCases = searchCases.map((item, index) => {
      if (index === id) {
        return {
          ...item,
          expand: !item.expand,
        };
      }
      return item;
    });
    setSearchCases(newSearchCases);
  };
  return (
    <Layout
      component={
        <main className="flex h-[94vh] w-full flex-col gap-4">
          <h1 className="text-3xl font-bold">Legal Research</h1>
          <Search onSubmitCasesSearch={onSubmitCasesSearch} />
          <Results searchCases={searchCases} onClickExpand={onClickExpand} />
          {fetchLoading && <ChatSkeleton title="Loading..." />}
        </main>
      }
    />
  );
}

export default LegalResearch;
