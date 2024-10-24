
const Footer = () => {
  return (
    <div className="bg-zinc-950 w-full px-16 py-5">
        <div className=" flex justify-between  text-lg font-bold">
            <p>By Twilight Sols</p>
            <ul className="flex space-x-3">
                <li><a href="/"> Home</a></li>
                {/* <li><a href="/movie/:id">MovieDetails</a></li> */}
                <li><a href="/favorite-movie">Favorite Movies</a></li>
            </ul>
        </div>
        <p className="text-center text-sm mt-5">@All Rights Reserved</p>
    </div>
  )
}

export default Footer;