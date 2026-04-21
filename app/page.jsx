import { auth, signIn, signOut } from "../auth";

export default async function Home() {
    const session = await auth();
    const user = session?.user;

    return (
        <main className="page">
            <section className="card">
                <p className="eyebrow">CS391 OAuth Assignment</p>
                <h1>GitHub OAuth Login</h1>
                <p className="intro">
                    Sign in with GitHub to view basic account information.
                </p>

                {user ? (
                    <div className="profile-section">
                        <div className="profile-box">
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name || "Profile image"}
                                    className="avatar"
                                />
                            ) : (
                                <div className="avatar avatar-fallback">GH</div>
                            )}

                            <div>
                                <h2>{user.name || "GitHub User"}</h2>
                                <p>{user.email || "No public email available"}</p>
                            </div>
                        </div>

                        <form
                            action={async () => {
                                "use server";
                                await signOut();
                            }}
                        >
                            <button type="submit" className="button secondary">
                                Sign out
                            </button>
                        </form>
                    </div>
                ) : (
                    <form
                        action={async () => {
                            "use server";
                            await signIn("github");
                        }}
                    >
                        <button type="submit" className="button">
                            Sign in with GitHub
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}
