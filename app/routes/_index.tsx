import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useAuth, useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const auth = await getAuth(args);
  return { auth };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const auth = useAuth();
  const user = useUser();
  return (
    <div>
      <SignedIn>
        <h1>Index route</h1>
        <p>You are signed in!</p>
        <UserButton />
        <h1>getAuth:</h1>
        <pre>
          <code>{JSON.stringify(data.auth, null, 2)}</code>
        </pre>
        <h1>useAuth:</h1>
        <pre>
          <code>{JSON.stringify(auth, null, 2)}</code>
        </pre>
        <h1>useUser:</h1>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
