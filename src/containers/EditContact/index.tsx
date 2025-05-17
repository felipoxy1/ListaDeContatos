import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editar } from '../../store/reducers/contatos';
import * as S from './style';

interface Contato {
  id: number;
  nome: string;
  email: string;
  number: number;
}

interface Props {
  contato: Contato;
  onSave: (contatoAtualizado: Contato) => void;
  onCancel: () => void;
}

const EditContact: React.FC<Props> = ({ contato, onSave, onCancel }) => {
  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [number, setNumber] = useState(contato.number.toString());
  const dispatch = useDispatch();

  const seguraSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contatoAtualizado = {
      id: contato.id,
      nome,
      email,
      number: Number(number),
    };
    dispatch(editar(contatoAtualizado));
    onSave(contatoAtualizado);
  };
  return (
    <>
      <S.Card>
        <S.subTitle>Editar Contato</S.subTitle>
        <S.Form onSubmit={seguraSubmit}>
          <S.Label>
            Nome Completo
            <input
              onChange={e => setNome(e.target.value)}
              value={nome}
              type="text"
              required
            />
          </S.Label>
          <S.Label>
            Email
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="text"
              required
            />
          </S.Label>
          <S.Label>
            Numero
            <input
              onChange={e => setNumber(e.target.value)}
              value={number}
              type="number"
              required
            />
          </S.Label>
          <S.Buttons>
            <S.Button type="submit">Salvar</S.Button>
            <S.Button type="button" onClick={onCancel}>
              Cancelar
            </S.Button>
          </S.Buttons>
        </S.Form>
      </S.Card>
    </>
  );
};

export default EditContact;
