var posts=["2025/02/05/hello-world/","2025/01/26/新博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };