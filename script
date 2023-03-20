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
