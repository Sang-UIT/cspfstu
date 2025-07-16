import { allHome } from 'contentlayer/generated';
import Image from 'next/image';

export default function HomePage() {
  const info = allHome[0];
  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1>{info.title}</h1>
      <p style={{ fontSize: 18 }}>{info.description}</p>
      {info.hero_image && (
        <div style={{ marginTop: 32 }}>
          <Image src={info.hero_image} alt={info.title} width={800} height={400} style={{ objectFit: 'cover', borderRadius: 12 }} />
        </div>
      )}
    </main>
  );
}
