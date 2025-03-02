$(document).ready(function() {
    const images = [
        'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350',
        'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=dawn-landscape-nature-210186.jpg&fm=jpg',
        'https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg',
        'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350',
        'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350',
        'https://cdn.photographylife.com/wp-content/uploads/2017/01/Simplified-composition-of-the-same-photo.jpg',
        'https://farm5.staticflickr.com/4240/34943640193_c2a25d399e_z.jpg',
        'https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg',
        'https://www.globallandscapesforum.org/wp-content/uploads/2017/11/situgunung-flipped-1600.jpg',
        'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
    ];

    const quotes = [
        "Try to be a rainbow in someone's cloud. — Maya Angelou",
        "If you don't like the road you're walking, start paving another one. — Dolly Parton",
        "All dreams are within reach. All you have to do is keep moving towards them. — Viola Davis",
        "Your story is what you have, what you will always have. It is something to own. — Michelle Obama",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "Never regret anything that made you smile. — Mark Twain",
        "Just stay on track and never look back. — Dolly Parton, “Blue Smoke”",
        "The best way out is always through. — Robert Frost",
        "Turn your wounds into wisdom. — Oprah Winfrey"
    ];

    const shapes = ['square', 'circle', 'triangle'];
    let currentIndex = 0;
    let quoteIndex = 0;
    let currentShape = 0;

    $('#start-button').click(function() {
        $(this).parent().fadeOut();
        $('.image-container').show();
        $('#quote-container').fadeIn();
        fadeImages();
        showQuote();
        createShape();
    });

    function fadeImages() {
        $('#fade-image').attr('src', images[currentIndex]).fadeIn(1000, function() {
            const randomDuration = Math.floor(Math.random() * 3000) + 1000;
            const direction = Math.random() < 0.5 ? 'left' : 'right';
            const moveDistance = direction === 'left' ? -100 : 100;

            setTimeout(function() {
                $('#fade-image').fadeOut(1000, function() {
                    $(this).css('transform', `translateX(${moveDistance}px)`).fadeIn(1000, function() {
                        $(this).css('transform', 'translateX(0)');
                        currentIndex = (currentIndex + 1) % images.length;
                        fadeImages();
                    });
                });
            }, randomDuration);
        });
    }


    function showQuote() {
        $('#quote').fadeOut(function() {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            $(this).text(quotes[quoteIndex]).css('font-size', Math.random() * 40 + 20 + 'px').fadeIn();
            const randomVerticalMove = Math.random() < 0.5 ? -20 : 20;
            $(this).css('transform', `translateY(${randomVerticalMove}px)`).animate({ top: '+=20' }, 1000).animate({ top: '-=20' }, 1000);
        });
        setTimeout(showQuote, 3000);
    }

    function createShape() {
        $('#shape').css({
            display: 'block',
            backgroundColor: getColor(),
            borderRadius: currentShape === 1 ? '50%' : '0',
            clipPath: currentShape === 2 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
        }).animate({ left: Math.random() * $(window).width(), top: Math.random() * $(window).height() }, 1000, function() {
            setTimeout(() => {
                $(this).fadeOut(500, function() {
                    currentShape = (currentShape + 1) % shapes.length;
                    createShape();
                });
            }, 500);
        });
    }

    function getColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});