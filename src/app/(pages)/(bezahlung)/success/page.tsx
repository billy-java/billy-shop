import Link from 'next/link';

// src\app\(pages)\success\page.tsx
export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[720px]">
      <h1 className="text-green-500 text-2xl font-bold mb-4">
        Vielen Dank für Ihren Einkauf!
      </h1>
      <p className="text-lg">
        🎉 Ihre Zahlung wurde erfolgreich verarbeitet. 🎉
      </p>
      <Link
        href="/cart"
        className="px-10 py-2 mx-auto mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">
        Zum Warenkorb
      </Link>
    </div>
  );
}
