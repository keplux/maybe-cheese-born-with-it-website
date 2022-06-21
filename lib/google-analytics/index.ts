export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    path_url: url,
  });
};
