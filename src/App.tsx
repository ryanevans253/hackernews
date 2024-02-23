import Card from "./components/Card";
import { useQuery, useQueries } from "@tanstack/react-query";
import getStory from "./api/getStory";
import getTopTenIDs from "./api/getTopTenIDs";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    initialData: [],
    queryFn: () =>
      getTopTenIDs().then((data) => {
        return data;
      }),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  let results = useQueries({
    queries: data?.map((id: number) => ({
      queryKey: ["item", id],
      queryFn: () => getStory(id),
      staleTime: Infinity,
    })),
  });

  if (results.length <= 0) return <p>no results</p>;

  return (
    <>
      <h1>Hacker News Top 10</h1>
      <div className="container">
        {results &&
          results.map((result, index) => <Card key={index} {...result.data} />)}
      </div>
      <footer>
        <p>
          &copy; Ryan Evans 😊{" "}
          <a href="https://ryanevans.tech/" target="_blank">
            See more
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
