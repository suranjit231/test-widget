import styles from "./CaroselWidget.module.css";

export default function CaroselWidget(){

    return(
        <div className={styles.CaroselWidgetContainer}>

            {/* =========== header section ============= */}
            <div className={styles.widgetHeaderSection}>
                <div className={styles.leftHeader}>
                    <h2 className={styles.mainTitle}>Thousand of Raving Customers</h2>
                    <div className={styles.averageReviewSection}>
                        <div className={styles.averageReviewSterContainer}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />
                        </div>

                        <div className={styles.reviewCountPara}>
                            <span className={styles.averageRating}>
                                4.9 rating
                            </span>

                            <span className={styles.totalCountrating}>
                                of 39 reviews
                            </span>
                        </div>

                    </div>

                </div>


                <div className={styles.rightHeader}>
                    <button className={styles.addNewReviewButton}>
                        Write a review
                    </button>
                </div>

            </div>

            {/* ============= slider container ================ */}

            <div className={styles.sliderContainer}>

                <div className={styles.reviewBox}>
                    <div className={styles.cardsTopHeader}>

                        <div className={styles.cardsBoxLeftSide}>
                            <div className={styles.userImageBox}>
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9hX3Bob3RvX29mX2Ffc29jY2VyX3BsYXllcl9kcmliYmxpbmdfdGhlX2JhbGxfY19hYTNmYTFmYS1lZTM0LTRiODMtYWMyZS00ZTgwYjczMzlkMTQucG5n.png" />
                            </div>

                            <div className={styles.headerCardsInfo}>
                                <p className={styles.userName}>Maria Karasguird</p>
                                <p> 15/04/2024</p>
                            </div>

                        </div>

                        <div className={styles.cardBoxRightSide}>
                            <img src="./images/google.png" alt="googleIcon" />
                        </div>
                       

                    </div>

                    {/* ============= review ster box wrapper ============ */}

                    <div className={styles.ratingSterWrapper}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />

                    </div>

                    <p className={styles.reviewDesctiption}>
                    Excellent product! High quality, fast shipping, and great customer service. Exceeded my expectations—highly recommend to anyone looking for reliability. Absolutely worth every penny. Impressive attention to detail and user-friendly design. I’ll definitely purchase again!
                    </p>

                </div>


              
                <div className={styles.reviewBox}>
                    <div className={styles.cardsTopHeader}>

                        <div className={styles.cardsBoxLeftSide}>
                            <div className={styles.userImageBox}>
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9hX3Bob3RvX29mX2Ffc29jY2VyX3BsYXllcl9kcmliYmxpbmdfdGhlX2JhbGxfY19hYTNmYTFmYS1lZTM0LTRiODMtYWMyZS00ZTgwYjczMzlkMTQucG5n.png" />
                            </div>

                            <div className={styles.headerCardsInfo}>
                                <p className={styles.userName}>Maria Karasguird</p>
                                <p> 15/04/2024</p>
                            </div>

                        </div>

                        <div className={styles.cardBoxRightSide}>
                            <img src="./images/google.png" alt="googleIcon" />
                        </div>
                       

                    </div>

                    {/* ============= review ster box wrapper ============ */}

                    <div className={styles.ratingSterWrapper}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />

                    </div>

                    <p className={styles.reviewDesctiption}>
                    Excellent product! High quality, fast shipping, and great customer service. Exceeded my expectations—highly recommend to anyone looking for reliability. Absolutely worth every penny. Impressive attention to detail and user-friendly design. I’ll definitely purchase again!
                    </p>

                </div>


                <div className={styles.reviewBox}>
                    <div className={styles.cardsTopHeader}>

                        <div className={styles.cardsBoxLeftSide}>
                            <div className={styles.userImageBox}>
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9hX3Bob3RvX29mX2Ffc29jY2VyX3BsYXllcl9kcmliYmxpbmdfdGhlX2JhbGxfY19hYTNmYTFmYS1lZTM0LTRiODMtYWMyZS00ZTgwYjczMzlkMTQucG5n.png" />
                            </div>

                            <div className={styles.headerCardsInfo}>
                                <p className={styles.userName}>Maria Karasguird</p>
                                <p> 15/04/2024</p>
                            </div>

                        </div>

                        <div className={styles.cardBoxRightSide}>
                            <img src="./images/google.png" alt="googleIcon" />
                        </div>
                       

                    </div>

                    {/* ============= review ster box wrapper ============ */}

                    <div className={styles.ratingSterWrapper}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />

                    </div>

                    <p className={styles.reviewDesctiption}>
                    Excellent product! High quality, fast shipping, and great customer service. Exceeded my expectations—highly recommend to anyone looking for reliability. Absolutely worth every penny. Impressive attention to detail and user-friendly design. I’ll definitely purchase again!
                    </p>

                </div>

                <div className={styles.reviewBox}>
                    <div className={styles.cardsTopHeader}>

                        <div className={styles.cardsBoxLeftSide}>
                            <div className={styles.userImageBox}>
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9hX3Bob3RvX29mX2Ffc29jY2VyX3BsYXllcl9kcmliYmxpbmdfdGhlX2JhbGxfY19hYTNmYTFmYS1lZTM0LTRiODMtYWMyZS00ZTgwYjczMzlkMTQucG5n.png" />
                            </div>

                            <div className={styles.headerCardsInfo}>
                                <p className={styles.userName}>Maria Karasguird</p>
                                <p> 15/04/2024</p>
                            </div>

                        </div>

                        <div className={styles.cardBoxRightSide}>
                            <img src="./images/google.png" alt="googleIcon" />
                        </div>
                       

                    </div>

                    {/* ============= review ster box wrapper ============ */}

                    <div className={styles.ratingSterWrapper}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />

                    </div>

                    <p className={styles.reviewDesctiption}>
                    Excellent product! High quality, fast shipping, and great customer service. Exceeded my expectations—highly recommend to anyone looking for reliability. Absolutely worth every penny. Impressive attention to detail and user-friendly design. I’ll definitely purchase again!
                    </p>

                </div>

                <div className={styles.reviewBox}>
                    <div className={styles.cardsTopHeader}>

                        <div className={styles.cardsBoxLeftSide}>
                            <div className={styles.userImageBox}>
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9hX3Bob3RvX29mX2Ffc29jY2VyX3BsYXllcl9kcmliYmxpbmdfdGhlX2JhbGxfY19hYTNmYTFmYS1lZTM0LTRiODMtYWMyZS00ZTgwYjczMzlkMTQucG5n.png" />
                            </div>

                            <div className={styles.headerCardsInfo}>
                                <p className={styles.userName}>Maria Karasguird</p>
                                <p> 15/04/2024</p>
                            </div>

                        </div>

                        <div className={styles.cardBoxRightSide}>
                            <img src="./images/google.png" alt="googleIcon" />
                        </div>
                       

                    </div>

                    {/* ============= review ster box wrapper ============ */}

                    <div className={styles.ratingSterWrapper}>
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/full-ster.png" alt="Full-ster" />
                            <img src="./images/half-ster.png" alt="Full-ster" />

                    </div>

                    <p className={styles.reviewDesctiption}>
                    Excellent product! High quality, fast shipping, and great customer service. Exceeded my expectations—highly recommend to anyone looking for reliability. Absolutely worth every penny. Impressive attention to detail and user-friendly design. I’ll definitely purchase again!
                    </p>

                </div>

            </div>









            <div className={styles.sliderPaginationContainer}>
                <span className={styles.paginationradioBtn}></span>
                <span className={styles.paginationradioBtn}></span>
                <span className={styles.paginationradioBtn}></span>
                <span className={styles.paginationradioBtn}></span>
             

            </div>
            

        </div>
    )
}