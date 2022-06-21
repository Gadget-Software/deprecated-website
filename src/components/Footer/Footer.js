import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center bg-gray-200 text-gray-700 py-8">
      &copy; {1900 + new Date().getYear()}, Gadget Software
    </footer>
  );
}
