class Player{
    constructor(){

    }

    getCount(){
        var PCount = database.ref('playerCount');
        PCount.on("value",function(data){
            playerCount = data.val();
        })
    }
    
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : name
        })
    }
    
}