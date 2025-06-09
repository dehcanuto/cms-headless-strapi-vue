import React from 'react';
import { render, screen } from '@testing-library/react';
import FormField from './index';

describe('FormField', () => {
  it('deve renderizar o label e o asterisco quando required', () => {
    render(
      <FormField label="Nome" required>
        <input />
      </FormField>
    );

    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('não deve renderizar o asterisco quando não required', () => {
    render(
      <FormField label="Email" required={false}>
        <input />
      </FormField>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('deve renderizar os filhos', () => {
    render(
      <FormField label="Senha">
        <input data-testid="input-child" />
      </FormField>
    );

    expect(screen.getByTestId('input-child')).toBeInTheDocument();
  });

  it('deve mostrar spinner quando loading for true', () => {
    render(
      <FormField label="Senha" loading>
        <input />
      </FormField>
    );

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('deve mostrar texto "errado" quando valid não for null e loading for false', () => {
    render(
      <FormField label="Senha" valid={false} loading={false}>
        <input />
      </FormField>
    );

    expect(screen.getByText('errado')).toBeInTheDocument();
  });

  it('não deve mostrar texto de status quando valid for null e loading for false', () => {
    render(
      <FormField label="Senha" valid={null} loading={false}>
        <input />
      </FormField>
    );

    expect(screen.queryByText('errado')).not.toBeInTheDocument();
  });
});
