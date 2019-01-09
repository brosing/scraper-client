const loadGTM = (id) => {
  const layer = 'dataLayer';
  window[layer] = window[layer] || [];
  window[layer].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
  const fjs = document.getElementsByTagName('script')[0];
  if (document.getElementById('script-gtm')) { return; }
  const js = document.createElement('script');
  const dl = layer !== 'dataLayer' ? `&l=${layer}` : '';
  js.src = `https://www.googletagmanager.com/gtm.js?id=${id}${dl}`;
  fjs.parentNode.insertBefore(js, fjs);
};

const loadGA = (id) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    js: new Date(),
    config: 'UA-132049781-1',
  });
  const fjs = document.getElementsByTagName('script')[0];
  if (document.getElementById('script-ga')) { return; }
  const js = document.createElement('script');
  js.id = id;
  js.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  fjs.parentNode.insertBefore(js, fjs);
};

export {
  loadGTM,
  loadGA,
};
