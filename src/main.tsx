import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hide loading spinner
const hideLoading = () => {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }
};

// Wait for DOM to be ready
const initApp = () => {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
      hideLoading();
    } catch (error) {
      console.error('Failed to render React app:', error);
      hideLoading();
      // Fallback content
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
          <h1>Ecom Education</h1>
          <p>Er is een probleem opgetreden bij het laden van de applicatie.</p>
          <p>Probeer de pagina te vernieuwen.</p>
        </div>
      `;
    }
  } else {
    console.error('Root element not found');
    hideLoading();
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}