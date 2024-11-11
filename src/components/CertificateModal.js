import React from 'react';

const CertificateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const downloadCertificate = () => {
    const link = document.createElement('a');
    link.href = '/sertif.png';
    link.download = 'Sertifikat_EcoTambak.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-5xl w-4/5 h-auto flex flex-col items-center">
        <div className="flex justify-end w-full">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-full mr-2"
          >
            Tutup
          </button>
          <button
            onClick={downloadCertificate}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Unduh Sertifikat
          </button>
        </div>
        <img src="/sertif.png" alt="Certificate" className="max-h-full max-w-full rounded-lg mt-4" />
      </div>
    </div>
  );
};

export default CertificateModal;
