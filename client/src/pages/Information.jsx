import React from "react";
import HTMLFlipBook from "react-pageflip";


const Information = () => {
    return (
        <div className="book-container1">
            <HTMLFlipBook 
                width={480} 
                height={650} 
                showCover={true} 
                className="flipbook" // เพิ่ม class สำหรับการจัดการ CSS
            >
                {/* หน้าแรก (Cover Page) */}
                <div className="demoPage">
                    <h1 style={{ fontSize: "36px", color: "#333", margin: "10px 0" }}>
                        Welcome to the News Book!
                    </h1>
                    <h2>Latest Updates</h2>
                    <p>Your guide to the latest happenings</p>
                </div>
                
                {/* หน้า 2-3 */}
                <div className="demoPage">
                    <img src="https://via.placeholder.com/400" alt="News 1" />
                    <h2>Exciting New Launches!</h2>
                    <p>Stay ahead with all the exciting product launches happening this year!</p>
                </div>

                <div className="demoPage">
                    <img src="https://via.placeholder.com/400" alt="News 2" />
                    <h2>Innovation in Tech</h2>
                    <p>Explore how innovation in tech is shaping the future.</p>
                </div>

                {/* หน้า 4-5 */}
                <div className="demoPage">
                    <img src="https://via.placeholder.com/400" alt="News 3" />
                    <h2>World Trends 2024</h2>
                    <p>Catch up on the latest global trends for 2024.</p>
                </div>

                <div className="demoPage">
                    <h2>More News Coming Soon!</h2>
                    <p>Stay tuned for updates and exclusive news.</p>
                </div>

                {/* หน้า 6-7 */}
                <div className="demoPage">
                    <img src="https://via.placeholder.com/400" alt="News 4" />
                    <h2>Future Innovations</h2>
                    <p>Catch up on the latest global trends for 2025.</p>
                </div>

                <div className="demoPage">
                    <h2>More News Coming Soon! Wow</h2>
                    <p>Stay tuned for updates and exclusive news.</p>
                </div>

                {/* หน้า 8-9 */}
                <div className="demoPage">
                    <img src="https://via.placeholder.com/400" alt="News 5" />
                    <h2>World Trends 2026</h2>
                    <p>Catch up on the latest global trends for 2026.</p>
                </div>

                <div className="demoPage">
                    <h2>More News Coming Soon!</h2>
                    <p>Stay tuned for updates and exclusive news.</p>
                </div>
            </HTMLFlipBook>

     
            {/* คอนเทนเนอร์ใหม่ */}
            <div className="additional-section">
  <h2>Additional Information</h2>
  <div className="card-container">
    <div className="card">
      <div className="card-icon">🎉</div>
      <h3>Exciting News</h3>
      <p>Stay tuned for the latest updates and exciting news!</p>
    </div>
    <div className="card">
      <div className="card-icon">🚀</div>
      <h3>New Launches</h3>
      <p>We’re launching new products! Don’t miss out on the latest releases.</p>
    </div>
    <div className="card">
      <div className="card-icon">🌍</div>
      <h3>Global Trends</h3>
      <p>Explore the latest global trends and what’s shaping the world in 2024.</p>
    </div>
    <div className="card">
      <div className="card-icon">💡</div>
      <h3>Innovative Ideas</h3>
      <p>Discover innovative ideas that will revolutionize the industry.</p>
    </div>
  </div>
  
  <div className="additional-section-2">
    <h2>Stay Informed with Our Highlights</h2>
    <div className="card-container-2">
        <div className="card-2">
            <div className="card-icon-2">📢</div>
            <h3>Latest Announcements</h3>
            <p>Get the latest announcements directly from our team!</p>
        </div>
    </div>
    <div className="card-container-2">
        <div className="card-2">
            <div className="card-icon-2">🌟</div>
            <h3>Spotlight Features</h3>
            <p>Check out the spotlight features of the month!</p>
        </div>
    </div>
    <div className="card-container-2">
        <div className="card-2">
            <div className="card-icon-2">✨</div>
            <h3>Exclusive Offers</h3>
            <p>Discover exclusive offers just for you!</p>
        </div>
    </div>
    <div className="card-container-2">
        <div className="card-2">
            <div className="card-icon-2">📰</div>
            <h3>Trending Topics</h3>
            <p>Explore what’s trending this week!</p>
        </div>
    </div>
</div>
</div>
</div>
    );
};

export default Information;
