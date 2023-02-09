import fetch from 'node-fetch';

const body = JSON.stringify({
    method: "getProgramAccounts",
    jsonrpc: "2.0",
    params: [
      "7iMEx4dMhndLBiHbFvFgXsyoXvDgCyC5FwQrCqpZBSUo",
      {
        encoding: "base64",
        commitment: "confirmed",
        filters: [{ memcmp: { offset: 0, bytes: "2" } }],
      },
    ],
    id: "1be96503-74dd-47a7-b7a0-ae119ffa1155",
  });

const url = "https://responsive-wandering-frog.solana-devnet.discover.quiknode.pro/f57690ec39c342459edce514273769afe8e4345e/";
const baseOptions = {
  method: "POST",
  body: body
};

const headersWithoutReferer = {
  "Content-Type": "application/json",
};

const headersWithIncorrectReferer = {
  "Referer": "http://hakcer-website.com",
  "Content-Type": "application/json",
}

const headersWithReferer = {
  "Referer": "google.com",
  "Content-Type": "application/json",
}

test("without referer", async () => {
  const options = { ...baseOptions, ...{ headers: headersWithoutReferer }};
  const res = await fetch(url, options);

  expect(res.status).toBe(401);
});

test("with correct referer", async () => {
  const options = { ...baseOptions, ...{ headers: headersWithReferer }};
  const res = await fetch(url, options);

  expect(res.status).toBe(200);
});

test("with incorrect referer", async () => {
  const options = { ...baseOptions, ...{ headers: headersWithIncorrectReferer }};
  const res = await fetch(url, options);

  expect(res.status).toBe(401);
});