// Language handling module for Voyage Vista

// Default language
let currentLanguage = localStorage.getItem('voyageVista_language') || 'en';

// Translations object - stores all text content for different languages
const translations = {
    en: {
        // Navbar
        home: "Home",
        destinations: "Destinations",
        about: "About",
        contact: "Contact",
        
        // Homepage
        heroTitle: "Discover Incredible India with Our Premium Travel Packages",
        heroSubtitle: "Experience the rich culture, stunning landscapes, and ancient traditions with exclusive deals tailored for your perfect Indian adventure",
        exploreBtn: "Explore Destinations",
        whyChoose: "Why Choose Voyage Vista?",
        whyChooseDesc: "We curate exceptional Indian travel experiences with personalized service, exclusive deals, and unforgettable adventures to make your dream vacation in India a reality.",
        
        // Features
        authenticExperiences: "Authentic Experiences",
        authenticDesc: "We provide culturally immersive experiences that connect you with the real India, from village homestays to traditional culinary journeys.",
        bestValue: "Best Value Guarantee",
        bestValueDesc: "We promise the most competitive prices for all our Indian travel packages with no hidden fees or unexpected costs.",
        support: "24/7 Local Support",
        supportDesc: "Our Indian travel experts are available round the clock to assist you in English and regional languages throughout your journey.",
        
        // New Homepage Content
        // Interactive Banner
        experienceDiversityTitle: "Experience the Diversity of India",
        experienceDiversitySubtitle: "From the snow-capped Himalayas to the tropical beaches of Kerala, from ancient temples to bustling modern cities, India offers countless experiences for every kind of traveler.",
        highlightCulinary: "Culinary Adventures",
        highlightSpiritual: "Spiritual Journeys",
        highlightAdventure: "Adventure Tours",
        highlightCultural: "Cultural Exploration",
        discoverToursButton: "Discover Our Tours",

        // Destination Highlights
        exploreRegionTitle: "Explore India by Region",
        regionTNTitle: "Tamil Nadu",
        regionTNDesc: "Ancient temples, hill stations, and vibrant culture",
        regionNITitle: "North India",
        regionNIDesc: "Royal palaces, mountains, and spiritual centers",
        regionSITitle: "South India",
        regionSIDesc: "Backwaters, beaches, and ancient traditions",
        regionNETitle: "Northeast India",
        regionNEDesc: "Lush landscapes, tribal cultures, and wildlife",
        viewAllDestinationsButton: "View All Destinations",

        // Travel Stats
        statsHappyTravelersLabel: "Happy Travelers",
        statsDestinationsLabel: "Destinations",
        statsSatisfactionRateLabel: "Satisfaction Rate",
        statsYearsExperienceLabel: "Years Experience",

        // Testimonials
        testimonialsTitle: "What Our Travelers Say",
        testimonial1Quote: "\"Our Rajasthan trip was magical! The heritage hotels, traditional Rajasthani cuisine, and the cultural experiences were beyond our expectations. The local guides shared fascinating stories about each fort and palace!\"",
        testimonial1Author: "Lakshmi Subramaniam, Chennai",
        testimonial2Quote: "\"The Kerala package was perfect for our honeymoon. The houseboat stay in the backwaters was so peaceful, and the ayurvedic spa treatments were rejuvenating. Truly a slice of paradise!\"",
        testimonial2Author: "Ravi Krishnan, Coimbatore",
        testimonial3Quote: "\"As a solo female traveler, I was concerned about safety in the mountains. Voyage Vista arranged everything perfectly, and their local contacts made me feel secure throughout my Himalayan adventure!\"",
        testimonial3Author: "Deepa Natarajan, Madurai",

        // Newsletter
        newsletterSectionTitle: "Get Exclusive Indian Travel Deals",
        newsletterSectionSubtitle: "Subscribe to our newsletter and be the first to receive special offers, festival packages, and expert travel tips for exploring India.",
        newsletterEmailPlaceholder: "Your Email Address",
        newsletterSubscribeButton: "Subscribe",
        
        // Destinations page
        explorePackages: "Explore Our Premium Indian Packages",
        discoverHandcrafted: "Discover handcrafted travel experiences throughout incredible India",
        findJourney: "Find Your Perfect Journey",
        selectRegion: "Select Region",
        tamilNadu: "Tamil Nadu",
        northIndia: "North India",
        southIndia: "South India",
        eastNortheastIndia: "East & Northeast India",
        westCentralIndia: "West & Central India",
        duration: "Duration",
        days1to3: "1-3 Days",
        days4to7: "4-7 Days",
        days8to14: "8-14 Days",
        days15Plus: "15+ Days",
        budget: "Budget",
        economy: "Economy",
        standard: "Standard",
        premium: "Premium",
        luxury: "Luxury",
        interest: "Interest",
        cultureHeritage: "Culture & Heritage",
        wildlife: "Wildlife",
        adventure: "Adventure",
        spiritual: "Spiritual",
        beaches: "Beaches",
        applyFilters: "Apply Filters",
        
        // Booking section
        howToBook: "How to Book Your Journey",
        bookingStep1Title: "Select Package",
        bookingStep1Desc: "Browse our carefully curated packages and choose the one that matches your travel preferences.",
        bookingStep2Title: "Submit Inquiry",
        bookingStep2Desc: "Fill out the booking form with your travel dates and preferences for a customized quote.",
        bookingStep3Title: "Confirm Details",
        bookingStep3Desc: "Our travel experts will contact you to confirm all arrangements and finalize your itinerary.",
        bookingStep4Title: "Secure Payment",
        bookingStep4Desc: "Make a secure payment to confirm your booking and get ready for your adventure.",
        
        // Package listings
        popularPackages: "Our Popular Tour Packages",
        tamilNaduTreasures: "Tamil Nadu Treasures",
        southIndiaWonders: "South India Wonders",
        northIndiaAdventures: "North India Adventures",
        eastNortheastTreasures: "East & Northeast Treasures",
        westCentralIndiaHighlights: "West & Central India Highlights",
        
        // Package features
        days: "Days",
        maxPeople: "Max",
        allMeals: "All Meals",
        
        // Package buttons
        bookNow: "Book Now",
        details: "Details",
        explore: "Explore",
        
        // Booking modal
        bookYourPackage: "Book Your Package",
        fullName: "Full Name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        preferredDate: "Preferred Travel Date",
        travelers: "Number of Travelers",
        specialRequests: "Special Requests",
        submitBooking: "Submit Booking Request",
        
        // Package details
        packageTitle: "Package Title",
        duration: "Duration",
        groupSize: "Group Size",
        accommodation: "Accommodation",
        meals: "Meals",
        transport: "Transport",
        languages: "Languages",
        itinerary: "Your Itinerary",
        included: "What's Included",
        notIncluded: "What's Not Included",
        bookThisPackage: "Book This Package",
        
        // Package descriptions
        ootyDesc: "5 days exploring the beautiful hill stations of Tamil Nadu with tea plantations, botanical gardens, and scenic train rides.",
        maduraiDesc: "5 days experiencing the magnificent Meenakshi Temple, spiritual Rameshwaram, and authentic Tamil cuisine.",
        mahabalipuramDesc: "4 days exploring ancient shore temples, colonial heritage in Chennai, and the vibrant Tamil culture.",
        kanyakumariDesc: "6 days journey to the southernmost tip of India, with stunning sunrise and sunset views, historic temples, and coastal beauty.",
        keralaDesc: "6 days cruising the serene backwaters, exploring spice plantations, and relaxing on Kerala's beautiful beaches.",
        coorgDesc: "5 days exploring the coffee plantations of Coorg, stunning waterfalls, and the vibrant tech city of Bangalore.",
        hampiDesc: "4 days exploring the UNESCO World Heritage Site with ancient ruins, boulder-strewn landscapes, and rich history.",
        rajasthanDesc: "7 days exploring magnificent palaces, majestic forts, and the colorful culture of India's Land of Kings.",
        varanasiDesc: "5 days immersed in the spiritual capital of India with ancient ghats, sacred rituals, and historic temples.",
        himalayanDesc: "8 days journey through the majestic Himalayas, exploring hill stations, and experiencing breathtaking mountain views.",
        darjeelingDesc: "7 days exploring the stunning landscapes and rich culture of East India with tea plantations, monasteries, and breathtaking views of the Kanchenjunga range.",
        arunachalDesc: "8 days exploring the unspoiled natural beauty of Northeast India with living root bridges, crystal clear rivers, and tribal cultures.",
        gujaratDesc: "7 days exploring the rich cultural heritage of Gujarat with the Rann of Kutch, Gir National Park, and ancient temples.",
        ajantaDesc: "5 days exploring the ancient cave temples of Ajanta and Ellora with magnificent sculptures, paintings, and architectural marvels.",
    },
    
    hi: {
        // Navbar
        home: "होम",
        destinations: "गंतव्य",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        
        // Homepage
        heroTitle: "हमारे प्रीमियम ट्रैवल पैकेज के साथ अद्भुत भारत की खोज करें",
        heroSubtitle: "आपकी परफेक्ट भारतीय यात्रा के लिए विशेष ऑफर के साथ समृद्ध संस्कृति, शानदार परिदृश्य और प्राचीन परंपराओं का अनुभव करें",
        exploreBtn: "गंतव्य का पता लगाएं",
        whyChoose: "वॉयेज विस्टा को क्यों चुनें?",
        whyChooseDesc: "हम आपकी सपनों की भारतीय छुट्टी को वास्तविकता बनाने के लिए व्यक्तिगत सेवा, विशेष ऑफर और यादगार अनुभवों के साथ असाधारण भारतीय यात्रा अनुभव प्रदान करते हैं।",
        
        // Features
        authenticExperiences: "प्रामाणिक अनुभव",
        authenticDesc: "हम सांस्कृतिक रूप से समावेशी अनुभव प्रदान करते हैं जो आपको वास्तविक भारत से जोड़ते हैं, गांव के होमस्टे से लेकर पारंपरिक खाद्य यात्राओं तक।",
        bestValue: "सर्वोत्तम मूल्य गारंटी",
        bestValueDesc: "हम अपने सभी भारतीय यात्रा पैकेजों के लिए प्रतिस्पर्धी कीमतों का वादा करते हैं, बिना किसी छिपी हुई फीस या अप्रत्याशित लागत के।",
        support: "24/7 स्थानीय सहायता",
        supportDesc: "हमारे भारतीय यात्रा विशेषज्ञ आपकी यात्रा के दौरान अंग्रेजी और क्षेत्रीय भाषाओं में आपकी सहायता के लिए चौबीसों घंटे उपलब्ध हैं।",

        // New Homepage Content
        // Interactive Banner
        experienceDiversityTitle: "भारत की विविधता का अनुभव करें",
        experienceDiversitySubtitle: "बर्फ से ढके हिमालय से लेकर केरल के उष्णकटिबंधीय समुद्र तटों तक, प्राचीन मंदिरों से लेकर हलचल भरे आधुनिक शहरों तक, भारत हर तरह के यात्री के लिए अनगिनत अनुभव प्रदान करता है।",
        highlightCulinary: "पाककला संबंधी रोमांच",
        highlightSpiritual: "आध्यात्मिक यात्राएँ",
        highlightAdventure: "साहसिक पर्यटन",
        highlightCultural: "सांस्कृतिक अन्वेषण",
        discoverToursButton: "हमारे पर्यटन खोजें",

        // Destination Highlights
        exploreRegionTitle: "क्षेत्र के अनुसार भारत का अन्वेषण करें",
        regionTNTitle: "तमिलनाडु",
        regionTNDesc: "प्राचीन मंदिर, हिल स्टेशन और जीवंत संस्कृति",
        regionNITitle: "उत्तर भारत",
        regionNIDesc: "शाही महल, पहाड़ और आध्यात्मिक केंद्र",
        regionSITitle: "दक्षिण भारत",
        regionSIDesc: "बैकवाटर, समुद्र तट और प्राचीन परंपराएँ",
        regionNETitle: "पूर्वोत्तर भारत",
        regionNEDesc: "हरे-भरे परिदृश्य, जनजातीय संस्कृतियाँ और वन्य जीवन",
        viewAllDestinationsButton: "सभी गंतव्य देखें",

        // Travel Stats
        statsHappyTravelersLabel: "खुश यात्री",
        statsDestinationsLabel: "गंतव्य",
        statsSatisfactionRateLabel: "संतुष्टि दर",
        statsYearsExperienceLabel: "वर्षों का अनुभव",

        // Testimonials
        testimonialsTitle: "हमारे यात्री क्या कहते हैं",
        testimonial1Quote: "\"हमारी राजस्थान यात्रा जादुई थी! विरासत होटल, पारंपरिक राजस्थानी व्यंजन और सांस्कृतिक अनुभव हमारी अपेक्षाओं से परे थे। स्थानीय गाइडों ने प्रत्येक किले और महल के बारे में आकर्षक कहानियाँ साझा कीं!\"",
        testimonial1Author: "लक्ष्मी सुब्रमण्यम, चेन्नई",
        testimonial2Quote: "\"केरल पैकेज हमारे हनीमून के लिए एकदम सही था। बैकवाटर में हाउसबोट का ठहराव बहुत शांतिपूर्ण था, और आयुर्वेदिक स्पा उपचार कायाकल्प कर रहे थे। सचमुच स्वर्ग का एक टुकड़ा!\"",
        testimonial2Author: "रवि कृष्णन, कोयंबटूर",
        testimonial3Quote: "\"एक अकेली महिला यात्री के रूप में, मुझे पहाड़ों में सुरक्षा को लेकर चिंता थी। वॉयेज विस्टा ने सब कुछ पूरी तरह से व्यवस्थित किया, और उनके स्थानीय संपर्कों ने मुझे मेरी हिमालयी साहसिक यात्रा के दौरान सुरक्षित महसूस कराया!\"",
        testimonial3Author: "दीपा नटराजन, मदुरै",

        // Newsletter
        newsletterSectionTitle: "विशेष भारतीय यात्रा सौदे प्राप्त करें",
        newsletterSectionSubtitle: "हमारे न्यूज़लेटर की सदस्यता लें और भारत की खोज के लिए विशेष ऑफ़र, त्योहार पैकेज और विशेषज्ञ यात्रा सुझाव प्राप्त करने वाले पहले व्यक्ति बनें।",
        newsletterEmailPlaceholder: "आपका ईमेल पता",
        newsletterSubscribeButton: "संदेश भेजें",
        
        // Destinations page
        explorePackages: "हमारे प्रीमियम भारतीय पैकेज का अन्वेषण करें",
        discoverHandcrafted: "अद्भुत भारत में हस्तनिर्मित यात्रा अनुभवों का पता लगाएं",
        findJourney: "अपनी परफेक्ट यात्रा खोजें",
        selectRegion: "क्षेत्र चुनें",
        tamilNadu: "तमिलनाडु",
        northIndia: "उत्तर भारत",
        southIndia: "दक्षिण भारत",
        eastNortheastIndia: "पूर्व और पूर्वोत्तर भारत",
        westCentralIndia: "पश्चिम और मध्य भारत",
        duration: "अवधि",
        days1to3: "1-3 दिन",
        days4to7: "4-7 दिन",
        days8to14: "8-14 दिन",
        days15Plus: "15+ दिन",
        budget: "बजट",
        economy: "इकोनॉमी",
        standard: "स्टैंडर्ड",
        premium: "प्रीमियम",
        luxury: "लक्ज़री",
        interest: "रुचि",
        cultureHeritage: "संस्कृति और विरासत",
        wildlife: "वन्य जीवन",
        adventure: "साहसिक",
        spiritual: "आध्यात्मिक",
        beaches: "समुद्र तट",
        applyFilters: "फिल्टर लागू करें",
        
        // Booking section
        howToBook: "अपनी यात्रा बुक कैसे करें",
        bookingStep1Title: "पैकेज चुनें",
        bookingStep1Desc: "हमारे सावधानीपूर्वक क्यूरेट किए गए पैकेजों को ब्राउज़ करें और उस पैकेज को चुनें जो आपकी यात्रा प्राथमिकताओं से मेल खाता हो।",
        bookingStep2Title: "पूछताछ जमा करें",
        bookingStep2Desc: "एक अनुकूलित उद्धरण के लिए अपनी यात्रा तिथियों और प्राथमिकताओं के साथ बुकिंग फॉर्म भरें।",
        bookingStep3Title: "विवरण की पुष्टि करें",
        bookingStep3Desc: "हमारे यात्रा विशेषज्ञ सभी व्यवस्थाओं की पुष्टि करने और आपके मार्ग को अंतिम रूप देने के लिए आपसे संपर्क करेंगे।",
        bookingStep4Title: "सुरक्षित भुगतान",
        bookingStep4Desc: "अपनी बुकिंग की पुष्टि करने के लिए एक सुरक्षित भुगतान करें और अपने साहसिक कार्य के लिए तैयार हो जाएं।",
        
        // Package listings
        popularPackages: "हमारे लोकप्रिय टूर पैकेज",
        tamilNaduTreasures: "तमिलनाडु के खजाने",
        southIndiaWonders: "दक्षिण भारत के आश्चर्य",
        northIndiaAdventures: "उत्तर भारत की साहसिक यात्राएँ",
        eastNortheastTreasures: "पूर्व और पूर्वोत्तर के खजाने",
        westCentralIndiaHighlights: "पश्चिम और मध्य भारत की विशेषताएं",
        
        // Package features
        days: "दिन",
        maxPeople: "अधिकतम",
        allMeals: "सभी भोजन",
        
        // Package buttons
        bookNow: "अभी बुक करें",
        details: "विवरण",
        explore: "अन्वेषण करें",
        
        // Booking modal
        bookYourPackage: "अपना पैकेज बुक करें",
        fullName: "पूरा नाम",
        emailAddress: "ईमेल पता",
        phoneNumber: "फोन नंबर",
        preferredDate: "पसंदीदा यात्रा तिथि",
        travelers: "यात्रियों की संख्या",
        specialRequests: "विशेष अनुरोध",
        submitBooking: "बुकिंग अनुरोध जमा करें",
        
        // Package details
        packageTitle: "पैकेज शीर्षक",
        duration: "अवधि",
        groupSize: "समूह का आकार",
        accommodation: "आवास",
        meals: "भोजन",
        transport: "परिवहन",
        languages: "भाषाएँ",
        itinerary: "आपका मार्ग",
        included: "क्या शामिल है",
        notIncluded: "क्या शामिल नहीं है",
        bookThisPackage: "इस पैकेज को बुक करें",
        
        // Package descriptions
        ootyDesc: "तमिलनाडु के सुंदर हिल स्टेशनों की 5 दिवसीय यात्रा, चाय बागान, वनस्पति उद्यान और आकर्षक ट्रेन सवारी के साथ।",
        maduraiDesc: "5 दिन भव्य मीनाक्षी मंदिर, आध्यात्मिक रामेश्वरम और प्रामाणिक तमिल व्यंजनों का अनुभव करें।",
        mahabalipuramDesc: "प्राचीन तटीय मंदिरों, चेन्नई में औपनिवेशिक विरासत और जीवंत तमिल संस्कृति की 4 दिवसीय खोज।",
        kanyakumariDesc: "भारत के दक्षिणी छोर की 6 दिवसीय यात्रा, आकर्षक सूर्योदय और सूर्यास्त के दृश्य, ऐतिहासिक मंदिरों और तटीय सुंदरता के साथ।",
        keralaDesc: "शांत बैकवाटर्स पर 6 दिन की क्रूज, मसाला बागाओं का अन्वेषण, और केरल के सुंदर समुद्र तटों पर आराम करना।",
        coorgDesc: "कूर्ग के कॉफी बागानों, आकर्षक झरनों, और वाइब्रेंट टेक सिटी बैंगलोर की 5 दिवसीय खोज।",
        hampiDesc: "यूनेस्को विश्व धरोहर स्थल की 4 दिवसीय खोज, प्राचीन खंडहरों, चट्टानी परिदृश्यों और समृद्ध इतिहास के साथ।",
        rajasthanDesc: "भारत के 'राजाओं की भूमि' के भव्य महलों, शानदार किलों और रंगीन संस्कृति की 7 दिवसीय खोज।",
        varanasiDesc: "प्राचीन घाटों, पवित्र अनुष्ठानों और ऐतिहासिक मंदिरों के साथ भारत की आध्यात्मिक राजधानी में 5 दिन का निमग्न।",
        himalayanDesc: "भव्य हिमालय के माध्यम से 8 दिन की यात्रा, हिल स्टेशनों का अन्वेषण और आश्चर्यजनक पर्वतीय दृश्यों का अनुभव।",
        darjeelingDesc: "चाय बागानों, मठों और कंचनजंगा रेंज के आश्चर्यजनक दृश्यों के साथ पूर्वी भारत के आकर्षक परिदृश्य और समृद्ध संस्कृति की 7 दिवसीय खोज।",
        arunachalDesc: "जीवित रूट ब्रिज, क्रिस्टल क्लियर नदियों और आदिवासी संस्कृतियों के साथ पूर्वोत्तर भारत की अछूती प्राकृतिक सुंदरता की 8 दिवसीय खोज।",
        gujaratDesc: "कच्छ के रण, गिर राष्ट्रीय उद्यान और प्राचीन मंदिरों के साथ गुजरात की समृद्ध सांस्कृतिक विरासत की 7 दिवसीय खोज।",
        ajantaDesc: "भव्य मूर्तियों, चित्रों और वास्तुकला के आश्चर्य के साथ अजंता और एलोरा के प्राचीन गुफा मंदिरों की 5 दिवसीय खोज।",
    },
    
    ta: {
        // Navbar
        home: "முகப்பு",
        destinations: "சுற்றுலா தலங்கள்",
        about: "எங்களை பற்றி",
        contact: "தொடர்பு கொள்ள",
        
        // Homepage
        heroTitle: "எங்களின் பிரீமியம் பயண தொகுப்புகளுடன் அற்புதமான இந்தியாவை கண்டறியுங்கள்",
        heroSubtitle: "உங்கள் சிறந்த இந்திய சாகசத்திற்காக வடிவமைக்கப்பட்ட சிறப்பு சலுகைகளுடன் செழுமையான கலாச்சாரம், அழகான இயற்கை காட்சிகள் மற்றும் பழமையான பாரம்பரியங்களை அனுபவியுங்கள்",
        exploreBtn: "சுற்றுலா தலங்களை ஆராய்க",
        whyChoose: "வாயேஜ் விஸ்டாவை ஏன் தேர்வு செய்ய வேண்டும்?",
        whyChooseDesc: "உங்கள் கனவு இந்திய விடுமுறையை நனவாக்க தனிப்பயனாக்கப்பட்ட சேவை, தனித்துவமான சலுகைகள் மற்றும் மறக்க முடியாத சாகசங்களுடன் தனித்துவமான இந்திய பயண அனுபவங்களை நாங்கள் உருவாக்குகிறோம்.",
        
        // Features
        authenticExperiences: "உண்மையான அனுபவங்கள்",
        authenticDesc: "கிராம homestays முதல் பாரம்பரிய உணவு பயணங்கள் வரை, உண்மையான இந்தியாவுடன் உங்களை இணைக்கும் கலாச்சார அனுபவங்களை நாங்கள் வழங்குகிறோம்.",
        bestValue: "சிறந்த மதிப்பு உத்தரவாதம்",
        bestValueDesc: "மறைக்கப்பட்ட கட்டணங்கள் அல்லது எதிர்பாராத செலவுகள் இல்லாமல் எங்கள் அனைத்து இந்திய பயண தொகுப்புகளுக்கும் போட்டி விலைகளை நாங்கள் உறுதியளிக்கிறோம்.",
        support: "24/7 உள்ளூர் ஆதரவு",
        supportDesc: "எங்கள் இந்திய பயண நிபுணர்கள் உங்கள் பயணம் முழுவதும் ஆங்கிலம் மற்றும் பிராந்திய மொழிகளில் உங்களுக்கு உதவ 24 மணி நேரமும் கிடைக்கிறார்கள்.",

        // New Homepage Content
        // Interactive Banner
        experienceDiversityTitle: "இந்தியாவின் பன்முகத்தன்மையை அனுபவியுங்கள்",
        experienceDiversitySubtitle: "பனி மூடிய இமயமலை முதல் கேரளாவின் வெப்பமண்டல கடற்கரைகள் வரை, பழங்கால கோவில்கள் முதல் பரபரப்பான நவீன நகரங்கள் வரை, இந்தியா ஒவ்வொரு வகையான பயணிகளுக்கும் எண்ணற்ற அனுபவங்களை வழங்குகிறது.",
        highlightCulinary: "சமையல் சாகசங்கள்",
        highlightSpiritual: "ஆன்மீக பயணங்கள்",
        highlightAdventure: "சாகச சுற்றுப்பயணங்கள்",
        highlightCultural: "கலாச்சார ஆய்வு",
        discoverToursButton: "எங்கள் சுற்றுப்பயணங்களைக் கண்டறியவும்",

        // Destination Highlights
        exploreRegionTitle: "பிராந்தியத்தின்படி இந்தியாவை ஆராயுங்கள்",
        regionTNTitle: "தமிழ்நாடு",
        regionTNDesc: "பண்டைய கோவில்கள், மலைவாசஸ்தலங்கள் மற்றும் துடிப்பான கலாச்சாரம்",
        regionNITitle: "வட இந்தியா",
        regionNIDesc: "அரச அரண்மனைகள், மலைகள் மற்றும் ஆன்மீக மையங்கள்",
        regionSITitle: "தென் இந்தியா",
        regionSIDesc: "காயல்கள், கடற்கரைகள் மற்றும் பண்டைய மரபுகள்",
        regionNETitle: "வடகிழக்கு இந்தியா",
        regionNEDesc: "செழிப்பான நிலப்பரப்புகள், பழங்குடி கலாச்சாரங்கள் மற்றும் வனவிலங்குகள்",
        viewAllDestinationsButton: "அனைத்து இடங்களையும் காண்க",

        // Travel Stats
        statsHappyTravelersLabel: "மகிழ்ச்சியான பயணிகள்",
        statsDestinationsLabel: "இலக்குகள்",
        statsSatisfactionRateLabel: "திருப்தி விகிதம்",
        statsYearsExperienceLabel: "ஆண்டுகள் அனுபவம்",

        // Testimonials
        testimonialsTitle: "எங்கள் பயணிகள் என்ன சொல்கிறார்கள்",
        testimonial1Quote: "\"எங்கள் ராஜஸ்தான் பயணம் மாயாஜாலமாக இருந்தது! பாரம்பரிய ஹோட்டல்கள், பாரம்பரிய ராஜஸ்தானி உணவு வகைகள் மற்றும் கலாச்சார அனுபவங்கள் எங்கள் எதிர்பார்ப்புகளுக்கு அப்பாற்பட்டவை. உள்ளூர் வழிகாட்டிகள் ஒவ்வொரு கோட்டை மற்றும் அரண்மனை பற்றிய கவர்ச்சிகரமான கதைகளைப் பகிர்ந்து கொண்டனர்!\"",
        testimonial1Author: "லட்சுமி சுப்பிரமணியம், சென்னை",
        testimonial2Quote: "\"கேரள தொகுப்பு எங்கள் தேனிலவுக்கு சரியானதாக இருந்தது. காயல்களில் ஹவுஸ்போட் தங்குவது மிகவும் அமைதியாக இருந்தது, மேலும் ஆயுர்வேத ஸ்பா சிகிச்சைகள் புத்துணர்ச்சியூட்டுகின்றன. உண்மையிலேயே சொர்க்கத்தின் ஒரு துண்டு!\"",
        testimonial2Author: "ரவி கிருஷ்ணன், கோயம்புத்தூர்",
        testimonial3Quote: "\"ஒரு தனி பெண் பயணியாக, மலைகளில் பாதுகாப்பு குறித்து நான் கவலைப்பட்டேன். வாயேஜ் விஸ்டா எல்லாவற்றையும் கச்சிதமாக ஏற்பாடு செய்தது, மேலும் அவர்களின் உள்ளூர் தொடர்புகள் எனது இமயமலை சாகசப் பயணம் முழுவதும் பாதுகாப்பாக உணரவைத்தன!\"",
        testimonial3Author: "தீபா நடராஜன், மதுரை",

        // Newsletter
        newsletterSectionTitle: "பிரத்யேக இந்திய பயண ஒப்பந்தங்களைப் பெறுங்கள்",
        newsletterSectionSubtitle: "எங்கள் செய்திமடலுக்கு குழுசேர்ந்து, இந்தியாவை ஆராய்வதற்கான சிறப்பு சலுகைகள், திருவிழா தொகுப்புகள் மற்றும் நிபுணர் பயண உதவிக்குறிப்புகளைப் பெறும் முதல் நபராக இருங்கள்.",
        newsletterEmailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
        newsletterSubscribeButton: " குழுசேர்",

        // Destinations page
        explorePackages: "எங்கள் பிரீமியம் இந்திய தொகுப்புகளை ஆராயுங்கள்",
        discoverHandcrafted: "அற்புதமான இந்தியா முழுவதும் கைவினைத் திறனுடன் உருவாக்கப்பட்ட பயண அனுபவங்களைக் கண்டறியுங்கள்",
        findJourney: "உங்கள் சிறந்த பயணத்தைக் கண்டறியுங்கள்",
        selectRegion: "பிராந்தியத்தைத் தேர்ந்தெடுக்கவும்",
        tamilNadu: "தமிழ்நாடு",
        northIndia: "வட இந்தியா",
        southIndia: "தென் இந்தியா",
        eastNortheastIndia: "கிழக்கு & வடகிழக்கு இந்தியா",
        westCentralIndia: "மேற்கு & மத்திய இந்தியா",
        duration: "காலஅளவு",
        days1to3: "1-3 நாட்கள்",
        days4to7: "4-7 நாட்கள்",
        days8to14: "8-14 நாட்கள்",
        days15Plus: "15+ நாட்கள்",
        budget: "பட்ஜெட்",
        economy: "பொருளாதாரம்",
        standard: "நிலையான",
        premium: "பிரீமியம்",
        luxury: "ஆடம்பரம்",
        interest: "ஆர்வம்",
        cultureHeritage: "கலாச்சாரம் & பாரம்பரியம்",
        wildlife: "வனவிலங்கு",
        adventure: "சாகசம்",
        spiritual: "ஆன்மீகம்",
        beaches: "கடற்கரைகள்",
        applyFilters: "வடிகட்டிகளைப் பயன்படுத்து",
        
        // Booking section
        howToBook: "உங்கள் பயணத்தை எவ்வாறு முன்பதிவு செய்வது",
        bookingStep1Title: "தொகுப்பைத் தேர்ந்தெடுக்கவும்",
        bookingStep1Desc: "எங்கள் கவனமாக தேர்ந்தெடுக்கப்பட்ட தொகுப்புகளை உலாவி, உங்கள் பயண விருப்பங்களுக்கு ஏற்ற ஒன்றைத் தேர்ந்தெடுக்கவும்.",
        bookingStep2Title: "விசாரணையை சமர்ப்பிக்கவும்",
        bookingStep2Desc: "தனிப்பயனாக்கப்பட்ட விலை மதிப்பீட்டிற்காக உங்கள் பயண தேதிகள் மற்றும் விருப்பங்களுடன் முன்பதிவு படிவத்தை நிரப்பவும்.",
        bookingStep3Title: "விவரங்களை உறுதிப்படுத்தவும்",
        bookingStep3Desc: "எங்கள் பயண நிபுணர்கள் அனைத்து ஏற்பாடுகளையும் உறுதிப்படுத்த மற்றும் உங்கள் பயண வழித்தடத்தை இறுதி செய்ய உங்களைத் தொடர்பு கொள்வார்கள்.",
        bookingStep4Title: "பாதுகாப்பான கட்டணம்",
        bookingStep4Desc: "உங்கள் முன்பதிவை உறுதிப்படுத்த ஒரு பாதுகாப்பான கட்டணத்தைச் செலுத்தி, உங்கள் சாகசத்திற்குத் தயாராகுங்கள்.",
        
        // Package listings
        popularPackages: "எங்கள் பிரபலமான சுற்றுலா தொகுப்புகள்",
        tamilNaduTreasures: "தமிழ்நாட்டின் புதையல்கள்",
        southIndiaWonders: "தென்னிந்தியாவின் அதிசயங்கள்",
        northIndiaAdventures: "வட இந்திய சாகசங்கள்",
        eastNortheastTreasures: "கிழக்கு & வடகிழக்கின் புதையல்கள்",
        westCentralIndiaHighlights: "மேற்கு & மத்திய இந்தியாவின் சிறப்பம்சங்கள்",
        
        // Package features
        days: "நாட்கள்",
        maxPeople: "அதிகபட்சம்",
        allMeals: "அனைத்து உணவுகளும்",
        
        // Package buttons
        bookNow: "இப்போதே முன்பதிவு செய்யுங்கள்",
        details: "விவரங்கள்",
        explore: "ஆராயுங்கள்",
        
        // Booking modal
        bookYourPackage: "உங்கள் தொகுப்பை முன்பதிவு செய்யுங்கள்",
        fullName: "முழு பெயர்",
        emailAddress: "மின்னஞ்சல் முகவரி",
        phoneNumber: "தொலைபேசி எண்",
        preferredDate: "விருப்பமான பயண தேதி",
        travelers: "பயணிகளின் எண்ணிக்கை",
        specialRequests: "சிறப்பு கோரிக்கைகள்",
        submitBooking: "முன்பதிவு கோரிக்கையை சமர்ப்பிக்கவும்",
        
        // Package details
        packageTitle: "தொகுப்பு தலைப்பு",
        duration: "காலஅளவு",
        groupSize: "குழு அளவு",
        accommodation: "தங்குமிடம்",
        meals: "உணவுகள்",
        transport: "போக்குவரத்து",
        languages: "மொழிகள்",
        itinerary: "உங்கள் பயண வழித்தடம்",
        included: "என்ன சேர்க்கப்பட்டுள்ளது",
        notIncluded: "என்ன சேர்க்கப்படவில்லை",
        bookThisPackage: "இந்த தொகுப்பை முன்பதிவு செய்யுங்கள்",
        
        // Package descriptions
        ootyDesc: "தேயிலைத் தோட்டங்கள், தாவரவியல் பூங்காக்கள் மற்றும் அழகான ரயில் சவாரிகளுடன் தமிழ்நாட்டின் அழகான மலை நிலையங்களை 5 நாட்கள் ஆராய்தல்.",
        maduraiDesc: "5 நாட்கள் மகத்தான மீனாட்சி கோயில், ஆன்மீக ராமேஸ்வரம் மற்றும் உண்மையான தமிழ் உணவை அனுபவித்தல்.",
        mahabalipuramDesc: "பழங்கால கடற்கரை கோயில்கள், சென்னையில் காலனித்துவ பாரம்பரியம் மற்றும் துடிப்பான தமிழ் கலாச்சாரத்தை 4 நாட்கள் ஆராய்தல்.",
        kanyakumariDesc: "இந்தியாவின் தென்கோடி வரை 6 நாட்கள் பயணம், அற்புதமான சூரிய உதயம் மற்றும் அஸ்தமன காட்சிகள், வரலாற்று கோயில்கள், மற்றும் கடற்கரை அழகு.",
        keralaDesc: "அமைதியான பின்னீர்ப்பகுதிகளில் 6 நாட்கள் படகோட்டம், மசாலா தோட்டங்களை ஆராய்தல், மற்றும் கேரளாவின் அழகிய கடற்கரைகளில் ஓய்வெடுத்தல்.",
        coorgDesc: "கூர்க் காபி தோட்டங்கள், அற்புதமான நீர்வீழ்ச்சிகள், மற்றும் துடிப்பான தொழில்நுட்ப நகரமான பெங்களூரை 5 நாட்கள் ஆராய்தல்.",
        hampiDesc: "யுனெஸ்கோ உலக பாரம்பரிய தளத்தை 4 நாட்கள் ஆராய்தல், பழங்கால இடிபாடுகள், பாறைகள் நிறைந்த நிலப்பரப்புகள், மற்றும் வளமான வரலாற்றுடன்.",
        rajasthanDesc: "இந்தியாவின் 'மன்னர்களின் நிலம்' இன் மகத்தான அரண்மனைகள், மாபெரும் கோட்டைகள், மற்றும் வண்ணமயமான கலாச்சாரத்தை 7 நாட்கள் ஆராய்தல்.",
        varanasiDesc: "பழைய கடற்கரைகள், புனித சடங்குகள், மற்றும் வரலாற்று கோயில்களுடன் இந்தியாவின் ஆன்மீக தலைநகரில் 5 நாட்கள் மூழ்கியிருத்தல்.",
        himalayanDesc: "மாபெரும் இமயமலை வழியாக 8 நாட்கள் பயணம், மலை நிலையங்களை ஆராய்தல், மற்றும் மூச்சை அடக்கும் மலை காட்சிகளை அனுபவித்தல்.",
        darjeelingDesc: "தேயிலைத் தோட்டங்கள், மடாலயங்கள், மற்றும் கஞ்சன்ஜங்கா மலைத்தொடரின் மூச்சை அடக்கும் காட்சிகளுடன் கிழக்கு இந்தியாவின் அழகான நிலப்பரப்புகள் மற்றும் வளமான கலாச்சாரத்தை 7 நாட்கள் ஆராய்தல்.",
        arunachalDesc: "உயிருள்ள வேர் பாலங்கள், படிக தெளிவான நதிகள், மற்றும் பழங்குடி கலாச்சாரங்களுடன் வடகிழக்கு இந்தியாவின் மாசற்ற இயற்கை அழகை 8 நாட்கள் ஆராய்தல்.",
        gujaratDesc: "கட்ச் ரன், கிர் தேசிய பூங்கா, மற்றும் பழங்கால கோயில்களுடன் குஜராத்தின் வளமான கலாச்சார பாரம்பரியத்தை 7 நாட்கள் ஆராய்தல்.",
        ajantaDesc: "அற்புதமான சிற்பங்கள், ஓவியங்கள், மற்றும் கட்டிடக்கலை அதிசயங்களுடன் அஜந்தா மற்றும் எல்லோரா பழங்கால குகை கோயில்களை 5 நாட்கள் ஆராய்தல்.",
    }
};

// Initialize language switcher
function initLanguageSwitcher() {
    // Add language dropdown to page
    createLanguageDropdown();
    
    // Set current language
    setLanguage(currentLanguage);
    
    // Add event listeners to language options
    document.addEventListener('click', function(e) {
        if (e.target.closest('.lang-option')) {
            e.preventDefault();
            const langOption = e.target.closest('.lang-option');
            const lang = langOption.getAttribute('data-lang');
            setLanguage(lang);
        } else if (e.target.closest('.language-icon')) {
            toggleLanguageDropdown();
        } else if (!e.target.closest('.language-dropdown')) {
            // Close dropdown when clicking outside
            const dropdown = document.querySelector('.language-dropdown');
            if (dropdown && dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });
}

// Create language dropdown
function createLanguageDropdown() {
    // Check if dropdown already exists
    if (document.querySelector('.language-dropdown')) {
        return;
    }
    
    // Create dropdown element
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'language-dropdown-content';
    
    // Add language options
    const languages = [
        { code: 'en', name: 'English', flag: 'gb' },
        { code: 'hi', name: 'हिन्दी (Hindi)', flag: 'in' },
        { code: 'ta', name: 'தமிழ் (Tamil)', flag: 'in' }
    ];
    
    languages.forEach(lang => {
        const option = document.createElement('a');
        option.href = '#';
        option.className = 'lang-option';
        option.setAttribute('data-lang', lang.code);
        
        const img = document.createElement('img');
        img.src = `https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${lang.flag}.svg`;
        img.alt = lang.name;
        
        const span = document.createElement('span');
        span.textContent = lang.name;
        
        option.appendChild(img);
        option.appendChild(span);
        dropdownContent.appendChild(option);
    });
    
    dropdown.appendChild(dropdownContent);
    document.body.appendChild(dropdown);
}

// Toggle language dropdown visibility
function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
        
        // Position dropdown below language icon
        const languageIcon = document.querySelector('.language-icon');
        if (languageIcon && dropdown.classList.contains('show')) {
            const rect = languageIcon.getBoundingClientRect();
            dropdown.style.position = 'absolute';
            dropdown.style.top = (rect.bottom + window.scrollY) + 'px';
            dropdown.style.right = (window.innerWidth - rect.right) + 'px';
        }
    }
}

// Set the selected language and update UI
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('voyageVista_language', lang);
    
    // Update active language indicator
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update language icon in navbar
    const languageIcon = document.querySelector('.language-icon span');
    if (languageIcon) {
        languageIcon.textContent = lang.toUpperCase();
    }
    
    // Update text elements with translations
    updatePageContent();
}

// Update page content with appropriate translations
function updatePageContent() {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Check if element is an input with placeholder
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } 
            // Check if element is a button with value
            else if (element.tagName === 'BUTTON' && element.hasAttribute('value')) {
                element.value = translations[currentLanguage][key];
            }
            // Regular text content update
            else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Load language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);

// Export functions for use in other files
window.VoyageVistaLanguage = {
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getTranslation: (key) => translations[currentLanguage][key] || key,
    toggleLanguageDropdown: toggleLanguageDropdown
};
