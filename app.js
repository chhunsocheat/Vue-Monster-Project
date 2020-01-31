new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        playerName:". ",
        playerTurns:[],
        monsterTurns:[]
    },
    methods:{
        startGame: function(){
            this.gameIsRunning=true;
            this.playerHealth=1000;
            this.monsterHealth=1000;
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
                alert(`${this.playerName} has lost`)
                this.startGame();
            }else if(this.monsterHealth<=0){
                alert("You have Won!!!")
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