window.addEventListener('load', function () {

    const canvas = document.getElementById("blackJackCanvas");

    var options = new Options();

    canvas.width = options.canvasDimensions.w;
    canvas.height = options.canvasDimensions.h;
debugger;
    const context = canvas.getContext("2d");

    const data = new Data(options);
    const renderer = new Renderer(context, options, data);

    const dealButton = data.buttons.find(function(button) { return button.caption === "Deal"; });
    dealButton.visible = true;

    renderer.field();

    document.addEventListener('cardOut', function (e) {
        const i = data.cards.findIndex(x => x.cardOut && x.reachedEndPoint);
        data.cards[i].deleted = true;

    }, false);

    canvas.addEventListener('mouseup', function (e) {
        data.button.togglePressed();
    });

    canvas.addEventListener('mousedown', function (e) {
        data.button.togglePressed();
    });

    canvas.addEventListener('click', function (e) {
        data.chips.forEach(function(chip) {
            if (chip.hasClick()) {
                data.increaseBid(chip.price);
            }
        });

        // const a = data.cards.findIndex(x => x.positionDestination === 3);
        // const b = data.cards.findIndex(x => x.positionDestination === 4);
        // const clickPoint = point(e.clientX, e.clientY);
        // let deckEmpty = data.deck.length < 2;
        // if (!deckEmpty) {
        //     if (Button.ClickOnButton(clickPoint, options)) {
        //         const allArrivedAtAB = (a >= 0 && data.cards[a].reachedEndPoint || a < 0) && (b >= 0 && data.cards[b].reachedEndPoint || b < 0);
        //         if (allArrivedAtAB) {
        //             if (a >= 0) {
        //                 data.cards[a].sendCardOut(options.outPoint).setNewMoveData();
        //             }

        //             if (b >= 0) {
        //                 data.cards[b].sendCardOut(options.outPoint).setNewMoveData();
        //             }

        //             for (let i = 3; i <= 4; i += 1) {     // Send new cards to positions A and B
        //                 let cn = Math.floor(Math.random() * data.deck.deck.length); //get a random card from the deck
        //                 let c = new Card(
        //                     point(options.deckPosition.x, options.deckPosition.y),
        //                     point(data.positions[i].point.x, data.positions[i].point.y),
        //                     data.deck.deck[cn],
        //                     options.speed,
        //                     i,
        //                     data.deck.cardImages[data.deck.deck[cn]]
        //                 );
        //                 c.positionDestination = i;
        //                 c.setNewMoveData();
        //                 data.deck.deck.splice(cn, 1);
        //                 data.cards.push(c);
        //             }
        //         }
        //     }
        // }
        // else {    //deck empty
        //     alert("Deck empty!")
        // }

        // deckEmpty = data.deck.length < 1;
        // if (!deckEmpty) {
        //     let positionTest = Position.isClickOnPosition(clickPoint, options, data.positions);
        //     if (positionTest > 0) {
        //         let p = data.cards.findIndex(x => x.positionDestination === positionTest);
        //         let positionHasCard = data.cards[p].reachedEndPoint;
        //         if (positionHasCard) {
        //             data.cards[p].sendCardOut(options.outPoint).setNewMoveData();
        //         }
        //     }
        // }
        // else {    //deck empty
        //     alert("Deck empty!")
        // }
    }, false);

    window.addEventListener('resize', function (e) {
        options = new Options();
        location.reload();
        // canvas.width = options.canvasDimensions.w;
        // canvas.height = options.canvasDimensions.h;
    });

    function gameLoop(context, options, data, renderer) {        //animation loop
        context.clearRect(0, 0, options.canvasDimensions.w, options.canvasDimensions.h);
        renderer.field();
        requestAnimationFrame(function () { gameLoop(context, options, data, renderer) });
    }

    gameLoop(context, options, data, renderer);
});