import { TransitionProvider } from "@/components/transitionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prayatn Soni Portfolio App",
  description: "Animated Portfolio WebSite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider> {children} </TransitionProvider>
      </body>
    </html>
  );
}
