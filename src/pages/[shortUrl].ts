import { getUrl } from "../stores/urlStore";

export async function GET({ params }) {
    const shortURL = params.shortUrl;

    const longURL = getUrl(shortURL);

    if (!longURL) {
        return new Response(
            JSON.stringify({error: "URL could not be found"}),
            {status: 404}
        );
    }

    return new Response(JSON.stringify({ url: longURL }),
    {
        status: 301,
        headers: {
            Location: longURL
        }
    });
}