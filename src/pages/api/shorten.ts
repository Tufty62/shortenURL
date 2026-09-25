export async function POST({ request }) {
    try {
        const body = await request.json();

        if (!body.url){ //check URL field is populated
            return new Response(
                JSON.stringify({error: "URL is required"}),
                {status: 400}
            )
        }

        try {
            const url = new URL(body.url); //check that is is a URL
        } catch {
            return new Response(
                JSON.stringify({error: "Invalid URL"}),
                {status:400}
            );
        }

        const shortURL = generateShortURL();

        return new Response(
            JSON.stringify({
                short_url: shortURL,
                url: body.url
            }),
            {status: 200}
        );

    } catch {
        return new Response(
            JSON.stringify({error: "Invalid JSON body"}),
            {status:400}
        );
    }

}