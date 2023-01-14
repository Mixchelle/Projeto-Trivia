import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Login from '../pages/Login';
import Ranking from '../pages/Ranking';

describe('teste da página de ranking', () => {
    test('Verifica se existe um botão que redireciona a pessoa para a tela inicial (login)', () => {
        const { history } = renderWithRouterAndRedux(<Ranking />);
        const button = screen.getByTestId('btn-go-home');
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        expect(history.location.pathname).toBe('/');
    });
    test('', () => {
        renderWithRouterAndRedux(<Ranking />);
        const playerName = screen.getByTestId('player-name-0');
    })
})