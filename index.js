function slideshare(url, kwargs) {
  var endpoint = '//noembed.com/embed?';
  var page = kwargs.page

  if (!!url.length) {
    endpoint += 'url=' + encodeURIComponent(url);
    return '<div class="slideshare-wrapper" data-url="' + endpoint + '" data-page=' + page + '>' + url + '</div>';
  }

  return url;
}

module.exports = {
  website: {
    assets: './assets',
    js: ['scripts.js'],
    css: ['style.css']
  },
  filters: {
    slideshare: slideshare,
  }
};
