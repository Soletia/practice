import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-main">
        <Link href='/' className="header-back">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"

          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <h1 className="header-name">ФОТО ВЫСТАВКА</h1>
      </div>
    </header>
  );
}