import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Is a Great Frameworkd
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;

// request automatically to domain.com/news
// serves as the root page for the /news pather
// add navigation in here
