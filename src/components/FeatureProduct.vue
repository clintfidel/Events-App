<template>
    <div class="product-item-container bg-white">
        <div class="watch-img-container img-container">
            <div v-if="data.artist" class = "watch-img-container">
                <img :src="data.artist.thumb_url" alt="" class = "watch-img-container">
            </div>
            <div v-else class = "watch-img-container">
                No Event Image
            </div>
        </div>
        <section class = "pt-3 pb-3">
            <h6>{{data.title ? data.title: `${data.lineup[0]} ${data.id}`}}</h6>
            <div class = "content text-muted d-flex">
                <div class = "d-flex">
                    <i class="bi bi-geo-alt"></i>
                    <span class = "ml-3">{{data.venue ? data.venue.city: 'No Venue'}}</span>
                </div>
                <div class = "d-flex ml-3">
                    <i class="bi bi-geo-alt"></i>
                    <span class = "text-trunkated ml-3">8th December 2020</span>
                </div>
            </div>
            <div class = "content text-muted d-flex">
                <div class = "d-flex">
                    <i class="bi bi-aspect-ratio"></i>
                    <span class = "ml-3">Starting from <strong class = "text-blue">&#8358; 15,000</strong></span>
                </div>
            </div>
            <div class = "pt-3">
                <a :href="data.url">
                    <button class="btn btn-outline-primary">
                        Buy Ticket
                    </button>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'FeatureProduct',
    props: ['data'],
    data(){
        return {
            moment
        }
    },
    mounted(){
        // console.log(this.data)
    }
}
</script>

<style scoped>
    .product-item-container{
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0px 0px 10px #cccccd1a;
    }

    .img-container{
        background: grey;
        border-radius: 20px;
        position: relative;
        padding-top: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-container div{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
        top: 0px;
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: 18px;
        color: white;
    }

    .img-container div img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    section{
        position: relative;
    }

    span.date{
        position: absolute;
        padding: 5px;
        background: #fff3ee;
        color: #ffb89b;
        font-size: 20px;
        border-radius: 10px;
        top: 20px;
        right: 0px;
        position: absolute;
        font-size: 14px
    }

    .text-blue{
        color: #5d4fcd!important;
    }

    .btn-outline-primary{
        border-color:  #5d4fcd;
        color:  #5d4fcd ;
        outline: none;
    }

    .btn-outline-primary:active{
        border-color:  #5d4fcd;
        background:  #5d4fcd ;
        color: #fff;
    }
</style>