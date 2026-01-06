'use client';

import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import ProductForm, { ProductFormData } from '@/components/ProductForm';
import { useAuth } from '@/contexts/AuthContext';

export default function NewProductPage() {
  const router = useRouter();
  const { token } = useAuth();

  const handleSubmit = async (data: ProductFormData) => {
    const response = await fetch('/api/admin/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Kunde inte skapa produkt');
    }

    alert('Produkten har skapats!');
    router.push('/admin/products');
  };

  const handleCancel = () => {
    router.push('/admin/products');
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Lägg till Produkt</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <ProductForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
      </div>
    </AdminLayout>
  );
}
