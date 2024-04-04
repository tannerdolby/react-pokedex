import PokeballBanner from "./PokeballBanner"

export default function Header() {
    return (
        <div className="flex justify-between items-center flex-wrap w-full gap-x-20">
          <div>
            <a
                href="/"
                className='text-5xl text-black my-2 mr-6 hover:text-white hover:bg-black hover:no-underline'
            >
                Pokédex
            </a>
          </div>
          <PokeballBanner />
        </div>
    )
}
