import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // TODO LOAD ITEMS FROM ASYNC STORAGE
  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const loadProduct = await AsyncStorage.getItem('@GoMarketPlace:products');

      if (loadProduct) {
        setProducts([...JSON.parse(loadProduct)]);
      }
    }

    loadProducts();
  }, []);

  // TODO ADD A NEW ITEM TO THE CART
  const addToCart = useCallback(
    async product => {
      const newProduct = products.find(prod => product.id === prod.id);

      if (newProduct) {
        setProducts(
          products.map(prod =>
            prod.id === product.id
              ? { ...product, quantity: prod.quantity + 1 }
              : prod,
          ),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      await AsyncStorage.setItem(
        '@GoMarketPlace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
  const increment = useCallback(
    async id => {
      const incrementProduct = products.map(product => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });

      setProducts(incrementProduct);
      await AsyncStorage.setItem(
        '@GoMarketPlace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
  const decrement = useCallback(
    async id => {
      const decrementProduct = products.map(product => {
        if (product.id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      });

      setProducts(decrementProduct);
      await AsyncStorage.setItem(
        '@GoMarketPlace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
