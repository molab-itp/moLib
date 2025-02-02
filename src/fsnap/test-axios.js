import axios from 'axios';
import { createWriteStream } from 'fs';

async function downloadFile(url, outputPath) {
  const writer = createWriteStream(outputPath);

  const response = await axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// Example usage
const fileUrl = 'https://jht1493.net/johnhenrythompson/jt_cu.jpg';
const outputPath = 'jt_cu.jpg';

downloadFile(fileUrl, outputPath)
  .then(() => console.log('Download complete'))
  .catch((err) => console.error('Download failed', err));

// https://chatgpt.com/c/679fc5e0-6064-8002-bdf4-b6e7abbd077b
/*

use axios in nodejs to download a file from http reference

use import syntax



*/
