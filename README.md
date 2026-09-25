# URL Shortener

A simple URL shortening web application built with **TypeScript** and **Astro**.

## Overview

This application allows users to enter a long URL and receive a shortened URL. The shortened URL can then be opened to redirect the user to the original URL.

The frontend communicates with the backend through a REST-style API and submits URLs without requiring a page reload.

## Features

* Create shortened URLs from long URLs
* Validate submitted URLs
* Prevent collisions between generated short URLs
* Redirect shortened URLs to their original destination
* Submit URLs without reloading the page
* In-memory storage with no external database required

## Tech Stack

* **TypeScript**
* **Astro**
* **HTML/CSS**
* **Fetch API**

## Getting Started

### Prerequisites

* Node.js
* pnpm

### Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

### Running the application

Start the development server:

```bash
pnpm dev
```

The application will be available at:

`http://localhost:4321`

## API

### Create a shortened URL

**POST** `/api/shorten`

Request body:

```json
{
  "url": "http://www.makeitcheaper.com"
}
```

Example response:

```json
{
  "short_url": "abc123",
  "url": "http://www.makeitcheaper.com"
}
```

### Redirect to the original URL

**GET** `/{short_url}`

For example:

```text
GET /abc123
```

A valid shortened URL returns a `301 Moved Permanently` response and redirects to the original URL.

If the shortened URL does not exist, the API returns `404 Not Found`.

## Implementation

Shortened URLs are generated using a random six-character identifier consisting of letters and numbers.

URLs are stored in an in-memory `Map`, with the generated short identifier used to retrieve the original URL.

When generating a new shortened URL, the application checks whether the generated identifier already exists and generates another identifier if a collision occurs.

URLs are intentionally not persisted between application restarts.

## Project Structure

```text
src/
├── pages/
│   ├── index.astro
│   ├── api/
│   │   └── shorten.ts
│   └── [shortUrl].ts
├── stores/
│   └── urlStore.ts
└── utils/
    └── generateShortUrl.ts
```


