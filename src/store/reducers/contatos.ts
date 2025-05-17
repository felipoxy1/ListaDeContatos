import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const carregarContatos = (): Contato[] => {
  const dados = localStorage.getItem('contatos');
  return dados ? JSON.parse(dados) : [];
};

const initialState: Contato[] = carregarContatos();

interface Contato {
  nome: string;
  email: string;
  number: number;
  id: number;
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      const novoEstado = state.filter(contato => contato.id !== action.payload);
      localStorage.setItem('contatos', JSON.stringify(novoEstado));
      return novoEstado;
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem('contatos', JSON.stringify(state));
      }
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload);
      localStorage.setItem('contatos', JSON.stringify(state));
    },
  },
});

export const { remover, editar, adicionar } = contatosSlice.actions;

export default contatosSlice.reducer;
