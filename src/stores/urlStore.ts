const urls = new Map<string, string>();

export function setUrl(shortUrl: string, longUrl: string): void {
    urls.set(shortUrl, longUrl);
}

export function getUrl(shortUrl: string): string | undefined {
    return urls.get(shortUrl)
}