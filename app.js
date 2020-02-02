new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        playerName:"Player Name",
        playerTurns:[],
        monsterTurns:[]
    },
    methods:{
        setPlayerName(){

        },
        startGame: function(){
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack:function(){
            let damage=this.calculateDamage(3,15);
            this.playerHealth-=damage;
            this.monsterAttack();
            this.playerTurns.unshift({
                isPlayer:true,
                text:damage
            })
            if(this.playerHealth<=0){
                alert(`${this.playerName} have lost!!`)
                this.startGame();
            }else if(this.monsterHealth<=0){
                alert(`${this.playerName} have won!!`)
                this.startGame();
            }
        },
        monsterAttack(){
            let damage=this.calculateDamage(3,20);
            this.monsterHealth-=damage;
            this.monsterTurns.unshift({
                isPlayer:false,
                text:damage
            })
        },
        speacialAttack:function(){
            let max=20;
            let min=3;
            let damage=Math.max(Math.floor(Math.random()*max)+1,min)
            this.playerHealth-=damage;
            this.monsterHealth-=damage;
        },
        heal:function(){
            let max=20;
            let min=3;
            let damage=Math.max(Math.floor(Math.random()*max)+1,min)
            this.playerHealth+=damage;
        },
        giveUp:function(){
            alert("You are a loser");
            this.gameIsRunning=false;
            this.startGame();
        },
        calculateDamage:function(min,max){
            return Math.max(Math.floor(Math.random()*max)+1,min)
        }
    }
})