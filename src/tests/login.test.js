import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Login from '../pages/Login';

describe('teste da página de login', () => {
test('verifica se input, email e botão estão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByRole('textbox', {
        name: /nome:/i
      });
    const inputEmail = screen.getByRole('textbox', {
        name: /email:/i
      });
    const buttonPlay = screen.getByRole('button', {
        name: /play/i
      });
      expect(inputEmail).toBeInTheDocument();
      expect(inputName).toBeInTheDocument();
      expect(buttonPlay).toBeInTheDocument();
});
test('verifica se o botão "Play" fica desabilitado caso email e/ou nome não estejam preenchidos', () => {
    renderWithRouterAndRedux(<Login />); 
    const inputName = screen.getByRole('textbox', {
        name: /nome:/i
      });
    const inputEmail = screen.getByRole('textbox', {
        name: /email:/i
      });
    const buttonPlay = screen.getByRole('button', {
        name: /play/i
      });
    expect(inputName.value).toBe('');
    expect(inputName.id).toBe('name');
    expect(inputEmail.value).toBe('');
    expect(buttonPlay.disabled).toBe(true);

    userEvent.type(inputName, 'Trybe');

    expect(inputName.value).toBe('Trybe');
    expect(buttonPlay.disabled).toBe(true);

    userEvent.type(inputEmail, 'test@test.com');

    expect(inputEmail.value).toBe('test@test.com');
    expect(buttonPlay.disabled).toBe(false);
});
test('Verifica se o botão "Play" redireciona para tela de jogo', async () => {
  const { history } = renderWithRouterAndRedux(<App />)
  const inputName = screen.getByRole('textbox', {
    name: /nome:/i
  });
const inputEmail = screen.getByRole('textbox', {
    name: /email:/i
  });
const buttonPlay = screen.getByRole('button', {
    name: /play/i
  });
  expect(history.location.pathname).toBe('/');
  userEvent.type(inputName, 'Trybe');
  userEvent.type(inputEmail, 'test@test.com');

  userEvent.click(buttonPlay);

  const title = await screen.findByText(/game/i);
  
  expect(history.location.pathname).toBe('/game')
  expect(title).toBeInTheDocument();
});
test('Verifica se a tela inicial contem um botão que leve para a configuração do jogo', async () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const button = screen.getByTestId('btn-settings');

  userEvent.click(button);
  
  expect(history.location.pathname).toBe('/settings');
  const title = await screen.findByTestId('settings-title');
  expect(title).toBeInTheDocument();
});
});