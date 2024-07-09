import SignInForm from "./signInForm";
export const metadata = {
  title: "Login Page",
  description: "Login page for Service Health ",
  icons: [{ rel: "icon", url: "https://jdk.co.ke/wp-content/favicon/apple-icon-114x114.png" }],
};

export default async function LoginPage() {
  return (
        <SignInForm />
  );
}