export default function Footer() {
    return (
        <footer className="mt-10 flex justify-between items-center">
            <p>built by <a className="text-gray-800 hover:bg-black hover:text-white" href="https://github.com/tannerdolby">tannerdolby</a> | data from the <a className="text-gray-800 hover:bg-black hover:text-white" href="https://pokeapi.co/">PokeAPI</a></p>
            <a href="#main" className="text-black rounded-full bg-slate-100 px-3 py-2 hover:no-underline hover:bg-slate-200 hover:text-black">&uarr;</a>
        </footer>
    )
}
