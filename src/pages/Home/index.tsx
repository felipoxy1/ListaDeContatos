import { useState } from 'react';
import ContactCard from '../../containers/ContactCard';
import EditContact from '../../containers/EditContact';

interface Contato {
  id: number;
  nome: string;
  email: string;
  number: number;
}
const Home = () => {
  const [contatoEstaEditando, setContatoEstaEditando] =
    useState<Contato | null>(null);

  const CancelEdit = () => {
    setContatoEstaEditando(null);
  };

  const SaveEdit = () => {
    setContatoEstaEditando(null);
  };

  return (
    <>
      <ContactCard />
      {contatoEstaEditando && (
        <EditContact
          contato={contatoEstaEditando}
          onCancel={CancelEdit}
          onSave={SaveEdit}
        />
      )}
    </>
  );
};

export default Home;
