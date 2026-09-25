if (LOG_MODULE_MESSAGES !== false) {
  console.log(`[module A] I was loaded from "${import.meta.url}".`);
}

const myURL = new URL(import.meta.url);
if (myURL.searchParams.has('error')) {
  throw new Error('Failing module A due to "error" param in querystring.');
}

export default function sayHello() {
  if (LOG_MODULE_MESSAGES !== false) {
    console.log('[module A] Hello!');
  }
}
