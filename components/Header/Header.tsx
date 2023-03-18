import Link from "next/link";
import Image from "next/image";
//components
import SearchInput from "../SearchInput/SearchInput";

type HeaderProps = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>
}


const Header = ({ setQuery }: HeaderProps) => (
  <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
    <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer py-5'>
          <div className='invisible md:visible'>
            <Image width='150' height='50' src='/rmdb-logo.svg' alt='rmdb-logo' />
          </div>
          <div className='absolute md:invisible pt-2'>
            <Image height='42' width='42' src='/rmdb-logo-small.svg' alt='rmdb-logo-small' />
          </div>
        </div>
      </Link>
      {setQuery ? 
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery}/>
        </div> :
        null
      }
    </div>
  </div>
)

export default Header;

//to optimize links and images use NextJs's Link and Image tags instead of a and img tags

//we made SeacrhInput compoenent to be shown only setQuery is set (by using ternary 
//operator) as we only want to display this component on the home page