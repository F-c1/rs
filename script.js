// فتح فريم واحد فقط وإغلاق الباقي
function toggleRule(box) {
    const all = document.querySelectorAll('.rule-box');

    // إغلاق جميع الفريمات ما عدا اللي ضغطت عليه
    all.forEach(b => {
        if (b !== box) {
            b.classList.remove('open');
        }
    });

    // فتح/إغلاق الفريم الحالي
    box.classList.toggle('open');
}
