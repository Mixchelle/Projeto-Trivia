import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import Feedback from '../pages/Feedback';

describe('testa página de feedback', () => {
    test('Verifica se ao clicar no botão "Play Again" a pessoa é redirecionada para a tela de início (login)', () => {
        const { history } = renderWithRouterAndRedux(<Feedback />);
        
        const buttonPlayAgain = screen.getByTestId('btn-play-again');
        const buttonRanking = screen.getByTestId('btn-ranking');

        expect(buttonPlayAgain).toBeInTheDocument();
        expect(buttonRanking).toBeInTheDocument();

        userEvent.click(buttonPlayAgain);
        expect(history.location.pathname).toBe('/');
    });
    test('Verifica se ao clicar no botão "Ranking" a pessoa é redirecionada para a tela de ranking', () => {
        const { history } = renderWithRouterAndRedux(<Feedback />);
        
        const buttonRanking = screen.getByTestId('btn-ranking');

        userEvent.click(buttonRanking);
        expect(history.location.pathname).toBe('/ranking');
    });
    test('Verifica se os elementos aparecem de acordo com o estado global', () => {
        const initialState = {
            player: {
              name: 'Player Name',
              gravatarEmail: 'player@email.com',
              score: 0,
              assertions: 0,
            }
          }
       
          renderWithRouterAndRedux(<Feedback />, initialState);

          const badText = screen.getByRole('heading', {
            name: /could be better\.\.\./i
          })
          const zeros = screen.getAllByText(/0/i);

          expect(badText).toBeInTheDocument();
          expect(zeros.length).toBe(3);
    });
    test('Verifica se os elementos aparecem de acordo com o estado global', () => {
        const initialState = {
            player: {
              name: 'Player Name',
              gravatarEmail: 'player@email.com',
              score: 157,
              assertions: 4,
            }
          }
       
          renderWithRouterAndRedux(<Feedback />, initialState);

          const goodText = screen.getByRole('heading', {
            name: /well done!/i
          });
          const score = screen.getAllByText(/157/i);
          const assertions = screen.getByText(/4/i);

          expect(goodText).toBeInTheDocument();
          expect(score.length).toBe(2);
          expect(assertions).toBeInTheDocument();
    });
});