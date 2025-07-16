import { allService } from 'contentlayer/generated';

export default function ServicesPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dịch vụ chụp ảnh thú cưng</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {allService.map((item) => (
          <div key={item._id} style={{ width: 300, border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
            <h3>{item.title}</h3>
            <p><b>Giá:</b> {item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 