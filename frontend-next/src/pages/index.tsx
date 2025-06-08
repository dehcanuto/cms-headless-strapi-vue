import Header from '@/components/organisms/Header';
import PostList from '@components/organisms/PostList';

export default function Posts() {
  return (
    <div>
      <Header></Header>
      <main className="max-w-3xl mx-auto">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Nosso Blog
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Veja algumas matérias do blog mais nosso que existe!
              </p>
            </div>
            <PostList></PostList>
          </div>
        </div>
      </main>
    </div>
  );
}
