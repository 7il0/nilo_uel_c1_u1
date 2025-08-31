function getArticuloHref(id) {
  const inHtmlDir = location.pathname.toLowerCase().includes('/html/');
  return (inHtmlDir ? 'articulo.html' : 'html/articulo.html') + `?id=${encodeURIComponent(id)}`;
}

function renderCard(n){
  const img = n.imagen || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085';
  const title = n.titulo || 'Sin título';
  const resumen = n.resumen || '';
  const id = n.id || '0';
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100">
        <img src="${img}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <span class="badge bg-secondary mb-2">${(n.categoria||'').toUpperCase()}</span>
          <h5 class="card-title">${title}</h5>
          <p class="card-text max-2-lines">${resumen}</p>
          <a href="${getArticuloHref(id)}" class="btn btn-outline-primary">Leer más</a>
        </div>
      </div>
    </div>`;
}

function renderListaNoticias(containerEl, noticias){
  if (!containerEl) return;
  const html = (noticias || []).map(renderCard).join('');
  containerEl.innerHTML = `<div class="row g-4">${html}</div>`;
}

function renderDetalle(containerEl, noticia){
  if (!containerEl || !noticia) return;
  const catName = {programacion:'Programación', ia:'Inteligencia Artificial', gadgets:'Gadgets'}[noticia.categoria] || 'Tecnología';
  const bcCatHref = `categoria.html?cat=${encodeURIComponent(noticia.categoria || '')}`;
  containerEl.innerHTML = `
    <nav aria-label="breadcrumb" class="mb-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">Inicio</a></li>
        <li class="breadcrumb-item"><a href="${bcCatHref}">${catName}</a></li>
        <li class="breadcrumb-item active" aria-current="page">Artículo</li>
      </ol>
    </nav>
    <header class="mb-3">
      <h1 class="display-5">${noticia.titulo}</h1>
      <div class="d-flex flex-wrap gap-2 align-items-center text-muted">
        <span>Por <strong>${noticia.autor}</strong></span>
        <span>•</span>
        <time datetime="${noticia.fecha}">${noticia.fecha}</time>
        <span>•</span>
        <span class="badge bg-primary">${catName}</span>
      </div>
    </header>
    <figure class="mb-4">
      <img class="img-fluid rounded shadow" src="${noticia.imagen}" alt="${noticia.titulo}">
      <figcaption class="form-text mt-2">Crédito: Unsplash</figcaption>
    </figure>
    <article class="mb-5">${noticia.contenidoHTML}</article>`;
}

window.renderCard = renderCard;
window.renderListaNoticias = renderListaNoticias;
window.renderDetalle = renderDetalle;
