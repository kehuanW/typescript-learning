export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  console.log(data)

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>
      
      <ul>
        {
          data.posts.map((item:{id:number; title:string})=>{
            return <li key={item.id} className="mb-2">
              <a href={`/posts/${item.id}`}
                className="text-blue-500 hover:underline"
              >
                {item.title}
              </a>
            </li>
          })
        }
      </ul>

    </div>
  );
}
