"use client";
import React, { useState, useEffect } from "react";
import { shortenLink } from "@/utils/adtival";
import Image from "next/image";

interface Maincardprops {
  title: string;
  media: string;
  link: string;
  type: string;
}

function Maincard({ title, media, link, type }: Maincardprops) {
  const [shortLink, setShortLink] = useState(link);

  useEffect(() => {
    async function shorten() {
      const newLink = await shortenLink(link);
      setShortLink(newLink);
    }
    shorten();
  }, [link]);

  // Ambil video ID dari YouTube
  const videoId = media.includes("youtu")
    ? media.includes("watch?v=")
      ? media.split("watch?v=")[1].split("&")[0]
      : media.split("youtu.be/")[1].split("?")[0]
    : null;

  // URL thumbnail YouTube
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  // URL video YouTube asli
  const youtubeUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : "";

  return (
    <div className="space-y-5 bg-zinc-900 flex flex-col justify-center">
      {videoId && (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative h-44 w-80 cursor-pointer">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </a>
      )}
      <div className="text-sm m-5 space-y-2">
        <div className="flex justify-between">
          <p className="flex w-50">{title}</p>
          <div className="bg-purple-600 px-1 rounded-sm">{type}</div>
        </div>
        <a
          href={shortLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline border bg-purple-600 px-5 py-1 rounded-sm hover:bg-blue-400 hover:text-white"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Maincard;
