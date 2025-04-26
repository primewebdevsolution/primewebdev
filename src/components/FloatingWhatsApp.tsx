import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FC } from 'react';

const FloatingWhatsApp: FC = () => {
  const phoneNumber: string = "918764675841"; 

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
      >
        <FaWhatsapp size={28} color="white" />
      </Link>
    </div>
  );
};

export default FloatingWhatsApp;
