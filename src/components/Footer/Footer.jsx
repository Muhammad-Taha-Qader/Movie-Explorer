
const Footer = () => {
  return (
    <div className="bg-zinc-950 w-full flex justify-between px-7 py-5 text-lg font-bold">
        <p>By Twilight Sols</p>
        <ul className="flex space-x-3">
            <li><a href="/"> Home</a></li>
            {/* <li><a href="/movie/:id">MovieDetails</a></li> */}
            <li><a href="/favorite-movie">Favorite Movies</a></li>
        </ul>
    </div>
  )
}

export default Footer;