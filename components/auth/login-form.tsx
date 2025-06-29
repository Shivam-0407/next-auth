import CardWrapper from "./card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      hi ther from the login form
    </CardWrapper>
  );
}
