import document from "../index.html?raw";

export async function GET() {
  return new Response(document, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
}
