import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import Provider from "./provider";

const AppFont = DM_Sans({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AI Video Course Generator",
  description: "Generate AI-powered video courses",
  icons: {
    icon: '/next.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" signInUrl="/sign-in" signUpUrl="/sign-up">
      <html lang="en">
        <body className={AppFont.className}>
          <Provider>
          {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
