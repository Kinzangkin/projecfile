export async function shortenLink(longUrl: string): Promise<string> {
  const apiKey = "e832ec240874924fb92e4346393884a07bb4524a";

  try {
    const res = await fetch(
      `https://www.adtival.network/api?api=${apiKey}&url=${encodeURIComponent(longUrl)}&format=json`
    );
    const data = await res.json();

    if (data.status === "success") {
      return data.shortenedUrl;
    } else {
      console.error("Gagal memperpendek link:", data);
      return longUrl; // fallback
    }
  } catch (err) {
    console.error("Error API:", err);
    return longUrl;
  }
}
