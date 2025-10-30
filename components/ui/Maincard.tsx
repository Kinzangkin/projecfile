"use client";
import React, {useState, useEffect} from "react";
import { shortenLink } from "@/utils/adtival";

interface Maincardprops {
  title: string;
  media: string;
  link: string;
  type: string;
}

function convertToEmbed(url: string): string {
  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
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

  return (
    <div className="space-y-5 bg-zinc-900 flex flex-col justify-center">
      <div>
        <iframe
          className="h-44 w-80 rounded-lg"
          src={convertToEmbed(media)}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="text-sm m-5 space-y-2">
        <div className="flex justify-between">
            <p className="flex w-50">{title}</p>
            <div className="bg-purple-600 px-1 rounded-sm">{type}</div>
        </div>
        <a
          href={shortLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline border bg-purple-600 px-5 py-1 rounded-sm hover:bg-blue-400 hover:text-white"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Maincard;
