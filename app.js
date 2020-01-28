new Vue({
    el:"#app",
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false
    },
    methods:{
        startGame: function(){
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack:function(){
            
            this.playerHealth-=this.calculateDamage(3,15);
            this.monsterHealth-=this.calculateDamage(3,20);
            if(this.playerHealth<=0){
                alert("You've Lost")
                this.startGame();
            }else if(this.monsterHealth<=0){
                alert("You have Won!!!")
                this.startGame();
            }
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