import { useDispatch, useSelector } from 'react-redux';
import { type RootReducer } from '../../store';
import { remover } from '../../store/reducers/contatos';
import * as S from './style';

interface Contato {
  id: number;
  nome: string;
  email: string;
  number: number;
}

interface Props {
  onEdit: (contato: Contato) => void;
}

const ListaDeContatos: React.FC<Props> = ({ onEdit }) => {
  const dispatch = useDispatch();
  const contatos = useSelector((state: RootReducer) => state.contatos);

  return (
    <S.Secao>
      {contatos.map(contato => (
        <S.contactItem key={contato.id}>
          <div className="contact-name">{contato.nome}</div>
          <div className="contact-email">{contato.email}</div>
          <div className="contact-number">{contato.number}</div>
          <div className="contact-actions">
            <button onClick={() => onEdit(contato)}>Editar</button>
            <button onClick={() => dispatch(remover(contato.id))}>
              Deletar
            </button>
          </div>
        </S.contactItem>
      ))}
    </S.Secao>
  );
};

export default ListaDeContatos;
