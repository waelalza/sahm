class CustomFooter extends HTMLElement {
  constructor() {
    super();
    // The code to inject where <custom-footer> is used
    this.innerHTML = `
      <footer class="bg-gray-800 text-gray-300 py-10">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2025 مؤشر سهم. جميع الحقوق محفوظة.</p>
          <div class="flex justify-center gap-6 mt-4">
            <a href="#" class="hover:text-white transition-colors">تويتر</a>
            <a href="#" class="hover:text-white transition-colors">تيليجرام</a>
            <a href="#" class="hover:text-white transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </footer>
    `;
  }
}
// Define the custom element
customElements.define('custom-footer', CustomFooter);
