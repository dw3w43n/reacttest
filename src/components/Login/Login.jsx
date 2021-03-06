import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name={"password"}
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} type="checkbox" name="rememberMe" />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
