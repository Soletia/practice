import Link from "next/link";

export default function Footer({value}) {
    return (
      <div className="min-h-full bottom-0">
        <nav className="bg-gray-800 bottom-0 fixed w-full">
          <center>{value/2}</center>
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                  </div>
                </div>
              </div>
          </div>
          </nav>
          </div>

)
}