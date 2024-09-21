import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function SectionPage({ params }: { params: { chapter: string, section: string } }) {
  const filePath = path.join(process.cwd(), 'src/content', params.chapter, `${params.section}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div>
      <ReactMarkdown>{fileContent}</ReactMarkdown>
      <Link href={`/textbook/${params.chapter}`}>Back to Chapter</Link>
    </div>
  );
}