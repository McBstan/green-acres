// pages/404.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
      <p>Go to the <Link href="/">Homepage</Link>.</p>
    </div>
    </>
  );
}
