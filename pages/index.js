import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Body from "../components/Body";
import Pagination from "../components/layout/Pagination";

function Home({ posts, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const IndexOfLastPost = currentPage * postsPerPage;
  const IndexOfFirstPost = IndexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(IndexOfFirstPost, IndexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect(() => {
  //   setSearchInput("");
  //   if (region !== "") {
  //     let displayData = data.filter(
  //       (item) => item.region.toLowerCase() === region
  //     );
  //     setDisplayData(displayData);
  //   }
  // }, [region, data]);
  return (
    <div>
      <Header />
      <Body posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
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
