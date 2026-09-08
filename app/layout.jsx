import { Poppins, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 1. Import Poppins and specify the weights you need
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'], 
  subsets: ['latin'], 
  variable: '--font-sans-new' 
});

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif-new' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'CoachNitesh.online — Digital Marketing, Taught Live',
  description: 'Learn digital marketing live.',
};

export default function RootLayout({ children }) {
  return (
    // 2. Inject the Poppins variable into the HTML tag
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-[var(--color-bg-0)] text-[var(--color-text-light)] min-h-screen grid grid-rows-[auto_1fr_auto]">
        
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}