
    const postsContainer = document.getElementById('posts');

    function addPost() {
      const content = document.getElementById('postContent').value;
      if (content.trim() === '') {
        alert('Please write something before posting.');
        return;
      }

      const postElement = document.createElement('div');
      postElement.className = 'post';

      postElement.innerHTML = `
        <div class="post-title">New Post</div>
        <div class="post-content">${content}</div>
        <div class="post-footer">
          <div class="vote-buttons">
            <button onclick="upvote(this)">▲</button>
            <span class="vote-count">0</span>
            <button onclick="downvote(this)">▼</button>
          </div>
        </div>
      `;

      postsContainer.prepend(postElement);
      document.getElementById('postContent').value = '';
    }

    function upvote(button) {
      const voteCountElement = button.nextElementSibling;
      let voteCount = parseInt(voteCountElement.textContent);
      voteCount++;
      voteCountElement.textContent = voteCount;
    }

    function downvote(button) {
      const voteCountElement = button.previousElementSibling;
      let voteCount = parseInt(voteCountElement.textContent);
      voteCount--;
      voteCountElement.textContent = voteCount;
    }