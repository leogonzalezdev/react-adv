import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard;