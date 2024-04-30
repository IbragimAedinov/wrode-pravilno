function parseBody(req) {
  return new Promise((resolve) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.tostring();
    });
    req.on("end", () => {
      resolve(body);
    });
  });
}
module.exports = parseBody;
