import React from 'react'

function WhatsappButton () {
  const phoneNumber = '+5491154718471'; 
  const message = 'Hola, ¿cómo estás? lorena'; 

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      rel="noopener noreferrer" 
      target="_blank"
    >
      <i className="bi bi-whatsapp text-2xl px-5 dark:text-white"></i>
    </a>
  );
}

export default WhatsappButton;
