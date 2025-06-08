import { JSX } from 'react';
import Link from 'next/link';

import { DateFormatShort } from '@/misc/format';
import { PostPropsType } from '@/models/post';

const PostCard = ({ id, slug, title, description, publishedAt }: PostPropsType): JSX.Element => {
  return (
    <article key={id} className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex flex-col group relative gap-3">
        <h3 className="mt-3 text-2xl font-semibold text-gray-900 group-hover:text-gray-600">
          <Link href={`posts/${slug}`} className="font-semibold text-gray-900">
            {title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={publishedAt} className="text-gray-500">
            {DateFormatShort(publishedAt, true)}
          </time>
        </div>
        <p className="line-clamp-3 text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default PostCard;
