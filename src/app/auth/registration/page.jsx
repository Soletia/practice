"use client";

import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="login-flex">
        <div className="form">
          <form className="login-form">
            <div>
            <h1>Добро пожаловать!</h1>
            <span className="quite">
              Доступ к миллионам изображений за пару кликов
            </span>
            </div>
            <div>
              <input type="email" name="mail" id="mail" placeholder="Email" />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />
            </div>
            <div>
              <input
                type="password"
                name="retry-password"
                id="retry-password"
                placeholder="Повторите пароль"
              />
              <Link href='/auth/login' className="hide-link">Уже есть учетная запись?</Link>
            </div>
          </form>

          <button className="round-18 main-button">
              Регистрация{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
        </div>
        <div className="image">
          <img
            src="https://s3-alpha-sig.figma.com/img/ee0c/3577/77d3f32fdb91c448eea43d3bda9bf5c6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V1o0vMjlCiSKoG4YbQzW1WuqPP9p~6DFyQBQFhZN8xeqgE-qkALPJPmVf028fnuPq0ajyCvJy~XuYoPNALoXSNPSuUCWdP5CWCARcCpIGXSxSYEqcBvNWsi~VFVol6eTyCCRHUbFrld0y~VwLdC3Mk44UGZikypZZG~RmPoOIjSUvNQjhu~aS8y-bWWEKJGmWzG35ANT-Bi7QhJ31qGoK2w-LGHBg2aS5Sy9rmski0OQ1KVSI2HkCJLrbrEgK0pro6lqrrGzHuiIf2chhvnCijtd-QRd6DoZyRJhYlnhGedalyKr0-hJvigGHjvKaAwmLMRsRCFpuZ5ZCjSmJt1ODA__"
            alt="NeonPrime"
          />
          <div className="substract" />
        </div>
      </div>
    </div>
  );
}

export default Home;