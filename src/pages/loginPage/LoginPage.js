import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()

    const login = (e) => {
        e.prevenDefult()
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

  return (
    <>
        <form onSubmit={login}>
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <buttom type="submit">log in</buttom>
        </form>
    </>
  )
}

export default LoginPage