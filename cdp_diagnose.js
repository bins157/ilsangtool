const { exec } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const targetUrl = 'file:///c:/Users/bins/ilsangtool/index.html';

console.log('Launching Chrome with clean profile for diagnostic...');
// Use --user-data-dir in scratch to prevent extension interference
const userDataDir = 'C:\\Users\\bins\\.gemini\\antigravity-ide\\brain\\158d38d1-719c-4f8d-a6a2-a68ba9d57b62\\scratch\\chrome_profile';
const cmd = `"${chromePath}" --headless=new --remote-debugging-port=9224 --disable-gpu --user-data-dir="${userDataDir}" "${targetUrl}"`;
const chromeProc = exec(cmd);

setTimeout(() => {
  http.get('http://127.0.0.1:9224/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const pages = JSON.parse(data);
      const page = pages.find(p => p.type === 'page');
      if (!page) {
        console.log('No page found');
        chromeProc.kill();
        process.exit(1);
      }
      console.log('Connecting to page:', page.title, page.webSocketDebuggerUrl);

      // Node 24 supports global WebSocket
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      ws.onopen = () => {
        console.log('WS connected. Enabling Runtime and Log...');
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
        ws.send(JSON.stringify({ id: 3, method: 'Page.enable' }));
      };
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.method === 'Runtime.consoleAPICalled') {
          console.log('[CONSOLE]', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
        } else if (msg.method === 'Runtime.exceptionThrown') {
          console.error('[EXCEPTION]', msg.params.exceptionDetails.text, msg.params.exceptionDetails.exception?.description);
        } else if (msg.method === 'Log.entryAdded') {
          console.log('[LOG]', msg.params.entry.level, msg.params.entry.text);
        }
      };

      // Wait 3 seconds, evaluate performance
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 4,
          method: 'Runtime.evaluate',
          params: { expression: '({ title: document.title, bodyChildCount: document.body.children.length, timing: window.performance ? window.performance.timing : null })', returnByValue: true }
        }));
      }, 2000);

      setTimeout(() => {
        console.log('Closing diagnostic.');
        ws.close();
        chromeProc.kill();
        process.exit(0);
      }, 4000);
    });
  }).on('error', err => {
    console.error('HTTP error:', err);
    chromeProc.kill();
    process.exit(1);
  });
}, 1500);
