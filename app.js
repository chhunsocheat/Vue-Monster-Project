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
            let max=10;
            let min=3;
            let damage=Math.max(Math.floor(Math.random()*max)+1,min)
            this.playerHealth-=damage;
             max=15;
             min=3;
            damage=Math.max(Math.floor(Math.random()*max)+1,min)
            this.monsterHealth-=damage;
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
        },
        heal:function(){

        },
        giveUp:function(){

        },
    }
})