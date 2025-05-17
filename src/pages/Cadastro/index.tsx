import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adicionar } from '../../store/reducers/contatos';
import * as S from './style';

const Cadastro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const seguraSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoContato = {
      id: Date.now(),
      nome,
      email,
      number: Number(number),
    };

    dispatch(adicionar(novoContato));
    navigate('/');
  };

  return (
    <S.Container>
      <S.FormCard onSubmit={seguraSubmit}>
        <S.subTitle>Novo Contato</S.subTitle>
        <S.Label>Nome Completo</S.Label>
        <S.Input
          value={nome}
          onChange={e => setNome(e.target.value)}
          type="text"
          required
        />
        <S.Label>Email</S.Label>
        <S.Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <S.Label>Numero</S.Label>
        <S.Input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="number"
          required
        />
        <S.Buttons>
          <S.Button type="submit">Salvar</S.Button>
          <S.Button onClick={() => navigate('/')} type="button">
            Cancelar
          </S.Button>
        </S.Buttons>
      </S.FormCard>
    </S.Container>
  );
};

export default Cadastro;
