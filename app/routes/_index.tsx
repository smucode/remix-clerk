import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { type LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const auth = await getAuth(args);
  console.log(auth);
  return null;
};

export default function Index() {
  return (
    <div>
      <SignedIn>
        <h1>Index route</h1>
        <p>You are signed in!</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
