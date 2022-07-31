import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Body from "../components/Body";
import Pagination from "../components/layout/Pagination";

function Home({ posts, loading }) {
  return (
    <div>
      <Header />
      <Body posts={posts} loading={loading} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const posts = await res.json();

  return {
    props: {
      posts,
      loading: false,
    },
  };
}

export default Home;
