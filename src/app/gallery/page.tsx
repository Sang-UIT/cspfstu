import { allGallery } from 'contentlayer/generated';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Bộ sưu tập ảnh thú cưng</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {allGallery.map((item) => (
          <div key={item._id} style={{ width: 300 }}>
            <Image src={item.image} alt={item.title} width={300} height={200} style={{ objectFit: 'cover', borderRadius: 8 }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 