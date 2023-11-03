import Button from "@components/atoms/Button";
import styles from "./AuthForm.module.scss";
import FormGroup from "./FormGroup";
import { useState } from "react";
import { AuthFormProvider } from "@src/context/AuthFormContext";

const AuthForm = () => {
  const [isSignup, setIsSignUp] = useState(false);

  return (
    <AuthFormProvider>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <h1 className={styles.heading}>Sign In</h1>
          {isSignup && (
            <>
              <FormGroup label="First Name" name="firstName" />
              <FormGroup label="Last Name" name="lastName" />
            </>
          )}
          <FormGroup label="email" type="email" />
          <FormGroup label="password" type="password" />
          {isSignup && (
            <>
              <FormGroup label="Confirm Password" name="confirmPassword" />
              <FormGroup label="Upload Profile" name="profile" type="file" />
            </>
          )}

          <Button className={styles.button}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <p
            className="text-center cursor-pointer"
            onClick={() => setIsSignUp((mode) => !mode)}
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
        </form>
      </div>
    </AuthFormProvider>
  );
};

export default AuthForm;
