import React from 'react'
import { ReactDOM } from 'react'
import { Carousel } from 'react-responsive-carousel'
import ClientReviewItems from './ClientReviewItems'
import './Styles.css'


const breakPoint = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

const ClientReview = () => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Client Review</h1>
            <div className='App'>
                <Carousel breakPoint={breakPoint}>
                    <ClientReviewItems>One</ClientReviewItems>
                    <ClientReviewItems>Two</ClientReviewItems>
                    <ClientReviewItems>Three</ClientReviewItems>
                    <ClientReviewItems>Four</ClientReviewItems>
                    <ClientReviewItems>Five</ClientReviewItems>
                    <ClientReviewItems>Six</ClientReviewItems>
                    <ClientReviewItems>Seven</ClientReviewItems>
                    <ClientReviewItems>Eight</ClientReviewItems>

                </Carousel>

            </div>
        </div>
    )
}
export default ClientReview