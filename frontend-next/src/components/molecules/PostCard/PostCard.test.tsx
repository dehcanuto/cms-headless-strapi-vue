import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from './index';
import { PostPropsType } from '@/models/post';

const postMock: PostPropsType = {
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
};

describe('PostCard', () => {
  it('deve renderizar o título, link, data e descrição corretamente', () => {
    render(<PostCard {...postMock} />);

    expect(screen.getByText(postMock.title)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `posts/${postMock.slug}`);
    expect(screen.getByText(/jun|junho|06\/09/i)).toBeInTheDocument();
    expect(screen.getByText(postMock.description)).toBeInTheDocument();
  });
});
