export const NavbarStyles = {
  container: {
    textDecoration: "none", // Remove underline from link
    color: "inherit", // Inherit color from parent
    display: "flex", // Flex container to align icon and text
    alignItems: "center", // Vertically center the icon and text
    padding: "8px 16px", // Add padding for spacing
    borderRadius: "8px", // Rounded corners for a modern look
    transition: "all 0.3s ease", // Smooth transition for hover effect
    "&:hover": {
      backgroundColor: "#333", // Dark background on hover
      transform: "scale(1.05)", // Slight zoom effect on hover
    },
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  text: {
    color: "white",
    fontWeight: 500,
  },
  search_container: {
    border: "1px solid white", // Optional: Add a border
    borderRadius: "4px", // Rounded corners
    padding: "0 8px", // Adjust padding
    height: "36px", // Set fixed height
    width: "300px", // Width of the search box
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight background color

    display: "flex", // Flexbox to align items horizontally
    alignItems: "center", // Vertically center the content
    backgroundColor: "#f9f9f9", // Light background for better contrast
    "&:focus-within": {
      borderColor: "#007BFF", // Highlight border when focused
    },
  },
  search_icon: {
    fontSize: "22px", // Icon size
    color: "#666", // Icon color
    marginLeft: "5px", // Optional: spacing from the left
  },
  search_input: {
    flex: 1, // Fill available space
    height: "100%", // Match parent height
    padding: "4px 8px", // Reduce padding
    fontSize: "14px",
    border: "none", // Remove border
    outline: "none", // Remove focus outline
    backgroundColor: "transparent", // Transparent background
    color: "#666",
  },

  action_text: {
    color: "white",
    fontWeight: 400,
    fontSize: 12,
  },
};
