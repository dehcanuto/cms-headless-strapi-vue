import Header from '@/components/organisms/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      <main className="max-w-3xl mx-auto px-8 sm:px-0 mt-24">{children}</main>
    </div>
  );
}
