import Image from "next/image";
import CategoryList from "./_components/Category-list";
import Header from "./_components/Header";
import Search from "./_components/Search";
import ProductList from "./_components/Product-list";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 py-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          alt={"Até 30% de desconto"}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
          quality={100}
        />
      </div>
      <ProductList />
    </>
  );
}
