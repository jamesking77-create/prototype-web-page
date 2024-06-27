import React, { useEffect } from 'react';
import '../../styles/topnav.css';

const TopNav = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMagneticEffect = () => {
        const buttons = document.querySelectorAll('#navtext');
        const container = document.querySelector('.tcontainer');

        let animationFrameId;

        const handleMouseMove = (e) => {
            buttons.forEach(button => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const buttonRect = button.getBoundingClientRect();
                const buttonWidth = buttonRect.width;
                const buttonHeight = buttonRect.height;
                const centerX = buttonRect.left + buttonWidth / 2;
                const centerY = buttonRect.top + buttonHeight / 2;

                const deltaX = x - centerX;
                const deltaY = y - centerY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                const maxDistance = Math.min(rect.width, rect.height) / 2;
                const force = Math.min(maxDistance / distance, 1);

                const moveX = deltaX * force * 0.2;
                const moveY = deltaY * force * 0.2;

                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    button.style.transition = 'transform 0.2s ease'; // Adding transition to buttons
                });
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', () => {
            cancelAnimationFrame(animationFrameId);
            buttons.forEach(button => {
                button.style.transform = 'translate(0, 0)';
                button.style.transition = 'transform 0.2s ease'; // Adding transition to buttons
            });
        });
    };

    useEffect(() => {
        handleMagneticEffect();
    }, []);

    return (
        <nav className="w-full" id='topnav' style={{fontFamily:"Elianto-Regular", color:"#ffffff6c"}}>
            <div className="tcontainer mx-auto px-4 py-2 flex justify-between items-center">
                <div className="header w-full bg" id='navtext'> @ code by JKing.</div>
                <div className="flex space-x-4 justify-end w-full">
                    <button
                        className="text-white border-b-2 border-transparent hover:border-white focus:outline-none border-opacity-50"
                        onClick={() => scrollToSection('home-section')}
                        id='navtext'
                    >
                        Home
                    </button>
                    <button
                        className="text-white border-b-2 border-transparent hover:border-white focus:outline-none border-opacity-50"
                        onClick={() => scrollToSection('work-section')}
                         id='navtext'
                    >
                        Work
                    </button>
                    <button
                        className="text-white border-b-2 border-transparent hover:border-white focus:outline-none border-opacity-50"
                        onClick={() => scrollToSection('about-section')}
                         id='navtext'
                    >
                        About
                    </button>
                    <button
                        className="text-white border-b-2 border-transparent hover:border-white focus:outline-none border-opacity-50"
                        onClick={() => scrollToSection('contact-section')}
                         id='navtext'
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
