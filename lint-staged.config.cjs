module.exports = {
  '**/*.ts?(x)': () => [
    'tsc -p tsconfig.json --noEmit --pretty',
    'pretty-quick --staged',
  ],
};
