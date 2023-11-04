"use client"
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";


const Feed = () => {

  const [searchText, setSearchText] = useState("search");

  const handleSearchChange = e => {
    e.preventDefault();
    console.log('handle search');
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
    </section>
  )
}
export default Feed;