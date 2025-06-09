'use client';

import { JSX, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { createPost } from '@/services/post';
import { CreatePostType } from '@/models/post';
import BaseInputText from '@components/atoms/InputText';
import FormField from '@components/molecules/FormField';
import BaseInputTextArea from '@components/atoms/InputTextArea';
import { slugify } from '@/misc/format';

const CreatePostPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<CreatePostType>();

  const router = useRouter();
  const [slug, setSlug] = useState('');
  const watchedTitle = watch('title');
  const watchedDescription = watch('description') || '';
  const maxDescriptionLength = 120;

  const onSubmit = async (data: CreatePostType) => {
    try {
      await createPost({ ...data, slug });
      reset();
      router.push('/');
    } catch (error) {
      alert('Erro ao criar post.');
      console.error(error);
    }
  };

  useEffect(() => {
    setSlug(slugify(watchedTitle || ''));
  }, [watchedTitle]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Criar novo post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <FormField label="Titulo" required>
            <BaseInputText
              name="title"
              register={register}
              rules={{ required: 'Título é obrigatório' }}
              error={errors.title}
            />
          </FormField>
          <div className="flex text-sm gap-3 mt-2">
            <span className="text-slate-500">posts/{slug}</span>
          </div>
        </div>
        <div className="">
          <FormField label="Resumo" required>
            <BaseInputTextArea
              name="description"
              register={register}
              rules={{ required: 'Resumo é obrigatório' }}
              error={errors.content}
              max={maxDescriptionLength}
            />
          </FormField>
          <div className="flex items-center justify-end text-sm mt-2">
            <span className="text-sm text-slate-500">
              {watchedDescription.length} / {maxDescriptionLength}
            </span>
          </div>
        </div>
        <FormField label="Conteúdo" required>
          <BaseInputTextArea
            name="content"
            register={register}
            rows={12}
            rules={{ required: 'Conteúdo é obrigatório' }}
            error={errors.content}
          />
        </FormField>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
