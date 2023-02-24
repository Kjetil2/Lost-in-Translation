import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <nav>
        <h2>Lost in Translation</h2>
      </nav>
      <div className="div-styling">
        <div className="div-styling2">
        <h1> Lost in Translation</h1>
        <h2 className="get-started-h2"> Get Started </h2>
        </div>
        <img src="/LostInTranslation_Resources/Logo.png" alt="Happy robot" className="robot-img1-styling"></img>
        
      </div>

      <LoginForm />
    </>
  );
};
export default Login;
