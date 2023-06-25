import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (
    <form className="flex items-center justify-center bg-white rounded-full overflow-hidden order-3 sm:order-2 basis-full sm:basis-auto">
      <input
        type="text"
        placeholder="Search items"
        className="w-full p-2 px-4 h-full outline-none"
      />
      <button
        type="submit"
        className="text-primary-color bg-stone-200 p-2 h-full min-w-[15%] flex items-center justify-center hover:bg-slate-100 duration-100"
      >
        <BsSearch size={18} />
      </button>
    </form>
  );
};

export default SearchForm;
