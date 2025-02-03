"use client";

import Link from "next/link";
import { useState } from "react";
import { createApi } from "unsplash-js";

function Search() {
  const [search, setSearch] = useState("");
  const [pins, setPins] = useState([]);

  const unsplash = createApi({
    accessKey: "aZiweLH3bzjcxny4sREo7ykBqpCGJRjkBETTuJ16dQA",
  });

  function searchChange(e) {
    setSearch(e.target.value);
  }

  async function searchPhotos() {
    let result = await unsplash.search.getPhotos({
      query: search,
      page: 1,
      perPage: 10,
    });

    setPins(result.response.results);
    console.log(pins);
  }

  return (
    <main>
      <input type="text" onChange={searchChange} className="" /> <br/>
      <button onClick={searchPhotos} className="search-bar">Search!</button>

      <ul className="search-list">
        {pins.map((post) => (
          <li key={post.id}><img src={post.urls.small} alt={post.alt_description} /></li>
        ))}
      </ul>
    </main>
  );
}

export default Search;