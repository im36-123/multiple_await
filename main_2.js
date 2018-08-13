function get(url) {
	return fetch(url);
  }

  async function fn() {
	const results = [];
	const urls = ['https://qiita.com/api/v2/users/im36-123', 'https://qiita.com/api/v2/users/im36-123/followees'];
	for (const url of urls) {
	  results.push(get(url));
	}
	console.log(await Promise.all(results));
  }

  fn();
