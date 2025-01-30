import CategoryList from "./_components/Category-list";
import Header from "./_components/Header";
import Search from "./_components/Search";

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
    </>
  );
}
