export default {
	getBio(username) {
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}`;
		return fetch(url).then((res) => res.json());
	},
	getRepos(username) {
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}/repos`;
		return fetch(url).then((res) => res.json());
	},
	getFollowers(username) {
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}/followers`;
		return fetch(url).then((res) => res.json());
	},
	getFollowing(username) {
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}/following`;
		return fetch(url).then((res) => res.json());
	}
};
