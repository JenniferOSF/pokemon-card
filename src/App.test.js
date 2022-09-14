// import React from 'react';
// import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
// import renderWithRedux from './helpers/renderWithRedux';
// import App from './App';
// import randomNumber from './utils/randomNumber';

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test.skip('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    // Remova o 'skip' e implemente seu teste
  });

  test.skip('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    // Remova o 'skip' e implemente seu teste
  });
});
