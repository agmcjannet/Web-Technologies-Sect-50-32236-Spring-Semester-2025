$(document).ready(function() {
    $.fn.capitalizeFirstLetter = function() {
        return this.each(function() {
            let text = $(this).text();
            let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
            $(this).text(capitalizedText);
        });
    };

    $.fn.toggleVisibility = function(showSelector, hideSelector) {
        $(showSelector).fadeIn(1000);
        $(hideSelector).fadeOut(1000);
    };

    const categoryImages = {
        'peace': 'imgs/peaceNobelPrize.png',
        'literature': 'imgs/lituratureNobelPrize.png',
        'chemistry': 'imgs/chemistryNobelPrize.png',
        'medicine': 'imgs/medicineNobelPrize.png',
        'economics': 'imgs/economicsNobelPrize.png'
    };

    function displayPrizes(prizes) {
        prizes.forEach(prize => {
            let category = prize.category.charAt(0).toUpperCase() + prize.category.slice(1);
            let prizeDiv = $('<div class="prize"></div>');
            prizeDiv.append(`<h2>${prize.year} - <span class="category">${category}</span></h2>`);

            if (prize.laureates) {
                prize.laureates.forEach(laureate => {
                    prizeDiv.append(`
                        <div class="laureate">
                            <strong>${laureate.firstname || ''} ${laureate.surname || ''}</strong>
                            <p>${laureate.motivation || 'No motivation provided.'}</p>
                        </div>
                    `);
                });
            } else {
                prizeDiv.append(`<p>No laureates awarded for this category.</p>`);
            }

            $('#prizes').append(prizeDiv);
        });

        $('.category').capitalizeFirstLetter();
    }

    function fetchPrizes(url) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: function(data) {
                displayPrizes(data.prizes);
            },
            error: function() {
                $('#prizes').html('<p>Error loading data.</p>');
            }
        });
    }

    fetchPrizes('https://api.nobelprize.org/v1/prize.json');

    $('#randomPrizeBtn').click(function() {
        $.ajax({
            url: 'https://api.nobelprize.org/v1/prize.json',
            dataType: 'json',
            success: function(data) {
                let randomPrize = data.prizes[Math.floor(Math.random() * data.prizes.length)];
                let category = randomPrize.category.charAt(0).toUpperCase() + randomPrize.category.slice(1);
                let randomPrizeDiv = `
                    <h2>${randomPrize.year} - <span class="category">${category}</span></h2>
                `;
                if (randomPrize.laureates) {
                    randomPrize.laureates.forEach(laureate => {
                        randomPrizeDiv += `
                            <div class="laureate">
                                <strong>${laureate.firstname || ''} ${laureate.surname || ''}</strong>
                                <p>${laureate.motivation || 'No motivation provided.'}</p>
                            </div>
                        `;
                    });
                } else {
                    randomPrizeDiv += `<p>No laureates awarded for this category.</p>`;
                }

                $('#randomPrize').html(randomPrizeDiv).fadeIn(1000);
                $('#prizes').fadeOut(1000);
                $('#backToListBtn').fadeIn(500);

                let imageContainer = $('#randomPrize').find('.image-container');
                let imageSrc = categoryImages[randomPrize.category.toLowerCase()];

                if (imageSrc) {
                    imageContainer.html(`<img src="${imageSrc}" alt="${category} image">`).fadeIn(1000);
                }
            }
        });
    });

    $('#backToListBtn').click(function() {
        $('#randomPrize').fadeOut(1000, function() {
            $('#prizes').fadeIn(1000);
        });
        $(this).fadeOut(500);
    });
});
