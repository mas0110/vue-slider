const { createApp  } = Vue 

    createApp({
        data() {
            return {
                // array di oggetti con contenuti del carosello
                slides : [
                    {
                        image: './img/01.webp',
                        title: "Marvel's Spiderman Miles Morale",
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his ownSpider-Man.',
                    }, 
                    {
                        image: './img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, 
                    {
                        image: './img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combineslooting,     crafting, shootouts and chaos.",
                    }, 
                    {
                        image: './img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, 
                    {
                        image: './img/05.webp',
                        title: "Marvel's Avengers",
                        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with    single-player and co-operative gameplay",
                    },
                ],
                currentImg: 0,
                arrayImg: [],
                autoscroll: null,

            }
        },
        created(){
            this.activeintarval()
            this.ottieniArrayImmagini
        },
        methods:{

                // array di url contenuti in slides 
                ottieniArrayImmagini() {
                  this.arrayImg = this.slides.map(immagine => immagine.image);
                //   console.log(arrayImg)

                },
                // funzione per tasto foto precendente 
                previmage(){
                    this.currentImg--
                    if(this.currentImg < 0){
                        this.currentImg = this.slides.length -1
                    }
                },
                // funzione per tasto foto sucessiva 
                nextimage(){
                    this.currentImg++

                    if(this.currentImg > this.slides.length -1){
                        this.currentImg = 0
                    }
                },
                // funzione per attivare il meccanismo di autoplay 
                activeintarval(){
                    this.autoscroll = setInterval(() =>{
                        this.nextimage()
                    }, 3000 )
                },
                // funzione per fermare il meccanismo di autoplay 
                stopInterval(){
                    clearInterval(this.autoscroll)
                    
                },
                // funzione per cambiare immagine dalla thumbnails
                changeImg(index){
                    this.currentImg = index
                }

            }
    }).mount('#app')