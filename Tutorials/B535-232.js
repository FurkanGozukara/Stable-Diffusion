javascript:(function(){
    // Enhanced 4G/5G Modem Monitor v5.1 - Fixed
    // Fixes: 5G flickering, band selection, more band info
    
    const VERSION = "5.1-Fixed";
    console.log(`Enhanced Modem Monitor v${VERSION} - Starting...`);
    
    // Global variables
    let suspend = 0;
    let mainband = null;
    let _2ndrun = null;
    let updateInterval = null;
    let signalHistory = [];
    let bandPerformance = {};
    let performanceScoreHistory = [];
    let currentPerformanceScore = 0;
    let ajaxRequestCount = 0;
    let darkMode = false;
    let has5GCard = false; // Track 5G card state to prevent flickering
    let lastKnown5GStatus = false;
    let scanResults = {};
    
    // Signal quality thresholds
    const SIGNAL_THRESHOLDS = {
        rsrp: { excellent: -80, good: -90, fair: -100, poor: -110 },
        rsrq: { excellent: -9, good: -12, fair: -15, poor: -19 },
        sinr: { excellent: 20, good: 13, fair: 0, poor: -10 },
        nrrsrp: { excellent: -80, good: -90, fair: -100, poor: -110 },
        nrrsrq: { excellent: -9, good: -12, fair: -15, poor: -19 },
        nrsinr: { excellent: 20, good: 13, fair: 0, poor: -10 }
    };
    
    // Enhanced band information database with more details
    const BAND_INFO = {
        1: { freq: "2100 MHz", name: "2.1 GHz IMT", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        2: { freq: "1900 MHz", name: "1.9 GHz PCS", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        3: { freq: "1800 MHz", name: "1.8 GHz DCS", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        4: { freq: "1700/2100 MHz", name: "AWS-1", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        5: { freq: "850 MHz", name: "850 CLR", type: "FDD", bandwidth: "5-10", usage: "Rural/Suburban", penetration: "Good", speed: "Medium" },
        7: { freq: "2600 MHz", name: "2.6 GHz IMT-E", type: "FDD", bandwidth: "5-20", usage: "Urban High Capacity", penetration: "Low", speed: "Very High" },
        8: { freq: "900 MHz", name: "900 E-GSM", type: "FDD", bandwidth: "5-10", usage: "Rural/Coverage", penetration: "Good", speed: "Medium" },
        12: { freq: "700 MHz", name: "700 Lower SMH", type: "FDD", bandwidth: "5-10", usage: "Rural/Indoor", penetration: "Excellent", speed: "Medium" },
        13: { freq: "700 MHz", name: "700 Upper C", type: "FDD", bandwidth: "10", usage: "Rural/Indoor", penetration: "Excellent", speed: "Medium" },
        14: { freq: "700 MHz", name: "700 Upper D", type: "FDD", bandwidth: "10", usage: "Public Safety", penetration: "Excellent", speed: "Medium" },
        17: { freq: "700 MHz", name: "700 Lower BC", type: "FDD", bandwidth: "10", usage: "Rural/Indoor", penetration: "Excellent", speed: "Medium" },
        18: { freq: "850 MHz", name: "850 Lower", type: "FDD", bandwidth: "5-15", usage: "Rural/Suburban", penetration: "Good", speed: "Medium" },
        19: { freq: "850 MHz", name: "850 Upper", type: "FDD", bandwidth: "5-15", usage: "Rural/Suburban", penetration: "Good", speed: "Medium" },
        20: { freq: "800 MHz", name: "800 DD", type: "FDD", bandwidth: "5-20", usage: "Rural/Indoor", penetration: "Excellent", speed: "Medium" },
        21: { freq: "1500 MHz", name: "1.5 GHz Upper", type: "FDD", bandwidth: "5-15", usage: "Suburban", penetration: "Medium", speed: "High" },
        24: { freq: "1600 MHz", name: "1.6 GHz L-Band", type: "FDD", bandwidth: "5-10", usage: "Suburban", penetration: "Medium", speed: "High" },
        25: { freq: "1900 MHz", name: "1.9 GHz Extended", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        26: { freq: "850 MHz", name: "850 Extended", type: "FDD", bandwidth: "5-15", usage: "Rural/Suburban", penetration: "Good", speed: "Medium" },
        28: { freq: "700 MHz", name: "700 APT", type: "FDD", bandwidth: "5-20", usage: "Rural/Indoor", penetration: "Excellent", speed: "High" },
        29: { freq: "700 MHz", name: "700 Lower DE", type: "SDL", bandwidth: "5-10", usage: "Downlink Only", penetration: "Excellent", speed: "Medium" },
        30: { freq: "2300 MHz", name: "2.3 GHz WCS", type: "FDD", bandwidth: "5-10", usage: "Urban", penetration: "Low", speed: "High" },
        31: { freq: "450 MHz", name: "450 NMT", type: "FDD", bandwidth: "1.4-5", usage: "Rural/IoT", penetration: "Excellent", speed: "Low" },
        32: { freq: "1500 MHz", name: "1.5 GHz L-Band SDL", type: "SDL", bandwidth: "5-20", usage: "Downlink Supplement", penetration: "Medium", speed: "High" },
        34: { freq: "2000 MHz", name: "2 GHz TDD", type: "TDD", bandwidth: "5-15", usage: "Urban", penetration: "Medium", speed: "High" },
        35: { freq: "1900 MHz", name: "1.9 GHz Lower", type: "TDD", bandwidth: "1.4-20", usage: "Urban", penetration: "Medium", speed: "High" },
        36: { freq: "1900 MHz", name: "1.9 GHz Upper", type: "TDD", bandwidth: "1.4-20", usage: "Urban", penetration: "Medium", speed: "High" },
        37: { freq: "1900 MHz", name: "1.9 GHz PCS Unpaired", type: "TDD", bandwidth: "5-20", usage: "Urban", penetration: "Medium", speed: "High" },
        38: { freq: "2600 MHz", name: "2.6 GHz IMT-E TDD", type: "TDD", bandwidth: "5-20", usage: "Urban High Capacity", penetration: "Low", speed: "Very High" },
        39: { freq: "1900 MHz", name: "1.9 GHz DCS-IMT", type: "TDD", bandwidth: "5-20", usage: "Urban", penetration: "Medium", speed: "High" },
        40: { freq: "2300 MHz", name: "2.3 GHz", type: "TDD", bandwidth: "5-20", usage: "Urban High Capacity", penetration: "Low", speed: "Very High" },
        41: { freq: "2500 MHz", name: "2.5 GHz BRS/EBS", type: "TDD", bandwidth: "5-20", usage: "Urban High Capacity", penetration: "Low", speed: "Very High" },
        42: { freq: "3500 MHz", name: "3.5 GHz CBRS", type: "TDD", bandwidth: "5-20", usage: "Urban/5G", penetration: "Very Low", speed: "Ultra High" },
        43: { freq: "3700 MHz", name: "3.7 GHz C-Band", type: "TDD", bandwidth: "5-20", usage: "Urban/5G", penetration: "Very Low", speed: "Ultra High" },
        46: { freq: "5200 MHz", name: "5.2 GHz U-NII", type: "TDD", bandwidth: "10-20", usage: "LAA/Indoor", penetration: "Very Low", speed: "Ultra High" },
        47: { freq: "5900 MHz", name: "5.9 GHz V2X", type: "TDD", bandwidth: "10-20", usage: "Vehicle Comm", penetration: "Very Low", speed: "High" },
        48: { freq: "3600 MHz", name: "3.6 GHz CBRS", type: "TDD", bandwidth: "5-20", usage: "Urban/5G", penetration: "Very Low", speed: "Ultra High" },
        50: { freq: "1500 MHz", name: "1.5 GHz", type: "TDD", bandwidth: "3-20", usage: "Suburban", penetration: "Medium", speed: "High" },
        51: { freq: "1500 MHz", name: "1.5 GHz Extension", type: "TDD", bandwidth: "3-5", usage: "Suburban", penetration: "Medium", speed: "Medium" },
        65: { freq: "2100 MHz", name: "2.1 GHz Extended", type: "FDD", bandwidth: "5-20", usage: "Urban", penetration: "Medium", speed: "High" },
        66: { freq: "1700/2100 MHz", name: "AWS-3", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        67: { freq: "700 MHz", name: "700 SDL", type: "SDL", bandwidth: "5-20", usage: "Downlink Supplement", penetration: "Excellent", speed: "High" },
        68: { freq: "700 MHz", name: "700 ME", type: "FDD", bandwidth: "5-15", usage: "Rural/Indoor", penetration: "Excellent", speed: "Medium" },
        69: { freq: "2600 MHz", name: "2.6 GHz E-SDL", type: "SDL", bandwidth: "5-20", usage: "Downlink Urban", penetration: "Low", speed: "Very High" },
        70: { freq: "2000/1700 MHz", name: "AWS-4", type: "FDD", bandwidth: "5-20", usage: "Urban/Suburban", penetration: "Medium", speed: "High" },
        71: { freq: "600 MHz", name: "600 Digital Dividend", type: "FDD", bandwidth: "5-20", usage: "Rural/Indoor", penetration: "Excellent", speed: "High" },
        n78: { freq: "3500 MHz", name: "3.5 GHz 5G NR", type: "TDD", bandwidth: "10-100", usage: "5G Urban", penetration: "Very Low", speed: "Ultra High", nr: true },
        n77: { freq: "3700 MHz", name: "3.7 GHz 5G NR", type: "TDD", bandwidth: "10-100", usage: "5G Urban", penetration: "Very Low", speed: "Ultra High", nr: true },
        n79: { freq: "4900 MHz", name: "4.9 GHz 5G NR", type: "TDD", bandwidth: "40-100", usage: "5G Urban", penetration: "Very Low", speed: "Ultra High", nr: true },
        n258: { freq: "26 GHz", name: "26 GHz mmWave", type: "TDD", bandwidth: "50-400", usage: "5G Hotspot", penetration: "Extremely Low", speed: "Ultra High", nr: true }
    };
    
    // Initialize enhanced UI
    function initEnhancedUI() {
        // Remove old interface elements
        $(".color_background_blue").css("background-color", "#456");
        $(".headcontainer").hide();
        
        // Inject comprehensive CSS
        $("head").append(`
            <style id="enhanced-modem-styles">
                * { box-sizing: border-box; }
                
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    margin: 0;
                    padding: 0;
                    background: #f0f2f5;
                    transition: background 0.3s;
                }
                
                .em-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 20px;
                }
                
                .em-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 15px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }
                
                .em-header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                
                .em-title {
                    font-size: 28px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .em-status {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 25px;
                    backdrop-filter: blur(10px);
                }
                
                .em-status-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #10b981;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                }
                
                .em-controls {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                
                .em-btn {
                    padding: 10px 20px;
                    background: white;
                    color: #667eea;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 14px;
                }
                
                .em-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                .em-btn.primary {
                    background: #10b981;
                    color: white;
                }
                
                .em-btn.danger {
                    background: #ef4444;
                    color: white;
                }
                
                .em-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }
                
                .em-card {
                    background: white;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                
                .em-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                }
                
                .em-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #e5e7eb;
                }
                
                .em-card-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .em-card-icon {
                    width: 24px;
                    height: 24px;
                    opacity: 0.6;
                }
                
                .em-signal-bar {
                    position: relative;
                    height: 40px;
                    background: #e5e7eb;
                    border-radius: 8px;
                    overflow: hidden;
                    margin: 10px 0;
                }
                
                .em-signal-fill {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    background: linear-gradient(90deg, #10b981, #34d399);
                    transition: width 0.5s ease;
                    display: flex;
                    align-items: center;
                    padding: 0 15px;
                    color: white;
                    font-weight: 600;
                    font-size: 14px;
                }
                
                .em-signal-fill.excellent { background: linear-gradient(90deg, #10b981, #34d399); }
                .em-signal-fill.good { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
                .em-signal-fill.fair { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
                .em-signal-fill.poor { background: linear-gradient(90deg, #ef4444, #f87171); }
                
                .em-stat-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-top: 15px;
                }
                
                .em-stat {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px;
                    background: #f9fafb;
                    border-radius: 6px;
                    font-size: 14px;
                }
                
                .em-stat-label {
                    color: #6b7280;
                }
                
                .em-stat-value {
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .em-band-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
                    gap: 8px;
                    margin-top: 15px;
                    max-height: 400px;
                    overflow-y: auto;
                    padding: 10px;
                    background: #f9fafb;
                    border-radius: 8px;
                }
                
                .em-band-box {
                    padding: 8px;
                    text-align: center;
                    background: #f3f4f6;
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 600;
                    transition: all 0.3s;
                    cursor: pointer;
                    position: relative;
                    border: 2px solid transparent;
                }
                
                .em-band-box.active {
                    background: #10b981;
                    color: white;
                    transform: scale(1.1);
                    border-color: #059669;
                }
                
                .em-band-box.current-active {
                    background: #3b82f6;
                    color: white;
                    border-color: #2563eb;
                    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
                }
                
                .em-band-box:hover {
                    transform: scale(1.05);
                    background: #e5e7eb;
                }
                
                .em-band-box.active:hover {
                    background: #059669;
                }
                
                .band-tooltip {
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #1f2937;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 11px;
                    white-space: nowrap;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s;
                    z-index: 1000;
                    max-width: 250px;
                    white-space: normal;
                    text-align: left;
                    margin-bottom: 5px;
                }
                
                .band-tooltip::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 5px solid transparent;
                    border-top-color: #1f2937;
                }
                
                .em-band-box:hover .band-tooltip {
                    opacity: 1;
                }
                
                .em-chart-container {
                    height: 200px;
                    margin-top: 15px;
                    position: relative;
                }
                
                .em-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 15px 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    max-width: 350px;
                }
                
                @keyframes slideIn {
                    from { transform: translateX(400px); }
                    to { transform: translateX(0); }
                }
                
                .em-notification.success { border-left: 4px solid #10b981; }
                .em-notification.error { border-left: 4px solid #ef4444; }
                .em-notification.warning { border-left: 4px solid #f59e0b; }
                .em-notification.info { border-left: 4px solid #3b82f6; }
                
                .em-tab-container {
                    background: white;
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 30px;
                }
                
                .em-tabs {
                    display: flex;
                    gap: 10px;
                    border-bottom: 2px solid #e5e7eb;
                    margin-bottom: 20px;
                }
                
                .em-tab {
                    padding: 10px 20px;
                    background: none;
                    border: none;
                    color: #6b7280;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    position: relative;
                }
                
                .em-tab.active {
                    color: #667eea;
                }
                
                .em-tab.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #667eea;
                }
                
                .em-tab-content {
                    display: none;
                }
                
                .em-tab-content.active {
                    display: block;
                }
                
                .em-recommendation {
                    padding: 15px;
                    background: linear-gradient(135deg, #667eea20, #764ba220);
                    border-radius: 8px;
                    border-left: 4px solid #667eea;
                    margin: 10px 0;
                }
                
                .em-recommendation-title {
                    font-weight: 600;
                    color: #667eea;
                    margin-bottom: 5px;
                }
                
                .em-recommendation-text {
                    color: #4b5563;
                    font-size: 14px;
                }
                
                .em-history-graph {
                    width: 100%;
                    height: 250px;
                    margin-top: 20px;
                }
                
                .em-loading {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 3px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s ease-in-out infinite;
                }
                
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                .em-band-info {
                    background: #f9fafb;
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 20px;
                }
                
                .em-band-info-title {
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 10px;
                }
                
                .em-band-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 10px;
                }
                
                .em-band-detail {
                    padding: 8px;
                    background: white;
                    border-radius: 6px;
                    border-left: 3px solid #667eea;
                }
                
                .em-band-detail-label {
                    font-size: 12px;
                    color: #6b7280;
                }
                
                .em-band-detail-value {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .force-visible {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
            </style>
        `);
        
        // Create main UI structure
        $("body").html(`
            <div class="em-container">
                <div class="em-header">
                    <div class="em-header-content">
                        <div class="em-title">
                            📡 Advanced Network Monitor
                            <span style="font-size: 14px; opacity: 0.8;">v${VERSION}</span>
                        </div>
                        <div class="em-status">
                            <div class="em-status-dot"></div>
                            <span id="em-connection-status">Connected</span>
                            <span id="em-network-mode" style="margin-left: 10px; font-weight: bold;">--</span>
                        </div>
                        <div class="em-controls">
                            <button class="em-btn" onclick="window.emFunctions.toggleAutoRefresh()">
                                <span id="auto-refresh-text">⏸ Pause</span>
                            </button>
                            <button class="em-btn primary" onclick="window.emFunctions.quickBandScan()">
                                🔍 Quick Scan
                            </button>
                            <button class="em-btn" onclick="window.emFunctions.exportData()">
                                📊 Export Data
                            </button>
                            <button class="em-btn danger" onclick="window.emFunctions.setBands()">
                                🎛️ Set Bands
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Main Signal Cards -->
                <div class="em-grid">
                    <!-- 4G Signal Card -->
                    <div class="em-card">
                        <div class="em-card-header">
                            <div class="em-card-title">📶 4G LTE Signal</div>
                            <div class="em-card-icon">🔗</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="rsrp-bar" class="em-signal-fill">RSRP: --</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="rsrq-bar" class="em-signal-fill">RSRQ: --</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="sinr-bar" class="em-signal-fill">SINR: --</div>
                        </div>
                        <div class="em-stat-grid">
                            <div class="em-stat">
                                <span class="em-stat-label">RSSI:</span>
                                <span class="em-stat-value" id="rssi-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Band:</span>
                                <span class="em-stat-value" id="band-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">DL BW:</span>
                                <span class="em-stat-value" id="dlbw-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">UL BW:</span>
                                <span class="em-stat-value" id="ulbw-value">--</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 5G Signal Card - Initially hidden with stable state management -->
                    <div class="em-card" id="nr-card" style="display: none;">
                        <div class="em-card-header">
                            <div class="em-card-title">📡 5G NR Signal</div>
                            <div class="em-card-icon">⚡</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="nrrsrp-bar" class="em-signal-fill">NR-RSRP: --</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="nrrsrq-bar" class="em-signal-fill">NR-RSRQ: --</div>
                        </div>
                        <div class="em-signal-bar">
                            <div id="nrsinr-bar" class="em-signal-fill">NR-SINR: --</div>
                        </div>
                        <div class="em-stat-grid">
                            <div class="em-stat">
                                <span class="em-stat-label">NR Band:</span>
                                <span class="em-stat-value" id="nrband-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">NR Status:</span>
                                <span class="em-stat-value" id="nrstatus-value">Active</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Cell Info Card -->
                    <div class="em-card">
                        <div class="em-card-header">
                            <div class="em-card-title">🏗️ Cell Information</div>
                            <div class="em-card-icon">📍</div>
                        </div>
                        <div class="em-stat-grid" style="grid-template-columns: 1fr;">
                            <div class="em-stat">
                                <span class="em-stat-label">eNB ID:</span>
                                <span class="em-stat-value"><a id="enbid-value" href="#" target="_blank">--</a></span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Cell ID:</span>
                                <span class="em-stat-value" id="cellid-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">PLMN:</span>
                                <span class="em-stat-value" id="plmn-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Antenna:</span>
                                <span class="em-stat-value" id="antenna-value">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">CA Status:</span>
                                <span class="em-stat-value" id="ca-status">--</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Performance Card -->
                    <div class="em-card">
                        <div class="em-card-header">
                            <div class="em-card-title">⚡ Performance Score</div>
                            <div class="em-card-icon">📈 <span id="update-indicator" style="color: #10b981;">●</span></div>
                        </div>
                        <div style="text-align: center; padding: 20px;">
                            <div style="font-size: 48px; font-weight: bold; color: #10b981;" id="perf-score">--</div>
                            <div style="color: #6b7280; margin-top: 10px;" id="perf-label">Calculating...</div>
                            <div style="color: #6b7280; margin-top: 10px; font-size: 14px;">
                                Average: <span id="perf-average" style="font-weight: bold;">--</span>
                            </div>
                            <div style="color: #6b7280; margin-top: 5px; font-size: 12px;">
                                Last update: <span id="perf-timestamp">--</span>
                            </div>
                            <button id="reset-perf-btn" style="margin-top: 10px; padding: 5px 15px; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;" onclick="window.emFunctions.resetPerformanceHistory()">Reset</button>
                        </div>
                        <div class="em-recommendation">
                            <div class="em-recommendation-title">💡 Recommendation</div>
                            <div class="em-recommendation-text" id="recommendation-text">
                                Analyzing signal quality...
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tabs Section -->
                <div class="em-tab-container">
                    <div class="em-tabs">
                        <button class="em-tab active" onclick="window.emFunctions.switchTab('bands')">Band Analysis</button>
                        <button class="em-tab" onclick="window.emFunctions.switchTab('available')">Available Bands</button>
                        <button class="em-tab" onclick="window.emFunctions.switchTab('history')">Signal History</button>
                        <button class="em-tab" onclick="window.emFunctions.switchTab('optimization')">Optimization</button>
                        <button class="em-tab" onclick="window.emFunctions.switchTab('advanced')">Advanced</button>
                    </div>
                    
                    <!-- Band Analysis Tab -->
                    <div id="bands-tab" class="em-tab-content active">
                        <h3 style="margin-bottom: 15px;">Supported Bands (Click for details)</h3>
                        <div class="em-band-grid" id="band-grid">
                            <!-- Bands will be populated here -->
                        </div>
                        <div class="em-band-info" id="selected-band-info" style="display: none;">
                            <div class="em-band-info-title">Selected Band Information</div>
                            <div class="em-band-info-grid" id="band-info-details">
                                <!-- Band details will appear here -->
                            </div>
                        </div>
                        <div style="margin-top: 20px;">
                            <h4>Common Band Combinations</h4>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">
                                <button class="em-btn" onclick="window.emFunctions.applyPreset('urban')">🏙️ Urban (B7+B38+B40)</button>
                                <button class="em-btn" onclick="window.emFunctions.applyPreset('rural')">🌾 Rural (B8+B20+B28)</button>
                                <button class="em-btn" onclick="window.emFunctions.applyPreset('balanced')">⚖️ Balanced (B3+B7+B20)</button>
                                <button class="em-btn" onclick="window.emFunctions.applyPreset('capacity')">📶 High Capacity (B1+B3+B7)</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Available Bands Tab -->
                    <div id="available-tab" class="em-tab-content">
                        <h3 style="margin-bottom: 15px;">📡 Available Bands in Your Region</h3>
                        <div style="margin-bottom: 20px;">
                            <button class="em-btn primary" onclick="window.emFunctions.detectRegionBands()">
                                🔍 Detect Available Bands
                            </button>
                            <span id="detection-status" style="margin-left: 15px; color: #6b7280;"></span>
                        </div>
                        
                        <div id="available-bands-content" style="display: none;">
                            <div class="em-card" style="margin-bottom: 20px;">
                                <div class="em-card-header">
                                    <div class="em-card-title">Region Information</div>
                                </div>
                                <div class="em-stat-grid">
                                    <div class="em-stat">
                                        <span class="em-stat-label">Region:</span>
                                        <span class="em-stat-value" id="detected-region">--</span>
                                    </div>
                                    <div class="em-stat">
                                        <span class="em-stat-label">Operator:</span>
                                        <span class="em-stat-value" id="detected-operator">--</span>
                                    </div>
                                    <div class="em-stat">
                                        <span class="em-stat-label">Total Bands:</span>
                                        <span class="em-stat-value" id="total-bands-count">--</span>
                                    </div>
                                    <div class="em-stat">
                                        <span class="em-stat-label">Active Now:</span>
                                        <span class="em-stat-value" id="current-active-band">--</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="em-card">
                                <div class="em-card-header">
                                    <div class="em-card-title">Available Bands Details</div>
                                </div>
                                <div style="overflow-x: auto;">
                                    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                                        <thead>
                                            <tr style="background: #f3f4f6;">
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Band</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Frequency</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Technology</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Type</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Bandwidth</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Coverage</th>
                                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb;">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="available-bands-table">
                                            <!-- Bands will be populated here -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div class="em-card" style="margin-top: 20px;">
                                <div class="em-card-header">
                                    <div class="em-card-title">3G/4G/5G Technology Mapping</div>
                                </div>
                                <div class="em-stat-grid" style="grid-template-columns: 1fr;">
                                    <div id="tech-mapping" style="padding: 15px; background: #f9fafb; border-radius: 8px;">
                                        <!-- Technology mapping will appear here -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="no-bands-message" style="padding: 50px; text-align: center; color: #6b7280;">
                            Click "Detect Available Bands" to scan for bands in your region.
                        </div>
                    </div>
                    
                    <!-- History Tab -->
                    <div id="history-tab" class="em-tab-content">
                        <h3 style="margin-bottom: 15px;">Signal History (Last 30 minutes)</h3>
                        <div id="history-chart" class="em-history-graph">
                            <!-- History chart will be rendered here -->
                        </div>
                        <div class="em-stat-grid" style="margin-top: 20px;">
                            <div class="em-stat">
                                <span class="em-stat-label">Avg RSRP:</span>
                                <span class="em-stat-value" id="avg-rsrp">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Avg RSRQ:</span>
                                <span class="em-stat-value" id="avg-rsrq">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Avg SINR:</span>
                                <span class="em-stat-value" id="avg-sinr">--</span>
                            </div>
                            <div class="em-stat">
                                <span class="em-stat-label">Stability:</span>
                                <span class="em-stat-value" id="stability">--</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Optimization Tab -->
                    <div id="optimization-tab" class="em-tab-content">
                        <h3 style="margin-bottom: 15px;">Network Optimization</h3>
                        <div class="em-recommendation">
                            <div class="em-recommendation-title">🎯 Best Bands for Your Location</div>
                            <div class="em-recommendation-text" id="best-bands">
                                Analyzing band performance...
                            </div>
                        </div>
                        <div class="em-recommendation">
                            <div class="em-recommendation-title">📡 Antenna Recommendations</div>
                            <div class="em-recommendation-text" id="antenna-rec">
                                Checking antenna configuration...
                            </div>
                        </div>
                        <div class="em-recommendation">
                            <div class="em-recommendation-title">⚙️ Suggested Settings</div>
                            <div class="em-recommendation-text" id="settings-rec">
                                Calculating optimal settings...
                            </div>
                        </div>
                        <div class="em-recommendation">
                            <div class="em-recommendation-title">📊 Scan Results</div>
                            <div class="em-recommendation-text" id="scan-results">
                                No scan performed yet. Click "Quick Scan" to analyze available bands.
                            </div>
                        </div>
                        <button class="em-btn primary" style="margin-top: 20px;" onclick="window.emFunctions.autoOptimize()">
                            🚀 Auto-Optimize Network
                        </button>
                    </div>
                    
                    <!-- Advanced Tab -->
                    <div id="advanced-tab" class="em-tab-content">
                        <div class="em-advanced-settings">
                            <h3 style="margin-bottom: 20px;">Advanced Settings</h3>
                            <div class="em-setting-row" style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                                <span class="em-setting-label">Force 4G Only</span>
                                <input type="checkbox" id="force4g-checkbox" onchange="window.emFunctions.toggleForce4G()">
                            </div>
                            <div class="em-setting-row" style="padding: 15px 0; border-bottom: 1px solid #e5e7eb;">
                                <span class="em-setting-label">Update Interval (ms)</span>
                                <input type="number" id="update-interval" value="500" min="50" max="10000" step="50" style="width: 100px;">
                                <button class="em-btn" onclick="window.emFunctions.updateInterval()">Apply</button>
                            </div>
                            <div style="margin-top: 20px;">
                                <h4>Debug Information</h4>
                                <div id="debug-info" style="font-family: monospace; background: #f3f4f6; padding: 10px; border-radius: 6px; margin-top: 10px;">
                                    <div>Version: ${VERSION}</div>
                                    <div>Update Interval: <span id="debug-interval">500ms</span></div>
                                    <div>Signals Collected: <span id="debug-signals">0</span></div>
                                    <div>5G Status: <span id="debug-5g">Not detected</span></div>
                                    <div>Last Update: <span id="debug-last-update">Never</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        
        // Initialize band grid with tooltips
        initializeBandGrid();
    }
    
    // Initialize band grid with detailed tooltips
    function initializeBandGrid() {
        const bandGrid = $("#band-grid");
        bandGrid.empty();
        
        // Add most common bands (1-71 and some NR bands)
        for (let i = 1; i <= 71; i++) {
            const bandInfo = BAND_INFO[i] || {};
            const tooltip = bandInfo.freq ? 
                `<div class="band-tooltip">
                    <strong>Band ${i}</strong><br>
                    Freq: ${bandInfo.freq}<br>
                    Type: ${bandInfo.type || 'Unknown'}<br>
                    Usage: ${bandInfo.usage || 'Unknown'}<br>
                    Penetration: ${bandInfo.penetration || 'Unknown'}
                </div>` : 
                `<div class="band-tooltip">Band ${i} - No info available</div>`;
            
            bandGrid.append(`
                <div class="em-band-box" id="cb${i}" data-band="${i}" onclick="window.emFunctions.selectBandInfo(${i})">
                    B${i}
                    ${tooltip}
                </div>
            `);
        }
        
        // Add 5G NR bands
        ['n78', 'n77', 'n79', 'n258'].forEach(band => {
            const bandNum = band.substring(1);
            const bandInfo = BAND_INFO[band] || {};
            const tooltip = `<div class="band-tooltip">
                <strong>5G ${band}</strong><br>
                Freq: ${bandInfo.freq}<br>
                Type: ${bandInfo.type}<br>
                Usage: ${bandInfo.usage}<br>
                Speed: ${bandInfo.speed}
            </div>`;
            
            bandGrid.append(`
                <div class="em-band-box" id="cb${band}" data-band="${band}" style="background: #ddd6fe;" onclick="window.emFunctions.selectBandInfo('${band}')">
                    ${band.toUpperCase()}
                    ${tooltip}
                </div>
            `);
        });
    }
    
    // Show detailed band information
    function showBandInfo(band) {
        const bandInfo = BAND_INFO[band] || BAND_INFO[parseInt(band)];
        if (!bandInfo) {
            $("#selected-band-info").hide();
            return;
        }
        
        $("#selected-band-info").show();
        $("#band-info-details").html(`
            <div class="em-band-detail">
                <div class="em-band-detail-label">Frequency</div>
                <div class="em-band-detail-value">${bandInfo.freq}</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Name</div>
                <div class="em-band-detail-value">${bandInfo.name}</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Type</div>
                <div class="em-band-detail-value">${bandInfo.type}</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Bandwidth</div>
                <div class="em-band-detail-value">${bandInfo.bandwidth} MHz</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Usage</div>
                <div class="em-band-detail-value">${bandInfo.usage}</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Penetration</div>
                <div class="em-band-detail-value">${bandInfo.penetration}</div>
            </div>
            <div class="em-band-detail">
                <div class="em-band-detail-label">Speed</div>
                <div class="em-band-detail-value">${bandInfo.speed}</div>
            </div>
            ${bandInfo.nr ? `
            <div class="em-band-detail">
                <div class="em-band-detail-label">Technology</div>
                <div class="em-band-detail-value">5G NR</div>
            </div>
            ` : ''}
        `);
    }
    
    // Enhanced signal monitoring with stable 5G detection
    function monitorSignals() {
        if (suspend) return;
        
        ajaxRequestCount++;
        console.log(`AJAX Request #${ajaxRequestCount} at ${new Date().toLocaleTimeString()}`);
        
        $.ajax({
            dataType: "text",
            type: "GET",
            async: true,
            url: "/api/device/signal",
            error: handleError,
            success: function(response) {
                const signalData = {
                    timestamp: new Date(),
                    nrrsrq: extractXML("nrrsrq", response),
                    nrrsrp: extractXML("nrrsrp", response),
                    nrsinr: extractXML("nrsinr", response),
                    rssi: extractXML("rssi", response),
                    rsrp: extractXML("rsrp", response),
                    rsrq: extractXML("rsrq", response),
                    sinr: extractXML("sinr", response),
                    dlbandwidth: extractXML("dlbandwidth", response),
                    ulbandwidth: extractXML("ulbandwidth", response),
                    band: extractXML("band", response),
                    cell_id: extractXML("cell_id", response),
                    plmn: extractXML("plmn", response)
                };
                
                // Update debug info
                $("#debug-signals").text(signalHistory.length);
                $("#debug-last-update").text(new Date().toLocaleTimeString());
                
                // Update UI with signal data
                updateSignalUI(signalData);
                
                // Handle 5G card visibility with stability (prevent flickering)
                const current5GStatus = !!(signalData.nrrsrp && signalData.nrrsrp !== "" && signalData.nrrsrp !== "0");
                
                // Only update 5G card visibility if status has changed and is stable
                if (current5GStatus !== lastKnown5GStatus) {
                    lastKnown5GStatus = current5GStatus;
                    setTimeout(() => {
                        // Double-check the status hasn't changed again
                        if (lastKnown5GStatus === current5GStatus) {
                            if (current5GStatus && !has5GCard) {
                                $("#nr-card").fadeIn(300);
                                has5GCard = true;
                                $("#debug-5g").text("Active");
                            } else if (!current5GStatus && has5GCard) {
                                $("#nr-card").fadeOut(300);
                                has5GCard = false;
                                $("#debug-5g").text("Not detected");
                            }
                        }
                    }, 1000); // Wait 1 second to confirm status is stable
                }
                
                // Add to history
                signalHistory.push(signalData);
                if (signalHistory.length > 360) {
                    signalHistory.shift();
                }
                
                // Update performance metrics
                updatePerformanceScore(signalData);
                
                // Track band performance
                if (signalData.band) {
                    if (!bandPerformance[signalData.band]) {
                        bandPerformance[signalData.band] = [];
                    }
                    bandPerformance[signalData.band].push({
                        rsrp: parseInt(signalData.rsrp || -120),
                        rsrq: parseInt(signalData.rsrq || -20),
                        sinr: parseInt(signalData.sinr || 0),
                        timestamp: signalData.timestamp
                    });
                }
                
                // Get additional info (throttled to avoid performance issues)
                const now = Date.now();
                if (!window.lastAdditionalInfoUpdate || (now - window.lastAdditionalInfoUpdate) > 1000) {
                    getNetworkMode();
                    getAntennaStatus();
                    getCellInfo(signalData);
                    getNetworkStatus();
                    window.lastAdditionalInfoUpdate = now;
                }
            }
        });
    }
    
    // Update signal UI
    function updateSignalUI(data) {
        // Update 4G signals
        updateSignalBar("rsrp", data.rsrp, "dBm");
        updateSignalBar("rsrq", data.rsrq, "dB");
        updateSignalBar("sinr", data.sinr, "dB");
        
        // Update 5G signals if available and card is visible
        if (has5GCard && data.nrrsrp) {
            updateSignalBar("nrrsrp", data.nrrsrp, "dBm", true);
            updateSignalBar("nrrsrq", data.nrrsrq, "dB", true);
            updateSignalBar("nrsinr", data.nrsinr, "dB", true);
        }
        
        // Update stats
        $("#rssi-value").text(data.rssi ? `${data.rssi} dBm` : "--");
        
        // Show band properly - handle both numeric and string values
        if (data.band && data.band !== "" && data.band !== "0") {
            $("#band-value").text(`B${data.band}`);
            // Highlight the active band in the grid
            $(".em-band-box").removeClass("current-active");
            $(`#cb${data.band}`).addClass("current-active");
        } else {
            $("#band-value").text("--");
        }
        
        $("#dlbw-value").text(data.dlbandwidth ? `${data.dlbandwidth} MHz` : "--");
        $("#ulbw-value").text(data.ulbandwidth ? `${data.ulbandwidth} MHz` : "--");
        $("#cellid-value").text(data.cell_id || "--");
        $("#plmn-value").text(formatPLMN(data.plmn) || "--");
    }
    
    // Update signal bar
    function updateSignalBar(type, value, unit, is5G = false) {
        if (!value || value === "" || value === "0") {
            const barId = `#${type}-bar`;
            $(barId).css("width", "5%");
            $(barId).text(`${type.toUpperCase()}: --`);
            return;
        }
        
        const numValue = parseInt(value);
        const quality = getSignalQuality(type, numValue);
        const percentage = calculateSignalPercentage(type, numValue);
        
        const prefix = is5G ? "5G " : "";
        const barId = `#${type}-bar`;
        
        $(barId).css("width", `${percentage}%`);
        $(barId).removeClass("excellent good fair poor").addClass(quality);
        $(barId).text(`${prefix}${type.toUpperCase()}: ${value} ${unit}`);
    }
    
    // Calculate signal quality
    function getSignalQuality(type, value) {
        const thresholds = SIGNAL_THRESHOLDS[type];
        if (!thresholds) return "fair";
        
        if (type.includes("sinr")) {
            if (value >= thresholds.excellent) return "excellent";
            if (value >= thresholds.good) return "good";
            if (value >= thresholds.fair) return "fair";
            return "poor";
        } else {
            if (value >= thresholds.excellent) return "excellent";
            if (value >= thresholds.good) return "good";
            if (value >= thresholds.fair) return "fair";
            return "poor";
        }
    }
    
    // Calculate signal percentage
    function calculateSignalPercentage(type, value) {
        const thresholds = SIGNAL_THRESHOLDS[type];
        if (!thresholds) return 50;
        
        const range = Math.abs(thresholds.excellent - thresholds.poor);
        const normalized = (value - thresholds.poor) / range;
        return Math.max(5, Math.min(100, normalized * 100));
    }
    
    // Update performance score
    function updatePerformanceScore(data) {
        let score = 0;
        let factors = [];
        
        if (data.rsrp && data.rsrp !== "") {
            const rsrpScore = calculateSignalPercentage("rsrp", parseInt(data.rsrp)) * 0.4;
            score += rsrpScore;
        }
        
        if (data.rsrq && data.rsrq !== "") {
            const rsrqScore = calculateSignalPercentage("rsrq", parseInt(data.rsrq)) * 0.3;
            score += rsrqScore;
        }
        
        if (data.sinr && data.sinr !== "") {
            const sinrScore = calculateSignalPercentage("sinr", parseInt(data.sinr)) * 0.3;
            score += sinrScore;
        }
        
        // Store current score and calculate average
        currentPerformanceScore = score;
        performanceScoreHistory.push(score);
        
        // Keep only last 1000 scores for average (about 50 seconds at 50ms interval)
        if (performanceScoreHistory.length > 1000) {
            performanceScoreHistory.shift();
        }
        
        // Calculate average
        const averageScore = performanceScoreHistory.reduce((sum, s) => sum + s, 0) / performanceScoreHistory.length;
        
        $("#perf-score").text(Math.round(score));
        $("#perf-average").text(Math.round(averageScore));
        $("#perf-timestamp").text(new Date().toLocaleTimeString());
        
        // Flash update indicator
        $("#update-indicator").css("color", "#ef4444").text("●");
        setTimeout(() => {
            $("#update-indicator").css("color", "#10b981").text("●");
        }, 100);
        
        let label = "";
        let color = "#ef4444";
        if (score >= 80) {
            label = "Excellent Connection";
            color = "#10b981";
        } else if (score >= 60) {
            label = "Good Connection";
            color = "#3b82f6";
        } else if (score >= 40) {
            label = "Fair Connection";
            color = "#f59e0b";
        } else {
            label = "Poor Connection";
            color = "#ef4444";
        }
        
        $("#perf-score").css("color", color);
        $("#perf-label").text(label);
        
        updateRecommendation(score, data);
    }
    
    // Update recommendation
    function updateRecommendation(score, data) {
        let recommendation = "";
        
        if (score >= 80) {
            recommendation = "Excellent signal quality! Your current configuration is optimal.";
        } else if (score >= 60) {
            recommendation = "Good signal. Consider locking to current band for stability.";
        } else if (score >= 40) {
            if (parseInt(data.rsrp || -120) < -100) {
                recommendation = "Weak signal. Try: 1) Repositioning antenna, 2) Switching to lower frequency bands (B8, B20, B28)";
            } else if (parseInt(data.sinr || 0) < 0) {
                recommendation = "High interference. Try different bands or improve antenna isolation.";
            } else {
                recommendation = "Fair connection. Run Quick Scan to find better bands.";
            }
        } else {
            recommendation = "Poor signal! Immediate action needed: 1) Check antenna connections, 2) Try bands B20/B28 for better coverage, 3) Consider external antenna.";
        }
        
        $("#recommendation-text").text(recommendation);
    }
    
    // Reset performance history
    function resetPerformanceHistory() {
        performanceScoreHistory = [];
        currentPerformanceScore = 0;
        $("#perf-average").text("--");
        showNotification("Performance history reset", "success");
    }
    
    // Get network mode
    function getNetworkMode() {
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/net/net-mode",
            error: handleError,
            success: function(response) {
                const lteband = extractXML("LTEBand", response);
                const currentBand = extractXML("band", response);
                highlightActiveBands(lteband);
                
                // Update current band display
                if (currentBand && currentBand !== "") {
                    $("#band-value").text(currentBand);
                }
            }
        });
    }
    
    // Get network status
    function getNetworkStatus() {
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/monitoring/status",
            error: handleError,
            success: function(response) {
                const networkType = extractXML("CurrentNetworkTypeEx", response);
                const isCA = networkType === "1011";
                
                $("#em-network-mode").text(isCA ? "4G+" : "4G");
                $("#ca-status").text(isCA ? "Active" : "Inactive");
                
                if (isCA) {
                    $("#em-network-mode").css("color", "#10b981");
                } else {
                    $("#em-network-mode").css("color", "#f59e0b");
                }
            }
        });
    }
    
    // Get antenna status
    function getAntennaStatus() {
        $.ajax({
            dataType: "text",
            type: "GET",
            async: true,
            url: "/api/device/antenna_type",
            error: handleError,
            success: function(response) {
                const ant1 = extractXML("antenna1type", response) === "1" ? "EXT" : "INT";
                const ant2 = extractXML("antenna2type", response) === "1" ? "EXT" : "INT";
                
                $("#antenna-value").text(`${ant1}/${ant2}`);
                
                if (ant1 === "INT" && ant2 === "INT") {
                    $("#antenna-rec").text("Using internal antennas. External antennas recommended for better signal (+10-15 dB typical improvement).");
                } else if (ant1 === "EXT" && ant2 === "EXT") {
                    $("#antenna-rec").text("External antennas detected. Ensure MIMO spacing (>30cm) and proper orientation.");
                } else {
                    $("#antenna-rec").text("Mixed antenna config. Use matching types for optimal MIMO performance.");
                }
            }
        });
    }
    
    // Get cell info
    function getCellInfo(data) {
        if (!data.cell_id) return;
        
        let enbid = "";
        const cellId = data.cell_id;
        
        if (cellId.indexOf("-") > 0) {
            enbid = Number(cellId.substr(0, cellId.indexOf("-")));
        } else {
            const hex = Number(cellId).toString(16);
            const hex2 = hex.substring(0, hex.length - 2);
            enbid = parseInt(hex2, 16).toString();
        }
        
        $("#enbid-value").text(enbid);
        
        let plmn = data.plmn;
        if (plmn === "22201") plmn = "2221";
        if (plmn === "22299") plmn = "22288";
        if (plmn === "22250" && enbid.length === 6) plmn = "22288";
        
        const lteItalyLink = `https://lteitaly.it/internal/map.php#bts=${plmn}.${enbid}`;
        $("#enbid-value").attr("href", lteItalyLink);
    }
    
    // Highlight active bands
    function highlightActiveBands(bandHex) {
        if (!bandHex) return;
        
        $(".em-band-box").removeClass("active");
        
        try {
            const bigIntBand = BigInt("0x" + bandHex);
            let availableBands = [];
            
            for (let i = 0; i < 90; i++) {
                const bandBit = BigInt(2) ** BigInt(i);
                if (bigIntBand & bandBit) {
                    $(`#cb${i + 1}`).addClass("active");
                    availableBands.push(i + 1);
                }
            }
            
            // Show available bands count and update UI
            if (availableBands.length > 0) {
                console.log(`Available bands: ${availableBands.join(", ")}`);
                
                // Update Available Bands tab with real-time data
                $("#detection-status").text(`${availableBands.length} bands detected`).css("color", "#10b981");
                $("#available-bands-content").show();
                $("#no-bands-message").hide();
                
                // Update the available bands table
                const tableBody = $("#available-bands-table tbody");
                if (tableBody.length === 0) {
                    // If table doesn't exist, create it
                    const table = $("#available-bands-content").find("table tbody");
                    if (table.length > 0) {
                        table.empty();
                        availableBands.forEach(band => {
                            const bandInfo = BAND_INFO[band] || {};
                            table.append(`
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">B${band}</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${bandInfo.freq || '--'}</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">LTE</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${bandInfo.type || '--'}</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${bandInfo.bandwidth || '--'} MHz</td>
                                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${bandInfo.usage || '--'}</td>
                                </tr>
                            `);
                        });
                    }
                }
            } else {
                $("#detection-status").text("No bands detected").css("color", "#ef4444");
            }
        } catch (e) {
            console.error("Error highlighting bands:", e);
        }
    }
    
    // Enhanced band selection with progress dialog
    function selectBands() {
        // Create custom dialog instead of prompt
        const dialogHtml = `
            <div id="band-select-dialog" style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 10001;
                min-width: 400px;
            ">
                <h3 style="margin-top: 0; color: #667eea;">Band Configuration</h3>
                <p style="color: #6b7280; margin-bottom: 20px;">Enter bands separated by + (e.g., 1+3+7+20)</p>
                
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #4b5563;">Band Selection:</label>
                    <input type="text" id="band-input" placeholder="AUTO or 1+3+7+20" value="AUTO" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #e5e7eb;
                        border-radius: 6px;
                        font-size: 14px;
                    ">
                </div>
                
                <div style="margin-bottom: 20px;">
                    <p style="font-size: 12px; color: #6b7280;">Quick presets:</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <button class="band-preset-btn" data-bands="1+3+7+38+40" style="padding: 8px; background: #f3f4f6; border: none; border-radius: 4px; cursor: pointer;">🏙️ Urban</button>
                        <button class="band-preset-btn" data-bands="8+20+28" style="padding: 8px; background: #f3f4f6; border: none; border-radius: 4px; cursor: pointer;">🌾 Rural</button>
                        <button class="band-preset-btn" data-bands="3+7+20" style="padding: 8px; background: #f3f4f6; border: none; border-radius: 4px; cursor: pointer;">⚖️ Balanced</button>
                        <button class="band-preset-btn" data-bands="AUTO" style="padding: 8px; background: #f3f4f6; border: none; border-radius: 4px; cursor: pointer;">🔄 Auto</button>
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button id="band-cancel-btn" style="
                        padding: 10px 20px;
                        background: #e5e7eb;
                        color: #4b5563;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Cancel</button>
                    <button id="band-apply-btn" style="
                        padding: 10px 20px;
                        background: #667eea;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Apply Configuration</button>
                </div>
                
                <div id="band-progress" style="display: none; margin-top: 20px;">
                    <div style="background: #e5e7eb; height: 4px; border-radius: 2px; overflow: hidden;">
                        <div id="band-progress-bar" style="
                            width: 0%;
                            height: 100%;
                            background: linear-gradient(90deg, #667eea, #764ba2);
                            transition: width 0.3s;
                        "></div>
                    </div>
                    <p id="band-status" style="margin-top: 10px; color: #6b7280; font-size: 14px;">Preparing...</p>
                </div>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
            " id="band-overlay"></div>
        `;
        
        $("body").append(dialogHtml);
        
        // Add event handlers
        $(".band-preset-btn").click(function() {
            $("#band-input").val($(this).data("bands"));
        });
        
        $("#band-cancel-btn, #band-overlay").click(function() {
            $("#band-select-dialog, #band-overlay").remove();
        });
        
        $("#band-apply-btn").click(function() {
            const input = $("#band-input").val();
            if (!input) return;
            
            // Disable buttons and show progress
            $("#band-apply-btn, #band-cancel-btn").prop("disabled", true);
            $("#band-progress").show();
            
            processBandSelection(input);
        });
        
        // Focus input
        $("#band-input").focus();
    }
    
    // Process band selection
    function processBandSelection(input) {
        let bands = input.toUpperCase().trim();
        let hexValue = "7FFFFFFFFFFFFFFF";
        let mainBand = null;
        
        if (bands === "AUTO") {
            hexValue = "7FFFFFFFFFFFFFFF";
        } else {
            const bandList = bands.split("+").map(b => b.trim());
            let bandValue = BigInt(0);
            
            for (let band of bandList) {
                if (band.includes("M")) {
                    mainBand = band.replace("M", "");
                    band = mainBand;
                }
                
                const bandNum = parseInt(band);
                if (bandNum > 0 && bandNum <= 90) {
                    bandValue += BigInt(2) ** BigInt(bandNum - 1);
                }
            }
            
            hexValue = bandValue.toString(16).toUpperCase();
        }
        
        applyBandConfiguration(hexValue, mainBand);
    }
    
    // Apply band configuration with progress tracking
    function applyBandConfiguration(bandHex, mainBand) {
        suspend = 1;
        
        // Update progress UI
        function updateProgress(percent, status) {
            if ($("#band-progress-bar").length) {
                $("#band-progress-bar").css("width", percent + "%");
                $("#band-status").text(status);
            }
            showNotification(status, percent < 100 ? "info" : "success");
        }
        
        updateProgress(10, "Getting authentication token...");
        
        // Get CSRF token first - no delay needed here
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/html/home.html",
            error: function(xhr, status, error) {
                suspend = 0;
                updateProgress(0, "Failed to get token: " + error);
                $("#band-select-dialog, #band-overlay").remove();
            },
            success: function(response) {
                updateProgress(30, "Token acquired, preparing configuration...");
                
                let token = "";
                try {
                    const tokenMatch = response.match(/name="csrf_token"\s+content="([^"]+)"/);
                    if (tokenMatch) {
                        token = tokenMatch[1];
                    } else {
                        // Try alternative pattern
                        const parts = response.split('name="csrf_token" content="');
                        if (parts.length > 1) {
                            token = parts[1].split('"')[0];
                        }
                    }
                } catch (e) {
                    console.error("Token extraction error:", e);
                }
                
                if (!token) {
                    suspend = 0;
                    updateProgress(0, "Failed to extract CSRF token");
                    $("#band-select-dialog, #band-overlay").remove();
                    return;
                }
                
                updateProgress(50, "Applying band configuration...");
                
                const networkMode = $("#force4g-checkbox").is(":checked") ? "03" : "00";
                
                // Apply immediately without unnecessary delay
                $.ajax({
                    type: "POST",
                    async: true,
                    url: "/api/net/net-mode",
                    headers: { __RequestVerificationToken: token },
                    contentType: "application/xml",
                    data: `<?xml version="1.0" encoding="UTF-8"?><request><NetworkMode>${networkMode}</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>${bandHex}</LTEBand></request>`,
                    success: function() {
                        updateProgress(80, "Configuration sent, verifying...");
                        
                        // Quick verification
                        setTimeout(() => {
                            $.ajax({
                                type: "GET",
                                dataType: "text",
                                async: true,
                                url: "/api/net/net-mode",
                                success: function(verifyResponse) {
                                    const appliedBand = extractXML("LTEBand", verifyResponse);
                                    if (appliedBand) {
                                        updateProgress(100, "Band configuration applied successfully!");
                                        highlightActiveBands(appliedBand);
                                    } else {
                                        updateProgress(100, "Configuration applied (verification pending)");
                                    }
                                    
                                    suspend = 0;
                                    
                                    // Close dialog after success
                                    setTimeout(() => {
                                        $("#band-select-dialog, #band-overlay").remove();
                                    }, 1500);
                                    
                                    if (mainBand) {
                                        setTimeout(() => {
                                            processBandSelection(mainBand);
                                        }, 500); // Reduced delay
                                    }
                                },
                                error: function() {
                                    updateProgress(100, "Configuration applied (unable to verify)");
                                    suspend = 0;
                                    setTimeout(() => {
                                        $("#band-select-dialog, #band-overlay").remove();
                                    }, 1500);
                                }
                            });
                        }, 500); // Quick verification after 500ms
                    },
                    error: function(xhr, status, error) {
                        suspend = 0;
                        updateProgress(0, "Failed to apply bands: " + error);
                        console.error("Band application error:", xhr.responseText);
                        
                        // Re-enable buttons on error
                        $("#band-apply-btn, #band-cancel-btn").prop("disabled", false);
                        $("#band-progress").hide();
                    }
                });
            }
        });
    }
    
    // Apply preset band configurations
    function applyPreset(preset) {
        const presets = {
            urban: "1+3+7+38+40+41",
            rural: "8+20+28",
            balanced: "3+7+20",
            capacity: "1+3+7+40"
        };
        
        if (presets[preset]) {
            showNotification(`Applying ${preset} preset...`, "info");
            processBandSelection(presets[preset]);
        }
    }
    
    // Smart band detection - check which bands are actually available
    function detectAvailableBands(callback) {
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/net/net-mode",
            success: function(response) {
                const supportedBands = extractXML("LTEBand", response);
                if (supportedBands) {
                    const availableBands = [];
                    try {
                        const bigIntBand = BigInt("0x" + supportedBands);
                        // Check bands 1-71
                        for (let i = 1; i <= 71; i++) {
                            const bandBit = BigInt(2) ** BigInt(i - 1);
                            if (bigIntBand & bandBit) {
                                availableBands.push(i);
                            }
                        }
                    } catch (e) {
                        console.error("Error parsing bands:", e);
                    }
                    callback(availableBands);
                } else {
                    // Fallback to common bands
                    callback([1, 3, 7, 8, 20, 28, 38, 40]);
                }
            },
            error: function() {
                // Fallback to common bands
                callback([1, 3, 7, 8, 20, 28, 38, 40]);
            }
        });
    }
    
    // Speed test function
    function performSpeedTest(callback) {
        const startTime = Date.now();
        const testSize = 1024 * 100; // 100KB test
        
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/monitoring/traffic-statistics",
            success: function(response) {
                const downloadSpeed = extractXML("CurrentDownloadRate", response);
                const uploadSpeed = extractXML("CurrentUploadRate", response);
                const latency = Date.now() - startTime;
                
                callback({
                    download: parseInt(downloadSpeed) || 0,
                    upload: parseInt(uploadSpeed) || 0,
                    latency: latency
                });
            },
            error: function() {
                callback({ download: 0, upload: 0, latency: 0 });
            }
        });
    }
    
    // Enhanced quick band scan with progress dialog
    function quickBandScan() {
        if (suspend) {
            showNotification("Another operation in progress. Please wait...", "warning");
            return;
        }
        
        // Create scan progress dialog
        const scanDialog = `
            <div id="scan-dialog" style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 10001;
                min-width: 450px;
            ">
                <h3 style="margin-top: 0; color: #667eea;">🔍 Band Scanner</h3>
                <p style="color: #6b7280;">Testing available bands for optimal signal...</p>
                
                <div style="margin: 20px 0;">
                    <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div id="scan-progress-bar" style="
                            width: 0%;
                            height: 100%;
                            background: linear-gradient(90deg, #10b981, #34d399);
                            transition: width 0.5s;
                        "></div>
                    </div>
                    <p id="scan-status" style="margin-top: 10px; color: #4b5563; font-size: 14px;">Initializing scan...</p>
                </div>
                
                <div id="scan-results-preview" style="
                    max-height: 200px;
                    overflow-y: auto;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    padding: 10px;
                    margin: 15px 0;
                    font-family: monospace;
                    font-size: 12px;
                    background: #f9fafb;
                ">
                    <div style="color: #6b7280;">Results will appear here...</div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span id="scan-time" style="color: #6b7280; font-size: 12px;">Est. time: <span id="scan-eta">calculating...</span></span>
                    <button id="scan-cancel-btn" style="
                        padding: 10px 20px;
                        background: #ef4444;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Cancel Scan</button>
                </div>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
            " id="scan-overlay"></div>
        `;
        
        $("body").append(scanDialog);
        
        let bandsToTest = [];
        let currentIndex = 0;
        let cancelScan = false;
        let skipCount = 0;
        scanResults = {};
        
        // Cancel button handler
        $("#scan-cancel-btn").click(function() {
            cancelScan = true;
            $("#scan-dialog, #scan-overlay").remove();
            showNotification("Band scan cancelled", "warning");
            suspend = 0;
        });
        
        suspend = 1;
        
        // First, get current configuration to restore later
        let originalBandConfig = null;
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/net/net-mode",
            success: function(response) {
                originalBandConfig = extractXML("LTEBand", response);
                const currentBand = extractXML("band", response);
                
                // Detect available bands based on current configuration
                $("#scan-status").text("Detecting available bands in your region...");
                detectAvailableBands(function(availableBands) {
                    // If we're in Turkey (band 28 is active), test Turkey-specific bands
                    if (currentBand === "28" || $("#plmn-value").text().includes("Turkcell")) {
                        bandsToTest = [1, 3, 7, 8, 20, 28]; // Turkey bands
                        $("#scan-results-preview").html(`<div style="color: #10b981;">Region: Turkey - Testing bands 1, 3, 7, 8, 20, 28</div><br>`);
                    } else if (availableBands.length === 0) {
                        $("#scan-status").text("No bands detected. Using common bands...");
                        bandsToTest = [1, 3, 7, 8, 20, 28, 38, 40];
                    } else {
                        // Filter to only test bands that are commonly used
                        const priorityBands = [1, 3, 7, 8, 20, 28, 32, 38, 40, 41, 42, 43];
                        bandsToTest = availableBands.filter(band => priorityBands.includes(band));
                        
                        if (bandsToTest.length === 0) {
                            bandsToTest = availableBands.slice(0, 8); // Test first 8 available
                        }
                        
                        $("#scan-status").text(`Found ${availableBands.length} supported bands. Testing ${bandsToTest.length} priority bands...`);
                        $("#scan-results-preview").html(`<div style="color: #10b981;">Available bands: ${availableBands.join(", ")}</div><br>`);
                    }
                    
                    // Calculate ETA
                    const totalTime = bandsToTest.length * 2; // 2 seconds per band
                    $("#scan-eta").text(`${totalTime} seconds`);
                    
                    // Start testing
                    setTimeout(testNextBand, 500);
                });
            }
        });
        
        function testNextBand() {
            if (cancelScan || currentIndex >= bandsToTest.length) {
                if (!cancelScan) {
                    // Restore original band configuration
                    if (originalBandConfig) {
                        $("#scan-status").text("Restoring original configuration...");
                        setTimeout(() => {
                            applyBandConfiguration(originalBandConfig, null);
                            analyzeScanResults();
                            $("#scan-dialog, #scan-overlay").fadeOut(300, function() {
                                $(this).remove();
                            });
                        }, 1000);
                    } else {
                        analyzeScanResults();
                        $("#scan-dialog, #scan-overlay").fadeOut(300, function() {
                            $(this).remove();
                        });
                    }
                }
                suspend = 0;
                return;
            }
            
            const band = bandsToTest[currentIndex];
            const progress = ((currentIndex + 1) / bandsToTest.length) * 100;
            
            $("#scan-progress-bar").css("width", progress + "%");
            $("#scan-status").text(`Testing Band ${band} (${currentIndex + 1}/${bandsToTest.length})...`);
            
            // Update ETA and show skip count
            const remainingBands = bandsToTest.length - currentIndex - 1;
            const remainingTime = Math.max(0, remainingBands * 2);
            $("#scan-eta").text(`${remainingTime}s`);
            
            // Show bands tested/skipped count
            if (skipCount > 0) {
                $("#scan-status").append(` (${skipCount} skipped)`);
            }
            
            const bandHex = (BigInt(2) ** BigInt(band - 1)).toString(16);
            
            // First apply the band
            $.ajax({
                type: "GET",
                dataType: "text",
                async: true,
                url: "/html/home.html",
                success: function(response) {
                    let token = "";
                    try {
                        const tokenMatch = response.match(/name="csrf_token"\s+content="([^"]+)"/);
                        if (tokenMatch) token = tokenMatch[1];
                    } catch (e) {}
                    
                    if (token) {
                        $.ajax({
                            type: "POST",
                            async: true,
                            url: "/api/net/net-mode",
                            headers: { __RequestVerificationToken: token },
                            contentType: "application/xml",
                            data: `<?xml version="1.0" encoding="UTF-8"?><request><NetworkMode>00</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>${bandHex}</LTEBand></request>`,
                            success: function() {
                                // Wait for band to apply then verify
                                setTimeout(() => {
                                    // Verify band actually changed
                                    $.ajax({
                                        type: "GET",
                                        dataType: "text",
                                        async: true,
                                        url: "/api/device/signal",
                                        timeout: 3000,
                                        success: function(signalResponse) {
                                            const actualBand = extractXML("band", signalResponse);
                                            const rsrp = parseInt(extractXML("rsrp", signalResponse) || -120);
                                            const rsrq = parseInt(extractXML("rsrq", signalResponse) || -20);
                                            const sinr = parseInt(extractXML("sinr", signalResponse) || 0);
                                            
                                            // Check if band actually switched
                                            if (actualBand == band || rsrp > -120) {
                                                // Band is available
                                                scanResults[band] = {
                                                    rsrp: rsrp,
                                                    rsrq: rsrq,
                                                    sinr: sinr,
                                                    tested: true,
                                                    actualBand: actualBand
                                                };
                                                
                                                const quality = rsrp > -85 ? "✅" : rsrp > -95 ? "⚠️" : "❌";
                                                const bandInfo = BAND_INFO[band] || {};
                                                const resultLine = `${quality} Band ${band} (${bandInfo.freq || '?'}): RSRP=${rsrp}dBm, RSRQ=${rsrq}dB, SINR=${sinr}dB`;
                                                
                                                $("#scan-results-preview").append(resultLine + "<br>");
                                            } else {
                                                // Band not available
                                                scanResults[band] = { tested: false, skipped: true };
                                                $("#scan-results-preview").append(`⏭️ Band ${band}: Not available<br>`);
                                                skipCount++;
                                            }
                                            
                                            $("#scan-results-preview")[0].scrollTop = $("#scan-results-preview")[0].scrollHeight;
                                            currentIndex++;
                                            testNextBand();
                                        },
                                        error: function() {
                                            scanResults[band] = { tested: false };
                                            $("#scan-results-preview").append(`❌ Band ${band}: Timeout<br>`);
                                            currentIndex++;
                                            testNextBand();
                                        }
                                    });
                                }, 1500); // Wait 1.5 seconds for band to stabilize
                            },
                            error: function() {
                                scanResults[band] = { tested: false };
                                currentIndex++;
                                testNextBand();
                            }
                        });
                    }
                }
            });
        }
        
        testNextBand();
    }
    
    // Analyze scan results
    function analyzeScanResults() {
        showNotification("Band scan complete! Check Optimization tab for results.", "success");
        
        let resultsText = "Band Scan Results:\n\n";
        const sortedResults = Object.entries(scanResults)
            .filter(([band, data]) => data.tested && !data.skipped)
            .sort((a, b) => {
                // Sort by RSRP first, then by speed if available
                if (Math.abs(b[1].rsrp - a[1].rsrp) < 5) {
                    const speedA = a[1].speed?.download || 0;
                    const speedB = b[1].speed?.download || 0;
                    return speedB - speedA;
                }
                return b[1].rsrp - a[1].rsrp;
            });
        
        const skippedBands = Object.entries(scanResults)
            .filter(([band, data]) => data.skipped)
            .map(([band]) => band);
        
        if (sortedResults.length === 0) {
            resultsText = "No active bands found in your area. Please check:\n";
            resultsText += "1. Antenna connections\n";
            resultsText += "2. SIM card status\n";
            resultsText += "3. Network coverage\n";
        } else {
            resultsText += `✅ Found ${sortedResults.length} active bands\n`;
            resultsText += `⏭️ Skipped ${skippedBands.length} unavailable bands: ${skippedBands.join(", ")}\n\n`;
            
            sortedResults.forEach(([band, data], index) => {
                const bandInfo = BAND_INFO[band] || {};
                resultsText += `${index + 1}. Band ${band} (${bandInfo.freq || 'Unknown'}):\n`;
                resultsText += `   RSRP: ${data.rsrp} dBm | RSRQ: ${data.rsrq} dB | SINR: ${data.sinr} dB\n`;
                if (data.speed) {
                    resultsText += `   Speed: ${(data.speed.download/1024).toFixed(1)} Mbps | Latency: ${data.speed.latency}ms\n`;
                }
                resultsText += `   Quality: ${getSignalQuality('rsrp', data.rsrp)} | ${bandInfo.usage || 'General use'}\n\n`;
            });
            
            // Smart recommendations based on results
            const excellentBands = sortedResults.filter(([b, d]) => d.rsrp > -85);
            const goodBands = sortedResults.filter(([b, d]) => d.rsrp > -95 && d.rsrp <= -85);
            
            let recommendation = "";
            if (excellentBands.length >= 3) {
                const topBands = excellentBands.slice(0, 3).map(([band]) => band);
                recommendation = `Excellent coverage! Use bands ${topBands.join("+")} for best performance.`;
                $("#best-bands").text(`Best performing bands: ${topBands.join(", ")} (all excellent signal)`);
                $("#settings-rec").text(`Recommended: ${topBands.join("+")}. These bands all have excellent signal quality.`);
            } else if (excellentBands.length > 0) {
                const allGoodBands = [...excellentBands, ...goodBands].slice(0, 3).map(([band]) => band);
                recommendation = `Mixed coverage. Primary: Band ${excellentBands[0][0]}, with ${allGoodBands.slice(1).join("+")} as backup.`;
                $("#best-bands").text(`Best bands: ${allGoodBands.join(", ")}`);
                $("#settings-rec").text(recommendation);
            } else if (goodBands.length > 0) {
                const topBands = goodBands.slice(0, 3).map(([band]) => band);
                recommendation = `Limited coverage. Use bands ${topBands.join("+")}. Consider external antenna for improvement.`;
                $("#best-bands").text(`Available bands: ${topBands.join(", ")} (fair signal)`);
                $("#settings-rec").text(recommendation);
            } else {
                recommendation = "Poor coverage. External antenna strongly recommended. Use any available bands.";
                $("#best-bands").text("Very weak signal on all bands");
                $("#settings-rec").text(recommendation);
            }
        }
        
        $("#scan-results").text(resultsText);
    }
    
    // Auto-optimize with integrated flow
    function autoOptimize() {
        if (!confirm("This will scan all bands and apply the best configuration. This may take about 30 seconds. Continue?")) {
            return;
        }
        
        // Store original callback
        const originalAnalyze = window.analyzeScanResults;
        
        // Override analyzeScanResults to auto-apply best config
        window.analyzeScanResults = function() {
            originalAnalyze.call(this);
            
            // Auto-apply best configuration after scan
            const sortedResults = Object.entries(scanResults)
                .filter(([band, data]) => data.tested && data.rsrp > -110)
                .sort((a, b) => b[1].rsrp - a[1].rsrp)
                .slice(0, 3);
            
            if (sortedResults.length > 0) {
                const bestBands = sortedResults.map(([band]) => band).join("+");
                
                setTimeout(() => {
                    showNotification(`Auto-applying optimized configuration: ${bestBands}`, "success");
                    processBandSelection(bestBands);
                }, 1000);
            } else {
                showNotification("No suitable bands found. Please check antenna connection.", "error");
            }
            
            // Restore original function
            window.analyzeScanResults = originalAnalyze;
        };
        
        quickBandScan();
    }
    
    // Toggle auto refresh
    function toggleAutoRefresh() {
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
            $("#auto-refresh-text").text("▶️ Resume");
            showNotification("Auto-refresh paused", "warning");
        } else {
            const interval = parseInt($("#update-interval").val()) || 500;
            updateInterval = setInterval(monitorSignals, interval);
            $("#auto-refresh-text").text("⏸ Pause");
            showNotification("Auto-refresh resumed", "success");
        }
    }
    
    // Update interval setting
    function updateIntervalSetting() {
        const newInterval = parseInt($("#update-interval").val());
        if (newInterval >= 50 && newInterval <= 10000) {
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = setInterval(monitorSignals, newInterval);
            }
            $("#debug-interval").text(`${newInterval}ms`);
            showNotification(`Update interval set to ${newInterval}ms`, "success");
        } else {
            showNotification("Invalid interval. Must be between 50-10000ms", "error");
        }
    }
    
    // Toggle Force 4G
    function toggleForce4G() {
        const isChecked = $("#force4g-checkbox").is(":checked");
        
        // Get CSRF token first
        $.ajax({
            type: "GET",
            url: "/",
            success: function(response) {
                let token = "";
                try {
                    const tokenMatch = response.match(/name="csrf_token"\s+content="([^"]+)"/);
                    if (tokenMatch) {
                        token = tokenMatch[1];
                    } else {
                        // Try alternative pattern
                        const parts = response.split('name="csrf_token" content="');
                        if (parts.length > 1) {
                            token = parts[1].split('"')[0];
                        }
                    }
                } catch (e) {
                    console.error("Token extraction error:", e);
                }
                
                if (!token) {
                    showNotification("Failed to get CSRF token", "error");
                    $("#force4g-checkbox").prop("checked", !isChecked); // Revert checkbox
                    return;
                }
                
                // Set network mode: 03 = LTE only, 00 = Auto
                const networkMode = isChecked ? "03" : "00";
                
                $.ajax({
                    type: "POST",
                    url: "/api/net/net-mode",
                    headers: { __RequestVerificationToken: token },
                    contentType: "application/xml",
                    data: `<?xml version="1.0" encoding="UTF-8"?><request><NetworkMode>${networkMode}</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>7FFFFFFFFFFFFFFF</LTEBand></request>`,
                    success: function() {
                        showNotification(`Force 4G ${isChecked ? "enabled" : "disabled"} - please wait for reconnection`, "success");
                    },
                    error: function() {
                        showNotification("Failed to change network mode", "error");
                        $("#force4g-checkbox").prop("checked", !isChecked); // Revert checkbox
                    }
                });
            },
            error: function() {
                showNotification("Failed to get CSRF token", "error");
                $("#force4g-checkbox").prop("checked", !isChecked); // Revert checkbox
            }
        });
    }
    
    // Switch tabs
    function switchTab(tabName) {
        $(".em-tab").removeClass("active");
        $(".em-tab-content").removeClass("active");
        
        $(event.target).addClass("active");
        $(`#${tabName}-tab`).addClass("active");
        
        if (tabName === "history") {
            updateHistoryChart();
        } else if (tabName === "available") {
            // Auto-detect if not already done
            if ($("#available-bands-content").is(":hidden")) {
                detectRegionBands();
            }
        }
    }
    
    // Detect available bands in region
    function detectRegionBands() {
        $("#detection-status").text("Detecting...");
        $("#no-bands-message").hide();
        
        // Get current network info
        $.ajax({
            type: "GET",
            dataType: "text",
            async: true,
            url: "/api/net/net-mode",
            success: function(response) {
                const lteband = extractXML("LTEBand", response);
                
                // Get current signal info
                $.ajax({
                    type: "GET",
                    dataType: "text",
                    async: true,
                    url: "/api/device/signal",
                    success: function(signalResponse) {
                        const currentBand = extractXML("band", signalResponse);
                        const plmn = extractXML("plmn", signalResponse);
                        
                        // Parse available bands
                        let availableBands = [];
                        if (lteband) {
                            try {
                                const bigIntBand = BigInt("0x" + lteband);
                                for (let i = 0; i < 71; i++) {
                                    const bandBit = BigInt(2) ** BigInt(i);
                                    if (bigIntBand & bandBit) {
                                        availableBands.push(i + 1);
                                    }
                                }
                            } catch (e) {
                                console.error("Error parsing bands:", e);
                            }
                        }
                        
                        // Detect region and operator
                        let region = "Unknown";
                        let operator = formatPLMN(plmn) || "Unknown";
                        
                        // Region detection based on bands and PLMN
                        if (plmn && plmn.startsWith("286")) {
                            region = "Turkey";
                        } else if (availableBands.includes(28) && availableBands.includes(20)) {
                            region = "Europe/MENA";
                        } else if (availableBands.includes(2) || availableBands.includes(4) || availableBands.includes(66)) {
                            region = "Americas";
                        } else if (availableBands.includes(38) || availableBands.includes(40) || availableBands.includes(41)) {
                            region = "Asia-Pacific";
                        }
                        
                        // Update UI
                        $("#detected-region").text(region);
                        $("#detected-operator").text(operator);
                        $("#total-bands-count").text(availableBands.length);
                        $("#current-active-band").text(currentBand ? `Band ${currentBand}` : "None");
                        
                        // Build bands table
                        const tableBody = $("#available-bands-table");
                        tableBody.empty();
                        
                        availableBands.forEach(band => {
                            const bandInfo = BAND_INFO[band] || {};
                            const isActive = band == currentBand;
                            
                            // Determine technology support
                            let technology = "4G LTE";
                            if (band <= 14 || band == 19 || band == 20 || band == 26) {
                                technology = "3G UMTS / 4G LTE";
                            }
                            if (bandInfo.nr) {
                                technology = "5G NR";
                            }
                            
                            const row = `
                                <tr style="border-bottom: 1px solid #e5e7eb; ${isActive ? 'background: #eff6ff;' : ''}">
                                    <td style="padding: 10px; font-weight: 600; color: ${isActive ? '#3b82f6' : '#1f2937'};">B${band}</td>
                                    <td style="padding: 10px;">${bandInfo.freq || 'Unknown'}</td>
                                    <td style="padding: 10px;">
                                        <span style="padding: 2px 8px; background: ${technology.includes('5G') ? '#ddd6fe' : technology.includes('3G') ? '#fed7aa' : '#bfdbfe'}; 
                                                   color: ${technology.includes('5G') ? '#7c3aed' : technology.includes('3G') ? '#ea580c' : '#2563eb'}; 
                                                   border-radius: 4px; font-size: 11px; font-weight: 600;">
                                            ${technology}
                                        </span>
                                    </td>
                                    <td style="padding: 10px;">${bandInfo.type || 'FDD'}</td>
                                    <td style="padding: 10px;">${bandInfo.bandwidth || 'Variable'} MHz</td>
                                    <td style="padding: 10px;">
                                        <span style="color: ${bandInfo.penetration === 'Excellent' ? '#10b981' : bandInfo.penetration === 'Good' ? '#3b82f6' : '#f59e0b'};">
                                            ${bandInfo.penetration || 'Medium'}
                                        </span>
                                    </td>
                                    <td style="padding: 10px;">
                                        ${isActive ? '<span style="color: #10b981; font-weight: 600;">✓ Active</span>' : '<span style="color: #6b7280;">Available</span>'}
                                    </td>
                                </tr>
                            `;
                            tableBody.append(row);
                        });
                        
                        // Build technology mapping
                        const techMapping = $("#tech-mapping");
                        let mappingHtml = '<div style="font-size: 13px; line-height: 1.8;">';
                        
                        // 3G bands
                        const bands3G = availableBands.filter(b => b <= 14 || b == 19 || b == 20 || b == 26);
                        if (bands3G.length > 0) {
                            mappingHtml += '<div style="margin-bottom: 15px;">';
                            mappingHtml += '<strong style="color: #ea580c;">🔶 3G UMTS Bands:</strong><br>';
                            mappingHtml += bands3G.map(b => {
                                const info = BAND_INFO[b] || {};
                                return `Band ${b} (${info.freq || '?'}) - ${info.name || 'Unknown'}`;
                            }).join('<br>');
                            mappingHtml += '</div>';
                        }
                        
                        // 4G bands
                        const bands4G = availableBands.filter(b => !BAND_INFO[b]?.nr);
                        if (bands4G.length > 0) {
                            mappingHtml += '<div style="margin-bottom: 15px;">';
                            mappingHtml += '<strong style="color: #2563eb;">📶 4G LTE Bands:</strong><br>';
                            mappingHtml += bands4G.map(b => {
                                const info = BAND_INFO[b] || {};
                                return `Band ${b} (${info.freq || '?'}) - ${info.usage || 'General use'}`;
                            }).join('<br>');
                            mappingHtml += '</div>';
                        }
                        
                        // 5G bands
                        const bands5G = availableBands.filter(b => BAND_INFO[b]?.nr);
                        if (bands5G.length > 0) {
                            mappingHtml += '<div>';
                            mappingHtml += '<strong style="color: #7c3aed;">📡 5G NR Bands:</strong><br>';
                            mappingHtml += bands5G.map(b => {
                                const info = BAND_INFO[b] || {};
                                return `Band n${b} (${info.freq || '?'}) - ${info.usage || 'Ultra-high speed'}`;
                            }).join('<br>');
                            mappingHtml += '</div>';
                        }
                        
                        mappingHtml += '</div>';
                        techMapping.html(mappingHtml);
                        
                        // Show content
                        $("#available-bands-content").show();
                        $("#detection-status").text("✓ Detection complete");
                    },
                    error: function() {
                        $("#detection-status").text("Error detecting bands");
                    }
                });
            },
            error: function() {
                $("#detection-status").text("Error accessing network info");
            }
        });
    }
    
    // Update history chart
    function updateHistoryChart() {
        if (signalHistory.length < 2) {
            $("#history-chart").html("<p style='text-align: center; padding: 50px;'>Not enough data for chart</p>");
            return;
        }
        
        // Calculate averages (filter out invalid readings)
        const validHistory = signalHistory.filter(d => parseInt(d.rsrp || -120) > -120);
        if (validHistory.length === 0) {
            $("#history-chart").html("<p style='text-align: center; padding: 50px;'>No valid signal data available</p>");
            return;
        }
        
        const avgRsrp = validHistory.reduce((sum, d) => sum + parseInt(d.rsrp || -120), 0) / validHistory.length;
        const avgRsrq = validHistory.reduce((sum, d) => sum + parseInt(d.rsrq || -20), 0) / validHistory.length;
        const avgSinr = validHistory.reduce((sum, d) => sum + parseInt(d.sinr || 0), 0) / validHistory.length;
        
        $("#avg-rsrp").text(`${avgRsrp.toFixed(1)} dBm`);
        $("#avg-rsrq").text(`${avgRsrq.toFixed(1)} dB`);
        $("#avg-sinr").text(`${avgSinr.toFixed(1)} dB`);
        
        // Calculate stability
        const rsrpValues = signalHistory.map(d => parseInt(d.rsrp || -120));
        const variance = rsrpValues.reduce((sum, val) => sum + Math.pow(val - avgRsrp, 2), 0) / rsrpValues.length;
        const stdDev = Math.sqrt(variance);
        
        let stability = "";
        if (stdDev < 2) stability = "Excellent";
        else if (stdDev < 5) stability = "Good";
        else if (stdDev < 10) stability = "Fair";
        else stability = "Poor";
        
        $("#stability").text(stability);
        
        // Create simple chart
        let chartHtml = "<pre style='font-family: monospace; line-height: 1.2;'>";
        chartHtml += "RSRP History (dBm)\n";
        chartHtml += "─".repeat(60) + "\n";
        
        const maxPoints = Math.min(30, signalHistory.length);
        const step = Math.max(1, Math.floor(signalHistory.length / maxPoints));
        
        for (let i = signalHistory.length - maxPoints * step; i < signalHistory.length; i += step) {
            if (i >= 0 && signalHistory[i]) {
                const value = parseInt(signalHistory[i].rsrp || -120);
                const normalized = Math.max(1, Math.floor(((value + 120) / 60) * 50));
                const time = new Date(signalHistory[i].timestamp).toLocaleTimeString();
                chartHtml += "█".repeat(normalized) + ` ${value} (${time})\n`;
            }
        }
        
        chartHtml += "</pre>";
        $("#history-chart").html(chartHtml);
    }
    
    // Export data
    function exportData() {
        const exportObj = {
            version: VERSION,
            exportDate: new Date().toISOString(),
            signalHistory: signalHistory,
            bandPerformance: bandPerformance,
            scanResults: scanResults,
            currentConfig: {
                force4G: $("#force4g-checkbox").is(":checked"),
                updateInterval: $("#update-interval").val()
            }
        };
        
        const dataStr = JSON.stringify(exportObj, null, 2);
        const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `modem-data-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showNotification("Data exported successfully!", "success");
    }
    
    // Show notification
    function showNotification(message, type = "info") {
        const notification = $(`<div class="em-notification ${type}">${message}</div>`);
        $("body").append(notification);
        
        setTimeout(() => {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // Format PLMN
    function formatPLMN(plmn) {
        if (!plmn) return "";
        
        const plmnMap = {
            "22201": "TIM",
            "22210": "Vodafone",
            "22288": "Wind Tre",
            "22299": "Wind Tre",
            "28601": "Turkcell",
            "28602": "Vodafone TR",
            "28603": "Turk Telekom"
        };
        
        return plmnMap[plmn] || plmn;
    }
    
    // Error handler
    function handleError(xhr, status, error) {
        console.error("API Error:", status, error);
        // Don't show notification for every error to avoid spam
        if (error && error !== "error") {
            showNotification(`Communication error: ${error}`, "error");
        }
    }
    
    // XML extraction helper
    function extractXML(tag, xml) {
        try {
            const startTag = `<${tag}>`;
            const endTag = `</${tag}>`;
            const startIndex = xml.indexOf(startTag);
            const endIndex = xml.indexOf(endTag);
            
            if (startIndex !== -1 && endIndex !== -1) {
                return xml.substring(startIndex + startTag.length, endIndex);
            }
            return "";
        } catch (e) {
            return "";
        }
    }
    
    // Make functions globally accessible
    window.emFunctions = {
        toggleAutoRefresh,
        quickBandScan,
        exportData,
        setBands: selectBands,
        switchTab,
        autoOptimize,
        toggleForce4G,
        updateInterval: updateIntervalSetting,
        selectBandInfo: showBandInfo,
        applyPreset,
        detectRegionBands,
        resetPerformanceHistory
    };
    
    // Initialize everything
    initEnhancedUI();
    monitorSignals();
    
    // Start monitoring interval
    updateInterval = setInterval(monitorSignals, 500);
    
    // Log initialization
    console.log(`Enhanced Modem Monitor v${VERSION} initialized successfully!`);
    console.log("Available functions: window.emFunctions");
    showNotification(`Enhanced Monitor v${VERSION} loaded successfully!`, "success");
    
})();
