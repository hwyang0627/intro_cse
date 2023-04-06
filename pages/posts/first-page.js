import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Heewon Yang</h1>
      <p>Age: 19</p>
      <p>Hobby: Traveling abroad</p>
      <button>
        <Link href="/">Back to home</Link>
      </button>
    </>
  )
}