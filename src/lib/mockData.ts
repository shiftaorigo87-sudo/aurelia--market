// Mock data för demo-läge
import { Product, User, CartItem, Order, OrderStatus } from '@/types';

export const mockProducts: Product[] = [
  {
    id: 'demo-1',
    name: 'Premium Läderväska',
    description: 'Elegant läderväska i högsta kvalitet. Perfekt för både arbete och fritid. Rymlig med flera fack för optimal organisation.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop',
    stock: 15,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-2',
    name: 'Trådlösa Hörlurar Pro',
    description: 'Premiumhörlurar med aktiv brusreducering och kristallklart ljud. Upp till 30 timmars batteritid.',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    stock: 25,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-3',
    name: 'Smartklocka Elite',
    description: 'Avancerad smartklocka med hälsoövervakning, GPS och vattentät design. Kompatibel med iOS och Android.',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    stock: 12,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-4',
    name: 'Designer Solglasögon',
    description: 'Exklusiva solglasögon med UV-skydd och polariserade linser. Tidlös design som passar alla ansiktsformer.',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
    stock: 20,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-5',
    name: 'Minimalistisk Plånbok',
    description: 'Slimmad plånbok i äkta läder med RFID-skydd. Rymmer upp till 8 kort och kontanter.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop',
    stock: 30,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-6',
    name: 'Bärbar Högtalare',
    description: 'Kraftfull Bluetooth-högtalare med 360° ljud. Vattentät och perfekt för utomhusbruk.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
    stock: 18,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-7',
    name: 'Fitness Tracker',
    description: 'Kompakt aktivitetsarmband med pulsmätare, stegräknare och sömnanalys. 7 dagars batteritid.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&h=800&fit=crop',
    stock: 22,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-8',
    name: 'Laptop Ryggsäck',
    description: 'Ergonomisk ryggsäck med skyddad laptopficka upp till 15". Vattentåligt material och USB-laddningsport.',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    stock: 16,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'demo-9',
    name: 'Trådlös Laddare',
    description: 'Snabbladdare för smartphones med Qi-teknologi. Elegant design i aluminium.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1591290619762-d2c9e0a4e6d1?w=800&h=800&fit=crop',
    stock: 35,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// In-memory storage för demo
export const mockStorage = {
  users: [] as User[],
  cartItems: [] as CartItem[],
  orders: [] as Order[],
  sessionId: 'demo-session-' + Date.now(),
};

// Mock user för demo (automatisk inloggning)
export const mockDemoUser: User = {
  id: 'demo-user-1',
  email: 'demo@aurelia-market.se',
  role: 'customer',
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Auth functions för demo
export function createMockUser(email: string, password: string): User {
  const user: User = {
    id: 'user-' + Date.now(),
    email,
    role: 'customer',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  mockStorage.users.push(user);
  return user;
}

export function findMockUser(email: string): User | undefined {
  return mockStorage.users.find(u => u.email === email);
}

export function authenticateMockUser(email: string, password: string): User | null {
  // I demo mode, acceptera alla inloggningar
  const existingUser = findMockUser(email);
  if (existingUser) return existingUser;
  
  // Skapa ny användare automatiskt
  return createMockUser(email, password);
}

// Cart functions för demo
export function addToMockCart(productId: string, quantity: number, userId?: string): CartItem {
  const product = getMockProduct(productId);
  if (!product) throw new Error('Product not found');
  
  const existingItem = mockStorage.cartItems.find(
    item => item.productId === productId && (item.userId === userId || item.sessionId === mockStorage.sessionId)
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.updatedAt = new Date();
    return existingItem;
  }
  
  const cartItem: CartItem = {
    id: 'cart-' + Date.now(),
    userId,
    sessionId: mockStorage.sessionId,
    productId,
    product,
    quantity,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  mockStorage.cartItems.push(cartItem);
  return cartItem;
}

export function getMockCart(userId?: string): CartItem[] {
  return mockStorage.cartItems.filter(
    item => item.userId === userId || item.sessionId === mockStorage.sessionId
  );
}

export function updateMockCartItem(itemId: string, quantity: number): CartItem | undefined {
  const item = mockStorage.cartItems.find(i => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    item.updatedAt = new Date();
  }
  return item;
}

export function removeMockCartItem(itemId: string): void {
  const index = mockStorage.cartItems.findIndex(item => item.id === itemId);
  if (index > -1) {
    mockStorage.cartItems.splice(index, 1);
  }
}

export function clearMockCart(userId?: string): void {
  mockStorage.cartItems = mockStorage.cartItems.filter(
    item => item.userId !== userId && item.sessionId !== mockStorage.sessionId
  );
}

// Order functions för demo
export function createMockOrder(userId: string, cartItems: CartItem[]): Order {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  const orderId = 'order-' + Date.now();
  const order: Order = {
    id: orderId,
    userId,
    totalPrice,
    status: 'paid',
    stripePaymentIntentId: 'demo_pi_' + Date.now(),
    items: cartItems.map((item, index) => ({
      id: 'orderitem-' + Date.now() + '-' + index,
      orderId,
      productId: item.productId,
      product: item.product,
      quantity: item.quantity,
      priceAtPurchase: item.product.price,
      createdAt: new Date(),
    })),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  mockStorage.orders.push(order);
  clearMockCart(userId);
  return order;
}

export function getMockOrders(userId: string): Order[] {
  return mockStorage.orders.filter(order => order.userId === userId);
}

export function getMockOrder(orderId: string): Order | undefined {
  return mockStorage.orders.find(order => order.id === orderId);
}

export function updateMockOrderStatus(orderId: string, status: OrderStatus): Order | undefined {
  const order = getMockOrder(orderId);
  if (order) {
    order.status = status;
    order.updatedAt = new Date();
  }
  return order;
}

// Helper functions
export function getMockProducts(): Product[] {
  return mockProducts.filter(p => p.active);
}

export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find(p => p.id === id && p.active);
}

export function isDemoMode(): boolean {
  // Kontrollera om vi är på server-sidan
  if (typeof window === 'undefined') {
    return process.env.DEMO_MODE === 'true';
  }
  // På klient-sidan, returnera false (API:et hanterar demo mode)
  return false;
}
