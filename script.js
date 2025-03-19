// For profile.html - Save Profile Data
if (document.getElementById('createBtn')) {
    document.getElementById('createBtn').addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const birthday = document.getElementById('birthday').value;
      const bio = document.getElementById('bio').value;
      const quote = document.getElementById('quote').value;
      const profilePic = document.getElementById('profilePic').files[0];
  
      const reader = new FileReader();
      reader.onload = function (e) {
        localStorage.setItem('profilePic', e.target.result);
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        localStorage.setItem('bio', bio);
        localStorage.setItem('quote', quote);
  
        window.location.href = "feed.html";
      };
      if (profilePic) {
        reader.readAsDataURL(profilePic);
      }
    });
  }
  
  // For feed.html - Load Profile & Tweets
  window.onload = function () {
    if (document.getElementById('displayName')) {
      document.getElementById('displayName').innerText = localStorage.getItem('name');
      document.getElementById('displayBirthday').innerText = localStorage.getItem('birthday');
      document.getElementById('displayBio').innerText = localStorage.getItem('bio');
      document.getElementById('displayQuote').innerText = localStorage.getItem('quote');
      document.getElementById('displayPic').src = localStorage.getItem('profilePic');
  
      
      }
    }
  
  
  // Add new tweet
  if (document.getElementById('postBtn')) {
    document.getElementById('postBtn').addEventListener('click', function () {
      const tweetInput = document.getElementById('tweetInput').value;
      if (tweetInput.trim() !== '') {
        const tweet = createTweetElement(tweetInput);
        document.getElementById('tweetsContainer').appendChild(tweet);
  
        // Save tweets to local storage
        const savedTweets = JSON.parse(localStorage.getItem('tweets')) || [];
        savedTweets.push(tweetInput);
        localStorage.setItem('tweets', JSON.stringify(savedTweets));
  
        document.getElementById('tweetInput').value = '';
      }
    });
  }
  
  // Create tweet div
  function createTweetElement(text) {
    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet';
    tweetDiv.innerText = text;
  
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    tweetDiv.appendChild(heart);
  
    return tweetDiv;
  }
  
  // Add click sound to all buttons
  const buttons = document.querySelectorAll("button");
  const clickSound = document.getElementById("clickSound");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const clickSound = new Audio("monkey.wav");
      clickSound.play();
    });
  });
  
  