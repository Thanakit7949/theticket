import  { useState, useEffect } from "react";
import "./SeatSelection.css";

const initialSeatsData = [
  {
    type: "STD",
    name: "STD: Cenzonic Concert",
    price: 2500,
    color: "darkblue",
  },
  {
    type: "BB1",
    name: "BB1: Cenzonic Concert",
    price: 4500,
    color: "lightblue",
  },
  {
    type: "BB2",
    name: "BB2: Cenzonic Concert",
    price: 4500,
    color: "lightblue",
  },
  {
    type: "BB3",
    name: "BB3: Cenzonic Concert",
    price: 4500,
    color: "lightblue",
  },
  { type: "AA4", name: "AA4: Cenzonic Concert", price: 6500, color: "yellow" },
  { type: "AA5", name: "AA5: Cenzonic Concert", price: 6500, color: "yellow" },
  { type: "AA6", name: "AA6: Cenzonic Concert", price: 6500, color: "yellow" },
  { type: "AA1", name: "AA1: Cenzonic Concert", price: 7500, color: "pink" },
  { type: "AA2", name: "AA2: Cenzonic Concert", price: 7500, color: "pink" },
  { type: "AA3", name: "AA3: Cenzonic Concert", price: 7500, color: "pink" },
];

const SeatSelection = () => {
  const [seatsData, setSeatsData] = useState(initialSeatsData);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = (seat) => {
    setHoveredSeat(seat);
  };

  const handleMouseLeave = () => {
    setHoveredSeat(null);
  };

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
    const updatedSeatsData = seatsData.map((s) =>
      s.type === seat.type ? { ...s, name: `ที่นั่งที่เลือก: ${s.name}` } : s
    );
    setSeatsData(updatedSeatsData);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePriceFilter = (price) => {
    setSelectedPrice(price);
  };

  const totalPrice = selectedSeat ? selectedSeat.price * ticketCount : 0;

  return (
    <div className="seat-selection-page">
      <div className="seat-options">
 
        {!selectedSeat ? (
          <div className="seat-list">
                 <div className="price-buttons">
          <button
            className="price-btn darkblue-btn"
            onClick={() => handlePriceFilter(2500)}
          >
            ฿2,500
          </button>
          <button
            className="price-btn lightblue-btn"
            onClick={() => handlePriceFilter(4500)}
          >
            ฿4,500
          </button>
          <button
            className="price-btn yellow-btn"
            onClick={() => handlePriceFilter(6500)}
          >
            ฿6,500
          </button>
          <button className="price-btn" onClick={() => handlePriceFilter(7500)}>
            ฿7,500
          </button>
        </div>
            {seatsData
              .filter((seat) => !selectedPrice || seat.price === selectedPrice)
              .map((seat, index) => (
                <div
                  key={index}
                  className="seat-item"
                  onMouseEnter={() => handleMouseEnter(seat)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleSeatClick(seat)} // เพิ่มการคลิกที่นั่ง
                >
                  <span className={`seat-type ${seat.color}`}>{seat.type}</span>
                  <span className="seat-name">{seat.name}</span>
                  <span className="seat-price">฿{seat.price}</span>
                  <span className="seat-arrow">➔</span>
                </div>
              ))}
          </div>
          
        ) : (
          <div className="selected-info">
            <h3>ที่นั่งที่เลือก: {selectedSeat.name}</h3>
            <h3>ราคาต่อใบ: ฿{selectedSeat.price}</h3>
            <h3>จำนวนใบตั๋วที่เลือก: {ticketCount}</h3>
            <h3>ราคาทั้งหมด: ฿{totalPrice}</h3>
            <div>
              <label>
                จำนวนใบตั๋ว:
                <input
                  type="number"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Number(e.target.value))}
                  min={1}
                />
              </label>
            </div>
            <button className="numberr" onClick={() => setSelectedSeat(null)}>
              เลือกที่นั่งใหม่
            </button>
          </div>
        )}
      </div>

      <div className="seating-map">
        <h3 className="countdown">
          เวลาที่ทำรายการ{" "}
          <span className="countdown-time">{formatTime(timeRemaining)}</span>
        </h3>
        <div className="map-placeholder">
          <div className="stage">
            <div className="stage-label">STAGE</div>
          </div>
          <div className="seats-border">
            <div className="seats-under-stage">
              <div
                className="seat corner-left"
                onMouseEnter={() => setHoveredSeat(seatsData[7])} // AA1
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[7])} // เพิ่มการคลิกที่นั่ง
              >
                AA1
              </div>
              <div
                className="seat center"
                onMouseEnter={() => setHoveredSeat(seatsData[8])} // AA2
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[8])} // เพิ่มการคลิกที่นั่ง
              >
                AA2
              </div>
              <div
                className="seat corner-right"
                onMouseEnter={() => setHoveredSeat(seatsData[9])} // AA3
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[9])} // เพิ่มการคลิกที่นั่ง
              >
                AA3
              </div>
            </div>
            <div className="seats-under-stage">
              <div
                className="seatt corner-left"
                onMouseEnter={() => setHoveredSeat(seatsData[4])} // AA4
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[4])} // เพิ่มการคลิกที่นั่ง
              >
                AA4
              </div>
              <div
                className="seatt center"
                onMouseEnter={() => setHoveredSeat(seatsData[5])} // AA5
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[5])} // เพิ่มการคลิกที่นั่ง
              >
                AA5
              </div>
              <div
                className="seatt corner-right"
                onMouseEnter={() => setHoveredSeat(seatsData[6])} // AA6
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[6])} // เพิ่มการคลิกที่นั่ง
              >
                AA6
              </div>
            </div>
            <div className="seats-under-stage">
              <div
                className="seattt corner-left"
                onMouseEnter={() => setHoveredSeat(seatsData[1])} // BB1
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[1])} // เพิ่มการคลิกที่นั่ง
              >
                BB1
              </div>
              <div
                className="seattt center"
                onMouseEnter={() => setHoveredSeat(seatsData[2])} // BB2
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[2])} // เพิ่มการคลิกที่นั่ง
              >
                BB2
              </div>
              <div
                className="seattt corner-right"
                onMouseEnter={() => setHoveredSeat(seatsData[3])} // BB3
                onMouseLeave={() => setHoveredSeat(null)}
                onClick={() => handleSeatClick(seatsData[3])} // เพิ่มการคลิกที่นั่ง
              >
                BB3
              </div>
            </div>
            <div
              className="seattt center1"
              onMouseEnter={() => setHoveredSeat(seatsData[0])} // BB3
              onMouseLeave={() => setHoveredSeat(null)}
              onClick={() => handleSeatClick(seatsData[0])} // เพิ่มการคลิกที่นั่ง
            >
              STD
            </div>
          </div>
          {/* แสดงข้อมูลที่นั่งที่ถูกเลื่อนเมาส์ไป */}
          {hoveredSeat && (
            <div className="hovered-seat-info">
              <h4 style={{ color: "red" }}>ราคา: ฿{hoveredSeat.price}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
