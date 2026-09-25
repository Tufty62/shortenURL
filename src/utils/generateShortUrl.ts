//To shorten URLs we can create a random string of a set amount of characters e.g. /abc123
//we can have a-z, A-Z, 0-9 for each position, which means 62 possible characters per position
//{number of characters: possible number of unique URLs}:
//{4: 14,776,336}, {5: 916,132,832}, {6: 56,800,235,584}, {7: 3,521,614,606,208}, {8: 218,304,105,584,896}

const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function generateShortUrl(): string {
    let shortUrl = "";
    for (let i = 0; i < 6; i++) { //chose 6 as having a suitable URL space while keeping the URL short
        const index = Math.floor(Math.random() * ALLOWED_CHARACTERS.length);
        shortUrl += ALLOWED_CHARACTERS[index];
    }
    return shortUrl;
}