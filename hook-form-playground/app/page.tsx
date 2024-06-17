import Header from '@/components/header';
import Form from '@/components/form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f8f8f8]">
      <Header />
      <Form />
    </main>
  );
}
