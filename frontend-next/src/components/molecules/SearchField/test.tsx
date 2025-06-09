import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from './index';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('SearchField', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('deve renderizar o input com placeholder correto', () => {
    render(<SearchField />);
    expect(screen.getByPlaceholderText('Buscar posts...')).toBeInTheDocument();
  });

  it('deve atualizar o valor do input ao digitar', () => {
    render(<SearchField />);
    const input = screen.getByPlaceholderText('Buscar posts...');

    fireEvent.change(input, { target: { value: 'teste' } });
    expect(input).toHaveValue('teste');
  });

  it('deve chamar router.push com a query ao pressionar Enter', () => {
    render(<SearchField />);
    const input = screen.getByPlaceholderText('Buscar posts...');

    fireEvent.change(input, { target: { value: 'react' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockPush).toHaveBeenCalledWith('/search?q=react');
  });

  it('não deve chamar router.push ao pressionar outras teclas', () => {
    render(<SearchField />);
    const input = screen.getByPlaceholderText('Buscar posts...');

    fireEvent.change(input, { target: { value: 'react' } });
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });

    expect(mockPush).not.toHaveBeenCalled();
  });
});
