function get(url) {
	return fetch(url);
  }

  async function fn() {
	const res1 = await get(`https://qiita.com/api/v2/users/im36-123`);
	const res2 = await get(`https://qiita.com/api/v2/users/im36-123/followees`);
	console.log(res1);
	console.log(res2);
  }

  fn();
