import React, { useState, useEffect } from 'react';

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

interface AudiobookPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const AudiobookPopup: React.FC<AudiobookPopupProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Brevo Form Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @font-face {
                        font-display: block;
                        font-family: Roboto;
                        src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
                    }

                    @font-face {
                        font-display: fallback;
                        font-family: Roboto;
                        font-weight: 600;
                        src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
                    }

                    @font-face {
                        font-display: fallback;
                        font-family: Roboto;
                        font-weight: 700;
                        src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
                    }

                    #sib-container input:-ms-input-placeholder {
                        text-align: left;
                        font-family: Helvetica, sans-serif;
                        color: #c0ccda;
                    }

                    #sib-container input::placeholder {
                        text-align: left;
                        font-family: Helvetica, sans-serif;
                        color: #c0ccda;
                    }

                    #sib-container textarea::placeholder {
                        text-align: left;
                        font-family: Helvetica, sans-serif;
                        color: #c0ccda;
                    }

                    #sib-container a {
                        text-decoration: underline;
                        color: #2BB2FC;
                    }
                `
            }} />
            <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />

            {/* Modal Overlay */}
            <div 
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleBackdropClick}
            >
                {/* Modal Content */}
                <div 
                    className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors duration-200"
                        aria-label="Close popup"
                    >
                        <CloseIcon className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                        {/* Left Side - Image */}
                        <div className="relative bg-gradient-to-br from-slate-900 to-black p-8 flex items-center justify-center lg:rounded-l-2xl">
                            <div className="text-center">
                                <img 
                                    src="https://i.imgur.com/k99hIPs.png" 
                                    alt="Get This Audiobook Now"
                                    className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            {/* Headline */}
                            <div className="text-center mb-8">
                                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    GET THIS AUDIOBOOK NOW!
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Discover the forbidden consciousness technology that transforms reality itself.
                                </p>
                            </div>

                            {/* Brevo Form */}
                            <div className="sib-form">
                                <div id="sib-form-container" className="sib-form-container">
                                    <div id="error-message" className="sib-form-message-panel" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '540px', display: 'none'}}>
                                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                                            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                                                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                                            </svg>
                                            <span className="sib-form-message-panel__inner-text">
                                                Your subscription could not be saved. Please try again.
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div id="success-message" className="sib-form-message-panel" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '540px', display: 'none'}}>
                                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                                            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                                                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                                            </svg>
                                            <span className="sib-form-message-panel__inner-text">
                                                Your subscription has been successful.
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div id="sib-container" className="sib-container--large sib-container--vertical" style={{textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: '540px', borderRadius: '3px', borderWidth: '1px', borderColor: '#C0CCD9', borderStyle: 'solid', direction: 'ltr', width: '100%'}}>
                                        <form id="sib-form" method="POST" action="https://ebb9efec.sibforms.com/serve/MUIFAJpeJ5N015C1BaF1ddleHlWKS6vSANyYSH5kn5grCesp_LYv0MF4ujlnDc4crY_kx32KGqXxrxz69b012gd15uqfILOZP3yc1onbRZVg_jI_U1DljZ5cRlRxL7cn3_2qkxipfLVJaX-aOneAF6ck8hyc0jtjiyAScLbUA8z5x-AygILqGRAYx3qkrUXJHB7Da_tOZVop6X5t" data-type="subscription">
                                            <input type="hidden" name="success_url" value={`${window.location.origin}/success`} />
                                            
                                            <div style={{padding: '8px 0'}}>
                                                <div className="sib-input sib-form-block">
                                                    <div className="form__entry entry_block">
                                                        <div className="form__label-row">
                                                            <label className="entry__label" style={{fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858'}} htmlFor="FIRSTNAME" data-required="*">First Name</label>
                                                            <div className="entry__field">
                                                                <input className="input" maxLength={200} type="text" id="FIRSTNAME" name="FIRSTNAME" autoComplete="off" placeholder="Enter your first name" data-required="true" required />
                                                            </div>
                                                        </div>
                                                        <label className="entry__error entry__error--primary" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949'}}></label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div style={{padding: '8px 0'}}>
                                                <div className="sib-input sib-form-block">
                                                    <div className="form__entry entry_block">
                                                        <div className="form__label-row">
                                                            <label className="entry__label" style={{fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858'}} htmlFor="EMAIL" data-required="*">Email Address</label>
                                                            <div className="entry__field">
                                                                <input className="input" type="email" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="Enter your email address" data-required="true" required />
                                                            </div>
                                                        </div>
                                                        <label className="entry__error entry__error--primary" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949'}}></label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div style={{padding: '8px 0'}}>
                                                <div className="sib-form-block" style={{textAlign: 'left'}}>
                                                    <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize: '18px', textAlign: 'center', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#0b0b0b', backgroundColor: '#ffe22b', borderRadius: '8px', borderWidth: '0px', padding: '16px 32px', width: '100%', cursor: 'pointer'}} form="sib-form" type="submit">
                                                        <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style={{display: 'none'}}>
                                                            <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                                        </svg>
                                                        GET MY FREE AUDIOBOOK NOW!
                                                    </button>
                                                </div>
                                            </div>

                                            <input type="text" name="email_address_check" value="" className="input--hidden" />
                                            <input type="hidden" name="locale" value="en" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brevo Form Scripts */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
                    window.LOCALE = 'en';
                    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
                    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
                    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
                    window.translation = {
                        common: {
                            selectedList: '{quantity} list selected',
                            selectedLists: '{quantity} lists selected',
                            selectedOption: '{quantity} selected',
                            selectedOptions: '{quantity} selected',
                        }
                    };
                    var AUTOHIDE = Boolean(0);
                `
            }} />
        </>
    );
};

export default AudiobookPopup;