<template>
    <SearchBar :filter="filterEvents"/>
    <div class = "wrapper">
        <h6>Featured Events</h6>
        <div class="featured-events">
            <div class="left-scroll">
                <i @mouseup = "stopScrolling" @mousedown ="scrollFeaturedLeft" class="bi bi-chevron-left"></i>
            </div>
            <div class = "scroll-owner">
                <FeatureProduct v-for="event in dataList" :key="event.id" :data="event"/>
            </div>
            <div class = "w-100 scroll-cover"> </div>
            <div class="right-scroll">
                <i @mouseup = "stopScrolling" @mousedown ="scrollFeaturedRight" class="bi bi-chevron-right"></i>
            </div>
        </div>
        <h6 class = "mt-3">All Events</h6>
        <div class="all-events" >
            <ProductItem v-for="event in dataList" :key="event.id" :data="event"/>
        </div>
        <div class="product-details" ref="detailBox" id = "product-details">
            I am here
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem';
import subscriptions from "../utils/subscriptions";
import SearchBar from "./SearchBar"
import FeatureProduct from "./FeatureProduct.vue"

export default {
    name: 'EventSection',
    components: {
    ProductItem,
    SearchBar,
    FeatureProduct
},
    data: () => {
        return {
            dataList: null,
            dataList2: null,
            scrollAmount: 10,
            scrolling: false
        }
    },
    async beforeCreate(){
        const {data}= await subscriptions.getData()
        // console.log(data)
        this.dataList = data
        this.dataList2 = data
    },
    methods: {
        filterEvents(data){
            data = data.toLowerCase()
            this.dataList = this.dataList2.filter(event => {
                if(event.title ==="" && `${event.lineup[0]} ${event.id}`.toLowerCase().includes(data)) return event
                if(event.title.toLowerCase().includes(data)) return event
            })
            if(!data) this.dataList2 = this.dataList
        },
        scrollFeaturedLeft(){
            this.scrolling = true
            this.scrollLeft()
        },
        scrollFeaturedRight(){
            this.scrolling = true
            this.scrollRight()
        },
        stopScrolling(){
            this.scrolling = false
        },
        scrollRight(){
             const scrollOwner = document.querySelector(".scroll-owner")
            scrollOwner.scrollLeft = scrollOwner.scrollLeft + this.scrollAmount
            if(this.scrolling){
                setTimeout(() => this.scrollRight());
            }
        },
        scrollLeft(){
             const scrollOwner = document.querySelector(".scroll-owner")
            scrollOwner.scrollLeft = scrollOwner.scrollLeft - this.scrollAmount
            if(this.scrolling){
                setTimeout(() => this.scrollLeft());
                return
            }
        }
    }
}
</script>

<style scoped>
    .wrapper{
        text-align: left;
        margin-top: 40px;
        width: 100%;
        overflow: visible
    }

    .featured-events{
        width: 100%;
        overflow: visible;
        position: relative;
    }

    .featured-events>div:nth-child(2){
        white-space:nowrap;
        position: relative;
    }

    .featured-events>div i{
        padding: 10px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0px 0px 10px grey;
        z-index: 1;
    }

    .featured-events>div:nth-child(1), .featured-events>div:nth-child(4){
        height: 100%;
        display:flex;
        align-items: center;
        float:left;
        z-index: 1;
        position: absolute;
        height: 100%;
        top: 0px;
    }

    .featured-events>div:nth-child(4){
        float: right;
        right: 0;
    }

    .scroll-cover{
        height: 40px;
        position: absolute !important;
        overflow: hidden !important;
        top: -20px;
        background: #f8f9fb;
        display: none
    }

    .right-scroll, .left-scroll{
        overflow: visible
    }

    @media screen and (max-width: 576px){
        .right-scroll, .left-scroll{
            display: none !important;
        }
    }

    @media screen and (max-width: 576px){
        .scroll-owner{
            overflow-x: auto;
        }
    }

    .featured-events>div>div{
        min-width: 50%;
        display: inline-block;
        margin-left: 20px;
    }

    .featured-events>div>div:nth-child(1){
        margin-left: 0px;
    }

    .all-events{
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 20px
    }

    @media screen and (max-width: 992px){
        .all-events{
            grid-template-columns: auto auto auto
        }
    }

    @media screen and (max-width: 768px){
        .all-events{
            grid-template-columns: auto auto
        }
    }

    @media screen and (max-width: 576px){
        .all-events{
            grid-template-columns: auto
        }
    }

    h6{
        margin-bottom: 25px;
    }

    .product-details{
        width: 400px;
        height: 400px;
        background: red;
        position: absolute;
        display: none;
    }
</style>