const express = require('express');
const app = express();
const path = require('path');
const { createBareServer } = require('@tomphttp/bare-server-node');
const { uvPath, UVHandler } = require('@titaniumnetwork-dev/ultraviolet');

app.use(express.static('public'));
app.use('/uv', UVHandler);

const server = app.listen(3000, () => {
  console.log('Proxy running on http://localhost:3000');
});
