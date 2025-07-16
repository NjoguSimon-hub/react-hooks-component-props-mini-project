import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <header>
        <Header name={blogData.name} />
      </header>
      <aside>
        <About image={blogData.image} about={blogData.about} />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}
