import { useState } from "react";
import { ProdcutInCard, Product } from "../interfaces/interfaces";

const useShopingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProdcutInCard;
  }>({});

  const onProductCountChenge = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProdcutInCard = oldShoppingCart[product.id] || {
        ...product,
        count:0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;

      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChenge,
  };
};
export default useShopingCart;

// if (count === 0) {
// const { [product.id]: toDelete, ...rest } = oldShoppingCart;

// return rest;
// }
// return {
//   ...oldShoppingCart,
//   [product.id]: { ...product, count },
// };
