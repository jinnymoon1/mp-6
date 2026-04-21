import "./globals.css";

export const metadata = {
    title: "CS391 OAuth Assignment",
    description: "Simple OAuth application using Next.js and GitHub OAuth"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
