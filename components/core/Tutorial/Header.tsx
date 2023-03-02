import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tutorials from 'pages/tutorials/developing/_meta.en-US.json';
import { Tutorial } from 'types/tutorial';

export function getTutorialByRouteName(
  json: Record<string, Tutorial>,
  routeName: string,
): Tutorial | null {
  const hashTable: Record<string, Tutorial> = {};

  // Create hash table based on route/href name - It is a faster than loop implementation
  for (let key in json) {
    const item = json[key];
    if (item && item.href) {
      hashTable[item.href] = item;
    }
  }

  return hashTable[routeName] || null;
}

export default function Header() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);

  const ogImage = `http://localhost:3000/api/og?title=${tutorial?.title}&category=${tutorial?.category}`;

  const metadata = {
    title: tutorial?.longTitle,
    openGraph: {
      title: tutorial?.longTitle,
      type: 'article',
      url: `https://docs.livepeer.org/${router.asPath}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tutorial?.title,
      images: [ogImage],
    },
  };

  useEffect(() => {
    const fetchedTutorial = getTutorialByRouteName(tutorials, router.asPath);
    setTutorial(fetchedTutorial);
    setIsLoading(false);
  }, [router.asPath]);

  if (isLoading || !tutorial) {
    return;
  }

  return (
    <section className="mt-5">
      <script type="application/ld+json">{JSON.stringify(metadata)}</script>
      <div className="flex  items-center">
        <div className=" text-sm nx-text-gray-400 uppercase">
          {tutorial?.level}
        </div>
        <div className="text-sm bg-gray-200 p-1.5 px-4 ml-4 rounded-full dark:bg-zinc-800 nx-text-gray-400 capitalize">
          {tutorial?.category}
        </div>
      </div>
      <h3 className="text-4xl mb-6 mt-4 font-bold ">{tutorial?.longTitle}</h3>
      <div className="flex items-center">
        <div className="h-7 w-7 relative">
          <Image
            src={tutorial?.author?.image || ''}
            alt={`Picture of ${tutorial?.author?.name}`}
            fill
            className="rounded-full"
          />
        </div>
        <div className="text-sm font-semibold ml-2">
          {tutorial?.author?.name}
        </div>
        <div className="text-sm nx-text-gray-400 ml-4">
          {tutorial?.createdAt}
        </div>
        <div className="text-sm nx-text-gray-400 ml-4">
          {tutorial?.minutesRead} minutes read
        </div>
      </div>
      <div className="relative lg:w-[114%] lg:-ml-14 aspect-[16/9] mb-16 mt-6">
        <img
          src={ogImage}
          alt={`An image with a black background and a gradient of green and blue shades, along with Livepeer logo and text "${tutorial?.title}" written in white`}
          className="mt-6"
        />
      </div>
    </section>
  );
}
