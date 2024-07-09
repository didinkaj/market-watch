import SignInForm from "./signInForm";
export const metadata = {
  title: "Login Page",
  description: "Login page for AP Stocks",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LoginPage() {
  return (
        <SignInForm />
  );
}