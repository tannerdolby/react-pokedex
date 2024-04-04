export default function PokeballBanner() {
    return (
        <div className="flex justify-center items-center gap-5 my-4">
    <div className="pokeball">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="pokeball light">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="pokeball dark">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      </div>
    );
}