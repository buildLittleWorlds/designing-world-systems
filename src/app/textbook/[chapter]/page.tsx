import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function ChapterPage({ params }: { params: { chapter: string } }) {
  const chapterDir = path.join(process.cwd(), 'src/content', params.chapter);
  const files = fs.readdirSync(chapterDir).filter(file => file.endsWith('.md'));

  return (
    <div>
      <h1>{params.chapter}</h1>
      <ul>
        {files.map(file => (
          <li key={file}>
            <Link href={`/textbook/${params.chapter}/${file.replace('.md', '')}`}>
              {file.replace('.md', '')}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/textbook">Back to Textbook Contents</Link>
    </div>
  );
}