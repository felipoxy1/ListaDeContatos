import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import store from './store';
import * as S from './styles/globalstyle';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Cadastro></Cadastro>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <S.Container>
        <S.globalStyle />
        <RouterProvider router={rotas} />
      </S.Container>
    </Provider>
  );
}

export default App;
