import { allContact } from 'contentlayer/generated';

export default function ContactPage() {
  const info = allContact[0];
  return (
    <main style={{ padding: 24, maxWidth: 500 }}>
      <h1>Liên hệ với studio</h1>
      <p><b>Địa chỉ:</b> {info.address}</p>
      <p><b>Số điện thoại:</b> {info.phone}</p>
      <p><b>Email:</b> {info.email}</p>
      {info.facebook && <p><b>Facebook:</b> <a href={info.facebook} target="_blank">{info.facebook}</a></p>}
      {info.instagram && <p><b>Instagram:</b> <a href={info.instagram} target="_blank">{info.instagram}</a></p>}
    </main>
  );
} 