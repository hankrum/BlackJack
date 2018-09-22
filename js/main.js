window.addEventListener('load', function () {
    const game = new Game();
    game.start();

    // const canvas = document.getElementById("blackJackCanvas");

    // var options = new Options();

    // canvas.width = options.canvasDimensions.w;
    // canvas.height = options.canvasDimensions.h;
    // const context = canvas.getContext("2d");

    // const data = new Data(options);
    // const renderer = new Renderer(context, options, data);

    // const dealButton = data.buttons.find(function(button) { return button.caption === "Deal"; });
    // dealButton.visible = true;

    // renderer.field();

    // document.addEventListener('cardOut', function (e) {
    //     const i = data.cards.findIndex(x => x.cardOut && x.reachedEndPoint);
    //     data.cards[i].deleted = true;

    // }, false);

    // canvas.addEventListener('mouseup', function (e) {
    //     data.button.togglePressed();
    // });

    // canvas.addEventListener('mousedown', function (e) {
    //     data.button.togglePressed();
    // });

    // canvas.addEventListener('click', function (e) {
    //     const clickPoint = new Point(e.clientX, e.clientY);

    //     data.chips.forEach(function(chip) {
    //         if (chip.hasClick(clickPoint)) {
    //             data.changeBid(chip.price);
    //             data.changePlayerFunds(-chip.price);
    //         }
    //     });

    //     data.buttons.forEach(function(button, i) {
    //         if (button.hasClick(clickPoint)){
    //             const buttonName = data.buttons[i].caption;

    //             if (buttonName === "Clear") {
    //                 data.changePlayerFunds(data.bid - options.minBid);
    //                 data.bidReset();
    //             }
    //             else if (buttonName === "Deal") {
    //                 data.deck.resetCards();
    //                 button.visible = false;
    //                 data.setButtonVisible("Clear", false);
    //                 data.chips.forEach(function(chip) { chip.visible = false; });
    //                 data.resetPlayerCards();

    //                 debugger;

    //                 for (let i = 0; i < 2; i++) {
    //                     const cardIndex = Math.floor(Math.random() * data.deck.cards.length);
    //                     const cn = data.deck.cards[cardIndex];
    //                     data.deck.takeOutCard(cn);
    //                     const destination = new Point(
    //                         options.firstPlayerCardPosition.x + i * (options.cardDimensions.w + 20*options.resizeValue), 
    //                         options.firstPlayerCardPosition.y 
    //                     );
    //                     const card = new Card(
    //                         cn, 
    //                         destination, 
    //                         options
    //                         // { position: destination }
    //                     );
    //                     card.setNewMoveData();
    //                     data.playerCards.push(card);
    //                 }

    //                 data.resetDealerCards();
 
    //                 for (let i = 0; i < 2; i++) {
    //                     const cardIndex = Math.floor(Math.random() * data.deck.cards.length);
    //                     const cn = data.deck.cards[cardIndex];
    //                     data.deck.takeOutCard(cn);
    
    //                     const destination = new Point(
    //                         options.firstDealerCardPosition.x + i * (options.cardDimensions.w + 20*options.resizeValue), 
    //                         options.firstDealerCardPosition.y 
    //                     );
    //                     const card = new Card(
    //                         cn, 
    //                         destination, 
    //                         options
    //                     );
    //                     card.setNewMoveData();
    //                     data.dealerCards.push(card);
    //                 }

    //                 data.dealerCards[1].hidden = true;
    //                 debugger; 
    //                 // TODO: check for 21, loss and other buttons
    //                 data.setButtonVisible("Hit", true);
    //                 data.setButtonVisible("Stand", true);
    //             }
    //             else if (buttonName === "Hit") {
                    
    //             }
    //             else if (buttonName === "Stand") {
                    
    //             }
    //         }
    //     });

    //     // const a = data.cards.findIndex(x => x.positionDestination === 3);
    //     // const b = data.cards.findIndex(x => x.positionDestination === 4);
    //     // const clickPoint = point(e.clientX, e.clientY);
    //     // let deckEmpty = data.deck.length < 2;
    //     // if (!deckEmpty) {
    //     //     if (Button.ClickOnButton(clickPoint, options)) {
    //     //         const allArrivedAtAB = (a >= 0 && data.cards[a].reachedEndPoint || a < 0) && (b >= 0 && data.cards[b].reachedEndPoint || b < 0);
    //     //         if (allArrivedAtAB) {
    //     //             if (a >= 0) {
    //     //                 data.cards[a].sendCardOut(options.outPoint).setNewMoveData();
    //     //             }

    //     //             if (b >= 0) {
    //     //                 data.cards[b].sendCardOut(options.outPoint).setNewMoveData();
    //     //             }

    //     //             for (let i = 3; i <= 4; i += 1) {     // Send new cards to positions A and B
    //     //                 let cn = Math.floor(Math.random() * data.deck.deck.length); //get a random card from the deck
    //     //                 let c = new Card(
    //     //                     point(options.deckPosition.x, options.deckPosition.y),
    //     //                     point(data.positions[i].point.x, data.positions[i].point.y),
    //     //                     data.deck.deck[cn],
    //     //                     options.speed,
    //     //                     i,
    //     //                     data.deck.cardImages[data.deck.deck[cn]]
    //     //                 );
    //     //                 c.positionDestination = i;
    //     //                 c.setNewMoveData();
    //     //                 data.deck.deck.splice(cn, 1);
    //     //                 data.cards.push(c);
    //     //             }
    //     //         }
    //     //     }
    //     // }
    //     // else {    //deck empty
    //     //     alert("Deck empty!")
    //     // }

    //     // deckEmpty = data.deck.length < 1;
    //     // if (!deckEmpty) {
    //     //     let positionTest = Position.isClickOnPosition(clickPoint, options, data.positions);
    //     //     if (positionTest > 0) {
    //     //         let p = data.cards.findIndex(x => x.positionDestination === positionTest);
    //     //         let positionHasCard = data.cards[p].reachedEndPoint;
    //     //         if (positionHasCard) {
    //     //             data.cards[p].sendCardOut(options.outPoint).setNewMoveData();
    //     //         }
    //     //     }
    //     // }
    //     // else {    //deck empty
    //     //     alert("Deck empty!")
    //     // }
    // }, false);

//     window.addEventListener('resize', function (e) {
//         options = new Options();
//         location.reload();
//         // canvas.width = options.canvasDimensions.w;
//         // canvas.height = options.canvasDimensions.h;
//     });

//     function gameLoop(context, options, data, renderer) {        //animation loop
//         context.clearRect(0, 0, options.canvasDimensions.w, options.canvasDimensions.h);
//         renderer.field();
//         requestAnimationFrame(function () { gameLoop(context, options, data, renderer) });
//     }

//     gameLoop(context, options, data, renderer);
 });