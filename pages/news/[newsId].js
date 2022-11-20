import React from "react";
import { useRouter } from "next/router"; // custom nextjs hook

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news items with the newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;

// request automatically to domain.com/news/something-important
// serves as the root page for the /news pather
// note the use of square brakets -- shows NextJs that this is a dyanmic route
// square brackets allows for dynamic routes (in the actual file name)
