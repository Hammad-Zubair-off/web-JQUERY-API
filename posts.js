const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/posts";

// Get All Posts
function getAllPosts() {
    $.ajax({
        url: jsonPlaceholderURL,
        method: "GET",
        success: function (data) {
            $("#output").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        },
        error: function (err) {
            console.error("Error fetching posts", err);
            $("#output").html("<p>Error fetching posts.</p>");
        },
    });
}

// Create a Post
function createPost() {
    const newPost = {
        title: "New Post",
        body: "This is the body of the new post.",
        userId: 1
    };

    $.ajax({
        url: jsonPlaceholderURL,
        method: "POST",
        data: newPost,
        success: function (data) {
            $("#output").html(`<pre>Post Created: ${JSON.stringify(data, null, 2)}</pre>`);
        },
        error: function (err) {
            console.error("Error creating post", err);
            $("#output").html("<p>Error creating post.</p>");
        },
    });
}

// Update a Post
function updatePost() {
    const postId = 1; // You can change this ID to update a different post
    const updatedPost = {
        title: "Updated Post Title",
        body: "Updated body content of the post.",
        userId: 1
    };

    $.ajax({
        url: `${jsonPlaceholderURL}/${postId}`,
        method: "PUT",
        data: updatedPost,
        success: function (data) {
            $("#output").html(`<pre>Post Updated: ${JSON.stringify(data, null, 2)}</pre>`);
        },
        error: function (err) {
            console.error("Error updating post", err);
            $("#output").html("<p>Error updating post.</p>");
        },
    });
}

// Delete a Post
function deletePost() {
    const postId = 1; // You can change this ID to delete a different post

    $.ajax({
        url: `${jsonPlaceholderURL}/${postId}`,
        method: "DELETE",
        success: function () {
            $("#output").html(`<p>Post with ID ${postId} Deleted Successfully</p>`);
        },
        error: function (err) {
            console.error("Error deleting post", err);
            $("#output").html("<p>Error deleting post.</p>");
        },
    });
}
