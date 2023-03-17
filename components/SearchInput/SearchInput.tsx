import Image from "next/image";
import { useState } from "react";


type SearchInputProps = {
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchInput = ({ setQuery }: SearchInputProps) => {
  const [text, setText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setText(value);
  }

  return (
    <>
      <input 
        type="text"
        value={text}
        onChange={handleInput}
        placeholder="Search Movie" 
        className="h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:boder focus:boder-solid focus:border-cyan-200"
      />
      <div className="absolute right-4 top-8">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb-logo"/>
      </div>
    </>
  )
}

export default SearchInput;

//the search input is only used in the header and it's only going to ever receive
//this setQuery so it's very very specific for this component. it is not reusable.
//go back to papges/index and hover over setQuery to see the type: it's generic
//and specified as string

//const SearchInput: React.FC<SearchInputProps> = ({ setQuery }) => {}
