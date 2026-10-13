// تفعيل عداد السلة التفاعلي
let cartCount = 0;
const cartCountSpan = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;

        const productName = button.parentElement.querySelector('h3').textContent;
        alert(`تمت إضافة "${productName}" إلى سلتك بنجاح! 🌸`);
    });
});

// التعامل مع نموذج الحجز
const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const skinType = document.getElementById('skinType').value;

    successMsg.textContent = `💖 أهلاً بكِ ${clientName}! تم حجز موعد استشارتك بنجاح لنوع بشرتك (${skinType}). سنتواصل معكِ قريباً.`;

    bookingForm.reset();
});