import { useState } from 'react';
import ContactCard from '../../containers/ContactCard';
import EditContact from '../../containers/EditContact';

const Home = () => {
  const [contatoEstaEditando, setContatoEstaEditando] = useState(null);

  const EditClick = contato => {
    setContatoEstaEditando(contato);
  };

  const CancelEdit = () => {
    setContatoEstaEditando(null);
  };

  const SaveEdit = () => {
    setContatoEstaEditando(null);
  };

  return (
    <>
      <ContactCard onEdit={EditClick} />
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
