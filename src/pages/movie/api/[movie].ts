export async function get({ params }: {params: {movie: string}}) {
  const { movie } = params;
  const quote = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?movie=${movie}`);

  if (!quote) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  const quoteData = await quote.json();

  return new Response(JSON.stringify(quoteData), {
    status: 200
  })
}