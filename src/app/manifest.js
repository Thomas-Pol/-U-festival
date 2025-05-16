export default function manifest() {
  return {
    name: '❤️U festival',
    short_name: '❤️U festival',
    description: 'an app for the visitors of the ❤️U festival with live updates',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: "portrait",
    icons: [
      {
        src: '/icon512_maskable.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon512_rounded.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}