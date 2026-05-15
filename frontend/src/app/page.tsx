import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesBar from '@/components/FeaturesBar';
import ProductDetail from '@/components/ProductDetail';
import InstallationProcess from '@/components/InstallationProcess';
import Footer from '@/components/Footer';
import { getContent } from '@/lib/api';

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Navbar />
      <Hero data={content.hero} />
      <FeaturesBar data={content.features} />
      <ProductDetail />
      <InstallationProcess />
      <Footer />
    </main>
  );
}
