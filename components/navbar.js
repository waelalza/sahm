class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    // الكود الذي سيتم حقنه في مكان <custom-navbar>
    this.innerHTML = `
      <nav class="bg-white shadow-md fixed w-full z-10 top-0">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-green-700">مؤشر سهم</div>
          <div class="hidden md:flex gap-6 items-center">
            <a href="#features" class="text-gray-600 hover:text-green-700 transition-colors">المميزات</a>
            <a href="#results" class="text-gray-600 hover:text-green-700 transition-colors">نتائج المشتركين</a>
            <a href="#signup" class="bg-green-600 text-white px-5 py-2 rounded-full font-bold hover:bg-green-700 transition-all">اشترك الآن</a>
          </div>
          </div>
      </nav>
      <div class="pt-20"></div> 
    `;
  }
}
// تعريف الوسم المخصص
customElements.define('custom-navbar', CustomNavbar);
