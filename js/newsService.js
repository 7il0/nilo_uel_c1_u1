const STORE_KEY = 'NOTICIAS_STORE_V1';


function readStore() {
    const raw = localStorage.getItem(STORE_KEY);
    try { return raw ? JSON.parse(raw) : null; } catch { return null; }
}


function writeStore(arr) {
    localStorage.setItem(STORE_KEY, JSON.stringify(arr));
}


function initStore() {
    const current = readStore();
    if (!current || !Array.isArray(current) || current.length === 0) {
        if (typeof SEED_NOTICIAS !== 'undefined') {
            writeStore([...SEED_NOTICIAS]);
        } else {
            writeStore([]);
        }
    }
    return listNoticias();
}


function listNoticias() {
    const arr = readStore() || [];
    return [...arr].sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));
}


function listByCategoria(cat) {
    if (!cat) return listNoticias();
    return listNoticias().filter(n => (n.categoria || '').toLowerCase() === String(cat).toLowerCase());
}


function getById(id) {
    const arr = readStore() || [];
    return arr.find(n => String(n.id) === String(id)) || null;
}


function createNoticia(n) {
    const required = ['titulo', 'resumen', 'categoria', 'imagen', 'autor', 'fecha', 'contenidoHTML'];
    for (const k of required) {
        if (!n || !String(n[k] || '').trim()) throw new Error(`Campo requerido faltante: ${k}`);
    }
    const arr = readStore() || [];
    if (!n.id) n.id = Date.now().toString();
    arr.push(n);
    writeStore(arr);
    return n;
}


window.initStore = initStore;
window.listNoticias = listNoticias;
window.listByCategoria = listByCategoria;
window.getById = getById;
window.createNoticia = createNoticia;