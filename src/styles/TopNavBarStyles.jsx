const TopNavbarStyles = {
    outerBox: {
     display: 'flex',
     justifyContent: 'space-between', // Ensures space between elements
     alignItems: 'center',
     width: 'calc(100% - 8rem)', // Subtract padding from total width
     padding: '1.5% 4rem', // Adds equal padding on both sides
     margin: '0 auto', // Centers the navbar
     overflowX: 'hidden', // Prevents horizontal scrolling
     flexWrap: 'wrap', // Ensures items wrap instead of overflowing
    },
    links: {
        display: 'flex',
        gap: '2rem', // Adds space between links
        marginLeft: { xs: 'none', md: 'auto' }, // Push links to the right
        display: { xs: 'none', md: 'flex' }, // Hide links on small screens
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px', // Space between buttons
        // flexWrap: 'wrap', // Wraps items if space is tight
    },
    loginButton: {
        border: '2px solid rgba(228, 103, 3, 1)', // Custom border for login button
        display: 'flex',
        alignItems: 'center',
        padding:'auto 1%',
        gap: '1rem',
        borderRadius:'6px'
    },
    themeIcon: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    menuIcon: {
        display: { xs: 'flex', md: 'none' }, // Show on small screens only
        cursor: 'pointer',
    },
};

export default TopNavbarStyles;
