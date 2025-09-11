import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex items-start justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}