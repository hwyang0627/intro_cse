import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1 style={{color: 'Blue'}}>Heewon Yang's Profile</h1>
      <ol>
        <h3><li>I am a freshman majoring in information systems at Hanyang University</li></h3>
        <h3><li>Birth</li></h3>
        <ul> 
          <li>Born in June 27th, 2003</li>
          <li>Korean Age: 21 (As of 2023)</li>
          <li>International Age: 19 (As of 2023)</li>
        </ul>
        <h3><li>MBTI</li></h3>
        <ul> 
          <li>ISTJ</li>
        </ul>
        <h3><li>Hobby</li></h3>
        <ul> 
          <li>Traveling</li>
          <li>Swimmming / Surfing</li>
          <li>Coding</li>
        </ul>
      </ol>
      
      
      <button>
        <Link href="/">Back to home</Link>
      </button>
    </>
  )
}