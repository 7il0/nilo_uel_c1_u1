(function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    const KEY_THEME = 'NT_THEME';
    const root = document.documentElement;
    const applyTheme = (t) => root.setAttribute('data-bs-theme', t);
    const saved = localStorage.getItem(KEY_THEME);
    applyTheme(saved || 'light');


    const btn = document.getElementById('btnTheme');
    if (btn) {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(current);
            localStorage.setItem(KEY_THEME, current);
        });
    }
})();