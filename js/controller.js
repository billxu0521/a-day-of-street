var game = angular.module('game',[]);
    game.controller('MainCtrl', function () {  
        this.index = 0;
        this.score = 0;
        this.selected = [];
        this.data = data[this.index];
        this.state='ready';
        
        gamePrepare();
        
        //按下開始
        this.start = function(){
            this.state = 'playing';
//            $('.game-start').animate({'opacity':0},1500,function(){
//                $('.game-start').hide();
//                $('.playing').show().animate({'opacity':1},1500);
//            });
        }
        
        // 按下選項
        this.next = function(option){
            this.selected.push({
                "information":this.data.information,
                "option":option,
            });
            
            this.index++;
            if(this.index >= data.length){
                this.state = 'ending';
                endofgame();
            }else{
                this.data = data[this.index];
                switch(option.addormulti){
                        case "+":
                            this.score+=option.score;
                        break;
                        case "*":
                            this.score*=option.score;
                        break;
                }
            }
        }
    });

function endofgame(){
    
};

function gamePrepare(){
//    $('.playing').hide().css('opacity',0);
//    $('.final').hide().css('opacity',0);
}