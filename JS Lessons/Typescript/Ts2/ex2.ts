// TODO: Define the interface BlogPost with title, content, and tags array
interface BlogPost{
    title: string;
    content: string;
    tags: string[];
}
const blogPost: BlogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"]
  };

  // Function to display tags of a blog post
  function displayTags(post: BlogPost): void {
    console.log(`Tags: ${post.tags.join(", ")}`);
  }

  // Display tags of the blog post
  displayTags(blogPost);
