function fetchUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userData = { id: 1, name: "John" };
			resolve(userData);
		}, 1000);
	});
}

function fetchUserPosts(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const posts = [{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }];
			resolve(posts);
		}, 1000);
	});
}

function fetchPostComments(postId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const comments = [{ id: 1001, text: "Comment 1" }, { id: 1002, text: "Comment 2" }];
			resolve(comments);
		}, 1000);
	});
}

async function fetchUserDataAndPosts() {
	try {
		const user = await fetchUserData();
		console.log("User Data:", user);
		const posts = await fetchUserPosts(user.id);
		console.log("User Posts:", posts);
		const comments = await fetchPostComments(posts[0].id);
		console.log("Post Comments:", comments);
	} catch (error) {
		console.error("Error:", error);
	}
}

fetchUserDataAndPosts();
