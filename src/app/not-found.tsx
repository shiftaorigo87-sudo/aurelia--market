import Layout from '@/components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-8">
          Sidan kunde inte hittas
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Sidan du letar efter existerar inte eller har flyttats.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
        >
          Tillbaka till Startsidan
        </Link>
      </div>
    </Layout>
  );
}
