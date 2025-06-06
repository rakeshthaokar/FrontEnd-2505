import {Header} from "./component/Header"
import { Footer } from "./component/Footer"
import {Card} from "./component/Card"
function App() {
  const blogs = [
    { title: "React Basics", content: "Learn the basics of React", isTrending: true },
    { title: "JavaScript Basics", content: "Learn the basics of Javascript", isTrending: true },
    { title: "Python Basics", content: "Learn the basics of Python", isTrending: false },
    { title: "Node Basics", content: "Learn the basics of Node", isTrending: true }
  ]
  return(
    <>
    <Header />
    <main>
      {blogs.map((blog) => (<Card title={blog.title} content={blog.content} isTrending={blog.isTrending} />))}
    </main>
    <Footer />
    </>
  )
}
export default App
