import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { NavBreadcrumbs } from "./components/NavBreadcrumbs";
import { Button } from "@/components/ui/button";

import { MOCK_PRODUCTS, PRODUCTS } from "@/constants";
import { Product } from "@/types";
import { Label } from "@/components/ui/label";

import { ProductImages } from "./components/ProductImages";
import { ProductInfo } from "./components/ProductInfo";
import { ProductPrice } from "./components/ProductPrice";
import { BuyButton } from "./components/BuyButton";
import { ProductOptions } from "./components/ProductOptions";

import { ProductPageSkeleton } from "./loading";
import { cn } from "@/lib/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section } from "@/components/shared/Section";
import { ProductList } from "@/components/shared/ProductList";
import { NotFoundProduct } from "./components/NotFoundProduct";

export function ProductPage() {
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // API - apos
    setTimeout(() => {
      const foundProduct = MOCK_PRODUCTS.find((product) => product.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setError(false);
      } else {
        setProduct(null);
        setError(true);
      }
    }, 400);
  }, [id]);

  if (error) {
    return <NotFoundProduct />;
  }

  if (!product || product.id !== id) {
    return <ProductPageSkeleton />;
  }

  return (
    <div className="px-5 pt-5 pb-20 md:pb-28 md:px-24 bg-slate-100 flex flex-col gap-5 md:gap-10">
      <NavBreadcrumbs />

      <section className="flex flex-col md:flex-row gap-10 md:gap-10">
        <ProductImages
          images={product.images}
          thumbnails={product.thumbnails}
        />

        <div className="w-full md:max-w-md">
          <ProductInfo product={product} />

          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />

          <div className="mt-5 flex flex-col gap-1">
            <h3 className="font-bold text-sm text-zinc-500">
              Descrição do produto
            </h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <ProductOptions
            title="Tamanho"
            items={product.sizes}
            className="mt-8"
            renderItem={(size, isActive, onSelectSize) => (
              <Button
                key={size}
                variant="outline"
                className={cn(
                  "bg-transparent hover:bg-white/75 px-4 py-2 font-bold",
                  {
                    "bg-primary text-white hover:bg-primary hover:text-white":
                      isActive,
                  }
                )}
                onClick={onSelectSize}
              >
                {size}
              </Button>
            )}
          />

          <ProductOptions
            title="Cor"
            items={product.colors}
            renderItem={({ label, hex }, isActive, onSelectColor) => (
              <Button
                key={hex}
                style={{ backgroundColor: `${hex}` }}
                className={cn(
                  "w-8 h-8 rounded-full transition hover:opacity-85",
                  {
                    "ring-2 ring-primary ring-offset-2": isActive,
                  }
                )}
                onClick={onSelectColor}
              >
                <Label className="sr-only">{label}</Label>
              </Button>
            )}
          />

          <BuyButton product={product} />
        </div>
      </section>

      <Section
        title="Produtos relacionados"
        link={{ text: "Ver todos", href: "#" }}
        className="md:px-0 px-0"
      >
        <ProductList products={PRODUCTS} count={4} />
      </Section>
    </div>
  );
}
