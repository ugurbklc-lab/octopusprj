"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  url: string;
};

export default function QRCodeComponent({ url }: Props) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url)
      .then(setQr)
      .catch(console.error);
  }, [url]);

  return (
    <div className="bg-white p-3 rounded-lg">
      {qr ? (
        <img src={qr} alt="QR Code" className="w-36 h-36" />
      ) : (
        <p className="text-black text-sm">QR yükleniyor...</p>
      )}
    </div>
  );
}