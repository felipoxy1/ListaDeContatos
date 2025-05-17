import { useState } from 'react';
import ListaDeContatos from '../../components/contatos';
import Title from '../../components/title';
import EditContact from '../../containers/EditContact';
import * as S from './style';

interface Contato {
  id: number;
  nome: string;
  email: string;
  number: number;
}

const ContactCard = () => {
  const [contatoEditando, setContatoEditando] = useState<Contato | null>(null);

  return (
    <S.Main>
      <S.Header>
        <Title />
        <S.AddMore to="/cadastro">Adicionar Contato</S.AddMore>
      </S.Header>
      <ListaDeContatos onEdit={setContatoEditando} />
      {contatoEditando && (
        <EditContact
          contato={contatoEditando}
          onSave={() => setContatoEditando(null)}
          onCancel={() => setContatoEditando(null)}
        />
      )}
    </S.Main>
  );
};

export default ContactCard;
