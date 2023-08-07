import { CardWithForm } from '@/pages/Dashboard/components/RelevantCard';

function Relevant() {
  return (
    <section className=" bg-gray-400 py-4 px-2 grid grid-cols-4 gap-2">
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
      <CardWithForm />
    </section>
  );
}

export default Relevant;
