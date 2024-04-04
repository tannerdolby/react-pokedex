import PokeballBanner from "./PokeballBanner"

export default function Header() {
    return (
        <div className="flex justify-between items-center flex-wrap w-full">
          <div>
            <a
                href="/"
                className='text-5xl text-gray-800 my-2 hover:text-white hover:bg-black hover:no-underline'
            >
                Pokédex
            </a>
          </div>
          <PokeballBanner />
        </div>
    )
}
