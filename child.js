process.on("message", (msg) => {
  const codeLine =
    "var process = {}; var global = {}; " +
    msg.content.match(/!code[\n ]+`{3}(.*)`{3}/is)[1];
  let result = Function(codeLine)();
  process.send(result || 'No return value received');
});
