const getRecentPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const RecentPosts = async () => {
  const posts = ((await getRecentPosts()) as PostType[]).slice(0, 5);

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <span className="text-white/30 italic text-sm hover:underline cursor-pointer">
        load more....
      </span>
    </div>
  );
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col">
      <h4 className="truncate hover:underline cursor-pointer">{post.title}</h4>
      <span className="text-white/50 text-sm">
        {new Date().toLocaleDateString()}
      </span>
    </div>
  );
};

export default RecentPosts;
