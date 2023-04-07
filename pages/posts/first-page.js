import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1 style={{color: 'Blue'}}>Heewon Yang</h1>
      <p>Age: 21</p>
      <p>Hobby: Traveling abroad</p>
      <button>
        <Link href="/">Back to home</Link>
      </button>
    </>
  )
}