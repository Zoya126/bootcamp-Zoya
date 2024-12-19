import './style.scss';  // Import the SCSS file

const app = document.getElementById('app') as HTMLElement;
app.innerHTML = `
  <h1>Margin Example</h1>
  <div class="m-4">Margin of 8px using CSS</div>
  <div class="m-6">Margin of 12px using SCSS</div>
  <div class="mt-2 mr-4 mb-6 ml-8">Different margins on each side</div>
`;
