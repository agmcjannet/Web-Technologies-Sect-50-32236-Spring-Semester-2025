// ViewMasterSlide class
class ViewMasterSlide {
    constructor(image, title, author, year, medium, description, citation) {
        this.image = image;
        this.title = title;
        this.author = author;
        this.year = year;
        this.medium = medium
        this.description = description;
        this.citation = citation;
    }
}

//5 objects from the class
const slides = [
    new ViewMasterSlide(
        "imgs/2.png",
        "Gamin",
        "Augusta Savage (American, 1892-1962)",
        1930,
        "Painted plaster",
        "Throughout her career, Augusta Savage fought against racism and sexism as she strove to learn her craft. She constantly strove to uplift children and aspiring artists, first at her Savage School of Arts and Crafts, and later as the founding director of the Harlem Community Arts Center. While some of her portraits celebrated leaders in the African American Community, such as W.E.B. Dubois and Marcus Garvey, other, like Gamin—one of her most popular works—found dignity and hope in the children struggling for survival on the streets of her Harlem neighborhood. —Jonathan Stuhlman, Ph.D., Senior Curator of American Art at the Mint Museum",
        "“8 Pieces of Art Created in Response to the Challenges of Social Injustice.” Mint Museum, 6 Dec. 2023, www.mintmuseum.org/8-pieces-of-art-created-in-response-to-the-challenges-of-social-injustice/."
    ),
    new ViewMasterSlide(
        "imgs/3.png",
        "Hunger",
        "Joyce J. Scott (American, 1948-)",
        1991,
        "Hand-beaded glass, thread, photographs, plastic",
        "Born, raised, and based in Baltimore, Maryland, African American artist Joyce J. Scott confronts racism, sexism, classism, and other issues head-on in art made in a range of media. Her 1991 necklace Hunger addresses famine in Africa—a persistent problem in the 1980s and early 1990s—and white complicity in it. Hand-beaded skeletons and photographs of malnourished children are juxtaposed with a large white face that seems to look away, ignoring their suffering. Hunger is on view at Mint Museum Uptown. In the words of Joyce J. Scott, “I think art has the ability [to], if not cure or heal, at least enlighten, slap you in the head, wake you up.” —Rebecca Elliot, Assistant Curator of Craft, Design and Fashion at the Mint Museum.",
        "“8 Pieces of Art Created in Response to the Challenges of Social Injustice.” Mint Museum, 6 Dec. 2023, www.mintmuseum.org/8-pieces-of-art-created-in-response-to-the-challenges-of-social-injustice/."
    ),
    new ViewMasterSlide(
        "imgs/4.png",
        "Conversation, 2018",
        "Leo Twiggs. (American, 1934-)",
        2018,
        "Batik on linen",
        "In 2016 The Mint Museum exhibited Dr. Leo Twiggs' powerful cycle of nine paintings created as a tribute to those who lost their lives in the shooting at Mother Emanuel Church in Charleston, South Carolina. In this series, Dr. Twiggs sought to inspire reflection, redemption, and ultimately, healing. The museum commissioned this painting following its presentation of that exhibition. Conversation was inspired by comments that visitors left for Dr. Twiggs during the exhibition. As the artist has noted, “Since the Mother Emanuel paintings were used at every exhibit venue as a catalyst to create conversations about race and culture, I was inspired to do a painting I call Conversation.” While art can sometimes be an escape from current events, it can also inspire us to have difficult but necessary discussions with those who think differently than we do. —Jonathan Stuhlman, Ph.D., Senior Curator of American Art at the Mint Museum.",
        "“8 Pieces of Art Created in Response to the Challenges of Social Injustice.” Mint Museum, 6 Dec. 2023, www.mintmuseum.org/8-pieces-of-art-created-in-response-to-the-challenges-of-social-injustice/."
    ),
    new ViewMasterSlide(
        "imgs/5.png",
        "Selma",
        "Barbara Pennington (American, 1932-2013)",
        1965,
        "Oil on canvas",
        "This remarkable painting was created in response to the heart-wrenching events that unfolded in Selma, Alabama, in the spring of 1965. Barbara Pennington, an Alabama native, was training in New York at the time of the Selma marches and attacks. The events unfolding in her home state inspired her to create this monumental canvas. Likely drawing upon images that appeared in the mass media, Pennington wove together various parts of the narrative into a gut-wrenching scene that remains a powerful, moving representation of these tragic events—and the ways in which they can unify people from all walks of life to come together to demand change—more than 50 years later. —Jonathan Stuhlman, Ph.D., Senior Curator of American Art at the Mint Museum.",
        "“8 Pieces of Art Created in Response to the Challenges of Social Injustice.” Mint Museum, 6 Dec. 2023, www.mintmuseum.org/8-pieces-of-art-created-in-response-to-the-challenges-of-social-injustice/."
    ),
    new ViewMasterSlide(
        "imgs/6.png",
        "Untitled",
        "Diego Romero (Cochiti, 1964-)",
        1990,
        "Earthenware with slip paint",
        "Cochiti artist Diego Romero, based in Santa Fe, New Mexico, combines the graphic influences of ancient Mimbres pottery and 20th-century American comic books on his illustrated pots that comment on life as a contemporary Native American, including challenging social issues such as alcoholism and poverty. Seen here are his recurring characters the Chongo Brothers, inspired by the mythical Mimbres hero twins, but also by the artist’s childhood with his brother Mateo; chongo, a traditional bun hairstyle, became a nickname for the two boys. This bowl is on view at Mint Museum Randolph. —Rebecca Elliot, Assistant Curator of Craft, Design and Fashion at the Mint Museum.",
        "“8 Pieces of Art Created in Response to the Challenges of Social Injustice.” Mint Museum, 6 Dec. 2023, www.mintmuseum.org/8-pieces-of-art-created-in-response-to-the-challenges-of-social-injustice/."
    )
];

// Function to display a random slide
function showRandomSlide() {
    const randomIndex = Math.floor(Math.random() * slides.length);
    const slide = slides[randomIndex];


    document.querySelector(".image").src = slide.image;
    document.querySelector(".image").alt = slide.title;
    document.querySelector("#story-text").innerHTML = `
        <h3>"${slide.title}"</h3>
        <p class="art-author">${slide.author}</p>
        <p class="art-medium-year">${slide.medium}, ${slide.year}</p>
        <p class="art-description">${slide.description}</p>
         <p class="art-citation">${slide.citation}</p>

    `;

    document.querySelector("#button button").textContent = "Next Slide";
}


function goToViewMasterOptions() {
    showRandomSlide();
}
