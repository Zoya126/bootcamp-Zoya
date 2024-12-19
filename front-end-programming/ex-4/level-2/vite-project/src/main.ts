const greet = (name: string): string => {
  return `Hello, ${name}! Welcome to Vite with TypeScript.`;
};

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  app.innerHTML = `
      <h1>${greet('Developer')}</h1>
      <p>Enjoy building your Vanilla TypeScript project!</p>
  `;
}
