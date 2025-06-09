import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './index';
import { PostPropsType } from '@/models/post';

const mockPosts: PostPropsType[] = [
  {
    id: 1,
    documentId: 'b0wd1bchwe902nkiv38mh5l5',
    title: 'Primeiro post',
    slug: 'primeiro-post',
    description: 'Resumo do primeiro post',
    content: 'Resumo do primeiro post',
    publishedAt: '2025-06-09T13:15:23.307Z',
    createdAt: '2025-06-09T13:15:23.299Z',
    updatedAt: '2025-06-09T13:15:23.299Z',
    locale: null,
    createdBy: null,
    updatedBy: null,
  },
  {
    id: 2,
    documentId: 'tr648gl25fyx8wcb7yf1pjqf',
    title: 'Segundo post',
    description: 'Resumo do segundo post',
    slug: 'segundo-post',
    content: 'Resumo do segundo post',
    publishedAt: '2025-06-09T13:15:23.307Z',
    createdAt: '2025-06-09T13:15:23.299Z',
    updatedAt: '2025-06-09T13:15:23.299Z',
    locale: null,
    createdBy: null,
    updatedBy: null,
  },
];

describe('PostList', () => {
  it('deve renderizar uma lista de posts', () => {
    render(<PostList posts={mockPosts} loading={false} />);

    expect(screen.getByText('Primeiro post')).toBeInTheDocument();
    expect(screen.getByText('Segundo post')).toBeInTheDocument();
    const postCards = screen.getAllByRole('article');
    expect(postCards).toHaveLength(2);
  });

  it('deve mostrar o texto de loading quando loading for true', () => {
    render(<PostList posts={[]} loading={true} />);
    expect(screen.getByText('Carregando posts...')).toBeInTheDocument();
  });

  it('deve mostrar mensagem quando não houver posts e loading for false', () => {
    render(<PostList posts={[]} loading={false} />);
    expect(screen.getByText('Nenhum post encontrado.')).toBeInTheDocument();
  });
});
