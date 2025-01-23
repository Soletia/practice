import Link from "next/link";

export default function Header() {
    return (
      <div className="min-h-full">
        <nav className="bg-gray-800">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <p className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MicroDat</p>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Главная</a>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Тех. поддержка</a>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Форум</a>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Новости</a>
                  </div>
                </div>
              </div>
          </div>
          </nav>
          <hr />
          <div className="min-h-full">
        <nav className="bg-gray-800">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <label href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Поиск</label>
                    <input type="text" className="rounded-md bg-gray-600 outline-none -white" />
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Тех. поддержка</a>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Форум</a>
                    <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Новости</a>
                  </div>
                </div>
              </div>
          </div>
          </nav>
          </div>
          </div>

)
}