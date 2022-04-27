class Card {
    constructor(name, definitionone, definitiontwo) {
      this.name = name;
      this.definitionone = definitionone;
      this.definitiontwo = definitiontwo;
    }
  }

function createNewCard(name, definitionone, definitiontwo) {
    let card = new Card;

    card.name = name;
    card.definitionone = definitionone;
    card.definitiontwo = definitiontwo;

    return card;
}