document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  const footerCSS = `
    <style id="injected-footer-styles">
      .site-footer {
        width: 100%;
        max-width: none;
        margin: 60px 0 0;
        padding: 42px 22px 32px;
        text-align: center;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        color: #8a94a6;
        background: #090a0f;
        border-top: 1px solid rgba(226, 232, 240, 0.22);
        box-sizing: border-box;
        display: block;
      }
      .site-footer, .site-footer * { box-sizing: border-box; }
      .site-footer .footer-brand {
        display: inline-block;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #ffffff;
        text-decoration: none;
        margin-bottom: 20px;
      }
      .site-footer .footer-brand span { color: #E2E8F0; }
      .site-footer .footer-links {
        width: 100%;
        max-width: 920px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 14px 22px;
        margin: 0 auto 22px;
      }
      .site-footer .footer-links a {
        color: #8a94a6;
        text-decoration: none;
        font-size: 12.5px;
        font-weight: 500;
        line-height: 1.5;
        transition: color 0.2s ease;
      }
      .site-footer .footer-links a:hover { color: #E2E8F0; }
      .site-footer .footer-links a.highlight-link { color: #E2E8F0; font-weight: 600; }
      .site-footer > p:not(.disclaimer) {
        width: 100%;
        margin: 0 auto 12px;
        font-size: 12px;
        line-height: 1.5;
        color: #cbd5e1;
        font-weight: 500;
      }
      .site-footer .disclaimer {
        width: 100%;
        max-width: 720px;
        margin: 12px auto 0;
        padding: 0;
        font-size: 11px;
        font-weight: 300;
        color: #586173;
        line-height: 1.65;
        text-align: center;
      }
      .site-footer .disclaimer a { color: #8a94a6; text-decoration: underline; transition: color 0.2s ease; }
      .site-footer .disclaimer a:hover { color: #E2E8F0; }
      @media (max-width: 650px) {
        .site-footer { margin-top: 40px; padding: 32px 16px 24px; }
        .site-footer .footer-brand { font-size: 18px; margin-bottom: 16px; }
        .site-footer .footer-links { gap: 10px 16px; margin-bottom: 18px; }
        .site-footer .footer-links a { font-size: 11.5px; }
        .site-footer > p:not(.disclaimer) { font-size: 11.5px; }
        .site-footer .disclaimer { max-width: 100%; font-size: 10.5px; line-height: 1.6; }
      }
    </style>
  `;

  if (!document.getElementById("injected-footer-styles")) {
    document.head.insertAdjacentHTML("beforeend", footerCSS);
  }

  const footerHTML = `
    <footer class="site-footer">
      <a href="index.html" class="footer-brand">IRON <span>&amp; SLUMBER</span></a>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="divan-beds.html">Divan Beds</a>
        <a href="padded-beds.html">Padded Beds</a>
        <a href="ottoman-beds.html">Ottoman Beds</a>
        <a href="mattresses.html">Mattresses</a>
        <a href="kids-beds.html">Kids Beds</a>
        <a href="bed-accessories.html">Bed Accessories</a>
        <a href="custom-frames.html" class="highlight-link">Custom Frames</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="disclaimer.html">Disclaimer</a>
      </div>
      <p>&copy; ${currentYear} Iron &amp; Slumber. All rights reserved.</p>
      <p class="disclaimer">
        Iron &amp; Slumber is a curated shopping directory &amp; editorial showcase for heavy-duty reinforced steel frames, industrial iron bases, UK divans, and endurance-tested bed architecture. 
        For details regarding partner offers and affiliate terms, please review our <a href="disclaimer.html">Disclaimer</a> page.
      </p>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});