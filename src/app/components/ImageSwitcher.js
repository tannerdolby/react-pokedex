export default function ImageSwitcher() {
    return (
        <div className="flex flex-col text-left w-fit mr-auto ml-1 mt-2">
            <label htmlFor="sprite-toggler" className="block mb-2 text-sm font-medium text-gray-900">Change Pokemon Sprites</label>
            <select
                name="Pokemon image type selector"
                className="block w-full py-1.5 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={imageType}
                onChange={(e) => {
                    // const value = 
                    // setImageType(e.target.value);
                    // window.localStorage.setItem('POKEMON_IMAGE_TYPE', e.target.value);
                }}
            >
                <option value="gameboy">Gameboy</option>
                <option value="modern">Modern</option>
                <option value="official-artwork">Official Artwork</option>
                <option value="dream_world">Dream World</option>
                <option value="shiny">Gameboy (Shiny)</option>
                <option value="home shiny">Modern (Shiny)</option>
                <option value="official-artwork shiny">Official Artwork (Shiny)</option>
            </select>
        </div>
    );
}