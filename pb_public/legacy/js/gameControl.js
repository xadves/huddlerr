function addOpponentScore(){
    var fakePlayer = {"id":"000000", "name":"Opponent"};
    newGameScore.away += 1;
    createAuditEntry(fakePlayer);
    updateGameScore();
}