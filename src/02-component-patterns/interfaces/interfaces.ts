import { Props as ProductCardProps } from "../components/ProductsCard";
import { Props as ProductImageProp } from "../components/ProductImage";
import { Props as ProductTitleProp } from "../components/ProductTitle";
import { Props as PropuctButtonProp } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProp) => JSX.Element;
  Image: (Props: ProductImageProp) => JSX.Element;
  Buttons: (Props: PropuctButtonProp) => JSX.Element;
}

export interface onChangeArgs{
  product:Product
  count:number
}
export interface ProdcutInCard extends Product {
  count: number;
}
