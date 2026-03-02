import Image from "next/image";

type Props = {
  title: string;
  price: string;
  image: string;
  url: string;
  site?: string;
};

export default function BookCard({
  title,
  price,
  image,
  url,
  site = "Amazon.co.jp",
}: Props) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          padding: "20px 24px",
          maxWidth: "600px",
          gap: "16px",
          marginBottom: "8px",
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "4px",
            }}
          >
            {title}
          </p>
          <p style={{ color: "#888", fontSize: "13px", marginBottom: "8px" }}>
            {site}
          </p>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>{price}</p>
          <button
            style={{
              marginTop: "12px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Amazon.co.jpで購入する
          </button>
        </div>
        <Image
          src={image}
          alt={title}
          width={120}
          height={170}
          style={{ borderRadius: "6px", objectFit: "cover" }}
        />
      </div>
    </a>
  );
}
