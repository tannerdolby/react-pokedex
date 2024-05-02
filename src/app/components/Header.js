import PokeballBanner from "./PokeballBanner"

export default function Header() {
    return (
        <div className="flex justify-between items-center flex-wrap w-full gap-x-20">
          <div>
            <h1>
                <a
                    href="/"
                    className='text-4xl text-black my-2 mr-6 hover:text-white hover:bg-black hover:no-underline'
                >
                Pokédex
                </a>
            </h1>
          </div>
          <PokeballBanner />
        </div>
    )
}
