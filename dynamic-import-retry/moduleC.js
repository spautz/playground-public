if (LOG_MODULE_MESSAGES !== false) {
  console.log(`[module C] I was loaded from "${import.meta.url}".`);
}

const myURL = new URL(import.meta.url);
if (myURL.searchParams.has('error')) {
  throw new Error('Failing module C due to "error" param in querystring.');
}

export default function sayHello() {
  if (LOG_MODULE_MESSAGES !== false) {
    console.log('[module C] Hello!');
  }
}
