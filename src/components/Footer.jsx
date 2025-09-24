export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 py-4">
        {/* Copyright */}
        <p className="  text-sm text-center">
          © {new Date().getFullYear()} Fahad Azhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
