# bubbleprof-pino-pretty-issue

## The inclusion of pino-pretty seems to prevent user-land data from showing up.
NODE_ENV=development clinic bubble -- node index.js

## Without pino-pretty, it all works as expected
NODE_ENV=production clinic bubble -- node index.js