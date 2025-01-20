import { MdAdsClick, MdAirplanemodeActive, MdDocumentScanner } from "react-icons/md";

export default function Declarations() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="flex flex-col bg-green-600 text-white px-8 pt-16 py-10 rounded-3xl shadow-2xl shadow-green-500">
          <MdDocumentScanner size={"8em"} />
          <h2 className="text-2xl font-semibold pt-8">Vakansiyalar</h2>
          <p className="pt-4 text-opacity-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            facilis quasi perspiciatis in similique expedita ab minus ex
            molestiae, provident autem praesentium error nulla sunt.
          </p>
          <a
            href="/"
            className="mt-4 flex flex-row gap-2 justify-center items-center border-2 border-blue-500 rounded-3xl text-2xl px-10 py-5 hover:bg-gray-400"
          >
            <MdAdsClick />
            <span> Barcha vakansiyalar</span>
          </a>
        </div>
        <div className="flex flex-col bg-yellow-500 text-white px-4 pt-16 py-4 rounded-3xl shadow-2xl shadow-yellow-300">
          <MdAirplanemodeActive size={"8em"} />
          <h2 className="text-2xl font-semibold pt-8">Kurslar</h2>
        </div>
      </div>
    </div>
  );
}
