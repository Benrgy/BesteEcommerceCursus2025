import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
      
      // Hide loading indicator
      const loading = document.getElementById('loading');
      if (loading) {
        loading.style.display = 'none';
      }
    } catch (error) {
      console.error('Failed to render React app:', error);
      
      // Show fallback content
      rootElement.innerHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px;">
          <h1>Ecom Education - Bouw Je €100k+ Online Business</h1>
          <p>Er is een probleem opgetreden bij het laden van de website. Probeer de pagina te vernieuwen.</p>
          <a href="https://www.paypro.nl/producten/Ecom_Education_Programma_(twv_%E2%82%AC6482)/107285/14535" style="background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin-top: 20px;">Start Je Reis Vandaag</a>
        </div>
      `;
      
      // Hide loading indicator
      const loading = document.getElementById('loading');
      if (loading) {
        loading.style.display = 'none';
      }
    }
  }
});
