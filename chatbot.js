// Voyage Vista Travel Chatbot

class TravelChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.createChatbotUI();
        this.initEventListeners();
        this.knowledgeBase = this.loadKnowledgeBase();
        this.typingSpeed = 30; // ms per character
        this.welcomeShown = false;
        this.userInfo = {
            name: '',
            email: '',
            interested: ''
        };
        this.askingFor = null;
    }

    createChatbotUI() {
        // Create main chatbot container
        const chatbotHTML = `
            <div class="chatbot-container">
                <div class="chatbot-button">
                    <div class="chatbot-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="chatbot-badge">1</div>
                </div>
                <div class="floating-message">
                    <p>Hi there! I'm your travel assistant. Need help planning your trip?</p>
                    <button class="dismiss-message"><i class="fas fa-times"></i></button>
                </div>
                <div class="chatbot-box">
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Voyage Assistant" class="assistant-avatar">
                            <div>
                                <h3>Voyage Assistant</h3>
                                <span class="status">Online</span>
                            </div>
                        </div>
                        <div class="chatbot-controls">
                            <button class="minimize-btn"><i class="fas fa-minus"></i></button>
                            <button class="close-btn"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div class="chatbot-messages"></div>
                    <div class="chatbot-suggestions">
                        <div class="suggestions-title">Suggested Questions:</div>
                        <div class="suggestion-chips">
                            <button class="suggestion-chip">Popular destinations</button>
                            <button class="suggestion-chip">Best time to visit India</button>
                            <button class="suggestion-chip">Package pricing</button>
                            <button class="suggestion-chip">Booking process</button>
                        </div>
                    </div>
                    <div class="chatbot-input-container">
                        <input type="text" class="chatbot-input" placeholder="Type your message here...">
                        <button class="chatbot-send"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `;

        // Create styles for the chatbot
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                font-family: 'Arial', sans-serif;
            }

            .chatbot-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #FF7722;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                position: relative;
                transition: all 0.3s ease;
                z-index: 1001;
            }

            .chatbot-button:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            }

            .chatbot-icon {
                color: white;
                font-size: 24px;
            }

            .chatbot-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff3e3e;
                color: white;
                font-size: 12px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .chatbot-box {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 420px;
                height: 600px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                opacity: 0;
                transform: translateY(20px) scale(0.9);
                pointer-events: none;
                transition: all 0.3s ease;
            }

            .chatbot-box.active {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: all;
            }

            /* Responsive adjustments */
            @media (max-width: 480px) {
                .chatbot-box {
                    width: calc(100vw - 40px);
                    height: 70vh;
                    bottom: 70px;
                }
            }
            
            .chatbot-header {
                background: #FF7722;
                color: white;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .chatbot-title {
                display: flex;
                align-items: center;
            }

            .assistant-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
                background: white;
            }

            .chatbot-title h3 {
                margin: 0;
                font-size: 16px;
            }

            .status {
                font-size: 12px;
                opacity: 0.8;
            }

            .chatbot-controls button {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: 10px;
                font-size: 14px;
                opacity: 0.8;
                transition: opacity 0.3s;
            }

            .chatbot-controls button:hover {
                opacity: 1;
            }

            .chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                background: #f5f5f5;
                display: flex;
                flex-direction: column;
            }

            .message {
                max-width: 80%;
                margin-bottom: 15px;
                padding: 10px 15px;
                border-radius: 15px;
                position: relative;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .bot-message {
                background: white;
                color: #333;
                align-self: flex-start;
                border-bottom-left-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .bot-message.special {
                background: #FFF8EE;
                border-left: 3px solid #FF7722;
            }

            .user-message {
                background: #FF7722;
                color: white;
                align-self: flex-end;
                border-bottom-right-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .message-icon {
                margin-right: 8px;
                color: #FF7722;
            }

            .typing-indicator {
                display: flex;
                align-items: center;
                padding: 10px 15px;
                background: white;
                border-radius: 15px;
                border-bottom-left-radius: 5px;
                max-width: 80%;
                align-self: flex-start;
                margin-bottom: 15px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .typing-indicator span {
                height: 8px;
                width: 8px;
                background: #FF7722;
                border-radius: 50%;
                display: inline-block;
                margin-right: 5px;
                animation: typing 1.3s infinite ease-in-out;
            }

            .typing-indicator span:nth-child(1) { animation-delay: 0s; }
            .typing-indicator span:nth-child(2) { animation-delay: 0.3s; }
            .typing-indicator span:nth-child(3) { animation-delay: 0.6s; }

            @keyframes typing {
                0%, 60%, 100% { transform: translateY(0); }
                30% { transform: translateY(-5px); }
            }

            .chatbot-suggestions {
                padding: 10px 15px;
                background: #f8f8f8;
                border-top: 1px solid #eee;
            }

            .suggestions-title {
                font-size: 12px;
                color: #888;
                margin-bottom: 8px;
            }

            .suggestion-chips {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }

            .suggestion-chip {
                padding: 6px 12px;
                background: white;
                border: 1px solid #ddd;
                border-radius: 20px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .suggestion-chip:hover {
                background: #FF7722;
                color: white;
                border-color: #FF7722;
            }

            .chatbot-input-container {
                display: flex;
                padding: 10px 15px;
                background: white;
                border-top: 1px solid #eee;
            }

            .chatbot-input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 20px;
                outline: none;
            }

            .chatbot-input:focus {
                border-color: #FF7722;
            }

            .chatbot-send {
                background: #FF7722;
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-left: 10px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .chatbot-send:hover {
                background: #E65C00;
                transform: scale(1.05);
            }

            .floating-message {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 280px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                padding: 15px;
                margin-right: 10px;
                display: none;
                animation: floatIn 0.5s ease forwards;
                z-index: 1001;
                border-left: 4px solid #FF7722;
            }

            .floating-message p {
                margin: 0;
                padding-right: 20px;
                font-size: 14px;
                color: #333;
            }

            .dismiss-message {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                color: #999;
                cursor: pointer;
                font-size: 12px;
                padding: 0;
            }

            .dismiss-message:hover {
                color: #FF7722;
            }

            @keyframes floatIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes floatOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);

        // Append chatbot to the body
        const chatbotDiv = document.createElement('div');
        chatbotDiv.innerHTML = chatbotHTML;
        document.body.appendChild(chatbotDiv);

        // Store DOM elements
        this.chatbotButton = document.querySelector('.chatbot-button');
        this.chatbotBox = document.querySelector('.chatbot-box');
        this.chatbotMessages = document.querySelector('.chatbot-messages');
        this.chatbotInput = document.querySelector('.chatbot-input');
        this.chatbotSend = document.querySelector('.chatbot-send');
        this.minimizeBtn = document.querySelector('.minimize-btn');
        this.closeBtn = document.querySelector('.close-btn');
        this.suggestionChips = document.querySelectorAll('.suggestion-chip');
        this.floatingMessage = document.querySelector('.floating-message');
        this.dismissMessageBtn = document.querySelector('.dismiss-message');
    }

    initEventListeners() {
        // Toggle chatbot on button click
        this.chatbotButton.addEventListener('click', () => this.toggleChatbot());

        // Send message on button click
        this.chatbotSend.addEventListener('click', () => this.sendMessage());

        // Send message on Enter key
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Close or minimize chatbot
        this.minimizeBtn.addEventListener('click', () => this.toggleChatbot());
        this.closeBtn.addEventListener('click', () => this.toggleChatbot(false));

        // Handle suggestion chips
        this.suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                this.chatbotInput.value = chip.textContent;
                this.sendMessage();
            });
        });

        // Dismiss floating message
        if (this.dismissMessageBtn) {
            this.dismissMessageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hideFloatingMessage();
            });
        }

        // Open chat when clicking on floating message
        if (this.floatingMessage) {
            this.floatingMessage.addEventListener('click', () => {
                this.hideFloatingMessage();
                this.toggleChatbot(true);
            });
        }
    }

    toggleChatbot(show = null) {
        // If show is explicitly set, use that value, otherwise toggle
        this.isOpen = show !== null ? show : !this.isOpen;
        
        if (this.isOpen) {
            this.chatbotBox.classList.add('active');
            document.querySelector('.chatbot-badge').style.display = 'none';
            
            // Show welcome message if not shown before in this session
            if (!this.welcomeShown) {
                this.showWelcomeMessage();
                this.welcomeShown = true;
            }

            // Focus the input field
            setTimeout(() => this.chatbotInput.focus(), 300);
        } else {
            this.chatbotBox.classList.remove('active');
        }
    }

    sendMessage() {
        const userMessage = this.chatbotInput.value.trim();
        if (userMessage === '') return;

        // Add user message to chat
        this.addMessage('user', userMessage);
        this.chatbotInput.value = '';

        // Handle user info collection if in progress
        if (this.askingFor) {
            this.collectUserInfo(userMessage);
            return;
        }

        // Show typing indicator
        this.showTypingIndicator();

        // Process the message and respond
        setTimeout(() => {
            this.removeTypingIndicator();
            this.processMessage(userMessage);
        }, 1000 + Math.random() * 1000); // Random delay for realism
    }

    addMessage(sender, message, isHtml = false, isSpecial = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        if (isSpecial) messageDiv.classList.add('special');
        
        if (isHtml) {
            messageDiv.innerHTML = message;
        } else {
            messageDiv.textContent = message;
        }
        
        this.chatbotMessages.appendChild(messageDiv);
        
        // Scroll to the bottom
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
        
        // Store the message
        this.messages.push({ sender, message });
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        this.chatbotMessages.appendChild(indicator);
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    }

    animateResponse(message, isHtml = false, isSpecial = false) {
        // Calculate typing duration based on message length
        const duration = Math.min(1500, message.length * this.typingSpeed);
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.removeTypingIndicator();
            this.addMessage('bot', message, isHtml, isSpecial);
        }, duration);
    }

    showWelcomeMessage() {
        const welcomeMessage = `
            <div>
                <i class="fas fa-robot message-icon"></i>
                Hello! I am your travel assistant from Voyage Vista. I'm here to help you plan your perfect Indian adventure.
                <br><br>
                How may I assist you today with your travel plans?
            </div>
        `;
        setTimeout(() => this.animateResponse(welcomeMessage, true, true), 500);
    }

    processMessage(userMessage) {
        // Convert to lowercase for easier matching
        const message = userMessage.toLowerCase();
        
        // Check for greetings
        if (this.isGreeting(message)) {
            this.handleGreeting();
            return;
        }
        
        // Check for contact/booking intent
        if (this.isContactRequest(message)) {
            this.startContactCollection();
            return;
        }
        
        // Check for destination queries
        if (message.includes('destination') || message.includes('place') || message.includes('visit')) {
            this.handleDestinationQuery(message);
            return;
        }
        
        // Check for package/pricing queries
        if (message.includes('package') || message.includes('price') || message.includes('cost') || message.includes('tour')) {
            this.handlePackageQuery(message);
            return;
        }
        
        // Check for time/season queries
        if (message.includes('when') || message.includes('best time') || message.includes('season')) {
            this.handleTimeQuery(message);
            return;
        }
        
        // Check for booking process queries
        if (message.includes('book') || message.includes('reservation') || message.includes('payment')) {
            this.handleBookingQuery();
            return;
        }
        
        // Default response if no match
        this.handleDefaultResponse();
    }

    isGreeting(message) {
        const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
        return greetings.some(greeting => message.includes(greeting));
    }

    isContactRequest(message) {
        const contactTerms = ['contact', 'talk', 'agent', 'book', 'human', 'person', 'help me book'];
        return contactTerms.some(term => message.includes(term));
    }

    handleGreeting() {
        const time = new Date().getHours();
        let greeting = 'Hello';
        
        if (time < 12) greeting = 'Good morning';
        else if (time < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';
        
        const response = `
            <div>
                <i class="fas fa-smile message-icon"></i>
                ${greeting}! How can I assist with your travel plans in India today? 
                <br><br>
                I can help with destinations, package information, booking process, or connect you with our travel experts.
            </div>
        `;
        
        this.animateResponse(response, true, true);
    }

    handleDestinationQuery(message) {
        let response;
        
        // Check for specific regions/destinations
        if (message.includes('south') || message.includes('kerala') || message.includes('tamil')) {
            response = `
                <div>
                    <i class="fas fa-map-marker-alt message-icon"></i>
                    <strong>South India Destinations:</strong>
                    <br><br>
                    South India offers beautiful beaches in Kerala, ancient temples in Tamil Nadu, and tech hubs like Bangalore.
                    <br><br>
                    Popular packages:
                    <ul>
                        <li>Kerala Backwaters Bliss (6 Days)</li>
                        <li>Ooty & Coonoor (5 Days)</li>
                        <li>Madurai & Rameshwaram (5 Days)</li>
                    </ul>
                    <br>
                    Would you like details on any of these packages?
                </div>
            `;
        } else if (message.includes('north') || message.includes('himalaya') || message.includes('rajasthan')) {
            response = `
                <div>
                    <i class="fas fa-mountain message-icon"></i>
                    <strong>North India Destinations:</strong>
                    <br><br>
                    North India features the majestic Himalayas, cultural Delhi, spiritual Varanasi, and royal Rajasthan.
                    <br><br>
                    Popular packages:
                    <ul>
                        <li>Royal Rajasthan (7 Days)</li>
                        <li>Himalayan Escapade (8 Days)</li>
                        <li>Spiritual Varanasi (5 Days)</li>
                    </ul>
                    <br>
                    Would you like more information on any of these?
                </div>
            `;
        } else {
            response = `
                <div>
                    <i class="fas fa-globe-asia message-icon"></i>
                    <strong>Popular India Destinations:</strong>
                    <br><br>
                    India offers diverse experiences across different regions:
                    <br><br>
                    <ul>
                        <li><strong>North:</strong> Himalayas, Delhi, Rajasthan</li>
                        <li><strong>South:</strong> Kerala backwaters, Tamil temples</li>
                        <li><strong>East:</strong> Kolkata, Darjeeling, Northeast</li>
                        <li><strong>West:</strong> Mumbai, Goa beaches, Gujarat</li>
                    </ul>
                    <br>
                    Which region interests you the most?
                </div>
            `;
        }
        
        this.animateResponse(response, true, true);
    }

    handlePackageQuery(message) {
        // Check for specific package types
        if (message.includes('kerala') || message.includes('backwater')) {
            const response = `
                <div>
                    <i class="fas fa-water message-icon"></i>
                    <strong>Kerala Backwaters Bliss</strong>
                    <br><br>
                    <strong>Price:</strong> ₹38,999 per person
                    <strong>Duration:</strong> 6 Days
                    <br><br>
                    This package includes:
                    <ul>
                        <li>Houseboat stay in Alleppey</li>
                        <li>Visit to Munnar tea plantations</li>
                        <li>Cochin city tour</li>
                        <li>All meals and transfers</li>
                    </ul>
                    <br>
                    Would you like to book this package or learn about others?
                </div>
            `;
            this.animateResponse(response, true, true);
        } else if (message.includes('rajasthan') || message.includes('royal')) {
            const response = `
                <div>
                    <i class="fas fa-crown message-icon"></i>
                    <strong>Royal Rajasthan</strong>
                    <br><br>
                    <strong>Price:</strong> ₹45,999 per person
                    <strong>Duration:</strong> 7 Days
                    <br><br>
                    This package includes:
                    <ul>
                        <li>Jaipur, Jodhpur and Udaipur tours</li>
                        <li>Stay in heritage hotels</li>
                        <li>Cultural performances</li>
                        <li>All meals and transfers</li>
                    </ul>
                    <br>
                    Would you like me to arrange a call with our travel expert?
                </div>
            `;
            this.animateResponse(response, true, true);
        } else {
            const response = `
                <div>
                    <i class="fas fa-suitcase message-icon"></i>
                    <strong>Our Popular Packages:</strong>
                    <br><br>
                    We offer a variety of packages across India:
                    <br><br>
                    <ul>
                        <li>Royal Rajasthan: ₹45,999 (7 Days)</li>
                        <li>Kerala Backwaters: ₹38,999 (6 Days)</li>
                        <li>Himalayan Escapade: ₹52,999 (8 Days)</li>
                        <li>Spiritual Varanasi: ₹29,999 (5 Days)</li>
                        <li>Ooty & Coonoor: ₹29,999 (5 Days)</li>
                    </ul>
                    <br>
                    All packages include accommodation, meals, transportation, and guided tours.
                    <br><br>
                    Which package would you like to know more about?
                </div>
            `;
            this.animateResponse(response, true, true);
        }
    }

    handleTimeQuery(message) {
        const response = `
            <div>
                <i class="fas fa-calendar-alt message-icon"></i>
                <strong>Best Time to Visit India</strong>
                <br><br>
                The ideal time depends on the region:
                <br><br>
                <ul>
                    <li><strong>North India:</strong> October to March (avoid summer heat)</li>
                    <li><strong>South India:</strong> November to February (comfortable weather)</li>
                    <li><strong>Himalayas:</strong> April to June for most areas (Sept-Oct for trekking)</li>
                    <li><strong>Rajasthan:</strong> October to March (pleasant for sightseeing)</li>
                    <li><strong>Kerala:</strong> September to March (after monsoon)</li>
                </ul>
                <br>
                When are you planning to travel?
            </div>
        `;
        this.animateResponse(response, true, true);
    }

    handleBookingQuery() {
        const response = `
            <div>
                <i class="fas fa-credit-card message-icon"></i>
                <strong>Booking Process</strong>
                <br><br>
                Booking with Voyage Vista is simple:
                <br><br>
                <ol>
                    <li>Select your desired package or request a custom tour</li>
                    <li>Fill out the booking form or contact us directly</li>
                    <li>Pay a 25% deposit to confirm your booking</li>
                    <li>Receive confirmation and detailed itinerary by email</li>
                    <li>Pay the balance 30 days before your trip</li>
                </ol>
                <br>
                Would you like to start the booking process now?
            </div>
        `;
        this.animateResponse(response, true, true);
    }

    handleDefaultResponse() {
        const responses = [
            `<div><i class="fas fa-lightbulb message-icon"></i>I'm not sure I understood that. Could you rephrase or ask about our destinations, packages, or booking process?</div>`,
            `<div><i class="fas fa-question-circle message-icon"></i>I'm still learning! Could you ask about our travel packages, destinations in India, or how to book?</div>`,
            `<div><i class="fas fa-comment message-icon"></i>Let me connect you with more specific information. Are you interested in a particular region of India or a specific type of vacation?</div>`
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        this.animateResponse(randomResponse, true, true);
    }

    startContactCollection() {
        this.askingFor = 'name';
        const response = `
            <div>
                <i class="fas fa-user message-icon"></i>
                I'd be happy to connect you with our travel expert. Could you please share your name?
            </div>
        `;
        this.animateResponse(response, true, true);
    }

    collectUserInfo(message) {
        if (this.askingFor === 'name') {
            this.userInfo.name = message;
            this.askingFor = 'email';
            const response = `
                <div>
                    <i class="fas fa-envelope message-icon"></i>
                    Thanks, ${this.userInfo.name}! Could you please share your email address so our travel expert can contact you?
                </div>
            `;
            this.animateResponse(response, true, true);
        } else if (this.askingFor === 'email') {
            this.userInfo.email = message;
            this.askingFor = 'interested';
            const response = `
                <div>
                    <i class="fas fa-globe message-icon"></i>
                    Great! And which destination or package are you most interested in?
                </div>
            `;
            this.animateResponse(response, true, true);
        } else if (this.askingFor === 'interested') {
            this.userInfo.interested = message;
            this.askingFor = null;
            const response = `
                <div>
                    <i class="fas fa-check-circle message-icon"></i>
                    <strong>Thank you for your interest!</strong>
                    <br><br>
                    I've collected the following information:
                    <br><br>
                    <ul>
                        <li><strong>Name:</strong> ${this.userInfo.name}</li>
                        <li><strong>Email:</strong> ${this.userInfo.email}</li>
                        <li><strong>Interest:</strong> ${this.userInfo.interested}</li>
                    </ul>
                    <br>
                    One of our travel experts will contact you within 24 hours to discuss your trip to ${this.userInfo.interested}.
                    <br><br>
                    Is there anything else I can help you with while you wait?
                </div>
            `;
            this.animateResponse(response, true, true);
        }
    }

    loadKnowledgeBase() {
        // In a real implementation, this could load data from other pages
        // For this demo, we'll use a hard-coded knowledge base
        return {
            destinations: {
                northIndia: ['Delhi', 'Agra', 'Jaipur', 'Varanasi', 'Himalayas', 'Rajasthan'],
                southIndia: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Goa', 'Andhra Pradesh'],
                eastIndia: ['Kolkata', 'Darjeeling', 'Sikkim', 'Assam', 'Meghalaya'],
                westIndia: ['Mumbai', 'Gujarat', 'Maharashtra']
            },
            packages: {
                'Royal Rajasthan': {
                    price: '₹45,999',
                    duration: '7 Days',
                    highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Heritage hotels', 'Cultural experiences']
                },
                'Kerala Backwaters': {
                    price: '₹38,999',
                    duration: '6 Days',
                    highlights: ['Houseboat stay', 'Munnar', 'Cochin', 'Beaches']
                },
                'Himalayan Escapade': {
                    price: '₹52,999',
                    duration: '8 Days',
                    highlights: ['Shimla', 'Manali', 'Mountain views', 'Adventure activities']
                }
            },
            faqs: {
                'best time': 'The best time to visit India depends on the region. Generally, October to March is ideal for most regions.',
                'visa': 'Most visitors need a visa to visit India. E-visas are available for many nationalities.',
                'currency': 'The currency of India is the Indian Rupee (INR). ATMs are widely available in cities.',
                'language': 'Hindi is the main language, but English is widely spoken in tourist areas.'
            }
        };
    }
}

// Initialize the chatbot when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load FontAwesome for icons
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }
    
    // Initialize the chatbot
    window.travelChatbot = new TravelChatbot();
    
    // Show notification badge and floating message
    setTimeout(() => {
        const chatbotBadge = document.querySelector('.chatbot-badge');
        if (chatbotBadge) {
            chatbotBadge.textContent = '1';
            chatbotBadge.style.display = 'flex';
        }
        
        // Show floating message instead of auto-opening the chat
        if (window.travelChatbot) {
            window.travelChatbot.showFloatingMessage();
        }
    }, 1500);
});
