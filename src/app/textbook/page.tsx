import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function TextbookPage() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const chapters = fs.readdirSync(contentDir).filter(file => 
    fs.statSync(path.join(contentDir, file)).isDirectory()
  );

  return (
    <div>
      <h1>Textbook Contents</h1>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter}>
            <Link href={`/textbook/${chapter}`}>{chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}