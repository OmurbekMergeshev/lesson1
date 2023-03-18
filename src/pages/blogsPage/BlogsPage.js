import { useNavigate } from "react-router-dom"

const BlogsPage = () => {
    const navigate = useNavigate
    
    const goToBack = () => {
        navigate(-1)

    }
  return (
    <>
    <button onClick={goToBack}>back</button>
      <h1>Blogs Page</h1>

    </>
  )
}

export default BlogsPage