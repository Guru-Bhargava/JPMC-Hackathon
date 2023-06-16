import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  var isFulfilled = false;
  var isRejected = true;

  const onFormSubmit = (loginData) => {
    const { username, password } = loginData;
    const validUsername = "user123";
    const validPassword = "pwd123";

    if (username === validUsername && password === validPassword) {
      isFulfilled = true;
      isRejected = false;
      navigate("/user");
    } else {
      alert("Wrong credentials");
    }
  };

  useEffect(() => {
    if (isFulfilled) {
      navigate("/user");
    }
  }, [isFulfilled, isRejected]);

  return (
    <>
      <div className="login-container">
        <h1 className="display-4 text-center">Login</h1>
        <hr className="divider" />
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.username && "is-invalid"}`}
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="error-message">Username is required</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error-message">Password is required</span>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
