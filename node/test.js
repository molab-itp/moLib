// test.js;

// >> https://chatgpt.com/c/66f27c60-3b3c-8002-b8c5-09b695f63676
// regular expression to insert characters '//'
// at the begining of a line that end with characters '@//prod'
// only if line does not begin with '//'

// regular expression to remove characters '//'
// at the begining of a line that end with characters '@//prod'

// Remove comment
{
  const input = `
  //some code @//prod
  another line
  // already commented something else
  just a normal line @//prod
  `;
  const output = input.replace(/^\/\/(.*@\/\/prod)$/gm, '$1');
  console.log(output);
}

// add comment
{
  const input = `
some code @//prod
another line
// already commented @//prod
just a normal line @//prod
`;
  console.log('input', input);
  const output = input.replace(/^(?!\/\/)(.*@\/\/prod)$/gm, '//$1');
  console.log('output', output);
}
{
  const input = `
some code @//prod
another line
// already commented @//prod
just a normal line @//prod
`;
  console.log('2input', input);
  let re = new RegExp('^(?!//)(.*@//prod)$', 'gm');
  const output = input.replace(re, '//$1');
  console.log('2output', output);
}
{
  const input = `
some code @//prod
another line
// already commented @//prod
just a normal line @//prod
`;
  console.log('3input', input);
  let rs = '^(?!//)(.*@//prod)$';
  let re = new RegExp(rs, 'gm');
  const output = input.replace(re, '//$1');
  console.log('3output', output);
}
{
  const str = `
some code @//prod
another line
// already commented @//prod
just a normal line @//prod
`;
  console.log('4str', str);
  let tag = 'prod';
  let rs = `^(?!//)(.*@//${tag})\$`;
  let re = new RegExp(rs, 'gm');
  let out = str.replace(re, '//$1');
  console.log('4out', out);
}

const str = `
some code //@prod
another line
// already commented @//prod
just a normal line @//prod
`;
function cm(str) {
  console.log('5str', str);
  let tag = 'prod';
  let rs = `^(?!//)(.*//@${tag})\$`;
  let re = new RegExp(rs, 'gm');
  let out = str.replace(re, '//$1');
  console.log('5out', out);
}
cm(str, 'prod');
const str2 = `
a-1line   //@prod
a-2line
`;
cm(str2, 'prod');
cm('a-1line   //@prod\na-2line ', 'prod');
// rs ^(?!\/\/)(.*@\/\/prod)$
cm('bline   //@dev\n ', 'dev');

function uc(str, tag) {
  let re = new RegExp(`^\\/\\/(.*@\\/\\/${tag})\$`, 'gm');
  return str.replace(re, '$1');
}

uc('//cline //@prod \n', 'prod');
uc('//dline //@dev \n', 'dev');

// --
