export default function({ $axios }) {
    $axios.onRequest((config) => {
      const qiitaToken = '6c3cc29461cf48cf367b99b23b8632efab52d1a5';
  
      if (qiitaToken) {
        config.headers.common['Authorization'] = `Bearer ${qiitaToken}`;
      }
  
      return config;
    });
};