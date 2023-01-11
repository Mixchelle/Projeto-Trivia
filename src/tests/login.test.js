import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Login from '../pages/Login';

describe('teste da página de login', () => {
test('verifica se elementos estão na tela', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByRole('textbox', {
        name: /nome:/i
      });
    const inputEmail = screen.getByRole('textbox', {
        name: /email:/i
      });
    const button = screen.getByRole('button', {
        name: /play/i
      });
      expect(history.location.pathname).toBe('/');
      expect(inputEmail).toBeInTheDocument();
      expect(inputName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
});
test('verifica se o botão fica desabilitado', () => {
    renderWithRouterAndRedux(<Login />); 
    const inputName = screen.getByRole('textbox', {
        name: /nome:/i
      });
    const inputEmail = screen.getByRole('textbox', {
        name: /email:/i
      });
    const button = screen.getByRole('button', {
        name: /play/i
      });
    expect(inputName.value).toBe('');
    expect(inputName.id).toBe('name');
    expect(inputEmail.value).toBe('');
    expect(button.disabled).toBe(true);
    userEvent.type(inputName, 'oi');
    expect(inputName.value).toBe('oi');
    expect(button.disabled).toBe(true);
    userEvent.type(inputEmail, 'test@test.com');
    expect(inputEmail.value).toBe('test@test.com');
    expect(button.disabled).toBe(false);
});
})