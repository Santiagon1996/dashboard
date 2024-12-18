import {montserrat} from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} font-sans`}>
        {children}
        </body>
    </html>
  );
}
