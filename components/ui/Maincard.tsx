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

  let thumbnailUrl = "";
  let youtubeUrl = "";

  if (media.includes("youtu")) {
    let videoId = "";
    if (media.includes("watch?v=")) {
      videoId = media.split("watch?v=")[1].split("&")[0];
    } else if (media.includes("youtu.be/")) {
      videoId = media.split("youtu.be/")[1].split("?")[0];
    } else if (media.includes("shorts/")) {
      videoId = media.split("shorts/")[1].split("?")[0];
    }

    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  } else if (media.includes("drive.google.com")) {
    const fileIdMatch = media.match(/\/d\/(.*?)\//);
    const fileId = fileIdMatch ? fileIdMatch[1] : "";
    thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
    youtubeUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  }


  return (
    <div className="space-y-5 bg-zinc-900 flex flex-col justify-center">
      {thumbnailUrl && (
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
