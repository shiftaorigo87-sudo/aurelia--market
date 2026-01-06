'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/contexts/AuthContext';

interface APIKey {
  id: string;
  name: string;
  provider: string;
  created_at: string;
}

interface ImportResult {
  success: boolean;
  imported: number;
  errors: number;
  errorDetails: Array<{ product: string; error: string }>;
}

export default function AdminAPIKeysPage() {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    api_key: '',
    provider: '',
  });
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    fetchAPIKeys();
  }, []);

  const fetchAPIKeys = async () => {
    try {
      const response = await fetch('/api/admin/api-keys', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch API keys');
      }

      const data = await response.json();
      setApiKeys(data);
    } catch (error) {
      console.error('Error fetching API keys:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/api-keys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save API key');
      }

      alert('API-nyckel har sparats!');
      setFormData({ name: '', api_key: '', provider: '' });
      setShowForm(false);
      fetchAPIKeys();
    } catch (error) {
      console.error('Error saving API key:', error);
      alert('Kunde inte spara API-nyckel');
    }
  };

  const handleImport = async (apiKeyId: string) => {
    if (!confirm('Vill du importera produkter från denna API?')) {
      return;
    }

    setImporting(true);
    setImportResult(null);

    try {
      const response = await fetch('/api/admin/products/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ api_key_id: apiKeyId }),
      });

      if (!response.ok) {
        throw new Error('Failed to import products');
      }

      const result = await response.json();
      setImportResult(result);
      
      if (result.imported > 0) {
        alert(`${result.imported} produkter har importerats!`);
      }
    } catch (error) {
      console.error('Error importing products:', error);
      alert('Kunde inte importera produkter');
    } finally {
      setImporting(false);
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">API-nycklar</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {showForm ? 'Avbryt' : '+ Lägg till API-nyckel'}
          </button>
        </div>

        {/* Add API Key Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-6">Lägg till API-nyckel</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Min API-nyckel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provider *
                </label>
                <input
                  type="text"
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="example-api"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API-nyckel *
                </label>
                <input
                  type="password"
                  value={formData.api_key}
                  onChange={(e) => setFormData({ ...formData, api_key: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="sk_..."
                  required
                />
                <p className="text-sm text-gray-600 mt-1">
                  API-nyckeln krypteras och lagras säkert
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Spara API-nyckel
              </button>
            </form>
          </div>
        )}

        {/* Import Result */}
        {importResult && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Importresultat</h2>
            <div className="space-y-2">
              <p className="text-green-600 font-semibold">
                ✓ {importResult.imported} produkter importerade
              </p>
              {importResult.errors > 0 && (
                <div>
                  <p className="text-red-600 font-semibold">
                    ✗ {importResult.errors} fel uppstod
                  </p>
                  <div className="mt-4 space-y-2">
                    {importResult.errorDetails.map((error, index) => (
                      <div key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded">
                        {error.product}: {error.error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* API Keys List */}
        {loading ? (
          <div className="text-center py-12">Laddar API-nycklar...</div>
        ) : apiKeys.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">Inga API-nycklar ännu</p>
            <p className="text-gray-500">
              Lägg till en API-nyckel för att importera produkter från externa källor
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Namn
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Provider
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Skapad
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    Åtgärder
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {apiKeys.map((apiKey) => (
                  <tr key={apiKey.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-semibold">{apiKey.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{apiKey.provider}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {new Date(apiKey.created_at).toLocaleDateString('sv-SE')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleImport(apiKey.id)}
                        disabled={importing}
                        className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {importing ? 'Importerar...' : 'Importera Produkter'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
