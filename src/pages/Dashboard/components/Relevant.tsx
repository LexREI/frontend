import { CardWithForm } from '@/pages/Dashboard/components/RelevantCard';
import React from 'react';
type RelevantProps = {
  metadatas: any[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Relevant(props: RelevantProps) {
  const { metadatas, setPage } = props;
  return (
    <section className=" bg-gray-400 py-4 px-2 grid grid-cols-4 gap-2">
      {metadatas &&
        metadatas.map((metadata) => {
          return (
            <CardWithForm
              key={metadata}
              metadata={metadata}
              setPage={setPage}
            />
          );
        })}
    </section>
  );
}

export default Relevant;
