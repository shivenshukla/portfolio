import handler from '../.netlify/functions-internal/server/main.mjs'

const res = await handler(new Request('https://example.com/'))
const html = await res.text()

if (res.status !== 200) {
    throw new Error(`Netlify handler returned ${res.status}: ${html.slice(0, 200)}`)
}

if (!html.includes('Shiven Shukla')) {
    throw new Error('Netlify handler response missing expected page content')
}
