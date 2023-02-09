## Quicknode RPC node Referer security issue

Anybody with skill to use "Inspect" in the browser, can obtain RPC URL (contains our API key)
and fake the Referer looking at the HTTP headers.
Once they have this information (which is exposed by browser) they can use
any language to compose their own HTTP request with "referer" and use our API quota.

You can use: https://d3bgshfwq8wmv6.cloudfront.net/acs-widget/index.html

![Inspector](/src/inspector.png)

### Install
```bash
npm install
```

## Run tests
```bash
npm test
```

These are tests showcasing the ability to change referer as we whish and use the API calls withtout permission.