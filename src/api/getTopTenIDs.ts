type TopTenIDsResponse = number[];

const getTopTenIDs = (): Promise<TopTenIDsResponse> =>
  fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  ).then((res) => res.json().then((data) => data.slice(0, 10)));

export default getTopTenIDs;
