export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 lg:flex">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916380207061"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-[0_10px_30px_rgba(37,211,102,0.45)]
          hover:scale-110
          transition
        "
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.61-1.48-.84-2.03-.22-.54-.45-.47-.61-.48-.16-.01-.35-.01-.54-.01-.18 0-.47.07-.71.35-.25.28-.93.9-.93 2.2 0 1.3.95 2.56 1.08 2.74.14.18 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.56.77 5.05 2.23 7.18L3 29l5.98-2.15A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.21 0-4.38-.6-6.27-1.74l-.45-.27-3.55 1.27 1.29-3.46-.29-.46A10.44 10.44 0 0 1 5.5 16C5.5 10.21 10.21 5.5 16 5.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:+916380207061"
        className="
          w-14 h-14
          rounded-full
          bg-[#D4AF37]
          flex items-center justify-center
          shadow-[0_10px_30px_rgba(212,175,55,0.45)]
          hover:scale-110
          transition
        "
        aria-label="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C9.94 22 2 14.06 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
        </svg>
      </a>

    </div>
  );
}
