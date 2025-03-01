$(function(){
    $(function () {
        // Arrays for images, quotes, and authors
        let images = ["imgs/landscape1.jpg", "imgs/landscape2.jpg", "imgs/landscape3.jpg", "imgs/landscape4.jpg", 
                        "imgs/landscape5.jpg", "imgs/landscape6.jpg", "imgs/landscape7.jpg", "imgs/landscape8.jpg",
                        "imgs/landscape9.jpg", "imgs/landscape10.jpg"];
        let quotes = [
          "Art enables us to find ourselves and lose ourselves at the same time.",
          "Creativity takes courage.",
          "Every artist was first an amateur."
        ];
        let authors = ["Thomas Merton", "Henri Matisse", "Ralph Waldo Emerson"];
      
        let imageIndex = 0, quoteIndex = 0;
      
        // Start button event
        $("#startBtn").click(function () {
          $("#startScreen").fadeOut(500, function () {
            $("#artContainer").fadeIn(500);
            startAnimations();
          });
        });
      
        function startAnimations() {
          updateImage();
          updateText();
          animateShapes();
      
          setInterval(updateImage, 3000);
          setInterval(updateText, 4000);
          setInterval(animateShapes, 5000);
        }
    
        
        function updateImage() {
            $("body").fadeOut(500, function () {
                $(this).css("background-image", `url(${images[imageIndex]})`).fadeIn(500);
                imageIndex = (imageIndex + 1) % images.length;
            });
        }
        
        setInterval(updateImage, 5000);
        
      
        function updateText() {
            let positions = [
                { top: "10px", left: "10px" }, 
                { top: "10px", right: "10px" }, 
                { bottom: "10px", left: "10px" }, 
                { bottom: "10px", right: "10px" } 
            ];
        
            let randomPos = positions[Math.floor(Math.random() * positions.length)];
        
            $("#quote, #author").fadeOut(500, function () {
                $("#quote").text(quotes[quoteIndex]).css(randomPos).fadeIn(1500);
                $("#author").text(authors[quoteIndex]).css(randomPos).fadeIn(1500);
        
                quoteIndex = (quoteIndex + 1) % quotes.length;
            });
        }
        
      
        function animateShapes() {
          let shape = $("<div class='star'></div>").appendTo("#shapesContainer");
      
          let size = Math.floor(Math.random() * 50) + 20;
          let startX = Math.random() * ($(window).width() - size);
          let startY = Math.random() * ($(window).height() - size);
      
          shape.css({
            width: size + "px",
            height: size + "px",
            top: startY,
            left: startX
          });
      
          shape.animate({ top: "+=100", opacity: 0 }, 2000, function () {
            $(this).remove();
          });
        }
      });
      
});