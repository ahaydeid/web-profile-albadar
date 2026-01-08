import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div suppressHydrationWarning>
      <Navbar />
      <main className="flex-grow pt-15">
        {children}
      </main>
      <Footer />
    </div>
  );
}
