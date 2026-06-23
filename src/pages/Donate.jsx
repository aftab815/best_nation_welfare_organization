import '../css/donate.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from "../components/BackToTop";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const initialCauses = [
    { id: 'general', name: 'General Sadaqah / Funds', min: 100, desc: 'General welfare expenditures where needed most.' },
    { id: 'zakat', name: 'Zakat Fund', min: 100, desc: 'Direct support to eligible families.' },
    { id: 'water', name: 'Clean Water Projects', min: 1000, desc: 'Install handpumps & solar water wells.' },
    { id: 'orphan', name: 'Orphan Sponsorship Program', min: 4000, desc: 'Provide education, food, shelter.' },
    { id: 'health', name: 'Free Healthcare & Camps', min: 500, desc: 'Free treatment, tests & mobile dispensaries.' },
    { id: 'skills', name: 'Skill Development Centers', min: 1000, desc: 'Vocational training for youth & women.' },
    { id: 'ration', name: 'Ration & Food Distribution', min: 3500, desc: 'Feed a family for a month.' },
    { id: 'disaster', name: 'Emergency Disaster Relief', min: 500, desc: 'Immediate aid, tents, cooked meals.' }
];

export default function Donate() {
    const location = useLocation();
    const MySwal = withReactContent(Swal);

    // Left pane tabs: 'info', 'calculator'
    const [leftTab, setLeftTab] = useState("info");

    // Zakat calculator state
    const [zCash, setZCash] = useState("");
    const [zGold, setZGold] = useState("");
    const [zSilver, setZSilver] = useState("");
    const [zAssets, setZAssets] = useState("");
    const [zDebts, setZDebts] = useState("");
    const [calculatedZakat, setCalculatedZakat] = useState(0);

    // Multi-cause selection & amount states
    const [selectedCauses, setSelectedCauses] = useState({ general: true });
    const [causeAmounts, setCauseAmounts] = useState({ general: 2500 });

    // Donor Personal Information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Payment method choice: 'paypro', 'card', 'bank', 'mobile'
    const [paymentMethod, setPaymentMethod] = useState("paypro");

    // Card Details state
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    // Calculate Zakat live
    useEffect(() => {
        const cash = Number(zCash) || 0;
        const gold = Number(zGold) || 0;
        const silver = Number(zSilver) || 0;
        const assets = Number(zAssets) || 0;
        const debts = Number(zDebts) || 0;

        const netAssets = (cash + gold + silver + assets) - debts;
        const zakat = netAssets > 0 ? Math.floor(netAssets * 0.025) : 0;
        setCalculatedZakat(zakat);
    }, [zCash, zGold, zSilver, zAssets, zDebts]);

    // Calculate dynamic total sum
    const totalAmount = Object.keys(selectedCauses).reduce((sum, key) => {
        if (selectedCauses[key]) {
            return sum + (Number(causeAmounts[key]) || 0);
        }
        return sum;
    }, 0);

    // Apply calculated Zakat to the Zakat Fund cause
    const handleApplyZakat = () => {
        if (calculatedZakat > 0) {
            setSelectedCauses(prev => ({
                ...prev,
                zakat: true
            }));
            setCauseAmounts(prev => ({
                ...prev,
                zakat: calculatedZakat
            }));
            MySwal.fire({
                title: "Zakat Applied!",
                text: `Rs. ${calculatedZakat.toLocaleString()} has been set as your Zakat Fund donation.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
        } else {
            MySwal.fire({
                title: "Zero Zakat Payable",
                text: "Add assets in the calculator to compute payable Zakat.",
                icon: "info"
            });
        }
    };

    // Check query params for pre-selecting cause and amount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const causeParam = queryParams.get('cause');
        const amountParam = queryParams.get('amount');
        
        let newSelected = { general: true };
        let newAmounts = { general: 2500 };
        
        if (causeParam) {
            const matched = initialCauses.find(c => 
                c.name.toLowerCase().includes(causeParam.toLowerCase()) || 
                causeParam.toLowerCase().includes(c.name.toLowerCase())
            );
            if (matched) {
                newSelected = { [matched.id]: true };
                newAmounts = { [matched.id]: Number(amountParam) || matched.min };
            } else {
                newSelected = { general: true };
                newAmounts = { general: Number(amountParam) || 2500 };
            }
        } else if (amountParam) {
            newAmounts = { general: Number(amountParam) };
        }
        
        setSelectedCauses(newSelected);
        setCauseAmounts(newAmounts);
    }, [location]);

    const handleCopyIBAN = (iban) => {
        navigator.clipboard.writeText(iban);
        MySwal.fire({
            title: "IBAN Copied!",
            text: "Official Bank IBAN has been copied to your clipboard.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
    };

    const handleCauseCheckboxChange = (id) => {
        setSelectedCauses(prev => {
            const isNowSelected = !prev[id];
            const updatedSelected = { ...prev, [id]: isNowSelected };
            
            // Set default amount if checked and not set
            if (isNowSelected && !causeAmounts[id]) {
                const causeObj = initialCauses.find(c => c.id === id);
                setCauseAmounts(prevAm => ({
                    ...prevAm,
                    [id]: causeObj ? causeObj.min : 1000
                }));
            }
            return updatedSelected;
        });
    };

    const handleCauseAmountChange = (id, val) => {
        const numVal = Number(val);
        setCauseAmounts(prev => ({
            ...prev,
            [id]: numVal
        }));
        
        // Auto check if amount is > 0
        if (numVal > 0) {
            setSelectedCauses(prev => ({
                ...prev,
                [id]: true
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            MySwal.fire({
                title: "Incomplete Fields",
                text: "Please enter your name and email address.",
                icon: "warning"
            });
            return;
        }

        if (totalAmount <= 0) {
            MySwal.fire({
                title: "No Cause Selected",
                text: "Please select at least one cause and enter an amount.",
                icon: "warning"
            });
            return;
        }

        // Show premium processing spinner
        MySwal.fire({
            title: 'Initializing Secure Checkout...',
            text: "Processing your donation. Please do not refresh the page.",
            allowOutsideClick: false,
            didOpen() {
                MySwal.showLoading();
            }
        });

        // Simulate network latency
        setTimeout(() => {
            MySwal.close();

            // Success animation
            MySwal.fire({
                icon: "success",
                title: "Donation Received Successfully!",
                html: `
                    <div style="text-align: left; padding: 10px 0; font-family: 'Outfit', sans-serif;">
                        <p style="margin-bottom: 8px;"><strong>Thank You, ${name}!</strong></p>
                        <p style="margin-bottom: 8px;">We have received your contribution of <strong>Rs. ${totalAmount.toLocaleString()}</strong> towards the following causes:</p>
                        <ul style="margin-bottom: 12px; padding-left: 20px; font-size: 13.5px; line-height: 1.6;">
                            ${Object.keys(selectedCauses)
                                .filter(key => selectedCauses[key] && (Number(causeAmounts[key]) || 0) > 0)
                                .map(key => {
                                    const causeObj = initialCauses.find(c => c.id === key);
                                    return `<li>${causeObj ? causeObj.name : key}: <strong>Rs. ${Number(causeAmounts[key]).toLocaleString()}</strong></li>`;
                                }).join('')}
                        </ul>
                        <p style="margin-bottom: 8px; font-size: 13px; color: #6b7280;">A tax-deductible donation receipt has been sent to <strong>${email}</strong>.</p>
                        <p style="margin-top: 15px; font-size: 12px; font-style: italic; color: var(--clr-primary);">"Those who spend their wealth in charity will have their reward with their Lord..."</p>
                    </div>
                `,
                confirmButtonColor: "#007a3d",
                confirmButtonText: "Close"
            });

            // Reset inputs
            setName("");
            setPhone("");
            setCardNumber("");
            setExpiry("");
            setCvv("");
            setSelectedCauses({ general: true });
            setCauseAmounts({ general: 2500 });
        }, 2000);
    };

    return (
        <>
            <Navbar />

            <div className="donations">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11 col-12">
                            <div className="donate-wrapper glass-panel">
                                <div className="row g-0">
                                    {/* Left side: Information or Zakat Calculator */}
                                    <div className="col-lg-6">
                                        <div className="donate-info-pane">
                                            {/* Tab Switcher */}
                                            <div className="info-pane-tabs mb-4">
                                                <button
                                                    type="button"
                                                    className={`pane-tab-btn ${leftTab === 'info' ? 'active' : ''}`}
                                                    onClick={() => setLeftTab('info')}
                                                >
                                                    <i className="fa fa-info-circle me-1" /> About BNWO
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`pane-tab-btn ${leftTab === 'calculator' ? 'active' : ''}`}
                                                    onClick={() => setLeftTab('calculator')}
                                                >
                                                    <i className="fa fa-calculator me-1" /> Zakat Calculator
                                                </button>
                                            </div>

                                            {leftTab === 'info' ? (
                                                <div className="animated fadeIn">
                                                    <div className="section-header text-start mb-4">
                                                        <p>Join The Cause</p>
                                                        <h2>Your Sadaqah & Zakat Saves Lives</h2>
                                                    </div>
                                                    
                                                    <p className="donate-pane-desc">
                                                        Best Nation Welfare Organization (BNWO) is dedicated to serving those in need across Pakistan. Your contributions enable us to run mobile health clinics, build water handpumps, sponsor orphans, and provide urgent disaster relief.
                                                    </p>

                                                    <div className="donate-features">
                                                        <div className="d-feature">
                                                            <i className="fa fa-shield-alt" />
                                                            <div className="df-text">
                                                                <h4>100% Transparency</h4>
                                                                <p>Every single rupee you donate is fully audited and mapped directly to your cause.</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-feature">
                                                            <i className="fa fa-percentage" />
                                                            <div className="df-text">
                                                                <h4>Zero Admin Fee Option</h4>
                                                                <p>We guarantee 100% of cause donations go straight to field expenditures.</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-feature">
                                                            <i className="fa fa-envelope-open-text" />
                                                            <div className="df-text">
                                                                <h4>Receipts & Reports</h4>
                                                                <p>Get instant tax-deductible email receipts and regular progress tracking reports.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="zakat-calculator-block animated fadeIn">
                                                    <div className="section-header text-start mb-4">
                                                        <p>Zakat Calculator</p>
                                                        <h2>Calculate Your Zakat Live</h2>
                                                    </div>

                                                    <div className="zakat-form-grid">
                                                        <div className="row g-3">
                                                            <div className="col-6">
                                                                <label className="form-label z-calc-label">Cash (Hand & Bank)</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control donate-input"
                                                                    placeholder="Rs. 0"
                                                                    value={zCash}
                                                                    onChange={(e) => setZCash(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-label z-calc-label">Value of Gold</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control donate-input"
                                                                    placeholder="Rs. 0"
                                                                    value={zGold}
                                                                    onChange={(e) => setZGold(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-label z-calc-label">Value of Silver</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control donate-input"
                                                                    placeholder="Rs. 0"
                                                                    value={zSilver}
                                                                    onChange={(e) => setZSilver(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="form-label z-calc-label">Other Assets / Shares</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control donate-input"
                                                                    placeholder="Rs. 0"
                                                                    value={zAssets}
                                                                    onChange={(e) => setZAssets(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-12">
                                                                <label className="form-label z-calc-label">Less Liabilities / Debts</label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control donate-input"
                                                                    placeholder="Rs. 0"
                                                                    value={zDebts}
                                                                    onChange={(e) => setZDebts(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Live calculations view */}
                                                    <div className="zakat-results-card mt-4">
                                                        <div className="zr-row">
                                                            <span>Rate of Zakat:</span>
                                                            <strong>2.5%</strong>
                                                        </div>
                                                        <div className="zr-row total-row">
                                                            <span>Payable Zakat:</span>
                                                            <strong>Rs. {calculatedZakat.toLocaleString()}</strong>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="btn btn-custom w-100 zakat-apply-btn mt-3"
                                                            onClick={handleApplyZakat}
                                                        >
                                                            <i className="fa fa-hand-holding-heart me-1" /> Apply to Donation Form
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right side: Donation Form */}
                                    <div className="col-lg-6">
                                        <div className="donate-form-pane">
                                            <form onSubmit={handleSubmit} className="donate-form-tag">
                                                <div className="form-group mb-3">
                                                    <label className="form-label">Choose Causes & Amounts</label>
                                                    
                                                    <div className="multi-cause-container">
                                                        <div className="multi-cause-header-row">
                                                            <div>Select</div>
                                                            <div>Welfare Campaign</div>
                                                            <div className="text-end">Amount (Rs.)</div>
                                                        </div>
                                                        
                                                        {initialCauses.map(causeObj => {
                                                            const isChecked = !!selectedCauses[causeObj.id];
                                                            const currentVal = causeAmounts[causeObj.id] || "";
                                                            
                                                            return (
                                                                <div 
                                                                    key={causeObj.id} 
                                                                    className={`cause-row ${isChecked ? 'selected' : ''}`}
                                                                >
                                                                    <div className="text-center">
                                                                        <input 
                                                                            type="checkbox" 
                                                                            className="cause-checkbox"
                                                                            checked={isChecked}
                                                                            onChange={() => handleCauseCheckboxChange(causeObj.id)}
                                                                        />
                                                                    </div>
                                                                    <div className="cause-info">
                                                                        <span className="cause-name">{causeObj.name}</span>
                                                                        <span className="cause-desc">{causeObj.desc}</span>
                                                                        <span className="cause-min-badge">Min impact: Rs. {causeObj.min.toLocaleString()}</span>
                                                                    </div>
                                                                    <div className="cause-amount-input-wrap">
                                                                        <span className="currency-prefix">Rs.</span>
                                                                        <input 
                                                                            type="number"
                                                                            className="cause-amount-input"
                                                                            placeholder={causeObj.min.toString()}
                                                                            value={currentVal}
                                                                            onChange={(e) => handleCauseAmountChange(causeObj.id, e.target.value)}
                                                                            min={causeObj.min}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Donation Summary */}
                                                <div className="donation-summary-card">
                                                    <div className="summary-title">Donation Summary</div>
                                                    <div className="summary-list">
                                                        {Object.keys(selectedCauses)
                                                            .filter(key => selectedCauses[key] && (Number(causeAmounts[key]) || 0) > 0)
                                                            .map(key => {
                                                                const causeObj = initialCauses.find(c => c.id === key);
                                                                return (
                                                                    <div className="summary-item" key={key}>
                                                                        <span>{causeObj ? causeObj.name : key}</span>
                                                                        <strong>Rs. {Number(causeAmounts[key]).toLocaleString()}</strong>
                                                                    </div>
                                                                );
                                                            })}
                                                    </div>
                                                    <div className="summary-total">
                                                        <span>Total Amount:</span>
                                                        <strong>Rs. {totalAmount.toLocaleString()}</strong>
                                                    </div>
                                                </div>

                                                {/* Donor Personal Information */}
                                                <div className="row g-2 mb-3">
                                                    <div className="col-12">
                                                        <label htmlFor="donor-name" className="form-label">Full Name</label>
                                                        <input
                                                            type="text"
                                                            id="donor-name"
                                                            className="form-control donate-input"
                                                            placeholder="Your Name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <label htmlFor="donor-email" className="form-label">Email Address</label>
                                                        <input
                                                            type="email"
                                                            id="donor-email"
                                                            className="form-control donate-input"
                                                            placeholder="name@email.com"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <label htmlFor="donor-phone" className="form-label">Mobile Number</label>
                                                        <input
                                                            type="tel"
                                                            id="donor-phone"
                                                            className="form-control donate-input"
                                                            placeholder="03xx-xxxxxxx"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Payment Methods tabs */}
                                                <div className="payment-method-header mb-2">Select Payment Method</div>
                                                <div className="payment-methods-grid mb-3">
                                                    <button
                                                        type="button"
                                                        className={`pay-method-btn ${paymentMethod === 'paypro' ? 'active' : ''}`}
                                                        onClick={() => setPaymentMethod('paypro')}
                                                    >
                                                        <i className="fa fa-globe" /> PayPro Gateway
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`pay-method-btn ${paymentMethod === 'bank' ? 'active' : ''}`}
                                                        onClick={() => setPaymentMethod('bank')}
                                                    >
                                                        <i className="fa fa-university" /> Bank Transfer
                                                    </button>
                                                </div>

                                                {/* Payment Form Blocks depending on choice */}
                                                {paymentMethod === 'paypro' && (
                                                     <div className="payment-form-paypro animated fadeIn">
                                                         <div className="bank-details-card text-center" style={{ padding: '24px' }}>
                                                             <div className="mb-3" style={{ display: 'flex', justifySelf: 'center', alignSelf: 'center', gap: '8px' }}>
                                                                 <div style={{ background: '#ffffff', padding: '6px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', display: 'inline-flex', alignItems: 'center' }}>
                                                                     <span style={{ fontWeight: '900', fontSize: '20px', color: '#013e7f', letterSpacing: '-0.5px' }}>Pay</span>
                                                                     <span style={{ fontWeight: '900', fontSize: '20px', color: '#e51a24', letterSpacing: '-0.5px' }}>Pro</span>
                                                                 </div>
                                                             </div>
                                                             <h5 style={{ fontWeight: '800', color: 'var(--clr-bg-dark)', fontSize: '15px', marginBottom: '8px' }}>Direct Online Donation</h5>
                                                             <p style={{ fontSize: '12.5px', color: 'var(--clr-text-muted)', lineHeight: '1.6', marginBottom: '18px' }}>
                                                                 Donate instantly using credit/debit cards, bank accounts, or mobile wallets via our secure PayPro donation gateway.
                                                             </p>
                                                             <a
                                                                 href="https://billing.paypro.com.pk/donation/best-nation-welfare-organization/"
                                                                 target="_blank"
                                                                 rel="noopener noreferrer"
                                                                 className="btn btn-custom w-100"
                                                                 style={{ background: '#00b050', borderColor: '#00b050', color: '#ffffff', fontWeight: '800', fontSize: '14px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '8px' }}
                                                             >
                                                                 <i className="fa fa-external-link-alt" /> Proceed to PayPro Portal
                                                             </a>
                                                         </div>
                                                     </div>
                                                 )}

                                                 {paymentMethod === 'bank' && (
                                                     <div className="payment-form-bank animated fadeIn">
                                                         <div className="bank-cards-grid">
                                                             <div className="bank-details-card">
                                                                 <div className="text-center mb-2">
                                                                     <strong style={{ color: 'var(--clr-primary)', fontSize: '14px' }}>Faysal Bank Limited</strong>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Account Title:</span>
                                                                     <strong>BNWO</strong>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Account Number:</span>
                                                                     <strong>3557-30100000-2775</strong>
                                                                 </div>
                                                                 <div className="bd-row IBAN-row">
                                                                     <span>IBAN:</span>
                                                                     <code>PK28FAYS3557311000002775</code>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Branch:</span>
                                                                     <strong>Main Branch, Lahore</strong>
                                                                 </div>
                                                                 <button
                                                                     type="button"
                                                                     className="copy-iban-btn"
                                                                     onClick={() => handleCopyIBAN("PK28FAYS3557311000002775")}
                                                                 >
                                                                     <i className="fa fa-copy" /> Copy IBAN
                                                                 </button>
                                                             </div>

                                                             <div className="bank-details-card">
                                                                 <div className="text-center mb-2">
                                                                     <strong style={{ color: 'var(--clr-primary)', fontSize: '14px' }}>U-Microfinance Bank</strong>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Account Title:</span>
                                                                     <strong>BNWO</strong>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Account Number:</span>
                                                                     <strong>1094-0002968-0086</strong>
                                                                 </div>
                                                                 <div className="bd-row IBAN-row">
                                                                     <span>IBAN:</span>
                                                                     <code>PK53UMBL010949400029680086</code>
                                                                 </div>
                                                                 <div className="bd-row">
                                                                     <span>Branch:</span>
                                                                     <strong>Main Branch, Lahore</strong>
                                                                 </div>
                                                                 <button
                                                                     type="button"
                                                                     className="copy-iban-btn"
                                                                     onClick={() => handleCopyIBAN("PK53UMBL010949400029680086")}
                                                                 >
                                                                     <i className="fa fa-copy" /> Copy IBAN
                                                                 </button>
                                                             </div>
                                                         </div>
                                                          <p className="payment-note mt-3">
                                                              Please transfer the donation amount to one of the bank accounts above and complete checkout to submit your transaction reference.
                                                          </p>
                                                      </div>
                                                  )}

                                                <button
                                                    type="submit"
                                                    className="btn btn-custom w-100 donate-submit-btn mt-4"
                                                >
                                                    <i className="fa fa-heart" /> Complete Donation (Rs. {totalAmount.toLocaleString()})
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}