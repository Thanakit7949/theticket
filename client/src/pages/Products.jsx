import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'; 
import './styles.css';
import toy from '../assets/toy.jpg';
import labubu from '../assets/labubu.jpg';
import molly from '../assets/molly.jpg';
import pop1 from '../assets/pop1.jpg';
import pop2 from '../assets/pop2.jpg';
import pop3 from '../assets/pop3.jpg';

const Products = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Featured Products');
    const [activeProducts, setActiveProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [categoryType, setCategoryType] = useState('concerts'); 
    const [searchTerm, setSearchTerm] = useState(""); 

    const concertCategories = [
        {
            name: "Featured Products",
            items: [
                { id: 1, name: "Concert A", price: "$25", imageUrl: molly },
                { id: 2, name: "Concert B", price: "$30", imageUrl: toy },
                { id: 3, name: "Concert C", price: "$20", imageUrl: pop1 },
                { id: 4, name: "boytokl", price: "$250", imageUrl: pop2 },
                { id: 5, name: "ybuvi", price: "$350", imageUrl: toy },
                { id: 6, name: "hiugiuyvyg", price: "$1850", imageUrl: pop3 },
                { id: 7, name: "kbuvcxtshiujnjoko", price: "$120", imageUrl: pop1 },
                { id: 8, name: "[kojhugi", price: "$120", imageUrl: pop2 },
                { id: 9, name: "suaymakkaaa", price: "$1200", imageUrl: pop3 },
                { id: 10, name: "poppysood", price: "$320", imageUrl: molly },
                { id: 11, name: "Raknakasis", price: "$350", imageUrl: toy },
                { id: 12, name: "PenraiAei", price: "$185", imageUrl: pop3 },
                { id: 13, name: "Kobkhunnataaeng", price: "$750", imageUrl: pop2 },
                { id: 14, name: "Raktherteesoodd", price: "$250", imageUrl: pop1 },
                { id: 15, name: "So cute So cong mak yer", price: "$99", imageUrl: molly },
            ],
        },
        {
            name: "New Arrivals",
            items: [
                { id: 16, name: "Concert D", price: "$40", imageUrl: pop2 },
                { id: 17, name: "Concert E", price: "$35", imageUrl: pop3 },
            ],
        },
        {
            name: "On Sale",
            items: [
                { id: 18, name: "Product G", price: "$15", imageUrl: "path/to/imageG.jpg" },
                { id: 19, name: "Product H", price: "$10", imageUrl: "path/to/imageH.jpg" },
            ],
        },
        {
            name: "TOP Products",
            items: [
                { id: 20, name: "Product A", price: "$25", imageUrl: "path/to/imageA.jpg" },
                { id: 21, name: "Product B", price: "$30", imageUrl: "path/to/imageB.jpg" },
                { id: 22, name: "Product C", price: "$20", imageUrl: "path/to/imageC.jpg" },
            ],
        },
        {
            name: "Exclusive Products",
            items: [
                { id: 23, name: "Product A", price: "$25", imageUrl: "path/to/imageA.jpg" },
                { id: 24, name: "Product B", price: "$30", imageUrl: "path/to/imageB.jpg" },
                { id: 25, name: "Product C", price: "$20", imageUrl: "path/to/imageC.jpg" },
            ],
        },

    ];

    const sportsCategories = [
        {
            name: "Featured Sports",
            items: [
                { id: 26, name: "Sports A", price: "$25", imageUrl: "path/to/sportsA.jpg" },
                { id: 27, name: "Sports B", price: "$30", imageUrl: "path/to/sportsB.jpg" },
            ],
        },
        {
            name: "On Sale",
            items: [
                { id: 28, name: "Sports C", price: "$15", imageUrl: "path/to/sportsC.jpg" },
                { id: 29, name: "Sports D", price: "$200", imageUrl: "path/to/sportsC.jpg" },
            ],
        },
        {
            name: "On present",
            items: [
                { id: 30, name: "Sports E", price: "$180", imageUrl: "path/to/sportsC.jpg" },
                { id: 31, name: "Sports F", price: "$150", imageUrl: "path/to/sportsC.jpg" },
            ],
        },
        {
            name: "pppp",
            items: [
                { id: 32, name: "Sports G", price: "$1500", imageUrl: "path/to/sportsC.jpg" },
                { id: 33, name: "Sports H", price: "$1250", imageUrl: "path/to/sportsC.jpg" },
            ],
        },
        {
            name: "ppp99p",
            items: [
                { id: 34, name: "Sports J", price: "$140", imageUrl: "path/to/sportsC.jpg" },
                { id: 35, name: "Sports K", price: "$180", imageUrl: "path/to/sportsC.jpg" },
            ],
        },

    ];

    useEffect(() => {
        const categories = categoryType === 'sports' ? sportsCategories : concertCategories;
        setActiveCategory(categories[0].name);
        setActiveProducts(categories[0].items);
    }, [categoryType]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category.name);
        setActiveProducts(category.items);
    };

    const handleConcertClick = () => {
        setCategoryType('concerts');
    };

    const handleSportsClick = () => {
        setCategoryType('sports');
    };

    const increaseQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + 1,
        }));
    };

    const decreaseQuantity = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 1) - 1, 0),
        }));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = activeProducts.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleConfirmPurchase = () => {
        const selectedItems = activeProducts.filter(item => quantities[item.id] > 0);
        
        if (selectedItems.length === 0) {
            alert("No item selected!");
            return;
        }

        const cartItems = selectedItems.map(item => {
            const price = parseFloat(item.price.replace('$', ''));
            const quantity = quantities[item.id] || 0;
            const total = price * quantity;
            return { ...item, quantity, total };
        });

        const grandTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

        navigate("/cart", {
            state: {
                items: cartItems,
                grandTotal: grandTotal
            }
        });
    };

    return (
        <div className="products-container-main">
            <h1 className="products-title-main"> 🛒 Products 🧺</h1>

            <div className="search-bar-container">
                <div className="search-bar-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        placeholder="Search for products..."
                        className="search-bar"
                    />
                </div>
            </div>

            <div className="navbar">
                <div className="navbar-item" onClick={handleConcertClick}>
                    คอนเสิร์ต
                </div>
                <div className="navbar-item" onClick={handleSportsClick}>
                    กีฬา
                </div>
            </div>

            <div className="navbar">
                {(categoryType === 'sports' ? sportsCategories : concertCategories).map((category) => (
                    <div
                        key={category.name}
                        className={`navbar-item ${activeCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            <div className="products-grid">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.imageUrl} alt={item.name} className="product-image" />
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-price">{item.price}</p>

                        <div className="quantity-controls">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{quantities[item.id] || 0}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="confirm-purchase-button" onClick={handleConfirmPurchase}>
                Confirm Purchase
            </button>
        </div>
    );
};

export default Products;
