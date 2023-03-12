<script>
  const speechBubble = document.getElementById("speech-bubble");
  const text = document.getElementById("text");
  const character = document.getElementById("character");
  const phrases = ["ああああああ", "いいいいいいい", "ううううううう"];
  
  // キャラクターをクリックしたら吹き出しにセリフを表示
  character.addEventListener("click", function() {
    // ランダムにセリフを選択
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomIndex];
    
    // 吹き出しにセリフを表示
    text.textContent = phrase;
    speechBubble.classList.add("visible");
    
    // 5秒後に吹き出しを非表示にする
    setTimeout(function() {
      speechBubble.classList.remove("visible");
    }, 5000);
  });
</script>

<!-- CSSコード -->

<style>
  #speech-bubble {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    border: 2px solid #ccc;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  #speech-bubble.visible {
    opacity: 1;
  }
  
  #speech-bubble::before {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid white;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  
  #text {
    display: block;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #333;
  }
  
  #character {
    position: fixed;
    bottom: 0;
    left: 20px;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  
  #character img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
