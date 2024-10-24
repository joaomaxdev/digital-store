import { Section } from "@/components/shared/Section";
import Categories from "./Categories";
import { CollectionItem } from "./CollectionItem";
import { COLLECTION_ITEMS } from "@/constants";

export function FeaturedCollections() {
  return (
    <Section title="Coleções em destaque">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLLECTION_ITEMS.map((item) => (
          <CollectionItem
            key={item.imageSrc}
            discount={item.discount}
            title={item.title}
            imageSrc={item.imageSrc}
            altText={item.altText}
            className="transform transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      <Section
        title="Coleções em destaque"
        titleAlign="center"
        className="mt-20 mb-16 md:my-24 flex flex-col items-center p-0"
      >
        <Categories />
      </Section>
    </Section>
  );
}
