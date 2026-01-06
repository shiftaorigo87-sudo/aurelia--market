'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Order, OrderStatus } from '@/types';

export default function AdminOrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    if (params.id) {
      fetchOrder(params.id as string);
    }
  }, [params.id]);

  const fetchOrder = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Order not found');
      }

      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order:', error);
      alert('Ordern hittades inte');
      router.push('/admin/orders');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: OrderStatus) => {
    if (!order) return;

    if (!confirm(`Är du säker på att du vill ändra status till "${getStatusText(newStatus)}"?`)) {
      return;
    }

    setUpdating(true);

    try {
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      alert('Orderstatus har uppdaterats!');
      fetchOrder(order.id);
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Kunde inte uppdatera orderstatus');
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-purple-100 text-purple-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Väntar';
      case 'paid':
        return 'Betald';
      case 'shipped':
        return 'Skickad';
      case 'delivered':
        return 'Levererad';
      case 'cancelled':
        return 'Avbruten';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Laddar order...</div>
      </AdminLayout>
    );
  }

  if (!order) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Ordern hittades inte</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <button
          onClick={() => router.back()}
          className="mb-6 text-gold-600 hover:text-gold-700 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Tillbaka till Ordrar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Order #{order.id.slice(0, 8)}</h1>
                  <p className="text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-lg font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusText(order.status)}
                </span>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-2xl font-semibold mb-4">Produkter</h2>
                <div className="space-y-4">
                  {order.items?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded flex-shrink-0">
                        {item.product?.image && (
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                      </div>

                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product?.name || 'Produkt'}</h3>
                        <p className="text-gray-600">
                          {item.priceAtPurchase} kr × {item.quantity}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-gold-600">
                          {item.priceAtPurchase * item.quantity} kr
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span>Totalt:</span>
                  <span className="text-gold-600">{order.totalPrice} kr</span>
                </div>
              </div>

              {order.stripePaymentIntentId && (
                <div className="border-t mt-6 pt-6">
                  <p className="text-sm text-gray-600">
                    Betalnings-ID: {order.stripePaymentIntentId}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Status Update */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Uppdatera Status</h2>
              <div className="space-y-2">
                <button
                  onClick={() => handleStatusUpdate('paid')}
                  disabled={updating || order.status === 'paid'}
                  className="w-full px-4 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Markera som Betald
                </button>
                <button
                  onClick={() => handleStatusUpdate('shipped')}
                  disabled={updating || order.status === 'shipped'}
                  className="w-full px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Markera som Skickad
                </button>
                <button
                  onClick={() => handleStatusUpdate('delivered')}
                  disabled={updating || order.status === 'delivered'}
                  className="w-full px-4 py-3 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Markera som Levererad
                </button>
                <button
                  onClick={() => handleStatusUpdate('cancelled')}
                  disabled={updating || order.status === 'cancelled'}
                  className="w-full px-4 py-3 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Avbryt Order
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Kundinformation</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-600">Kund-ID:</p>
                  <p className="font-mono">{order.userId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
