import { CardWithForm } from '@/pages/Dashboard/components/RelevantCard';
import React from 'react';

type RelevantProps = {
  setDocument: (document: string) => void;
  metadatas: any[];
  onClickSearch: (pageNumber: number, pageTextHighlight: string) => void;
};

function Relevant(props: RelevantProps) {
  const { setDocument, metadatas, onClickSearch } = props;
  return (
    <section className=" bg-gray-400 py-4 px-2 grid grid-cols-4 gap-2">
      {metadatas &&
        metadatas.map((metadata, index) => {
          return (
            <CardWithForm
              key={index}
              setDocument={setDocument}
              metadata={metadata}
              onClickSearch={onClickSearch}
            />
          );
        })}
    </section>
  );
}

export default Relevant;
