const app = Vue.createApp({
    data(){
        return{
            number:0,
            ifLess:'Not there yet',
            ifMore:'Too much!',
            correct:'correct'

        }
    },
    watch:{
        number(value){
            if(value>0&&value<=5){
                const that =this;
                setTimeout(()=>{
                    that.number=0;
                },5000)
            }
        }
    },
    computed:{
        watchNumber(){
            if(this.number<37){
                return this.ifLess;
            }
            else if(this.number>37){
                return this.ifMore;
            }
            else{
                return this.correct;
            }
        }
    },
    methods:{
        addValueaA(){
            this.number+=5;
        },
        addValueaB(){
            this.number+=1;
        }
    }

});
app.mount('#assignment');