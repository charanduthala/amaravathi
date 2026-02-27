import { Fragment } from "react/jsx-runtime";
import styles from "./Reserve.module.css"
import { useState } from "react";

function Reserve() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get first day of month
    const firstDay = new Date(year, month, 1).getDay();

    // Get number of days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const renderDays = () => {
        const days = [];

        // Empty slots before first day
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
        }

        // Actual days
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div key={day} className={`${styles['calendar-day']} ${isPastDate(day) ? styles['past'] : ''}`}>
                    <div className={styles['day-number']}>
                        {day}
                    </div>
                </div>
            );
        }

        return days;
    };

    const isPastDate = (day) => {
        const dateToCheck = new Date(year, month, day);
        return dateToCheck < new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
        );
    };
    return <Fragment>
        <div className={`${styles["reservation-container"]} mt-[7.5rem]`}>
            <header className={styles["header"]}>
                <div className={styles["header-content"]}>
                    <h1 className={styles["restaurant-name"]}>
                        <i className="fas fa-utensils"></i> Amaravathi Authentics
                    </h1>
                    <p className={styles["tagline"]}>Experience Authentic South Indian Cuisine</p>
                </div>
            </header>

            <div className={styles["main-content"]}>
                {/* Progress Bar */}
                <div className={styles["progress-bar"]}>
                    <div className={`${styles['progress-step']} ${styles['active']}`} data-step="1">
                        <div className={styles["step-circle"]}>
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <span className={styles["step-label"]}>Date & Time</span>
                    </div>
                    <div className={styles["progress-line"]}></div>
                    <div className={styles["progress-step"]} data-step="2">
                        <div className={styles["step-circle"]}>
                            <i className="fas fa-users"></i>
                        </div>
                        <span className="step-label">Guests</span>
                    </div>
                    <div className={styles["progress-line"]}></div>
                    <div className={styles["progress-step"]} data-step="3">
                        <div className={styles["step-circle"]}>
                            <i className="fas fa-user-edit"></i>
                        </div>
                        <span className={styles["step-label"]}>Details</span>
                    </div>
                </div>

                <div className={styles["content-wrapper"]}>
                    {/* Main Reservation Form */}
                    <div className={styles["reservation-form-wrapper"]}>
                        {/* Step 1: Date & Time Selection */}
                        <div className={`${styles['step-content']} ${styles['active']}`} id="step1">
                            <h2 className={styles["step-title"]}>
                                <i className="fas fa-calendar-check"></i> Choose Date & Time
                            </h2>

                            {/* Calendar */}
                            <div className={styles["calendar-container"]}>
                                <div className={styles["calendar-header"]}>
                                    <button className={styles["calendar-nav"]} id="prevMonth" onClick={prevMonth}>
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <h3 className={styles["calendar-month"]} id="currentMonth">{months[month]} {year}</h3>
                                    <button className={styles["calendar-nav"]} id="nextMonth" onClick={nextMonth}>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div className={styles["calendar-weekdays"]}>
                                    {/* <div className={styles["weekday"]}>Sun</div>
                                    <div className={styles["weekday"]}>Mon</div>
                                    <div className={styles["weekday"]}>Tue</div>
                                    <div className={styles["weekday"]}>Wed</div>
                                    <div className={styles["weekday"]}>Thu</div>
                                    <div className={styles["weekday"]}>Fri</div>
                                    <div className={styles["weekday"]}>Sat</div> */}
                                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                        <div key={day} className={styles["weekday"]}>
                                            {day}
                                        </div>
                                    ))}

                                </div>
                                <div className={`${styles["calendar-days"]}`} id="calendarDays">
                                    {/* Generated by JavaScript */}
                                    {renderDays()}

                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className={styles["time-slots-container"]} id="timeSlotsContainer" style={{ display: "none" }}>
                                <h3 className={styles["section-subtitle"]}>
                                    <i className="fas fa-clock"></i> Select Time Slot
                                </h3>
                                <div className={styles["time-slots"]} id="timeSlots">
                                    {/* Generated by JavaScript */}
                                </div>
                            </div>

                            <button className={styles["btn-next"]} id="nextToGuests" disabled>
                                Continue to Guest Selection <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>

                        {/* Step 2: Guest Selection */}
                        <div className={styles["step-content"]} id="step2">
                            <h2 className={styles["step-title"]}>
                                <i className="fas fa-user-friends"></i> Select Number of Guests
                            </h2>

                            <div className={styles["guest-selector"]}>
                                <button className={styles["guest-btn"]} data-guests="1">
                                    <i className="fas fa-user"></i>
                                    <span>1 Guest</span>
                                    <small>Solo Dining</small>
                                </button>
                                <button className={styles["guest-btn"]} data-guests="2">
                                    <i className="fas fa-user-friends"></i>
                                    <span>2 Guests</span>
                                    <small>Couple</small>
                                </button>
                                <button className={styles["guest-btn"]} data-guests="3">
                                    <i class="fas fa-users"></i>
                                    <span>3 Guests</span>
                                    <small>Small Group</small>
                                </button>
                                <button className={styles["guest-btn"]} data-guests="4">
                                    <i className="fas fa-users"></i>
                                    <span>4 Guests</span>
                                    <small>Family</small>
                                </button>
                                <button className={styles["guest-btn"]} data-guests="5">
                                    <i className="fas fa-users"></i>
                                    <span>5 Guests</span>
                                    <small>Group</small>
                                </button>
                                <button className={styles["guest-btn"]} data-guests="6">
                                    <i className="fas fa-users"></i>
                                    <span>6+ Guests</span>
                                    <small>Large Party</small>
                                </button>
                            </div>

                            {/* Table Preview */}
                            <div className={styles["table-preview-section"]} id="tablePreview" style={{ display: "none" }}>
                                <h3 className={styles["section-subtitle"]}>
                                    <i className="fas fa-chair"></i> Interactive Table Map
                                </h3>
                                <div className={styles["table-map"]}>
                                    <div className={styles["map-legend"]}>
                                        <span><i className={`fas fa-circle ${styles['available']}`}></i> Available</span>
                                        <span><i className={`fas fa-circle ${styles['occupied']}`}></i> Occupied</span>
                                        <span><i className={`fas fa-circle ${styles['selected']}`}></i> Your Selection</span>
                                    </div>
                                    <div className={styles["floor-plan"]} id="floorPlan">
                                        {/* Generated by JavaScript */}
                                    </div>
                                </div>
                            </div>

                            <div className={styles["button-group"]}>
                                <button className={styles["btn-back"]} id="backToDate">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                                <button className={styles["btn-next"]} id="nextToDetails" disabled>
                                    Continue to Details <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        {/* Step 3: Guest Details */}
                        <div className={styles["step-content"]} id="step3">
                            <h2 className={styles["step-title"]}>
                                <i className="fas fa-clipboard-list"></i> Guest Information & Preferences
                            </h2>

                            <form className={styles["guest-form"]} id="guestForm">
                                <div className={styles["form-row"]}>
                                    <div className={styles["form-group"]}>
                                        <label for="guestName">
                                            <i className="fas fa-user"></i> Full Name *
                                        </label>
                                        <input type="text" id="guestName" required placeholder="Enter your name" />
                                    </div>
                                    <div className={styles["form-group"]}>
                                        <label for="guestPhone">
                                            <i className="fas fa-phone"></i> Phone Number *
                                        </label>
                                        <input type="tel" id="guestPhone" required placeholder="+91 " pattern="[0-9]{10}" />
                                    </div>
                                </div>

                                <div className={styles["form-group"]}>
                                    <label for="guestEmail">
                                        <i class="fas fa-envelope"></i> Email Address
                                    </label>
                                    <input type="email" id="guestEmail" placeholder="your@email.com" />
                                </div>

                                <div className={styles["form-group"]}>
                                    <label>
                                        <i className="fas fa-birthday-cake"></i> Occasion Type
                                    </label>
                                    <div className={styles["occasion-selector"]}>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="regular">
                                            <i className="fas fa-utensils"></i> Regular Dining
                                        </button>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="birthday">
                                            <i className="fas fa-birthday-cake"></i> Birthday
                                        </button>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="anniversary">
                                            <i className="fas fa-heart"></i> Anniversary
                                        </button>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="meeting">
                                            <i className="fas fa-briefcase"></i> Business Meeting
                                        </button>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="devotional">
                                            <i className="fas fa-om"></i> Devotional
                                        </button>
                                        <button type="button" className={styles["occasion-btn"]} data-occasion="gathering">
                                            <i className="fas fa-users"></i> Family Gathering
                                        </button>
                                    </div>
                                </div>

                                {/* Special Occasion Options */}
                                <div className={styles["special-occasion-options"]} id="specialOccasionOptions" style={{ display: "none" }}>
                                    {/* Generated by JavaScript based on occasion */}
                                </div>

                                <div className={styles["form-group"]}>
                                    <label>
                                        <i className="fas fa-chair"></i> Seating Preference
                                    </label>
                                    <div className={styles["seating-selector"]}>
                                        <button type="button" className={styles["seating-btn"]} data-seating="indoor">
                                            <i class="fas fa-home"></i> Indoor
                                        </button>
                                        <button type="button" className={styles["seating-btn"]} data-seating="outdoor">
                                            <i class="fas fa-tree"></i> Outdoor
                                        </button>
                                        <button type="button" className={styles["seating-btn"]} data-seating="calm">
                                            <i class="fas fa-spa"></i> Calm Space
                                        </button>
                                        <button type="button" className={styles["seating-btn"]} data-seating="family">
                                            <i class="fas fa-users"></i> Family Area
                                        </button>
                                    </div>
                                </div>

                                <div className={styles["form-group"]}>
                                    <label for="specialRequests">
                                        <i className="fas fa-comment-alt"></i> Special Requests
                                    </label>
                                    <div className={styles["special-request-tags"]}>
                                        <button type="button" className={styles["request-tag"]} data-request="jain">Jain Food</button>
                                        <button type="button" className={styles["request-tag"]} data-request="wheelchair">Wheelchair Access</button>
                                        <button type="button" className={styles["request-tag"]} data-request="no-onion-garlic">No Onion/Garlic</button>
                                        <button type="button" className={styles["request-tag"]} data-request="kids-menu">Kids Menu</button>
                                        <button type="button" className={styles["request-tag"]} data-request="quiet">Quiet Area</button>
                                    </div>
                                    {/* rows attribute must be a number in JSX, not a string */}
                                    <textarea id="specialRequests" rows={3} placeholder="Any other special requests or dietary requirements..."></textarea>
                                </div>
                            </form>

                            <div className={styles["button-group"]}>
                                <button className={styles["btn-back"]} id="backToGuests">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                                <button className={styles["btn-submit"]} id="submitReservation">
                                    <i className="fas fa-check-circle"></i> Reserve Table
                                </button>
                            </div>
                        </div>

                        {/* Confirmation Screen */}
                        <div className={styles["step-content"]} id="confirmation" style={{ display: "none" }}>
                            <div className={styles["confirmation-success"]}>
                                <div className={styles["success-icon"]}>
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <h2 className={styles["confirmation-title"]}>Reservation Confirmed!</h2>
                                <p className={styles["confirmation-message"]}>Thank you for choosing Amaravathi Authentics</p>

                                <div className={styles["reservation-qr"]}>
                                    <div className={styles["qr-code"]} id="qrCode">
                                        {/* QR Code generated by JavaScript */}
                                    </div>
                                    <p className={styles["qr-instruction"]}>Show this QR code for instant check-in</p>
                                </div>

                                <div className={styles["reservation-details-card"]}>
                                    <div className={styles["detail-row"]}>
                                        <span className={styles["detail-label"]}>
                                            <i className="fas fa-hashtag"></i> Reservation ID
                                        </span>
                                        <span className={styles["detail-value"]} id="confirmationId">AA-2025-001</span>
                                    </div>
                                    <div className={styles["detail-row"]}>
                                        <span className={styles["detail-label"]}>
                                            <i className="fas fa-calendar"></i> Date & Time
                                        </span>
                                        <span className={styles["detail-value"]} id="confirmationDateTime">Dec 15, 2025 - 7:30 PM</span>
                                    </div>
                                    <div className={styles["detail-row"]}>
                                        <span className={styles["detail-label"]}>
                                            <i className="fas fa-users"></i> Guests
                                        </span>
                                        <span className={styles["detail-value"]} id="confirmationGuests">4 Guests</span>
                                    </div>
                                    <div className={styles["detail-row"]}>
                                        <span className={styles["detail-label"]}>
                                            <i className="fas fa-chair"></i> Seating
                                        </span>
                                        <span className={styles["detail-value"]} id="confirmationSeating">Indoor - Table 12</span>
                                    </div>
                                    <div className={styles["detail-row"]}>
                                        <span className={styles["detail-label"]}>
                                            <i className="fas fa-user"></i> Name
                                        </span>
                                        <span className={styles["detail-value"]} id="confirmationName">John Doe</span>
                                    </div>
                                </div>

                                <div className={styles["confirmation-actions"]}>
                                    <button className={styles["btn-calendar"]}>
                                        <i className="fas fa-calendar-plus"></i> Add to Calendar
                                    </button>
                                    <button className={styles["btn-directions"]}>
                                        <i className="fas fa-map-marker-alt"></i> Get Directions
                                    </button>
                                    <button className={styles["btn-download"]}>
                                        <i className="fas fa-download"></i> Download Pass
                                    </button>
                                </div>

                                <div className={styles["recommendations"]}>
                                    <h3>
                                        <i className="fas fa-star"></i> Today's Recommendations
                                    </h3>
                                    <div className={styles["recommendation-cards"]}>
                                        <div className={styles["recommendation-card"]}>
                                            <i className="fas fa-pepper-hot"></i>
                                            <h4>Andhra Spicy Thali</h4>
                                            <p>Chef's Special</p>
                                        </div>
                                        <div className={styles["recommendation-card"]}>
                                            <i className="fas fa-bread-slice"></i>
                                            <h4>Masala Dosa</h4>
                                            <p>Signature Dish</p>
                                        </div>
                                        <div className={styles["recommendation-card"]}>
                                            <i className="fas fa-drumstick-bite"></i>
                                            <h4>Indo-Chinese Platter</h4>
                                            <p>Must Try</p>
                                        </div>
                                    </div>
                                </div>

                                <button className={styles["btn-new-reservation"]} id="newReservation">
                                    <i className="fas fa-plus"></i> Make Another Reservation
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Summary Card */}
                    <div className={styles["summary-card"]} id="summaryCard">
                        <h3 className={styles["summary-title"]}>
                            <i className="fas fa-receipt"></i> Reservation Summary
                        </h3>
                        <div className={styles["summary-content"]} id="summaryContent">
                            <div className={styles["summary-empty"]}>
                                <i className="fas fa-clipboard-list"></i>
                                <p>Start selecting your reservation details</p>
                            </div>
                        </div>
                        <div className={styles["summary-footer"]} id="summaryFooter" style={{ display: "none" }}>
                            <div className={styles["summary-info"]}>
                                <i className="fas fa-info-circle"></i>
                                <small>Average dining time: 60 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar functionality script - required for mobile menu and scroll effects */}
            <script src="/static/index.js"></script>
            <script src="/static/reserve.js"></script>
        </div>
    </Fragment>
}

export default Reserve