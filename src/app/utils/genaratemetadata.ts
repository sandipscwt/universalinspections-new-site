interface MetadataOptions {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export const generateMetadata = ({
  title,
  description = "Learn more about our company, our mission, and the team behind My Website.",
  url = "https://www.universalinspections.com",
  image = "https://www.universalinspections.com/og-image.jpg",
}: MetadataOptions) => {
  return {
    title,
    description,
    keywords: "about us, company, team, mission, services",
    authors: [{ name: "Your Name", url }],
    creator: "Your Name",
    publisher: "My Website",
    themeColor: "#ffffff",
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `${url}/about`,
      siteName: "My Website",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "About Us Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourtwitterhandle",
      creator: "@yourtwitterhandle",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
};
