export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

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


      <form className="max-w-[400px] mx-auto mt-24">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-2 w-full"
        />
        <textarea 
          placeholder="Content"
          className="border p-2 mb-2 w-full"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded-md">
          Create Post
        </button>
      </form>

    </div>
  );
}
