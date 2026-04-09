export default function Footer() {
  return (
    <footer className="bg-gray-950 py-4">
      <p className="text-xs text-gray-600 text-center">
        © {new Date().getFullYear()} TechCorp
      </p>
    </footer>
  );
}
