interface Story {
  id: number;
  title: string;
}

const getStory = (id: number): Promise<Story> =>
  fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then((res) => res.json());
export default getStory;
