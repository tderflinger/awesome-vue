/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "24b651e52cbd406c4c4dad127f631e1b"
  },
  {
    "url": "assets/css/0.styles.b96b8e36.css",
    "revision": "80d9a84c14fa3bd759f2f87a32ea6953"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad1efe2d.js",
    "revision": "f9f95e4ee0b4abbd27edbe5a19f1dd08"
  },
  {
    "url": "assets/js/11.71a3dce7.js",
    "revision": "8066a4bc1c5bd26f1bed8d90c37483ec"
  },
  {
    "url": "assets/js/12.e8a4e679.js",
    "revision": "dc4b8b553c70feb18e7c5738e0869d91"
  },
  {
    "url": "assets/js/13.17cc2f5b.js",
    "revision": "338ac192a45f01dd1b69437e4b58c16a"
  },
  {
    "url": "assets/js/14.80c90d49.js",
    "revision": "f3054453977f32e3b940d5a662d439d0"
  },
  {
    "url": "assets/js/15.0916156a.js",
    "revision": "983520625fc3558fd4ac229aee0e57c7"
  },
  {
    "url": "assets/js/16.82ca9b9d.js",
    "revision": "987a2bac3267421fb21c1b3ddb6715c6"
  },
  {
    "url": "assets/js/17.72c740eb.js",
    "revision": "0c9737fc2b6c1cedd3a41ec42701d1ac"
  },
  {
    "url": "assets/js/18.8bf6a362.js",
    "revision": "9adb9b8139bb1014b0ee3f838ed3a4bd"
  },
  {
    "url": "assets/js/19.81854779.js",
    "revision": "74b4b9cf2a1ea55bdad27a79f213be7d"
  },
  {
    "url": "assets/js/20.68f1e4ff.js",
    "revision": "74f555d8c8bd027e6358edbb07cfed32"
  },
  {
    "url": "assets/js/21.5fa9e12e.js",
    "revision": "85c1d4fc540fe66e1f8cac05f3b9a184"
  },
  {
    "url": "assets/js/22.a279ff63.js",
    "revision": "1c197c20aebc24b954c7d853850ec55b"
  },
  {
    "url": "assets/js/23.ba1677f6.js",
    "revision": "964179babedac88c4cc3f150baf5fb4f"
  },
  {
    "url": "assets/js/24.a675ea4c.js",
    "revision": "6b87a1e56f70b9a14f2ebfdf722756d2"
  },
  {
    "url": "assets/js/25.2bc3d83e.js",
    "revision": "c906218e7f8023947a4e566abecd87c8"
  },
  {
    "url": "assets/js/26.bb8ac2df.js",
    "revision": "0351915259e9c567d270fd142192c16d"
  },
  {
    "url": "assets/js/27.a2634124.js",
    "revision": "2155b83a811063f38c4510f99e00e407"
  },
  {
    "url": "assets/js/28.bfb45528.js",
    "revision": "05567f731cce87cbed29be6ee039146e"
  },
  {
    "url": "assets/js/29.3a6f99fb.js",
    "revision": "5c09d0d8ddfe0b866417433c3d166317"
  },
  {
    "url": "assets/js/3.f8b946fb.js",
    "revision": "71698646a9bdd3d4969b52c0a3279e8e"
  },
  {
    "url": "assets/js/30.8a0a36e5.js",
    "revision": "0c8769a8c0148d4a4428701623eed6b5"
  },
  {
    "url": "assets/js/31.d90fd33c.js",
    "revision": "2e1f5bb1aaff08629940192ff2c273e2"
  },
  {
    "url": "assets/js/32.e678aa13.js",
    "revision": "8bc324c86f4d9a7d20f06cb4a2f86d5d"
  },
  {
    "url": "assets/js/33.21fc4dba.js",
    "revision": "391bcaae9f6b5e179208576b24f1ad74"
  },
  {
    "url": "assets/js/34.e472987d.js",
    "revision": "33cf12f04a11828ffd6fccdc8dfd0367"
  },
  {
    "url": "assets/js/35.0dfbaa7c.js",
    "revision": "f45fa182888fe42cd65a488e82250baa"
  },
  {
    "url": "assets/js/36.d4e9b1c1.js",
    "revision": "bf96a81f49e3077f6372693869e7ff3d"
  },
  {
    "url": "assets/js/37.7087a243.js",
    "revision": "8b46c8b2f71ec7216b396981e5ccca08"
  },
  {
    "url": "assets/js/38.c324d029.js",
    "revision": "8ea787496fcd70cc604e01785a484ad3"
  },
  {
    "url": "assets/js/39.6d3148e1.js",
    "revision": "fa688b40a1ad67f289e79987dc456a15"
  },
  {
    "url": "assets/js/4.18e1e21e.js",
    "revision": "c1a2ee47171f22683b92998ff482addc"
  },
  {
    "url": "assets/js/40.d6817988.js",
    "revision": "91bdb74ede6d546fc7099a595b18fb0c"
  },
  {
    "url": "assets/js/41.bb9c183c.js",
    "revision": "3126c6bc92699ceffc6a5cfbfbb28e42"
  },
  {
    "url": "assets/js/5.6e0127fe.js",
    "revision": "47a85067df82533d6e4f50295a2c7b8b"
  },
  {
    "url": "assets/js/6.59b14bd7.js",
    "revision": "a58914e28fda332e389f2639320ef71c"
  },
  {
    "url": "assets/js/7.030d45bf.js",
    "revision": "5ad564660e8d2e7cc8b28dae405c5165"
  },
  {
    "url": "assets/js/8.7a177cf6.js",
    "revision": "7a90425f083be40894a7f06a40df98fe"
  },
  {
    "url": "assets/js/9.63db73e0.js",
    "revision": "cbba0b303aaf166b2401f92103323c02"
  },
  {
    "url": "assets/js/app.b1e844b0.js",
    "revision": "db9edab1cb776bc94450592300adaa2e"
  },
  {
    "url": "assets/js/vendors~docsearch.901f11e7.js",
    "revision": "f86793d15e9c7abc645643e3a2746e56"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9df59d02cd1f422494d9e7ad124852e6"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "7dc1dd66592fe27b695d186f520f1a40"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "224b183749264e989c97e55efec49e14"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "9172b65a767b520afc911c00a0343a8c"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "20cecc31f0d54d804ad9203b9e34ab12"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "2d36ee06274c32b546196f96ca1abcd5"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "42fddea850a79320b76f20fb8a159be8"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "7821f7e013b1da67d681f6697fe22bf6"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "8d79509872b189b601087221c9a55351"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e7b1478493875506cd945a51acb6edaa"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "dcc21b15807966dfe72f1164836c3cd5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "9f6c13f11fa28f43d502f4eb20614d3d"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "56c4e29d176c2f20951004f533ca8f2c"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d78bc4c9dd1664897db26f8ce75ec438"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "eaa0e7e01d8b3fcb2c2c55d992497cd5"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "53dd65e67d5404b38d3f69cb285a0ff8"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "332f13684499037cc5bc5e6662a880cc"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d501b804a30e6c23be4b437cf569f4a6"
  },
  {
    "url": "resources/books.html",
    "revision": "7674cdfa22746e40f3634141db6094ec"
  },
  {
    "url": "resources/community.html",
    "revision": "2d23fc4ba652957e0bf75314628d7035"
  },
  {
    "url": "resources/conferences.html",
    "revision": "fe2853e1d37778b2e0dbaf81e208e55f"
  },
  {
    "url": "resources/courses.html",
    "revision": "04519d8da8fee3a36a20bc4f0c25a360"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "d725c296eb894f84bd2efb3e3dbc9279"
  },
  {
    "url": "resources/examples.html",
    "revision": "6442d6d322b46d7b8dbf64239f647b03"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "eae72a8bfd7591fedd9ab4e9bbdda8fa"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "527a3ca8ec12946068a59be665782d66"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6b4d2ea24366a42f006c0f5b08f02d35"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "18c08497ecd320bdff6cfe2fd743dbbb"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "4a6681093ae770276bfa5f479ea31c23"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a268b9b7ff220cc03a2b3fa3b2337f66"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "478cff18b1e95b0ddfe3094b284377e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
